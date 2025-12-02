# React Server Components: The 2025 Workflow Revolution

React Server Components (RSC) exited “experimental” in React 19 and the ecosystem has already re-written its playbooks.  
Teams shipping with RSC in 2025 are seeing **40 % smaller bundles**, **20 % faster TTI**, and **zero waterfalls**—all without touching `useEffect` for data.

## What changed in 2025

1. **Stable wire format**  
   The `.rsc` stream is now version-locked, so any React 19 server (Next.js, Remix, Redwood, Shopify Hydrogen) can render components for any React 19 client.  
   No lock-in, no vendor drift.

2. **Edge-first renderers**  
   Vercel, Netlify, and Cloudflare Workers expose native `renderToRSCStream()` that runs inside a V8 isolate at the edge—cold-start **< 50 ms**.

3. **Zero-JS components**  
   Mark a component with `'use server'` and the compiler **guarantees** it never ships to the browser.  
   Even accidental `onClick` props are caught at build time.

4. **Client hydration opt-in**  
   Add the `'use client'` directive only when you need state.  
   Everything else is static HTML streamed from the server, so the main thread stays free for interactions.
