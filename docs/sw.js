if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const l=e=>n(e,c),d={module:{uri:c},exports:o,require:l};i[c]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e8df8c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"10b5f88323fdad31bf50c90668d3e84a"},{url:"assets/index-BTZqpbgx.js",revision:null},{url:"assets/index-COyOBI3r.css",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"favicon.ico",revision:"89099cfae0775e3e086613bca3190493"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"index.html",revision:"385243d8a35dc21ebf910f07274c830c"},{url:"maskable-icon-512x512.png",revision:"126c55dc030a58db716758479c41c570"},{url:"pwa-192x192.png",revision:"14a23cc23a2f5a3157ac52e78135346c"},{url:"pwa-512x512.png",revision:"5a051418936d2f633fc164f78b1662e1"},{url:"pwa-64x64.png",revision:"e364fbdd8a3dde0c6167972af41c9dbf"},{url:"stop_watch_icon.png",revision:"438c5b63214861388b54caca7e11f27b"},{url:"manifest.webmanifest",revision:"2752a27bee71527eb47538190030c0d1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
