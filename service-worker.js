if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const n=e=>c(e,a),b={module:{uri:a},exports:s,require:n};i[a]=Promise.all(d.map((e=>b[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-48c34d16"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2024/03/31/apple/index.html",revision:"f8399c252a141fdfa015bcc07770ebb2"},{url:"2024/03/31/hello-world/index.html",revision:"451abdf793facb24eed18a38398855bf"},{url:"2024/03/31/homekit/index.html",revision:"665518f43430e2b8b025e14c97f40d0b"},{url:"2024/03/31/ios-dev-note/index.html",revision:"fb454176ddc8898b441387abd00bf4b9"},{url:"2024/03/31/life/index.html",revision:"ba524420bf90d954cbb6422f0a286c8e"},{url:"404.html",revision:"090fe909afe07a32fa4b457e024447d6"},{url:"about/index.html",revision:"347e3effb8b95599cf42c7eb24bf0d84"},{url:"album/index.html",revision:"8c6a63d9a86d3bc5dbd53efcd37f95f0"},{url:"anzhiyu/random.js",revision:"13abe1e632c73a9432adb4c191c030e0"},{url:"archives/2024/03/index.html",revision:"8466820cdd83531523fa1c135cffb772"},{url:"archives/2024/index.html",revision:"6fe6acb3d1932245149ff83d88c9dbb4"},{url:"archives/index.html",revision:"e3baa553a5d3393fb09dee2dd1732fa2"},{url:"categories/Apple/index.html",revision:"782000e31cc40fb89a9188e61722207e"},{url:"categories/HomeKit/index.html",revision:"105b2b27ce3b2c1324ec4db0c0894e1a"},{url:"categories/index.html",revision:"a56a089ff30bee4eb3f186f43335ff3f"},{url:"categories/iOS开发/index.html",revision:"54eba68c8343bcb807d8673b041e91ba"},{url:"categories/生活/index.html",revision:"f52d03d167808c05e8609ec944080faf"},{url:"categories/随笔/index.html",revision:"54259dd0d85aa3acdb963e1928d7df6b"},{url:"comments/index.html",revision:"0098ab1f82dc900430ebccc76b77df89"},{url:"css/index.css",revision:"35fdd36deb8ec93ec3c516911da8c89b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"69053c57180e20e72b9ea44a5c175dfa"},{url:"fcircle/index.html",revision:"5545bc0a34c84ec1dc3d3f6488874349"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"e8afd935d669abf6c44cabc41cedd95c"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"b2bbde9d96fc4ded6c7a163038818ae5"},{url:"music/index.html",revision:"f9ebbee5fe94b46f7dce17f3ab8e49c2"},{url:"shot-by-iphone/index.html",revision:"d204107ebffb8a2f03a0bee1eb29a8d3"},{url:"tags/Apple/index.html",revision:"7dbfb8ba2cd85a679280d5b8c4d10867"},{url:"tags/HomeKit/index.html",revision:"88c660a075fe64194098ebf41660cdef"},{url:"tags/index.html",revision:"05f9cf95404913bcd5c66af3392589b3"},{url:"tags/iOS开发/index.html",revision:"178dea6fce31c017a5e3c847e0f40444"},{url:"tags/生活/index.html",revision:"ec99d98fd9f3ee88ca11926a109e612a"},{url:"tags/随笔/index.html",revision:"6d95c342e9fee30baaa8c78b1fed3827"}],{})}));
//# sourceMappingURL=service-worker.js.map
