# Nextjs Standalone mode

## TO RUN

```bash
npm run build
npm run execstandalone
```


next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  output: 'standalone',
}

module.exports = nextConfig
```

package.json

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "standalonebuild": "cp -r .next/static .next/standalone/.next && cp -r public .next/standalone/.next",
    "execstandalone" : "node .next/standalone/server.js",
    "dev": "next dev",
    "build": "next build && npm run standalone",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@types/node": "18.11.9",
    "@types/react": "18.0.25",
    "@types/react-dom": "18.0.9",
    "eslint": "8.28.0",
    "eslint-config-next": "13.0.5",
    "next": "13.0.5",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "4.9.3"
  }
}
```