(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{61429:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return t(7382)}])},96420:function(e,s,t){"use strict";var l=t(85893),r=(t(67294),t(25542)),n=t(82010),a=t(69954);s.Z=function(e){var s=e.className,t=(0,n.F)().theme;return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"flex justify-center mt-5",children:(0,l.jsx)("h1",{className:"text-2xl text-bold",children:"Join the community"})}),(0,l.jsx)("div",{className:"".concat(s," flex flex-wrap mob:flex-nowrap link  "),children:a.socials.map((function(e,s){return(0,l.jsx)(r.Z,{classes:"".concat("dark"===t?"bg-white text-black hover:bg-slate-600":"bg-black text-white hover:bg-slate-100"),onClick:function(){return window.open(e.link)},children:e.title},s)}))})]})}},7382:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var l=t(85893),r=t(67294),n=t(11163),a=t(29617),i=t(42665);function c(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,l=new Array(s);t<s;t++)l[t]=e[t];return l}function o(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var l,r,n=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(l=t.next()).done)&&(n.push(l.value),!s||n.length!==s);a=!0);}catch(c){i=!0,r=c}finally{try{a||null==t.return||t.return()}finally{if(i)throw r}}return n}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return c(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(e){var s=e.dates,t=e.type,n=e.position,a=e.bullets,i=o(r.useState(a.split(",")),2),c=i[0];i[1];return(0,l.jsxs)("div",{className:"mt-5 w-full flex mob:flex-col desktop:flex-row justify-between",children:[(0,l.jsxs)("div",{className:"text-lg w-2/5",children:[(0,l.jsx)("h2",{children:s}),(0,l.jsx)("h3",{className:"text-sm opacity-50",children:t})]}),(0,l.jsxs)("div",{className:"w-3/5",children:[(0,l.jsx)("h2",{className:"text-lg font-bold",children:n}),c&&c.length>0&&(0,l.jsx)("ul",{className:"list-disc",children:c.map((function(e,s){return(0,l.jsx)("li",{className:"text-sm my-1 opacity-70",children:e},s)}))})]})]})},u=t(96420),d=(t(25542),t(82010)),x=t(69954),h=function(){var e=(0,n.useRouter)(),s=(0,d.F)(),t=(0,r.useState)(!1),c=t[0],o=t[1];return(0,r.useEffect)((function(){o(!0),x.showResume||e.push("/")}),[]),(0,l.jsxs)(l.Fragment,{children:[!1,x.showCursor&&(0,l.jsx)(a.Z,{}),(0,l.jsxs)("div",{className:"container mx-auto mb-10 ".concat(x.showCursor&&"cursor-none"),children:[(0,l.jsx)(i.Z,{isBlog:!0}),c&&(0,l.jsx)("div",{className:"mt-10 w-full flex flex-col items-center",children:(0,l.jsxs)("div",{className:"w-full ".concat(c&&"dark"===s.theme?"bg-slate-800":"bg-gray-50"," max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm"),children:[(0,l.jsx)("h1",{className:"text-3xl font-bold",children:x.name}),(0,l.jsx)("h2",{className:"text-xl mt-5",children:x.resume.tagline}),(0,l.jsx)("h2",{className:"w-4/5 text-xl mt-5 opacity-50",children:x.resume.description}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)(u.Z,{})}),(0,l.jsxs)("div",{className:"mt-5",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold",children:"Experience"}),x.resume.experiences.map((function(e){var s=e.id,t=e.dates,r=e.type,n=e.position,a=e.bullets;return(0,l.jsx)(m,{dates:t,type:r,position:n,bullets:a},s)}))]}),(0,l.jsxs)("div",{className:"mt-5",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold",children:"Education"}),(0,l.jsxs)("div",{className:"mt-2",children:[(0,l.jsx)("h2",{className:"text-lg",children:x.resume.education.universityName}),(0,l.jsx)("h3",{className:"text-sm opacity-75",children:x.resume.education.universityDate}),(0,l.jsx)("p",{className:"text-sm mt-2 opacity-50",children:x.resume.education.universityPara})]})]}),(0,l.jsxs)("div",{className:"mt-5",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold",children:"Skills"}),(0,l.jsxs)("div",{className:"flex mob:flex-col desktop:flex-row justify-between",children:[x.resume.languages&&(0,l.jsxs)("div",{className:"mt-2 mob:mt-5",children:[(0,l.jsx)("h2",{className:"text-lg",children:"Languages"}),(0,l.jsx)("ul",{className:"list-disc",children:x.resume.languages.map((function(e,s){return(0,l.jsx)("li",{className:"ml-5 py-2",children:e},s)}))})]}),x.resume.frameworks&&(0,l.jsxs)("div",{className:"mt-2 mob:mt-5",children:[(0,l.jsx)("h2",{className:"text-lg",children:"Frameworks"}),(0,l.jsx)("ul",{className:"list-disc",children:x.resume.frameworks.map((function(e,s){return(0,l.jsx)("li",{className:"ml-5 py-2",children:e},s)}))})]}),x.resume.others&&(0,l.jsxs)("div",{className:"mt-2 mob:mt-5",children:[(0,l.jsx)("h2",{className:"text-lg",children:"Others"}),(0,l.jsx)("ul",{className:"list-disc",children:x.resume.others.map((function(e,s){return(0,l.jsx)("li",{className:"ml-5 py-2",children:e},s)}))})]})]})]})]})})]})]})}}},function(e){e.O(0,[802,144,835,774,888,179],(function(){return s=61429,e(e.s=s);var s}));var s=e.O();_N_E=s}]);