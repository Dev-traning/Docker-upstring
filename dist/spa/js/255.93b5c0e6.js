(globalThis["webpackChunkinfinity_brains"]=globalThis["webpackChunkinfinity_brains"]||[]).push([[255],{7282:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>X});var n=l(9835),a=l(5418),o=l.n(a);const i={class:"row justify-evenly"},s={class:"col-md-6 col-sm-12 col-xs-12 center contactusformdiv",style:{"padding-top":"70px"}},r=(0,n._)("p",{class:"text-h4 text-indigo-7 text-center"},"GET IN TOUCH",-1),u=(0,n._)("p",{class:"text-indigo-7 text-center"}," Do You Have questions/queries, feel free to contact us Use the below form to contact us ",-1),m=(0,n._)("div",{class:"col-md-6 col-sm-12 col-xs-12 center",style:{"padding-top":"50px"}},[(0,n._)("img",{src:o(),style:{width:"80%",height:"500px"}})],-1),c={class:"row",style:{margin:"auto"}},d=(0,n._)("div",{class:"black-space-blue bg-indigo-8 q-mt-lg q-mb-md q-h-12"},null,-1),p={class:"row bg-indigo-8 justify-evenly"},g=(0,n._)("div",{class:"text-center text-white q-mt-md"},[(0,n._)("p",null,"2022 copyright. All right Reserved")],-1);function h(e,t,l,a,o,h){const y=(0,n.up)("banner"),b=(0,n.up)("contactform"),f=(0,n.up)("googlemaps"),w=(0,n.up)("logoimageblack"),v=(0,n.up)("infinityabout"),x=(0,n.up)("contactdetail"),_=(0,n.up)("expertservice"),W=(0,n.up)("quicklink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(y),(0,n._)("div",i,[(0,n._)("div",s,[r,u,(0,n.Wm)(b)]),m,(0,n._)("div",c,[(0,n.Wm)(f)]),d,(0,n.Wm)(w),(0,n._)("div",p,[(0,n.Wm)(v,{lorem:a.lorem},null,8,["lorem"]),(0,n.Wm)(x),(0,n.Wm)(_),(0,n.Wm)(W),g])])],64)}const y={class:"contactusform q-pa-md",style:{"max-width":"400px",margin:"auto"}};function b(e,t,l,a,o,i){const s=(0,n.up)("q-input"),r=(0,n.up)("q-btn"),u=(0,n.up)("q-form");return(0,n.wg)(),(0,n.iD)("div",y,[(0,n.Wm)(u,{onSubmit:a.onSubmit,onReset:a.onReset,name:"myForm",class:"q-gutter-md",method:"post"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{filled:"",modelValue:o.post.name,"onUpdate:modelValue":t[0]||(t[0]=e=>o.post.name=e),label:"Full Name",hint:"Name and surname","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,n.Wm)(s,{filled:"",modelValue:o.post.email,"onUpdate:modelValue":t[1]||(t[1]=e=>o.post.email=e),label:"Enter Your Email address*","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please Type Your Email",e=>i.isValidEmail(e)||"Please type Valid email address"],hint:"Enter valid email"},null,8,["modelValue","rules"]),(0,n.Wm)(s,{filled:"",modelValue:o.post.age,"onUpdate:modelValue":t[2]||(t[2]=e=>o.post.age=e),label:"Queries",hint:"Post your Queries/Questions","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your queries",e=>i.isValidQuery(e)||"Please type Valid  Query"]},null,8,["modelValue","rules"]),(0,n._)("div",null,[(0,n.Wm)(r,{label:"Submit",type:"submit",color:"primary"}),(0,n.Wm)(r,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])])}var f=l(9302),w=l(499),v=l(9981),x=l.n(v);const _={name:"contactform",data(){return{post:{name:"",age:"",email:""}}},setup(){const e=(0,f.Z)(),t=(0,w.iH)(null),l=(0,w.iH)(null),n=(0,w.iH)(null);return{async onSubmit(){e.notify({color:"green-4",textColor:"white",message:"Submitted"}),x().post("https://uatapi.infinitybrains.com/public/api/contactdetails",this.post).then((e=>{}))},onReset(){n.value=null,t.value=null,l.value=null}}},methods:{isValidEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"},isValidQuery(e){const t=/^(?=[a-zA-Z0-9@._? %+-]{6,254}$)/;return t.test(e)||"Invalid Query"}},validate(){myForm.value.validate().then((e=>{}))}};var W=l(1639),Z=l(8326),q=l(6611),V=l(4455),k=l(9984),z=l.n(k);const A=(0,W.Z)(_,[["render",b]]),Q=A;z()(_,"components",{QForm:Z.Z,QInput:q.Z,QBtn:V.Z});const S={class:"q-ma-lg bg-grey"},C=(0,n._)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29770.10254442054!2d72.74871918482295!3d21.141936627132438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0531d228780f7%3A0x9ff457f426b3269f!2sInfinitybrains!5e0!3m2!1sen!2sin!4v1649050706952!5m2!1sen!2sin",width:"1200",height:"350",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1),E=[C];function P(e,t,l,a,o,i){return(0,n.wg)(),(0,n.iD)("div",S,E)}const R={name:"googlemaps"},T=(0,W.Z)(R,[["render",P]]),U=T;var D=l(6978),H=l(4895),I=l(788),j=l(6425),F=l(6970);const N={class:"contactusbanner",style:{height:"90vh"}},Y={class:"text-center center text-align-center text-h3 text-white text-weight-bold"},$={class:"text-center text-h5 text-white"},L={class:"text-center text-h5 text-white"};function O(e,t,l,a,o,i){return(0,n.wg)(),(0,n.iD)("div",N,[(0,n._)("p",Y,(0,F.zw)(a.heading),1),(0,n._)("p",$,(0,F.zw)(a.text1),1),(0,n._)("p",L,(0,F.zw)(a.text2),1)])}const B={name:"banner",props:{heading:{type:String},text1:{type:String},text2:{type:String}},setup(){return{heading:"CONTACT US",text1:"We always love to hear words from you,",text2:"feeling pride to help you with your"}}},G=(0,W.Z)(B,[["render",O]]),M=G,J={components:{banner:M,contactform:Q,googlemaps:U,infinityabout:D.Z,contactdetail:H.Z,expertservice:I.Z,quicklink:j.Z},setup(){return{lorem:"We work  with a variety of industries and global corporations, which is why our Portfolio consists of social media apps, digital marketing sites, and more! As a professional and dynamic company, we aim to provide excellent service to all our clients. A recent project we completed is a Digital Marketing website that contains everything a business website often longs for!Redesigning a website or creating your own app for your product everything will be done personalized. We value honesty, impartiality, and candor, with our partners, and our valuable customers. Life is too short to bother; Let’s have fun and learn. We do our best to be proud of our work!"}}},K=(0,W.Z)(J,[["render",h]]),X=K},5418:(e,t,l)=>{e.exports=l.p+"img/ContactUs.2c077b62.jpg"}}]);