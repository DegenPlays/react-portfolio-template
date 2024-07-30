(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{54937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[id]",function(){return n(56399)}])},96420:function(e,t,n){"use strict";var r=n(85893),s=(n(67294),n(25542)),i=n(82010),a=n(69954);t.Z=function(e){var t=e.className,n=(0,i.F)().theme;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"flex justify-center mt-5",children:(0,r.jsx)("h1",{className:"text-2xl text-bold",children:"Join the community"})}),(0,r.jsx)("div",{className:"".concat(t," flex flex-wrap mob:flex-nowrap link  "),children:a.socials.map((function(e,t){return(0,r.jsx)(s.Z,{classes:"".concat("dark"===n?"bg-white text-black hover:bg-slate-600":"bg-black text-white hover:bg-slate-100"),onClick:function(){return window.open(e.link)},children:e.title},t)}))})]})}},56399:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j}});var r=n(34051),s=n.n(r),i=n(85893),a=n(11163),c=n(67294),o=n(82010),l=n(42665),u=n(25542),d=n(69954),m=n(29617),x=n(96420),h=n(9008),f=n.n(h);function p(e,t,n,r,s,i,a){try{var c=e[i](a),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,s)}var j=!0;t.default=function(e){var t=e.project,n=(0,o.F)().theme,r=(0,a.useRouter)(),h=(r.query.id,d),j=(0,c.useState)(""),v=j[0],g=j[1],y=(0,c.useState)(""),N=y[0],b=y[1],S=(0,c.useState)(""),w=S[0],_=S[1],T=(0,c.useState)(""),k=T[0],E=T[1];if((0,c.useEffect)((function(){t&&(E(t.title),console.log("Set projectName to: ".concat(t.title)))}),[t]),!t)return(0,i.jsx)("p",{children:"Loading..."});var P=function(){var e,t=(e=s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("PRESSED SUBMIT"),console.log("Sending email: ".concat(N," for project: ").concat(k)),e.prev=3,e.next=6,fetch("https://us-central1-phrasal-faculty-429817-m5.cloudfunctions.net/EMAIL-TO-SHEETS",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:v,email:N,projectName:k})});case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,console.log("Response received:",r),"success"===r.status?(_("Thank you! We have received your email: ".concat(N)),b(""),g("")):_("Something went wrong. Please try again."),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error("Error:",e.t0),_("Something went wrong. Please try again.");case 18:case"end":return e.stop()}}),e,null,[[3,14]])})),function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function a(e){p(i,r,s,a,c,"next",e)}function c(e){p(i,r,s,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,i.jsxs)("div",{className:"relative ".concat(h.showCursor&&"cursor-none"),children:[h.showCursor&&(0,i.jsx)(m.Z,{}),(0,i.jsx)(f(),{children:(0,i.jsx)("title",{children:h.name})}),(0,i.jsx)("div",{className:"gradient-circle"}),(0,i.jsx)("div",{className:"gradient-circle-bottom"}),(0,i.jsx)("div",{className:"container mx-auto mb-10",children:(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{handleWorkScroll:function(){r.push("/#opportunities")},handleAboutScroll:function(){r.push("/#about")}}),(0,i.jsx)("div",{className:"flex justify-center mt-5",children:(0,i.jsx)(x.Z,{className:"mt-2 laptop:mt-5"})}),t.titleImage?(0,i.jsx)("div",{className:"relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto",style:{height:"50px",width:"200px"},children:(0,i.jsx)("img",{alt:t.title,className:"h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300",src:t.titleImage,style:{maxHeight:"100%",maxWidth:"100%",objectFit:"contain"}})}):(0,i.jsx)("h1",{className:"mt-5 text-3xl font-medium",children:t.title?t.title:"Project Name"}),(0,i.jsx)("h2",{className:"text-xl opacity-50",dangerouslySetInnerHTML:{__html:t.description?t.description.replace(/\n/g,"<br />"):"Description"}}),(0,i.jsx)("div",{className:"flex justify-center mt-5",children:t.imageSrc&&(0,i.jsx)("img",{src:t.imageSrc,alt:t.title})}),t.videoText&&(0,i.jsx)("h2",{className:"flex justify-center text-xl opacity-50",dangerouslySetInnerHTML:{__html:t.videoText?t.videoText.replace(/\n/g,"<br />"):"Description"}}),(0,i.jsx)("div",{className:"flex justify-center mt-5",children:t.videoSrc&&(0,i.jsx)("iframe",{src:t.videoSrc,title:"Project Video",width:"600",height:"400"})}),t.projectVideoText&&(0,i.jsx)("h2",{className:"flex justify-center text-xl opacity-50",dangerouslySetInnerHTML:{__html:t.projectVideoText?t.projectVideoText.replace(/\n/g,"<br />"):"Description"}}),(0,i.jsx)("div",{className:"flex justify-center mt-5",children:t.projectVideoSrc&&(0,i.jsx)("iframe",{src:t.projectVideoSrc,title:"Project Video",width:"600",height:"400"})}),t.pageBottomText&&(0,i.jsx)("h2",{className:"text-xl opacity-50",dangerouslySetInnerHTML:{__html:t.pageBottomText?t.pageBottomText.replace(/\n/g,"<br />"):"Description"}}),(0,i.jsx)("div",{className:"flex justify-center mt-5",children:(0,i.jsx)(u.Z,{classes:"".concat("dark"===n?"bg-slate-900":"bg-slate-100"),onClick:function(){return window.open(t.url)},children:t.buttonText})}),(0,i.jsx)("div",{className:"flex justify-center mt-5",children:(0,i.jsx)("h2",{children:"Or Submit your name and email for more information"})}),(0,i.jsx)("div",{className:"flex justify-center mt-10",children:(0,i.jsxs)("form",{onSubmit:P,className:"flex flex-col items-center",children:[(0,i.jsx)("input",{type:"string",value:v,onChange:function(e){return g(e.target.value)},placeholder:"Enter your name",className:"p-2 border rounded mb-2",required:!0}),(0,i.jsx)("input",{type:"email",value:N,onChange:function(e){return b(e.target.value)},placeholder:"Enter your email",className:"p-2 border rounded mb-2",required:!0}),(0,i.jsx)(u.Z,{type:"submit",classes:"".concat("dark"===n?"bg-slate-900":"bg-slate-100"),children:"Submit"})]})}),w&&(0,i.jsx)("div",{className:"flex justify-center mt-5",children:(0,i.jsx)("h1",{className:"text-green-500",children:w})})]})})]})}},9008:function(e,t,n){e.exports=n(83121)}},function(e){e.O(0,[802,144,835,774,888,179],(function(){return t=54937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);