"use strict";(globalThis["webpackChunkinfinity_brains"]=globalThis["webpackChunkinfinity_brains"]||[]).push([[450],{1450:(t,s,e)=>{e.r(s),e.d(s,{default:()=>f});var a=e(9835),i=e(6970);const o={class:"text-center mont-font"},r={class:"form-signin"},u={class:"card w-100 shadow-sm rounded border-0 mb-3"},n={key:0,class:"alert alert-success",role:"alert"},m=(0,a.uE)('<h1 class="text-success fw-600 text-danger-600 font-xl" style="color:#00a00b!important;" data-v-0f4f18f1> Your Payment Was Successful ! </h1><p class="pl-5 pr-5 ml-5 mr-5 fw-300 text-danger-300 font-xssss mb-4" data-v-0f4f18f1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam eligendi laudantium numquam itaque! Asperiores ex soluta quaerat, reiciendis ab autem modi voluptates odio cum. Rem atque ab quam aliquid, possimus non eius nisi ullam aliquam, est molestiae voluptate voluptatibus vitae fuga, et commodi tenetur ipsum culpa! Accusamus impedit earum consequuntur a nisi laborum nobis laudantium nulla fuga vel, eni! </p><a href="/" style="margin-bottom:6rem !important;" class="text-dark font-xsss fw-600" data-v-0f4f18f1><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" data-v-0f4f18f1><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" data-v-0f4f18f1></path></svg> Go to Home</a>',3);function l(t,s,e,l,c,d){const p=(0,a.up)("b-img");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("body",o,[(0,a._)("main",r,[(0,a._)("div",u,[c.errormas?((0,a.wg)(),(0,a.iD)("div",n,(0,i.zw)(c.errormas),1)):(0,a.kq)("",!0),(0,a.Wm)(p,{style:{height:"111px",width:"auto","margin-top":"6rem !important","margin-bottom":"2rem !important"},center:"",src:"../../assets/paymentsuses.png",alt:"Center image"}),m])])])])}e(9665);var c=e(9981),d=e.n(c);const p={Name:"success",data(){return{amount_pay:"534",products:"9",coupon_code:"123",sgst:"26.7",cgst:"26.7",discount:"10",id:"8",user_id:"36",errormas:"",errormasss:""}},methods:{},mounted(){this.id=this.$route.params.id,this.user_id=this.$route.params.user_id,this.cegst=this.$route.params.cgst,this.segst=this.$route.params.sgst,this.discount=this.$route.params.discount,this.amount=this.$route.params.amount_pay,console.log("hello",this.cgst,this.amount),this.subscribe=JSON.parse(localStorage.getItem("copondetails")),this.subscribe?this.coupon_code=this.text:this.coupon_code="",d().post("https://uatapi.infinitybrains.com/public/api/paymentstatusupdate",{user_id:this.user_id,payment_status:"1",product_id:this.id,cgst:this.cegst,sgst:this.sgst,discount:this.discount,amount:this.amount}).then((t=>{console.log(t.data)})),localStorage.getItem("expireSession")?setTimeout((()=>{localStorage.removeItem("expireSession")}),1e4):localStorage.getItem("expireSession")||this.$router.push("/")}};var h=e(1639);const g=(0,h.Z)(p,[["render",l],["__scopeId","data-v-0f4f18f1"]]),f=g}}]);