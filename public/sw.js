if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"7f37126367571183d5228a6f3f66e447"},{url:"/_next/static/chunks/396-2b6ba3992eadaf6b.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/472-4a4ed842288fadc9.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/661-2e618108ea7b946a.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/9081a741-a927f26c13fa63c8.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/920-c2fb5aaab6e42a6f.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/app/_not-found-e263f715a2c11ace.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/app/layout-8bbdb40fa1a45f08.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/app/page-55195ca605430ad1.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/bc9c3264-dc89c3bc45a3c20d.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/fd9d1056-b3a8d9cf9e5ca59d.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/main-app-45a6ad157f911be7.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/main-e1abb2d0e44f8127.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1ea47c2d14572682.js",revision:"e-AquIyh7c0IPDKqjgx6P"},{url:"/_next/static/css/246ef545f8200c17.css",revision:"246ef545f8200c17"},{url:"/_next/static/e-AquIyh7c0IPDKqjgx6P/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/e-AquIyh7c0IPDKqjgx6P/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/amitKumarShawResume.pdf",revision:"3bc026b961ffdab1dc3269c272d3c4d3"},{url:"/assets/me.jpg",revision:"76b4158aae1d7851f9e8fa9c7d55af0d"},{url:"/assets/projects/connect.jpg",revision:"3c3a60e37a34eaa3bf73dda44e10cf04"},{url:"/assets/projects/dashboard.jpg",revision:"ef40c120fd495032aebf3bafe905055c"},{url:"/assets/projects/fithub.jpg",revision:"62c61dd31b4cee90033e81b92667df0d"},{url:"/assets/projects/fithub.png",revision:"ff301b177e71c6873af8366b626f9f84"},{url:"/assets/projects/fitthub.jpg",revision:"28f3a516d4273565616185184b1457d8"},{url:"/assets/projects/managet.jpg",revision:"790bc6840d9194255af1962a5d858a5b"},{url:"/assets/projects/movie.png",revision:"9fe344a240672804fbeec7d4354f4143"},{url:"/assets/projects/originAi.png",revision:"6d2fa12069556184b8461ce3b17f010c"},{url:"/assets/projects/pijja.png",revision:"46cc64ca3c76bc0f819e0665430e1c72"},{url:"/assets/projects/youtube.png",revision:"7bc454c511746ec66df25148c94b84f5"},{url:"/assets/skills/bootstrap.svg",revision:"bc6a9c633421251046dd938a2325fff9"},{url:"/assets/skills/css.svg",revision:"f5da6f2582ec0f08a61d1860848c6cac"},{url:"/assets/skills/expressjs.svg",revision:"45168f973a24ac110c6b6dd21edcef81"},{url:"/assets/skills/git.svg",revision:"f3f4f15d89adeb50dac4487a1a9e4b18"},{url:"/assets/skills/github.svg",revision:"a74e1b0f65fb86bf4ba944b71a060834"},{url:"/assets/skills/html.svg",revision:"8ee96cee414aecdaf50a90e7b0ce361b"},{url:"/assets/skills/js.svg",revision:"bc786b35d99c52f347831dc995ab7143"},{url:"/assets/skills/mongodb.svg",revision:"ebf723d47dc4203868088d005452543b"},{url:"/assets/skills/mui.svg",revision:"d398a189cc5e99672399d6f1f48fd9af"},{url:"/assets/skills/next.svg",revision:"6f787af4e8a0b90e83c96ce9737496d8"},{url:"/assets/skills/nodejs.svg",revision:"5c376133d6403088a87a04fcc9685674"},{url:"/assets/skills/react.svg",revision:"e9f3d01c242e086f895bde131803b451"},{url:"/assets/skills/redux.svg",revision:"b7dc3b99382465652bda0e61515c0937"},{url:"/assets/skills/scss.svg",revision:"bd817b061dce17af2b9e7a5d1285cd29"},{url:"/assets/skills/tailwind.svg",revision:"56de68fb2c4e37a6598ea565ab1f2820"},{url:"/assets/skills/ts.svg",revision:"39f8ab5713ea5f59d037ba9fced3a581"},{url:"/icon-192x192.png",revision:"dcee86d3ab6dbc02362dd6676b84ed0c"},{url:"/icon-256x256.png",revision:"368cec5296aa93ae3b7d1cb3bd2ee3db"},{url:"/icon-384x384.png",revision:"1e85488eabfd7f9cbca9821e1bb2a259"},{url:"/icon-512x512.png",revision:"a8bccb08fe375b7192a9486b9ccbeabe"},{url:"/logo/logo.png",revision:"61f1d3ba8e70925302b537776e35f2ae"},{url:"/manifest.json",revision:"b36fb7d4714f1b2acf38aca30841e1c8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));