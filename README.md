# Userfront SvelteKit auth example

**Live Demo:** [userfront-kit.vercel.app](https://userfront-kit.vercel.app/)

This is a port of the Userfront Vue.js/React examples to SvelteKit based on:

- https://userfront.com/examples/vue.html
- https://userfront.com/examples/react.html

[Userfront Svelte bindings](https://github.com/Leftium/userfrontKit/tree/main/src/lib/UserfrontSvelte) are included and based on:

- https://github.com/userfront/userfront-vue
- https://github.com/userfront/userfront-react

## Usage

Starts a local server:

    npm run dev

*Optional steps to get protected API endpoints working:*

1. Set `VITE_USERFRONT_PUBLIC_KEY` environment variable to your own Userfront public key. The base64 version must be used!
  - Locally: Copy `.env.example` file to `.env.local`, edit file.
  - Vercel, Netlify, etc: Set `VITE_USERFRONT_PUBLIC_KEY` environment variable in deployment settings.
2. Rebuild/redeploy.
