# Disabled edge functions

This directory holds edge functions that must **not** run in production.

## History

| Date | Event |
|------|--------|
| 2026-07-09 | `soft-404-guard.js` caused site-wide HTTP 500 (`uncaught exception during edge function invocation` via `context.rewrite`). Moved here. |
| 2026-07-09 | Hardened version re-enabled under `netlify/edge-functions/` (fetch `/404.html` + fail-open). |
| 2026-07-14 | Production outage: **HTTP 301 self-redirect loop** on every path (including static assets). Both `soft-404-guard.js` and `markdown-negotiation.js` disabled again until origin is stable. |

## Currently parked

- `soft-404-guard.js` — SPA soft-404 → hard 404 + noindex
- `markdown-negotiation.js` — `Accept: text/markdown` HTML→Markdown transform

## Re-enable checklist

Do not move files back to `netlify/edge-functions/` until **all** of these pass on a deploy preview:

1. `/`, `/properties`, `/about-us` → HTTP 200 (not 301 to self)
2. Hashed `/assets/*.js` → HTTP 200
3. Junk path (e.g. `/this-is-not-a-route-xyz`) → soft-404 path returns 404 + `noindex` only if soft-404 is re-enabled
4. Netlify Edge Function logs show no exceptions for 24h on preview
5. Fail-open try/catch remains in place on any `/*` handler

Also ensure production deploys use `netlify deploy --prod --dir=dist --no-build` so CLI does not re-run `build:preview` over the full artifact.
