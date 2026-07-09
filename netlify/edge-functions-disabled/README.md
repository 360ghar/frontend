# Disabled edge functions

`soft-404-guard.js` was moved here after it caused a production-wide
HTTP 500 (`uncaught exception during edge function invocation`) on
2026-07-09 when first deployed.

Re-enable only after:
1. Deploy-preview smoke tests for `/`, known routes, and junk 404 paths
2. Confirming Netlify Edge Function logs show no exceptions
3. Fail-open try/catch remains in place
