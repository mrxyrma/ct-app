if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const d=e=>i(e,o),l={module:{uri:o},exports:t,require:d};s[o]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(n(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/category-page-CULm7l8a.js",revision:null},{url:"assets/index-BraHAjf2.css",revision:null},{url:"assets/index-CwvHJHaf.js",revision:null},{url:"assets/product-page-DTeyI-oD.js",revision:null},{url:"index.html",revision:"389e0ea576fb5edb6f792d829d3a3e78"},{url:"registerSW.js",revision:"fd4b693723191e8730b6850766d708c5"},{url:"assets/icons/android-chrome-192x192.png",revision:"581144a2b74dee0f3dffdf797e3de00a"},{url:"assets/icons/android-chrome-512x512.png",revision:"cfa86043c8e10df0b697a4d1ffd9f192"},{url:"manifest.webmanifest",revision:"fbb0a4d059dbd3562ce41e490c838f08"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
