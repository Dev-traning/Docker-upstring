(()=>{"use strict";var e={1741:(e,t,o)=>{var n=o(1957),r=o(1947),a=o(499),i=o(9835);function s(e,t,o,n,r,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s)])}const l=(0,i.aZ)({name:"App"});var c=o(1639),d=o(7605),m=o(9984),u=o.n(m);const p=(0,c.Z)(l,[["render",s],["__scopeId","data-v-54a61367"]]),h=p;u()(l,"components",{QLayout:d.Z});var f=o(1502),b=o(3340),g=o(8339);const v=window.location.hostname.split(".");console.log("hello",v[0]);const y="gaurav";if(v[0]==localStorage.getItem("domainname")){v[0]=y;const e=window.location.href.replace(v[0]+".",""),t=y+"."+e;window.location.href=t}const w=[{path:"/",component:()=>Promise.all([o.e(736),o.e(639)]).then(o.bind(o,7639)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(64),o.e(567)]).then(o.bind(o,2491))},{path:"/Services",name:"Services",component:()=>Promise.all([o.e(736),o.e(64),o.e(954)]).then(o.bind(o,496))},{path:"/contactus",name:"contactus",component:()=>Promise.all([o.e(736),o.e(64),o.e(326)]).then(o.bind(o,9218))},{path:"/aboutus",name:"aboutus",component:()=>Promise.all([o.e(736),o.e(64),o.e(811)]).then(o.bind(o,5728))},{path:"/portfolio",name:"portfolio",component:()=>Promise.all([o.e(736),o.e(64),o.e(420)]).then(o.bind(o,295))},{path:"/career",name:"career",component:()=>Promise.all([o.e(736),o.e(64),o.e(611)]).then(o.bind(o,5905))},{path:"/IbsfPrivacy",name:"privacy1",component:()=>o.e(217).then(o.bind(o,9217))},{path:"/:id",name:"AddToProduct",component:()=>Promise.all([o.e(736),o.e(64),o.e(895)]).then(o.bind(o,4687)),meta:{title:"Product Page",metaTags:[{name:"Infinitybrains Product",content:"This Products are company own product user can purchase and buy or shell this product by the vendor "}]}},{path:"/AfterBuyCreative",name:"AfterBuyCreative",component:()=>Promise.all([o.e(736),o.e(64),o.e(705)]).then(o.bind(o,8705))},{path:"/paymentForm/:id",name:"paymentForm",component:()=>Promise.all([o.e(736),o.e(64),o.e(578)]).then(o.bind(o,3069))},{path:"/CreativeBuy",name:"CreativeBuy",component:()=>Promise.all([o.e(736),o.e(64),o.e(181)]).then(o.bind(o,1336))},{path:"/downloadImg",name:"logoimg",component:()=>o.e(158).then(o.bind(o,158))},{path:"home/User/Success",name:"success",component:()=>Promise.all([o.e(736),o.e(64),o.e(904)]).then(o.bind(o,4904))},{path:"/deletionPolicy",name:"deletionPolicy",component:()=>o.e(263).then(o.bind(o,1263))}]},{path:"/Food",name:"theam21",component:()=>Promise.all([o.e(736),o.e(666)]).then(o.bind(o,7666))},{path:"/textile",name:"theam22",component:()=>Promise.all([o.e(736),o.e(512)]).then(o.bind(o,6512))},{path:"/:catchAll(.*)*",component:()=>o.e(134).then(o.bind(o,4134))},{path:"/10M_website/",component:()=>Promise.all([o.e(64),o.e(700)]).then(o.bind(o,1245)),children:[{path:"",name:"default",component:()=>Promise.all([o.e(64),o.e(700)]).then(o.bind(o,1245))}]},{path:"/10M_website/page",name:"page",component:()=>Promise.all([o.e(64),o.e(700)]).then(o.bind(o,1245))},{path:"/10M_website/categories",name:"categories",component:()=>Promise.all([o.e(64),o.e(423)]).then(o.bind(o,209))},{path:"/10M_website/selectyourtype",name:"selectyourtype",component:()=>Promise.all([o.e(736),o.e(64),o.e(408)]).then(o.bind(o,2565))},{path:"/10M_website/pickdesign/:id",name:"pickdesign",component:()=>Promise.all([o.e(736),o.e(64),o.e(751)]).then(o.bind(o,8977))},{path:"/10M_website/previewalltheme/:themeName",name:"previewalltheme",component:()=>Promise.all([o.e(736),o.e(64),o.e(679)]).then(o.bind(o,1182)),props:!0},{path:"/10M_website/previewalltheme/paymentscreen/:id",name:"paymentscreen",component:()=>Promise.all([o.e(736),o.e(64),o.e(578)]).then(o.bind(o,3069))}],P=w,C=(0,b.BC)((function(){const e=g.PO,t=(0,g.p7)({scrollBehavior:()=>({left:0,top:0}),routes:P,history:e("/")});return t}));async function _(e,t){const n=e(h);n.use(r.Z,t);const i="function"===typeof f.Z?await(0,f.Z)({}):f.Z,{storeKey:s}=await Promise.resolve().then(o.bind(o,1502)),l=(0,a.Xl)("function"===typeof C?await C({store:i}):C);return i.$router=l,{app:n,store:i,storeKey:s,router:l}}var S=o(4328);const k={config:{},plugins:{Notify:S.Z}},T="/";async function N({app:e,router:t,store:o,storeKey:n},r){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let d=0;!1===a&&d<r.length;d++)try{await r[d]({app:e,router:t,store:o,ssrContext:null,redirect:s,urlPath:l,publicPath:T})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(o,n),e.mount("#q-app"))}_(n.ri,k).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(o.bind(o,4593))]).then((t=>{const o=n(t).filter((e=>"function"===typeof e));N(e,o)}))}))},4593:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});var n=o(3340),r=o(1502);const a=(0,n.xr)((({app:e})=>{e.use(r.Z)}))},1502:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(3100);const r=(0,n.MT)({state:{message:"Hello, From Vuex",backGroundColor:"white",imageSrc:`${window.location.origin}/img/Ib_logo.446e007b.png`,color1:"#012A71",userId:0,sgst:0,cgst:0,totalAmount:0,discount:0,couponCode:"",product:0,firstName:"",lastName:"",busName:"",busgstNumber:"",email:"",password:"",domainName:"",category_id:"",magaswala_color:"",TextileColor:""},mutations:{setMagaswalaColor(e,t){e.magaswala_color=t},setTextileColor(e,t){e.TextileColor=t},setCategory_id(e,t){e.category_id=t},setdomainName(e,t){e.domainName=t},setEmail(e,t){e.email=t},setPassword(e,t){e.password=t},setMessage(e,t){e.message=t},setBackGroundColor(e,t){e.backGroundColor=t},setimageSrc(e,t){e.imageSrc=t},changeColor(e,t){e.color1=t},setUserId(e,t){e.userId=t},setSGST(e,t){e.sgst=t},setCGST(e,t){e.cgst=t},setTotalAmount(e,t){e.totalAmount=t},setDiscount(e,t){e.discount=t},setCouponCode(e,t){e.couponCode=t},setProduct(e,t){e.product=t}},actions:{},getters:{getDomainName:e=>e.domainName}}),a=r}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,(()=>{o.amdO={}})(),(()=>{var e=[];o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,r,a]=e[d],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"20b04496",134:"ac66fc6f",158:"e083df73",181:"2d613748",188:"cad757c7",217:"e8a74c3f",263:"e9001841",326:"5e58f0ab",408:"2619f763",420:"c701b41d",423:"f179f411",512:"286d6d04",567:"41762517",578:"8dacfe62",611:"1c791a5f",639:"5b1146fe",666:"957b9716",679:"3ee59817",700:"2fafdeb3",703:"605f26d8",705:"d703dc0e",751:"bbbd7550",811:"6c23b880",834:"cb29f9da",895:"fb66664d",904:"a9fe6c59",954:"09dde8f3"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+e+"."+{181:"977955d8",263:"cc6c9e95",326:"b0d5bab8",408:"b2b2e362",420:"bf96df2f",423:"8ab50860",512:"5d255346",567:"bdab2be3",578:"7d7c866e",611:"2577fba6",639:"7f13c232",666:"ed3a9c58",679:"a50d0bde",700:"dc5e3275",703:"705d87f0",705:"fee7bc55",751:"e1bf6192",811:"85201e8b",834:"3d83b127",895:"d5e32121",904:"97ad46ea",954:"5242da6b"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="infinity-brains:";o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var m=c[d];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==t+a){s=m;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var u=(t,o)=>{s.onerror=s.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),t)return t(o)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,o,n,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=o=>{if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=i,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=n=>new Promise(((r,a)=>{var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,null,r,a)})),r={143:0};o.f.miniCss=(e,t)=>{var o={181:1,263:1,326:1,408:1,420:1,423:1,512:1,567:1,578:1,611:1,639:1,666:1,679:1,700:1,703:1,705:1,751:1,811:1,834:1,895:1,904:1,954:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}}})(),(()=>{var e={143:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((o,n)=>r=e[t]=[o,n]));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,l=n=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var d=l(o)}for(t&&t(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=globalThis["webpackChunkinfinity_brains"]=globalThis["webpackChunkinfinity_brains"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[736],(()=>o(1741)));n=o.O(n)})();