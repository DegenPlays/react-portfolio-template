(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{52234:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit",function(){return s(94258)}])},94258:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var r,a=s(85893),l=s(67294),n=(s(11163),s(25542)),i=s(42665),c=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(c)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(e){return"string"===typeof e&&d.test(e)},u=[],x=0;x<256;++x)u.push((x+256).toString(16).substr(1));var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!m(s))throw TypeError("Stringified UUID is invalid");return s};var p=function(e,t,s){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){s=s||0;for(var a=0;a<16;++a)t[s+a]=r[a];return t}return h(r)},f=s(82010),g=s(69954),j=s(29617);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}function w(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},r=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(t){w(e,t,s[t])}))}return e}function N(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(){var e=(0,l.useState)(g),t=e[0],s=e[1],r=(0,l.useState)("HEADER"),c=r[0],o=r[1],d=((0,f.F)().theme,function(e,r){var a=t.projects;a[e]=y({},r),s(y({},t,{projects:a}))}),m=function(e,r){var a=t.tools;a[e]=y({},r),s(y({},t,{tools:a}))},u=function(e,r){var a=t.services;a[e]=y({},r),s(y({},t,{services:a}))},x=function(e,r){var a=t.socials;a[e]=y({},r),s(y({},t,{socials:a}))},h=function(e,r){var a=t.resume.experiences;a[e]=y({},r),s(y({},t,{resume:y({},t.resume,{experiences:a})}))};return(0,a.jsxs)("div",{className:"container mx-auto ".concat(t.showCursor&&"cursor-none"),children:[(0,a.jsx)(i.Z,{isBlog:!0}),t.showCursor&&(0,a.jsx)(j.Z,{}),(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsxs)("div",{className:"bg-transparent",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h1",{className:"text-4xl",children:"Dashboard"}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(n.Z,{onClick:function(){alert("This thing only works in development mode.")},type:"primary",children:"Save"})})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(n.Z,{onClick:function(){return o("HEADER")},type:"HEADER"===c&&"primary",children:"Header"}),(0,a.jsx)(n.Z,{onClick:function(){return o("PROJECTS")},type:"PROJECTS"===c&&"primary",children:"Projects"}),(0,a.jsx)(n.Z,{onClick:function(){return o("TOOLS")},type:"TOOLS"===c&&"primary",children:"Tools"}),(0,a.jsx)(n.Z,{onClick:function(){return o("SERVICES")},type:"SERVICES"===c&&"primary",children:"Services"}),(0,a.jsx)(n.Z,{onClick:function(){return o("ABOUT")},type:"ABOUT"===c&&"primary",children:"About"}),(0,a.jsx)(n.Z,{onClick:function(){return o("SOCIAL")},type:"SOCIAL"===c&&"primary",children:"Social"}),(0,a.jsx)(n.Z,{onClick:function(){return o("RESUME")},type:"RESUME"===c&&"primary",children:"Resume"})]})]}),"HEADER"===c&&(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Name"}),(0,a.jsx)("input",{value:t.name,onChange:function(e){return s(y({},t,{name:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-sx opacity-50",children:"Header Tagline One"}),(0,a.jsx)("input",{value:t.headerTaglineOne,onChange:function(e){return s(y({},t,{headerTaglineOne:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Header Tagline Two"}),(0,a.jsx)("input",{value:t.headerTaglineTwo,onChange:function(e){return s(y({},t,{headerTaglineTwo:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Header Tagline Three"}),(0,a.jsx)("input",{value:t.headerTaglineThree,onChange:function(e){return s(y({},t,{headerTaglineThree:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Header Tagline Four"}),(0,a.jsx)("input",{value:t.headerTaglineFour,onChange:function(e){return s(y({},t,{headerTaglineFour:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Blog"}),(0,a.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showBlog:!0}))},type:t.showBlog&&"primary",children:"Yes"}),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showBlog:!1}))},classes:!t.showBlog&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Dark Mode"}),(0,a.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{darkMode:!0}))},type:t.darkMode&&"primary",children:"Yes"}),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{darkMode:!1}))},classes:!t.darkMode&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Show Resume"}),(0,a.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showResume:!0}))},type:t.showResume&&"primary",children:"Yes"}),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showResume:!1}))},classes:!t.showResume&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Show Contact"}),(0,a.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showContact:!0}))},type:t.showContact&&"primary",children:"Yes"}),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showContact:!1}))},classes:!t.showContact&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Show About"}),(0,a.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showAbout:!0}))},type:t.showAbout&&"primary",children:"Yes"}),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showAbout:!1}))},classes:!t.showAbout&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Custom Cursor"}),(0,a.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showCursor:!0}))},type:t.showCursor&&"primary",children:"Yes"}),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{showCursor:!1}))},classes:!t.showCursor&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]})]}),"PROJECTS"===c&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mt-10",children:t.projects.map((function(e,r){return(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h1",{className:"text-2xl",children:e.title}),(0,a.jsx)(n.Z,{onClick:function(){return function(e){var r=t.projects;r=r.filter((function(t){return t.id!==e})),s(y({},t,{projects:r}))}(e.id)},type:"primary",children:"Delete"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Id"}),(0,a.jsx)("input",{value:e.id,onChange:function(t){return d(r,y({},e,{id:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title"}),(0,a.jsx)("input",{value:e.title,onChange:function(t){return d(r,y({},e,{title:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title Image"}),(0,a.jsx)("input",{value:e.titleImage,onChange:function(t){return d(r,y({},e,{titleImage:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Description"}),(0,a.jsx)("input",{value:e.description,onChange:function(t){return d(r,y({},e,{description:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Image Source"}),(0,a.jsx)("input",{value:e.imageSrc,onChange:function(t){return d(r,y({},e,{imageSrc:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Video Text"}),(0,a.jsx)("input",{value:e.videoText,onChange:function(t){return d(r,y({},e,{videoText:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Video Source"}),(0,a.jsx)("input",{value:e.videoSrc,onChange:function(t){return d(r,y({},e,{videoSrc:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Project Page URL"}),(0,a.jsx)("input",{value:e.projectUrl,onChange:function(t){return d(r,y({},e,{projectUrl:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Project Video Text"}),(0,a.jsx)("input",{value:e.projectVideoText,onChange:function(t){return d(r,y({},e,{projectVideoText:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Project Video Source"}),(0,a.jsx)("input",{value:e.projectVideoSrc,onChange:function(t){return d(r,y({},e,{projectVideoSrc:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Button desciption"}),(0,a.jsx)("input",{value:e.pageBottomText,onChange:function(t){return d(r,y({},e,{pageBottomText:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Button URL"}),(0,a.jsx)("input",{value:e.url,onChange:function(t){return d(r,y({},e,{url:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Button Text"}),(0,a.jsx)("input",{value:e.buttonText,onChange:function(t){return d(r,y({},e,{buttonText:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsx)("hr",{className:"my-10"})]},e.id)}))}),(0,a.jsx)("div",{className:"my-10",children:(0,a.jsx)(n.Z,{onClick:function(){var e=t.projects.map((function(e){return e.id}));e.sort((function(e,t){return e-t}));for(var r=0,a=0;a<e.length;a++)if(e[a]!==a){r=a;break}r===e.length&&(r=e.length),s(y({},t,{projects:N(t.projects).concat([{id:r,title:"New Project",description:"Web Design & Development",imageSrc:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",videoText:"",videoSrc:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",projectUrl:"http://chetanverma.com/projects/"+p(),url:"http://chetanverma.com/",buttonText:"join",projectVideoText:"",projectVideoSrc:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",pageBottomText:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60"}])}))},type:"primary",children:"Add Project +"})})]}),"TOOLS"===c&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mt-10",children:t.tools.map((function(e,r){return(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h1",{className:"text-2xl",children:e.title}),(0,a.jsx)(n.Z,{onClick:function(){return function(e){var r=t.tools;r=r.filter((function(t){return t.id!==e})),s(y({},t,{tools:r}))}(e.id)},type:"primary",children:"Delete"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Id"}),(0,a.jsx)("input",{value:e.id,onChange:function(t){return m(r,y({},e,{id:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"number"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title"}),(0,a.jsx)("input",{value:e.title,onChange:function(t){return m(r,y({},e,{title:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title Image"}),(0,a.jsx)("input",{value:e.titleImage,onChange:function(t){return m(r,y({},e,{titleImage:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Description"}),(0,a.jsx)("input",{value:e.description,onChange:function(t){return m(r,y({},e,{description:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Image Source"}),(0,a.jsx)("input",{value:e.imageSrc,onChange:function(t){return m(r,y({},e,{imageSrc:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Video Text"}),(0,a.jsx)("input",{value:e.videoText,onChange:function(t){return m(r,y({},e,{videoText:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Video Source"}),(0,a.jsx)("input",{value:e.videoSrc,onChange:function(t){return m(r,y({},e,{videoSrc:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Tool Page URL"}),(0,a.jsx)("input",{value:e.toolUrl,onChange:function(t){return m(r,y({},e,{toolUrl:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Tool Video Text"}),(0,a.jsx)("input",{value:e.toolVideoText,onChange:function(t){return m(r,y({},e,{toolVideoText:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Tool Video Source"}),(0,a.jsx)("input",{value:e.toolVideoSrc,onChange:function(t){return m(r,y({},e,{toolVideoSrc:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Button desciption"}),(0,a.jsx)("input",{value:e.pageBottomText,onChange:function(t){return m(r,y({},e,{pageBottomText:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Button URL"}),(0,a.jsx)("input",{value:e.url,onChange:function(t){return m(r,y({},e,{url:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Button Text"}),(0,a.jsx)("input",{value:e.buttonText,onChange:function(t){return m(r,y({},e,{buttonText:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsx)("hr",{className:"my-10"})]},e.id)}))}),(0,a.jsx)("div",{className:"my-10",children:(0,a.jsx)(n.Z,{onClick:function(){var e=t.tools.map((function(e){return e.id}));e.sort((function(e,t){return e-t}));for(var r=0,a=0;a<e.length;a++)if(e[a]!==a){r=a;break}r===e.length&&(r=e.length),s(y({},t,{tools:N(t.tools).concat([{id:r,title:"New tool",description:"Web Design & Development",imageSrc:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",videoText:"",videoSrc:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",toolUrl:"http://chetanverma.com/projects/"+p(),url:"http://chetanverma.com/",buttonText:"join",toolVideoText:"",toolVideoSrc:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",pageBottomText:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60"}])}))},type:"primary",children:"Add Tool +"})})]}),"SERVICES"===c&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mt-10",children:t.services.map((function(e,r){return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h1",{className:"text-2xl",children:e.title}),(0,a.jsx)(n.Z,{onClick:function(){return function(e){var r=t.services;r=r.filter((function(t){return t.id!==e})),s(y({},t,{services:r}))}(e.id)},type:"primary",children:"Delete"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title"}),(0,a.jsx)("input",{value:e.title,onChange:function(t){return u(r,y({},e,{title:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Description"}),(0,a.jsx)("textarea",{value:e.description,onChange:function(t){return u(r,y({},e,{description:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"})]}),(0,a.jsx)("hr",{className:"my-10"})]},e.id)}))}),(0,a.jsx)("div",{className:"my-10",children:(0,a.jsx)(n.Z,{onClick:function(){s(y({},t,{services:N(t.services).concat([{id:p(),title:"New Service",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}])}))},type:"primary",children:"Add Service +"})})]}),"ABOUT"===c&&(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("h1",{className:"text-2xl",children:"About"}),(0,a.jsx)("textarea",{className:"w-full h-96 mt-10 p-2 rounded-md shadow-md border",value:t.aboutpara,onChange:function(e){return s(y({},t,{aboutpara:e.target.value}))}})]}),"SOCIAL"===c&&(0,a.jsxs)("div",{className:"mt-10",children:[t.socials.map((function(e,r){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h1",{className:"text-2xl",children:e.title}),(0,a.jsx)(n.Z,{onClick:function(){return function(e){var r=t.socials;r=r.filter((function(t){return t.id!==e})),s(y({},t,{socials:r}))}(e.id)},type:"primary",children:"Delete"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title"}),(0,a.jsx)("input",{value:e.title,onChange:function(t){return x(r,y({},e,{title:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Link"}),(0,a.jsx)("input",{value:e.link,onChange:function(t){return x(r,y({},e,{link:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsx)("hr",{className:"my-10"})]},e.id)})})),(0,a.jsx)("div",{className:"my-10",children:(0,a.jsx)(n.Z,{onClick:function(){s(y({},t,{socials:N(t.socials).concat([{id:p(),title:"New Link",link:"www.chetanverma.com"}])}))},type:"primary",children:"Add Social +"})})]}),"RESUME"===c&&(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("h1",{children:"Main"}),(0,a.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,a.jsx)("label",{className:"w-1/5 text-sx opacity-50",children:"Tagline"}),(0,a.jsx)("input",{value:t.resume.tagline,onChange:function(e){return s(y({},t,{resume:y({},t.resume,{tagline:e.target.value})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Description"}),(0,a.jsx)("textarea",{value:t.resume.description,onChange:function(e){return s(y({},t,{resume:y({},t.resume,{description:e.target.value})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"})]}),(0,a.jsx)("hr",{className:"my-10"}),(0,a.jsx)("h1",{children:"Experiences"}),(0,a.jsx)("div",{className:"mt-10",children:t.resume.experiences.map((function(e,t){return(0,a.jsxs)("div",{className:"mt-5",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h1",{className:"text-2xl",children:e.position}),(0,a.jsx)(n.Z,{type:"primary",children:"Delete"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Dates"}),(0,a.jsx)("input",{value:e.dates,onChange:function(s){return h(t,y({},e,{dates:s.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Type"}),(0,a.jsx)("input",{value:e.type,onChange:function(s){return h(t,y({},e,{type:s.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-2",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Position"}),(0,a.jsx)("input",{value:e.position,onChange:function(s){return h(t,y({},e,{position:s.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-2 flex",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Bullets"}),(0,a.jsx)("div",{className:"w-4/5 ml-10 flex flex-col",children:(0,a.jsx)("input",{value:e.bullets,onChange:function(s){return h(t,y({},e,{bullets:s.target.value}))},placeholder:"Bullet One, Bullet Two, Bullet Three",className:"p-2 rounded-md shadow-lg border-2",type:"text"})})]})]},e.id)}))}),(0,a.jsx)("div",{className:"my-10",children:(0,a.jsx)(n.Z,{onClick:function(){s(y({},t,{resume:y({},t.resume,{experiences:N(t.resume.experiences).concat([{id:p(),dates:"Enter Dates",type:"Full Time",position:"Frontend Engineer at X",bullets:["Worked on the frontend of a React application"]}])})}))},type:"primary",children:"Add Experience +"})}),(0,a.jsx)("hr",{className:"my-10"}),(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("h1",{children:"Education"}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Name"}),(0,a.jsx)("input",{value:t.resume.education.universityName,onChange:function(e){return s(y({},t,{resume:y({},t.resume,{education:y({},t.resume.education,{universityName:e.target.value})})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Dates"}),(0,a.jsx)("input",{value:t.resume.education.universityDate,onChange:function(e){return s(y({},t,{resume:y({},t.resume,{education:y({},t.resume.education,{universityDate:e.target.value})})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"flex items-center mt-5",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Detail"}),(0,a.jsx)("input",{value:t.resume.education.universityPara,onChange:function(e){return s(y({},t,{resume:y({},t.resume,{education:y({},t.resume.education,{universityPara:e.target.value})})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]})]}),(0,a.jsx)("hr",{className:"my-10"}),(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Languages"}),(0,a.jsxs)("div",{className:"w-4/5 ml-10 flex flex-col",children:[t.resume.languages.map((function(e,r){return(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("input",{value:e,onChange:function(e){s(y({},t,{resume:y({},t.resume,{languages:N(t.resume.languages.slice(0,r)).concat([e.target.value],N(t.resume.languages.slice(r+1)))})}))},className:"w-full p-2 rounded-md shadow-lg border-2",type:"text"}),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{resume:y({},t.resume,{languages:t.resume.languages.filter((function(e,t){return r!==t}))})}))},children:"Remove"})]},r)})),(0,a.jsx)(n.Z,{type:"primary",classes:"hover:scale-100",onClick:function(){return s(y({},t,{resume:y({},t.resume,{languages:N(t.resume.languages).concat(["Added"])})}))},children:"Add +"})]})]}),(0,a.jsx)("hr",{className:"my-10"}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Frameworks"}),(0,a.jsxs)("div",{className:"w-4/5 ml-10 flex flex-col",children:[t.resume.frameworks.map((function(e,r){return(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("input",{value:e,onChange:function(e){s(y({},t,{resume:y({},t.resume,{frameworks:N(t.resume.frameworks.slice(0,r)).concat([e.target.value],N(t.resume.frameworks.slice(r+1)))})}))},className:"w-full p-2 rounded-md shadow-lg border-2",type:"text"}),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{resume:y({},t.resume,{frameworks:t.resume.frameworks.filter((function(e,t){return r!==t}))})}))},children:"Remove"})]},r)})),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{resume:y({},t.resume,{frameworks:N(t.resume.frameworks).concat(["Added"])})}))},type:"primary",classes:"hover:scale-100",children:"Add +"})]})]}),(0,a.jsx)("hr",{className:"my-10"}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Others"}),(0,a.jsxs)("div",{className:"w-4/5 ml-10 flex flex-col",children:[t.resume.others.map((function(e,r){return(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("input",{value:e,onChange:function(e){s(y({},t,{resume:y({},t.resume,{others:N(t.resume.others.slice(0,r)).concat([e.target.value],N(t.resume.others.slice(r+1)))})}))},className:"w-full p-2 rounded-md shadow-lg border-2",type:"text"}),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{resume:y({},t.resume,{others:t.resume.others.filter((function(e,t){return r!==t}))})}))},children:"Remove"})]},r)})),(0,a.jsx)(n.Z,{onClick:function(){return s(y({},t,{resume:y({},t.resume,{others:N(t.resume.others).concat(["Added"])})}))},type:"primary",classes:"hover:scale-100",children:"Add +"})]})]})]})]})]})]})}}},function(e){e.O(0,[802,144,835,774,888,179],(function(){return t=52234,e(e.s=t);var t}));var t=e.O();_N_E=t}]);