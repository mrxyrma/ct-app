if(!self.define){let s,n={};const e=(e,i)=>(e=new URL(e+".js",i).href,n[e]||new Promise((n=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=n,document.head.appendChild(s)}else s=e,importScripts(e),n()})).then((()=>{let s=n[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(i,o)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let l={};const t=s=>e(s,r),c={module:{uri:r},exports:l,require:t};n[r]=Promise.all(i.map((s=>c[s]||t(s)))).then((s=>(o(...s),l)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/icons/android-chrome-192x192.png",revision:null},{url:"assets/icons/android-chrome-512x512.png",revision:null},{url:"assets/icons/apple-touch-icon.png",revision:null},{url:"assets/icons/favicon-16x16.png",revision:null},{url:"assets/icons/favicon-32x32.png",revision:null},{url:"assets/icons/favicon.ico",revision:null},{url:"assets/icons/mstile-144x144.png",revision:null},{url:"assets/icons/mstile-150x150.png",revision:null},{url:"assets/icons/mstile-310x150.png",revision:null},{url:"assets/icons/mstile-310x310.png",revision:null},{url:"assets/icons/mstile-70x70.png",revision:null},{url:"assets/icons/safari-pinned-tab.svg",revision:null},{url:"assets/icons/android-chrome-192x192.png",revision:"581144a2b74dee0f3dffdf797e3de00a"},{url:"assets/icons/android-chrome-512x512.png",revision:"cfa86043c8e10df0b697a4d1ffd9f192"},{url:"manifest.webmanifest",revision:"fbb0a4d059dbd3562ce41e490c838f08"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
