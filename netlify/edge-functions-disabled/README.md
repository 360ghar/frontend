# Disabled edge functions

This directory holds edge functions that must not run in production.

`soft-404-guard.js` was temporarily moved here on 2026-07-09 after a
site-wide HTTP 500 (`uncaught exception during edge function invocation`)
caused by the original `context.rewrite` implementation.

It was re-enabled under `netlify/edge-functions/soft-404-guard.js` after:
- Replacing `context.rewrite` with `fetch('/404.html')` + HTTP 404
- Fail-open try/catch (any error → continue request chain)
- Expanded `excludedPath` for static files
- Bare `return` for allowlisted routes (no unnecessary `context.next()`)

Do not reintroduce edge handlers on `/*` without deploy-preview smoke tests
and fail-open error handling.
