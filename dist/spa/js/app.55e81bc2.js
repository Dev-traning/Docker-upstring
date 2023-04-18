(()=>{"use strict";var e={8417:(e,t,r)=>{var n=r(1957),o=r(1947),a=r(499),i=r(9835);function l(e,t,r,n,o,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}r(9981);const s=(0,i.aZ)({name:"App"});var c=r(1639);const d=(0,c.Z)(s,[["render",l]]),u=d;var p=r(3340),f=r(8339);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(367)]).then(r.bind(r,1367)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(537)]).then(r.bind(r,2534))},{path:"/Services",name:"Services",component:()=>Promise.all([r.e(736),r.e(64),r.e(297)]).then(r.bind(r,8297))},{path:"/contactus",name:"contactus",component:()=>Promise.all([r.e(736),r.e(64),r.e(421)]).then(r.bind(r,5421))},{path:"/aboutus",name:"aboutus",component:()=>Promise.all([r.e(736),r.e(64),r.e(362)]).then(r.bind(r,6362))},{path:"/portfolio",name:"portfolio",component:()=>Promise.all([r.e(736),r.e(64),r.e(710)]).then(r.bind(r,5710))},{path:"/career",name:"career",component:()=>Promise.all([r.e(736),r.e(64),r.e(218)]).then(r.bind(r,4218))},{path:"/IbsfPrivacy",name:"privacy1",component:()=>r.e(436).then(r.bind(r,1436))},{path:"/:id",name:"AddToProduct",component:()=>Promise.all([r.e(736),r.e(64),r.e(106)]).then(r.bind(r,8108))},{path:"/13",name:"CreativePage",component:()=>Promise.all([r.e(736),r.e(64),r.e(202)]).then(r.bind(r,7012))},{path:"/AfterBuyCreative",name:"AfterBuyCreative",component:()=>Promise.all([r.e(736),r.e(64),r.e(650)]).then(r.bind(r,2650))},{path:"/CreativeBuy",name:"CreativeBuy",component:()=>Promise.all([r.e(736),r.e(64),r.e(174)]).then(r.bind(r,6863))},{path:"/downloadImg",name:"logoimg",component:()=>Promise.all([r.e(736),r.e(64),r.e(818)]).then(r.bind(r,5078))},{path:"home/User/Success",name:"success",component:()=>Promise.all([r.e(736),r.e(64),r.e(532)]).then(r.bind(r,4532))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=h,b=(0,p.BC)((function(){const e=f.PO,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("/")});return t}));async function v(e,t){const r=e(u);r.use(o.Z,t);const n=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:r,router:n}}var g=r(4328);const y={config:{},plugins:{Notify:g.Z}},P="/";async function w({app:e,router:t},r){let n=!1;const o=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t)},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===n&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:P})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}v(n.ri,y).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,1569)),Promise.resolve().then(r.bind(r,6678))]).then((t=>{const r=n(t).filter((e=>"function"===typeof e));w(e,r)}))}))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>l});var n=r(3340),o=r(9981),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},6678:(e,t,r)=>{r.r(t);var n=r(1957),o=r(7703),a=r.n(o);(0,n.ri)().use(a()),vue.use(a())}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{r.amdO={}})(),(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"76d9f54e",106:"193e448a",174:"e7fd0353",202:"8cfd652d",218:"d81d2ccb",297:"95de7a30",362:"790b6dc0",367:"cf726f73",421:"b2b7d387",436:"6b6108fe",532:"db607288",537:"52198762",650:"48b1014f",710:"60d6c568",818:"ab0a942e",862:"aa2725d2"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{106:"e5242ec6",174:"39992772",202:"01c627fe",218:"4fcd0281",297:"7eca3c58",362:"c25d3d63",367:"033a3d18",421:"afb20e64",532:"3f31aa1d",537:"16127779",650:"fee7bc55",710:"fdcc223a",818:"adeaebbd"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="infinity-brains:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,null,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={106:1,174:1,202:1,218:1,297:1,362:1,367:1,421:1,532:1,537:1,650:1,710:1,818:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var d=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=globalThis["webpackChunkinfinity_brains"]=globalThis["webpackChunkinfinity_brains"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(8417)));n=r.O(n)})();