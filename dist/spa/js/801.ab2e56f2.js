(globalThis["webpackChunkinfinity_brains"]=globalThis["webpackChunkinfinity_brains"]||[]).push([[801],{6805:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>se});var a=l(9835),o=l(5418),s=l.n(o);const n=e=>((0,a.dD)("data-v-45a96624"),e=e(),(0,a.Cn)(),e),i={class:"row justify-evenly"},r={class:"col-md-6 col-sm-12 col-xs-12 center contactusformdiv",style:{"padding-top":"70px"}},u=n((()=>(0,a._)("p",{class:"text-h4 text-indigo-7 text-center"},"GET IN TOUCH",-1))),c=n((()=>(0,a._)("p",{class:"text-indigo-7 text-center"}," Do You Have questions/queries, feel free to contact us Use the below form to contact us ",-1))),m=n((()=>(0,a._)("div",{class:"col-md-6 col-sm-12 col-xs-12 center",style:{"padding-top":"50px"}},[(0,a._)("img",{src:s(),style:{width:"80%",height:"500px"}})],-1))),d={class:"row",style:{margin:"auto"}},p=n((()=>(0,a._)("div",{style:{"background-color":"#2f518a"},class:"bg-indigo-8 q-mt-lg q-mb-md q-h-12"},null,-1))),g={class:"q-pa-md bgclass"},h={class:"row justify-between items-start q-gutter-md q-mb-md",style:{margin:"0 auto","max-width":"1920px",width:"84%"}},y={class:"col-md-6 col-lg-2"},f={class:"col-md-6 col-lg-2"},b={class:"col-md-6 col-lg-2"},w={class:"col-md-6 col-lg-2"},v=n((()=>(0,a._)("div",{class:"row justify-center items-center text-white q-mt-lg"},[(0,a._)("div",{class:"col-auto text-center"},[(0,a._)("p",{style:{top:"5672px",left:"750px",width:"421px",height:"34px",color:"#ffffff",font:"normal normal 600 1.1rem/34px Nunito","letter-spacing":"0px",opacity:"1"}}," 2023 copyright. All right Reserved ")])],-1)));function x(e,t,l,o,s,n){const x=(0,a.up)("banner"),_=(0,a.up)("contactform"),q=(0,a.up)("googlemaps"),W=(0,a.up)("logoimageblack"),Z=(0,a.up)("infinityabout"),V=(0,a.up)("contactdetail"),k=(0,a.up)("expertservice"),z=(0,a.up)("quicklink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(x),(0,a._)("div",i,[(0,a._)("div",r,[u,c,(0,a.Wm)(_)]),m,(0,a._)("div",d,[(0,a.Wm)(q)]),p]),(0,a.Wm)(W),(0,a._)("div",g,[(0,a._)("div",h,[(0,a._)("div",y,[(0,a.Wm)(Z,{lorem:o.lorem},null,8,["lorem"])]),(0,a._)("div",f,[(0,a.Wm)(V)]),(0,a._)("div",b,[(0,a.Wm)(k)]),(0,a._)("div",w,[(0,a.Wm)(z)])]),v])],64)}const _={class:"contactusform q-pa-md",style:{"max-width":"400px",margin:"auto"}};function q(e,t,l,o,s,n){const i=(0,a.up)("q-input"),r=(0,a.up)("q-btn"),u=(0,a.up)("q-form");return(0,a.wg)(),(0,a.iD)("div",_,[(0,a.Wm)(u,{onSubmit:o.onSubmit,onReset:o.onReset,name:"myForm",class:"q-gutter-md",method:"post"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{filled:"",modelValue:s.post.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.post.name=e),label:"Full Name",hint:"Name and surname","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,a.Wm)(i,{filled:"",modelValue:s.post.email,"onUpdate:modelValue":t[1]||(t[1]=e=>s.post.email=e),label:"Enter Your Email address*","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please Type Your Email",e=>n.isValidEmail(e)||"Please type Valid email address"],hint:"Enter valid email"},null,8,["modelValue","rules"]),(0,a.Wm)(i,{filled:"",modelValue:s.post.age,"onUpdate:modelValue":t[2]||(t[2]=e=>s.post.age=e),label:"Queries",hint:"Post your Queries/Questions","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your queries",e=>n.isValidQuery(e)||"Please type Valid  Query"]},null,8,["modelValue","rules"]),(0,a._)("div",null,[(0,a.Wm)(r,{label:"Submit",type:"submit",color:"primary"}),(0,a.Wm)(r,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])])}var W=l(9302),Z=l(499),V=l(9981),k=l.n(V);const z={name:"contactform",data(){return{post:{name:"",age:"",email:""}}},setup(){const e=(0,W.Z)(),t=(0,Z.iH)(null),l=(0,Z.iH)(null),a=(0,Z.iH)(null);return{async onSubmit(){e.notify({color:"green-4",textColor:"white",message:"Submitted"}),k().post("https://api.infinitybrains.com/public/api/contactdetails",this.post).then((e=>{}))},onReset(){a.value=null,t.value=null,l.value=null}}},methods:{isValidEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"},isValidQuery(e){const t=/^(?=[a-zA-Z0-9@._? %+-]{6,254}$)/;return t.test(e)||"Invalid Query"}},validate(){myForm.value.validate().then((e=>{}))}};var A=l(1639),Q=l(8326),S=l(6611),C=l(4455),D=l(9984),E=l.n(D);const P=(0,A.Z)(z,[["render",q]]),R=P;E()(z,"components",{QForm:Q.Z,QInput:S.Z,QBtn:C.Z});const T={class:"q-ma-lg bg-grey"},U=(0,a._)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29770.10254442054!2d72.74871918482295!3d21.141936627132438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0531d228780f7%3A0x9ff457f426b3269f!2sInfinitybrains!5e0!3m2!1sen!2sin!4v1649050706952!5m2!1sen!2sin",width:"1200",height:"350",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1),H=[U];function I(e,t,l,o,s,n){return(0,a.wg)(),(0,a.iD)("div",T,H)}const j={name:"googlemaps"},N=(0,A.Z)(j,[["render",I]]),F=N;var Y=l(4895),$=l(5294),L=l(5048),O=l(3),B=l(6970);const G={class:"contactusbanner",style:{height:"90vh"}},M={class:"text-center center text-align-center text-h3 text-white text-weight-bold"},J={class:"text-center text-h5 text-white"},K={class:"text-center text-h5 text-white"};function X(e,t,l,o,s,n){return(0,a.wg)(),(0,a.iD)("div",G,[(0,a._)("p",M,(0,B.zw)(o.heading),1),(0,a._)("p",J,(0,B.zw)(o.text1),1),(0,a._)("p",K,(0,B.zw)(o.text2),1)])}const ee={name:"banner",props:{heading:{type:String},text1:{type:String},text2:{type:String}},setup(){return{heading:"CONTACT US",text1:"We always love to hear words from you,",text2:"feeling pride to help you with your"}}},te=(0,A.Z)(ee,[["render",X]]),le=te,ae={components:{banner:le,contactform:R,googlemaps:F,infinityabout:Y.Z,contactdetail:$.Z,expertservice:L.Z,quicklink:O.Z},setup(){return{lorem:"We work  with a variety of industries and global corporations, which is why our Portfolio consists of social media apps, digital marketing sites, and more! As a professional and dynamic company, we aim to provide excellent service to all our clients. A recent project we completed is a Digital Marketing website that contains everything a business website often longs for!Redesigning a website or creating your own app for your product everything will be done personalized. We value honesty, impartiality, and candor, with our partners, and our valuable customers. Life is too short to bother; Let’s have fun and learn. We do our best to be proud of our work!"}}},oe=(0,A.Z)(ae,[["render",x],["__scopeId","data-v-45a96624"]]),se=oe},5418:(e,t,l)=>{e.exports=l.p+"img/ContactUs.2c077b62.jpg"}}]);