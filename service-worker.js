if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>a(e,d),l={module:{uri:d},exports:s,require:n};i[d]=Promise.all(c.map((e=>l[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-48c34d16"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2024/03/31/apple/index.html",revision:"63ee4329aa03993f06468ffeb9634505"},{url:"2024/03/31/hello-world/index.html",revision:"228be80575a342b580a0172c2e271950"},{url:"2024/03/31/homekit/index.html",revision:"a017c22aaa5ae67b8334d9c5e1f403b9"},{url:"2024/03/31/ios-dev-note/index.html",revision:"0f3355a5a77de128336b5ec04ee72a16"},{url:"2024/03/31/life/index.html",revision:"6947aaa55a6ca6075bcef5ec42b74204"},{url:"404.html",revision:"f851418f8d0ea098182084e2081e01b7"},{url:"about/index.html",revision:"721af04db4a5f877fa468e754dec4043"},{url:"album/index.html",revision:"8bff70d2abdcc1d0faa38b360feab764"},{url:"anzhiyu/random.js",revision:"a0e9dc253c5ef7b8a47856972386a580"},{url:"archives/2024/03/index.html",revision:"32a356740d1e333715ef3ce394abf3a9"},{url:"archives/2024/index.html",revision:"4e6d8bf4cf44de1d10920f516badab3f"},{url:"archives/index.html",revision:"b7d63e6d0549c9faf30a5526a253a9e7"},{url:"categories/Apple/index.html",revision:"481023b059333a6a9bd2427adccf2bfe"},{url:"categories/HomeKit/index.html",revision:"d519a945e530d8ae9451c080ac1158e8"},{url:"categories/index.html",revision:"2b6876e8b9ccb01010f477675ea5a6d6"},{url:"categories/iOS开发/index.html",revision:"c9c18c0466af2e0822e01d3b00fecace"},{url:"categories/生活/index.html",revision:"4d98f76ba37a3e67851d228a2ca2bd70"},{url:"categories/随笔/index.html",revision:"5c72c196a9cfd977964aac6a8190b7b3"},{url:"comments/index.html",revision:"a4b23ddc3185cc302d846518eff34aff"},{url:"css/index.css",revision:"35fdd36deb8ec93ec3c516911da8c89b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"645b959b513df48a0eb17f2f9d716fe4"},{url:"fcircle/index.html",revision:"6a1e94fe038be2980394180ef2442892"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"6ffaeeb4caae53f0dd6861f0489bd3c1"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"b2bbde9d96fc4ded6c7a163038818ae5"},{url:"music/index.html",revision:"99439579670efeb078e77924ac7fa28a"},{url:"tags/Apple/index.html",revision:"5d3b184711749ff89e6c21c1a2a96ff7"},{url:"tags/HomeKit/index.html",revision:"5495110333b1ba798219f418fd503960"},{url:"tags/index.html",revision:"d51e00c7ddb6315c8725257bee5cb98b"},{url:"tags/iOS开发/index.html",revision:"c0abc506b527f793a1249dee6f304aa4"},{url:"tags/生活/index.html",revision:"fe4544513cd7d635a139ddec9c7eae61"},{url:"tags/随笔/index.html",revision:"4b326ad01a2cb24221720026f89d49ab"}],{})}));
//# sourceMappingURL=service-worker.js.map
