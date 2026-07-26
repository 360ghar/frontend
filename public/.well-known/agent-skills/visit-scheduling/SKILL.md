# Visit Scheduling

Schedule property visits on 360Ghar.

## Endpoint

```
POST https://api.360ghar.com/api/v1/visits/
```

## Request Body

```json
{
  "property_id": "string",
  "scheduled_date": "YYYY-MM-DD",
  "special_requirements": "string (optional)"
}
```

## Response

Returns the created visit object with `id`, `property_id`, `scheduled_date`, `status`.

## Other Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/visits/` | List all visits |
| GET | `/visits/upcoming/` | List upcoming visits |
| GET | `/visits/past/` | List past visits |
| GET | `/visits/{id}` | Get visit details |
| PUT | `/visits/{id}` | Update visit |
| POST | `/visits/{id}/reschedule` | Reschedule visit |
| POST | `/visits/{id}/cancel` | Cancel visit |

## Authentication

Requires a Bearer access token issued by the 360Ghar MCP OAuth 2.1 (PKCE) server.
Obtain via the standard MCP authorization flow:

1. Discover the authorization server at `https://api.360ghar.com/.well-known/oauth-authorization-server`
   (or the protected-resource metadata at `/.well-known/oauth-protected-resource`).
2. Register dynamically at `POST https://api.360ghar.com/mcp/oauth/register` (RFC 7591).
3. Redirect the user to `https://api.360ghar.com/mcp/oauth/authorize` with your
   `client_id`, PKCE `code_challenge`, `redirect_uri`, and `state`.
4. Exchange the returned authorization `code` at `POST https://api.360ghar.com/mcp/oauth/token`
   for an access token, and send it as `Authorization: Bearer <access_token>`.

## Example

```bash
curl -X POST "https://api.360ghar.com/api/v1/visits/" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"property_id": "abc123", "scheduled_date": "2025-06-15"}'
```
