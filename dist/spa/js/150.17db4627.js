"use strict";(globalThis["webpackChunkinfinity_brains"]=globalThis["webpackChunkinfinity_brains"]||[]).push([[150],{150:(e,t,i)=>{i.r(t),i.d(t,{default:()=>D});var o=i(9835),a=i(6970);const s=e=>((0,o.dD)("data-v-0987f814"),e=e(),(0,o.Cn)(),e),n=s((()=>(0,o._)("div",{class:"logo"}," 𝖋𝖔𝖔𝖉𝖘 ",-1))),l=s((()=>(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",{href:"#"},"Home")]),(0,o._)("li",null,[(0,o._)("a",{href:"#"},"About")]),(0,o._)("li",null,[(0,o._)("a",{href:"#"},"favourites")]),(0,o._)("li",null,[(0,o._)("a",{href:"#"},"Add to Cart")])],-1))),c=[l],r=s((()=>(0,o._)("h1",{class:"title"},"Delicious Food",-1))),d=s((()=>(0,o._)("p",{class:"subtitle"},"Experience the Taste of Paradise",-1))),u={class:"client-reviews"},h=s((()=>(0,o._)("h2",{class:"section-title"},"Client Reviews",-1))),m={class:"review-card"},g={class:"review-text"},p={class:"review-author"},_={class:"container"},b=s((()=>(0,o._)("h2",{class:"section-title"},"Featured Dishes",-1))),w=["src","alt"],f={class:"dish-name"},v={class:"dish-description"},C=["onClick"];function y(e,t,i,s,l,y){const k=(0,o.up)("Slide"),A=(0,o.up)("Carousel");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",{class:"navbar",style:(0,a.j5)({backgroundColor:y.selectedColor})},[n,(0,o._)("div",{class:"menu-toggle",onClick:t[0]||(t[0]=(...e)=>y.toggleMenu&&y.toggleMenu(...e))},"☰"),(0,o._)("div",{class:(0,a.C_)(["menu",{"menu-open":l.isMenuOpen}])},c,2)],4),(0,o._)("div",null,[(0,o._)("header",null,[r,d,(0,o._)("label",{onClick:t[1]||(t[1]=e=>y.scrollToSection()),class:"cta-button",style:(0,a.j5)({backgroundColor:y.selectedColor})},"Order Now",4)]),(0,o._)("div",u,[h,(0,o.Wm)(A,{autoplay:!0,autoplaySpeed:4e3,infinite:!0,arrows:!0},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.clientReviews,(e=>((0,o.wg)(),(0,o.j4)(k,{key:e.id},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("p",g,(0,a.zw)(e.text),1),(0,o._)("p",p,"- "+(0,a.zw)(e.author),1)])])),_:2},1024)))),128))])),_:1})]),(0,o._)("div",_,[b,(0,o.Wm)(A,{autoplay:!0,autoplaySpeed:4e3,infinite:!0,arrows:!0},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Math.ceil(l.dishes.length/4),((t,i)=>((0,o.wg)(),(0,o.iD)("div",{class:"dish-row",id:"section1",key:i},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.dishes.slice(4*i,4*(i+1)),((t,i)=>((0,o.wg)(),(0,o.iD)("div",{class:"dish-card",key:i},[(0,o._)("img",{src:t.image,alt:t.name,class:"dish-image"},null,8,w),(0,o._)("h3",f,(0,a.zw)(t.name),1),(0,o._)("p",v,(0,a.zw)(t.description),1),(0,o._)("button",{onClick:i=>e.addToBucket(t),class:"add-to-bucket-button"},"Add to Bucket",8,C)])))),128))])))),128))])),_:1})]),(0,o._)("footer",{style:(0,a.j5)({backgroundColor:y.selectedColor})},[(0,o._)("div",{class:"container",style:(0,a.j5)({backgroundColor:y.selectedColor})},[(0,o._)("p",{style:(0,a.j5)({backgroundColor:y.selectedColor})},"© 2023 infinitybrains.com. All rights reserved.",4)],4)],4)])],64)}i(398);const k={data(){return{isMenuOpen:!1,clientReviews:[{id:1,text:"Amazing food and great service! I keep coming back for more.",author:"John Doe"},{id:2,text:"The best pizza in town. I highly recommend it!",author:"Jane Smith"},{id:3,text:"I've never had sushi this fresh. It's a delight!",author:"Alice Johnson"},{id:4,text:"Their chocolate cake is a must-try. Heavenly!",author:"Bob Wilson"}],dishes:[{id:1,name:"Pasta Carbonara",description:"Creamy pasta with bacon and cheese.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZiUUsDXBrMmKWEw-c_BQ2cP-8pmZUjL4TNY8delEHYf3PLRAeR4BN7GfYPX3wjXEVr0&usqp=CAU"},{id:2,name:"Pizza",description:"Classic pizza with tomato, mozzarella, and basil.",image:"https://t2.gstatic.com/images?q=tbn:ANd9GcQ8xM9urfeDyUCOW3fAfBh5KUmDZWHu0uZ-RiWwAQsMkwU68ELfcJKJcYWPuCG_2jTRyeDpTQ"},{id:3,name:"Sushi Platter",description:"Fresh and delicious sushi selection.",image:"https://t4.ftcdn.net/jpg/06/05/83/35/360_F_605833578_EbcLZohjgPGAaRYUOrQF2Bn2DjApUedc.jpg"},{id:4,name:"Chocolate Cake",description:"Decadent chocolate cake with a rich flavor.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsZ3Bbjo4SWUDRglk9yA_y380WYafvgU1AA&usqp=CAU"}]}},computed:{selectedColor(){return this.$store.state.magaswala_color}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},scrollToSection(){const e=document.getElementById("section1");e&&window.scrollTo({top:e.offsetTop-50,behavior:"smooth"})},async handleSubdomain(){const e="https://api.infinitybrains.com/api/";try{const t=window.location.hostname.split(".");console.log("hello",t[0]);const i=t[0],o=await fetch(`${e}/Searching?domain_name=${i}`),a=await o.json();this.$store.commit("setMagaswalaColor",a.data.color_select)}catch(t){console.error("Error fetching subcategory info:",t)}},extractSubdomain(e){const t=e.match(/^(?:https?:\/\/)?([^\/]+)\./);return t?t[1]:null},checkSubdomainOnLoad(){if(!this.$data.isHandleSubdomainExecuted){this.$data.isHandleSubdomainExecuted=!0;const e=window.location.href,t=this.extractSubdomain(e);t?(console.log(`Subdomain ${t} in URL ${e} exists!`),this.handleSubdomain()):console.error(`No subdomain found in URL ${e}`)}}},mounted(){this.checkSubdomainOnLoad()}};var A=i(1639);const S=(0,A.Z)(k,[["render",y],["__scopeId","data-v-0987f814"]]),D=S}}]);