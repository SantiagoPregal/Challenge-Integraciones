# Challenge-Integraciones

This repository contains a focused Node.js/Express API developed within a one-hour technical assessment for a backend integrations role at a startup. The goal was to demonstrate clean routing, external API consumption, and lightweight filtering logic that supports future integration scenarios.

## Stack
- **Node.js** + **Express** for the HTTP server.
- **Axios** for fetching data from `https://jsonplaceholder.typicode.com`.
- Structured controllers and routes, keeping responsibilities separated.

## Quick start
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the server**
   - Production mode: `npm start`
   - Local development (auto-reloads): `npm run dev`
3. **Open** `http://localhost:3000/api` to verify the API is reachable.

## Available endpoints
| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/users` | Returns the full list of users retrieved from the placeholder API. |
| `GET` | `/api/posts` | Returns the full list of posts. |
| `GET` | `/api/users/posts-summary` | Returns users with non-empty emails grouped by post count. Optional query parameter `minPosts` filters users with at least that many posts. |

### Example query
```
GET /api/users/posts-summary?minPosts=5
```
This returns users with five or more posts, each result including their full name, email, city, and total posts count.

## Error handling
- Any failures while fetching data from the external service return `500` with a descriptive message.
- Unknown routes respond with `404`.

## Notes
- There is no persistence layer, as the focus is on consuming two public endpoints and composing a filtered response.
- The filter excludes users with empty emails because the product owner needed clean contact data.
