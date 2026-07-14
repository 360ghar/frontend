# Netlify Deployment

This page documents how the 360Ghar frontend is built and served on Netlify. All
runtime behaviour is driven by `netlify.toml` at the repo root. Production is
built in GitHub Actions and uploaded with the Netlify CLI; Netlify only builds
deploy previews. If you change deploy behaviour, update this page, `netlify.toml`,
and [Build Pipeline](../build/Build-Pipeline) together.

## Build configuration

| Setting | Value | Source |
|---|---|---|
| Preview build command | `npm run build:preview` | `netlify.toml` `[build].command` |
| Production build | `npm run build:full` in GHA, then CLI deploy | `.github/workflows/content-build.yml` |
| Publish directory | `dist` | `netlify.toml` `[build].publish` |
| Node version | `20` | `netlify.toml` `[build.environment].NODE_VERSION` |
| Production git builds | Skipped (`context.production.ignore`) | `netlify.toml` |

### Production CLI deploy (critical)

```bash
npx netlify-cli deploy --prod --dir=dist --no-build --message "content-build $GITHUB_SHA"
```

**Always pass `--no-build`.** Without it, netlify-cli re-runs `build:preview` and
overwrites the full SEO/prerender `dist/` from Actions. That bug contributed to
the 2026-07-14 site-wide outage.

### Build environment variables

These are baked into the build via `netlify.toml` so they do not need to be
re-entered in the Netlify UI:

| Variable | Value | Purpose |
|---|---|---|
| `VITE_API_SERVER` | `https://api.360ghar.com` | Backend origin, used by Vite preview proxy and PWA runtime caching |
| `VITE_API_BASE_URL` | `https://api.360ghar.com/api/v1` | Absolute API base for production builds (no proxy in prod) |

All other `VITE_*` secrets (`VITE_SUPABASE_URL`,
`VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_GOOGLE_PLACES_API_KEY`,
`VITE_PUBLIC_POSTHOG_KEY`) must be set in the Netlify site settings under
**Site settings → Environment variables**. They are intentionally not committed
to `netlify.toml`. See [Reference](../reference/Reference) for the full list.

## ESLint peer dependency constraint

Netlify uses **strict peer dependency resolution**. A mismatch that `npm install`
tolerates locally will fail CI with `ERESOLVE unable to resolve dependency tree`.

The hard constraint today is:

- `eslint` and `@eslint/js` must stay on **major version 9** (`^9.39.4`).
- `eslint-plugin-react@7.x` declares
  `peerDependency: eslint ^2 || ^3 || ... || ^9` — it does **not** support
  eslint 10+.
- Upgrading `eslint` to `^10` will break the Netlify install.

Before upgrading any devDependency to a new major version, run:

```bash
npm info <pkg> peerDependencies
npm install
npm run build && npm run lint
```

See [Reference → Dependencies](../reference/Reference.md#dependencies) for the
full dependency table.

## Redirect rules

Redirects are evaluated top-to-bottom. Order matters: every domain-shape
redirect is declared **before** the SPA catch-all so it wins.

### Domain and URL canonicalisation

| From | To | Status | Notes |
|---|---|---|---|
| `https://www.360ghar.com/*` | `https://360ghar.com/:splat` | 301 | WWW → non-www, `force = true` |
| `/gurugram/*` | `/gurgaon/:splat` | 301 | City slug unification |
| `/hi/gurugram/*` | `/hi/gurgaon/:splat` | 301 | Same, for Hindi routes |

**Trailing-slash force redirect removed (2026-07-14).** A `/*/` → `/:splat`
`force = true` rule was a prime suspect in site-wide HTTP 301 self-redirect
loops. Prefer in-app canonical URLs; do not reintroduce a force slash strip
without deploy-preview proof that `/` and static assets still return 200.

### Content slug canonicalisation

To avoid duplicate-content SEO issues, `apartments` is permanently redirected
to `flats` for every city/intent combination (English and Hindi):

| From | To | Status |
|---|---|---|
| `/:city/buy/apartments` | `/:city/buy/flats` | 301 |
| `/:city/rent/apartments` | `/:city/rent/flats` | 301 |
| `/:city/pg/apartments` | `/:city/pg/flats` | 301 |
| `/hi/:city/buy/apartments` | `/hi/:city/buy/flats` | 301 |
| `/hi/:city/rent/apartments` | `/hi/:city/rent/flats` | 301 |
| `/hi/:city/pg/apartments` | `/hi/:city/pg/flats` | 301 |

### SPA fallback

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This is the last redirect and serves `index.html` for any unmatched path so
React Router can take over. It is a rewrite (`200`), not a redirect, so the
URL in the browser bar is preserved.

## Header rules

### Cache headers

| Path | `Cache-Control` | Rationale |
|---|---|---|
| `/assets/*.js` | `public, max-age=31536000, immutable` | Content-addressed hashed chunks |
| `/assets/*.css` | `public, max-age=31536000, immutable` | Content-addressed hashed chunks |
| `/assets/webfonts/*` | `public, max-age=31536000, immutable` | Font Awesome woff2; also `Access-Control-Allow-Origin: *` |
| `/assets/css/*` | `public, max-age=2592000, stale-while-revalidate=604800` | Bootstrap / Font Awesome CSS, 30 days |
| `/assets/images/*` | `public, max-age=2592000, stale-while-revalidate=604800` | Static images, 30 days |
| `/sw.js`, `/registerSW.js`, `/workbox-*.js` | `no-cache, no-store, must-revalidate` | Service worker must update immediately |
| `/*.html` | `public, max-age=0, must-revalidate` | HTML always revalidates |
| `/` | `public, max-age=0, must-revalidate` | Root, plus `Link` headers (see below) |

### Security headers on HTML

Every HTML response (and the root `/`) gets:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 0
```

`X-XSS-Protection: 0` is intentional — the legacy XSS auditor is disabled in
modern browsers and can introduce vulnerabilities. Defense is via CSP and
output sanitisation, not the auditor.

### Agent discovery `Link` headers

The root `/` response carries an RFC 8288 `Link` header that lets AI agents
discover the API catalog, MCP server card, agent skills, LLM feed, and
OpenID configuration without crawling:

```
</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json",
</for-ai>; rel="service-doc"; type="text/html",
</data/llm-feed.json>; rel="service-meta"; type="application/json",
</.well-known/mcp/server-card.json>; rel="mcp-server",
</.well-known/agent-skills/index.json>; rel="agent-skills",
</llms.txt>; rel="llms-txt",
</.well-known/openid-configuration>; rel="openid-configuration"
```

### `.well-known` files

Every `.well-known/*` file is served with `Access-Control-Allow-Origin: *` and
a 1-hour cache so agents and OAuth clients can fetch them cross-origin. This
covers: `api-catalog`, `openid-configuration`, `oauth-authorization-server`,
`oauth-protected-resource`, `mcp/server-card.json`, `agent-skills/index.json`,
`agent-skills/*/SKILL.md`, `acp.json`, `ucp`, `ai.txt`, and `openapi.json`.

## Edge functions

**Status (2026-07-14): all edge functions disabled.**

| Path | Role |
|------|------|
| `netlify/edge-functions/` | Active dir — intentionally empty (only a README) |
| `netlify/edge-functions-disabled/` | Parked code + re-enable checklist |

Parked implementations (do not load until checklist passes):

| File | Purpose |
|------|---------|
| `soft-404-guard.js` | Unknown SPA paths → real HTTP 404 + noindex (`/404.html`) |
| `markdown-negotiation.js` | `Accept: text/markdown` → HTML-to-Markdown transform |

`soft-404-guard` previously caused site-wide 500s (2026-07-09). Both functions
were disabled again during the 2026-07-14 self-301 outage. See
`netlify/edge-functions-disabled/README.md` before re-enabling.

There are no Netlify Functions (serverless Lambda-style) in this repo. All
server logic lives in the backend API at `https://api.360ghar.com`.

## Deploy previews

Netlify automatically builds a deploy preview for every pull request against
`main`. Previews use `npm run build:preview` (fast path: Vite only, no full
prerender). Production is never built by Netlify git — only by GitHub Actions.

Things to know about previews:

- Preview URLs get the same redirect and header rules as production.
- `VITE_API_BASE_URL` is hardcoded in `netlify.toml` to the production API, so
  previews hit production data. Do not perform destructive actions from a
  preview deploy.
- Secrets (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`,
  `VITE_GOOGLE_PLACES_API_KEY`, `VITE_PUBLIC_POSTHOG_KEY`) are pulled from the
  Netlify site environment and are shared with previews by default.
- The Puppeteer Chrome install step runs on every preview build, which adds
  ~30-60s. This is expected.

Before merging a PR, confirm locally with:

```bash
npm run build && npm run lint
```

These two commands run on every Netlify build. If either fails locally, the
deploy will fail too.

## Related pages

- [Build Pipeline](../build/Build-Pipeline) — the multi-step build that runs
  before files hit Netlify's CDN.
- [Reference](../reference/Reference) — full environment variable and
  dependency reference.
- [Security](../security/Security) — CORS, HTTPS enforcement, and key
  exposure considerations that affect deploy config.
