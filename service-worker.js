if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const u=e=>n(e,r),c={module:{uri:r},exports:t,require:u};i[r]=Promise.all(o.map((e=>c[e]||u(e)))).then((e=>(s(...e),t)))}}define(["./workbox-aade67e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8d7f35ae1e84493dfb4b0f5386f4a9ff"},{url:"css/index.css",revision:"b2e3a5e8310a913439a740fa309eeec8"},{url:"/",revision:"index-20240410050344303"},{url:"music/",revision:"music-20240410050344303"},{url:"about/",revision:"about-20240410050344303"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
