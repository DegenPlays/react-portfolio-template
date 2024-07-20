"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{81353:function(e,t,n){n.d(t,{E:function(){return a}});var o=n(10990),s=n(25317);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}var a=function(e,t,n){return o.ZP.fromTo(e,r({opacity:0},t),r({opacity:1},n,{stagger:.2,ease:s.Aq.easeOut}))}},25542:function(e,t,n){var o=n(85893),s=(n(67294),n(82010)),i=n(69954);t.Z=function(e){var t=e.children,n=e.type,r=void 0===n?"button":n,a=e.onClick,c=e.classes,l=(0,s.F)().theme;return"primary"===r?(0,o.jsx)("button",{onClick:a,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("dark"===l?"bg-white text-black":"bg-black text-white","  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ").concat(i.showCursor&&"cursor-none","  ").concat(c),children:t}):(0,o.jsx)("button",{onClick:a,type:r,className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("dark"===l?"hover:bg-slate-600 text-white":"hover:bg-slate-100"," hover:scale-105 active:scale-100  tablet:first:ml-0  ").concat(i.showCursor&&"cursor-none"," ").concat(c," link"),children:t})}},29617:function(e,t,n){var o=n(85893),s=n(67294),i=n(93462),r=(n(40358),n(82010));t.Z=function(){var e=(0,r.F)(),t=(0,s.useState)(),n=t[0],a=t[1];return(0,s.useEffect)((function(){a(!0)}),[]),(0,o.jsx)(o.Fragment,{children:n&&(0,o.jsx)(i.Z,{targets:[".link"],customClass:"custom-cursor",dimensions:30,fill:"dark"===e.theme?"#fff":"light"===e.theme?"#000":void 0,smoothness:{movement:.2,scale:.1,opacity:.2},targetOpacity:.5,targetScale:2})})}},42665:function(e,t,n){var o=n(85893),s=n(2271),i=n(82010),r=n(11163),a=n(67294),c=n(25542),l=n(69954);t.Z=function(e){var t=e.handleWorkScroll,n=e.handleAboutScroll,u=e.isBlog,d=(0,r.useRouter)(),h=(0,i.F)(),m=h.theme,p=h.setTheme,f=(0,a.useState)(!1),g=f[0],b=f[1],w=l.name,y=l.showBlog,k=l.showResume,v=l.showContact,x=l.showAbout;return(0,a.useEffect)((function(){b(!0)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.J,{className:"block tablet:hidden mt-5",children:function(e){var i=e.open;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[(0,o.jsxs)("h1",{onClick:function(){return d.push("/")},className:"font-medium p-2 laptop:p-0 link",children:[w,"."]}),(0,o.jsxs)("div",{className:"flex items-center",children:[l.darkMode&&(0,o.jsx)(c.Z,{onClick:function(){return p("dark"===m?"light":"dark")},children:(0,o.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===m?"moon.svg":"sun.svg")})}),(0,o.jsx)(s.J.Button,{children:(0,o.jsx)("img",{className:"h-5",src:"/images/".concat(i?"light"===m?"cancel.svg":"cancel-white.svg":"dark"===m?"menu-white.svg":"menu.svg")})})]})]}),(0,o.jsx)(s.J.Panel,{className:"absolute right-0 z-10 w-11/12 p-4 ".concat("dark"===m?"bg-slate-800":"bg-white"," shadow-md rounded-md"),children:u?(0,o.jsxs)("div",{className:"grid grid-cols-1",children:[(0,o.jsx)(c.Z,{onClick:function(){return d.push("/")},classes:"first:ml-1",children:"Home"}),y&&(0,o.jsx)(c.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),k&&(0,o.jsx)(c.Z,{onClick:function(){return d.push("/resume")},classes:"first:ml-1",children:"Resume"}),(0,o.jsx)(c.Z,{onClick:function(){return window.open("mailto:hello@chetanverma.com")},children:"Contact"})]}):(0,o.jsxs)("div",{className:"grid grid-cols-1",children:[(0,o.jsx)(c.Z,{onClick:t,children:"Opportunites"}),x&&(0,o.jsx)(c.Z,{onClick:n,children:"About"}),y&&(0,o.jsx)(c.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),k&&(0,o.jsx)(c.Z,{onClick:function(){return window.open("mailto:hello@chetanverma.com")},children:"Resume"}),(0,o.jsx)(c.Z,{onClick:function(){return window.open("mailto:hello@chetanverma.com")},children:"Contact"})]})})]})}}),(0,o.jsxs)("div",{className:"mt-10 hidden flex-row items-center justify-between sticky ".concat("light"===m&&"bg-white"," dark:text-white top-0 z-10 tablet:flex backdrop-filter backdrop-blur-sm"),children:[(0,o.jsxs)("h1",{onClick:function(){return d.push("/")},className:"font-medium cursor-pointer mob:p-2 laptop:p-0",children:[w,"."]}),u?(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)(c.Z,{onClick:function(){return d.push("/")},children:"Home"}),y&&(0,o.jsx)(c.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),k&&(0,o.jsx)(c.Z,{onClick:function(){return d.push("/resume")},classes:"first:ml-1",children:"Resume"}),v&&(0,o.jsx)(c.Z,{onClick:function(){return window.open("mailto:hello@chetanverma.com")},children:"Contact"}),g&&m&&l.darkMode&&(0,o.jsx)(c.Z,{onClick:function(){return p("dark"===m?"light":"dark")},children:(0,o.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===m?"moon.svg":"sun.svg")})})]}):(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)(c.Z,{onClick:t,children:"Opportunites"}),x&&(0,o.jsx)(c.Z,{onClick:n,children:"About"}),y&&(0,o.jsx)(c.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),k&&(0,o.jsx)(c.Z,{onClick:function(){return d.push("/resume")},classes:"first:ml-1",children:"Resume"}),k&&(0,o.jsx)(c.Z,{onClick:function(){return window.open("mailto:hello@chetanverma.com")},children:"Contact"}),g&&m&&l.darkMode&&(0,o.jsx)(c.Z,{onClick:function(){return p("dark"===m?"light":"dark")},children:(0,o.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===m?"moon.svg":"sun.svg")})})]})]})]})}},20558:function(e,t,n){n.d(t,{KO:function(){return s},LI:function(){return o}});var o=n(67294).useLayoutEffect;function s(e){if(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}}},69954:function(e){e.exports=JSON.parse('{"name":"Mars Passive Income","headerTaglineOne":"Welcome to the future of money making.","headerTaglineTwo":"Vetted passive income opportunities ready for you to join.","headerTaglineThree":"","headerTaglineFour":"","showCursor":true,"showBlog":false,"darkMode":true,"showResume":false,"showContact":false,"socials":[{"id":"a250bc4c-d960-425c-b7cf-892df70cba0b","title":"Mars Passive Income - Telegram","link":"https://t.me/+cFZV_lbmfvI2YTcx"},{"id":"9da9b549-3547-4698-b20f-a1a43566ac8a","title":"Passive Income Group - Telegram","link":"https://t.me/+_3R3-Jns-JY2NTZh"}],"projects":[{"id":"1","title":"Pool Funding","description":"What are your funding needs? Do you need to pay off debt?<br/> Would you like to start a business?\u200b \u200bMaybe you want to buy a new car? \u200b <br/>A simple daily 3 minute activity could help qualify you to pull $30,000 a month out of our Pool of Funds. ","imageSrc":"","videoSrc":"https://www.youtube.com/embed/Eyt3PHW58oE","url":"https://fundwise.com/funds674569?am_id=Mars","titleImage":"https://poolfunding.io/assets/a9b4cf21689a05317d1b3d923e84f5f3.png","projectUrl":"http://localhost:3000//projects/1","buttonText":"Join Fundwise","projectVideoSrc":"https://www.youtube.com/embed/aHW0wG8Tl0M?si=8KDTx_uFpRsLIuEr","pageBottomText":"Optional: Fundwise Video Course - This FREE Video Training Course covers the ins and outs and shows the proof of how this works. You can also get your own referral link to the course to share with others. ","videoText":"\u200bWatch our video to learn how."},{"id":"83780969-c427-475c-bbc9-ca605501ddb0","title":"Integrity AI","description":"Welcome to IntegrityAI where you can find trusted partners in the passive crypto space. We are people of integrity that have experienced the \u201crug pulls\u201d in this space and wanted to come up with something ourselves in order to provide a REAL revenue source for you to be able to plug into. Many of you KNOW the people behind this project, but we can\u2019t tell you, in order that we can maintain our anonymity to provide you with this very great opportunity. Every trading platform has risk. So, we do not intend to promise you that this is without that. But we promise to do everything we can to offset that risk with the best risk management we can muster. After all, with legit trading, we don\u2019t win if you lose! We look forward to standing the test of time and going beyond that 6\u20139-month death sentence that seems to be getting shorter with all these opportunists coming on the scene. We are doing real trading. We hope that those who choose to be \u201crisk takers\u201d and take us at face value will do so to get started, and those who are the more cautious ones will take all the time they need to \u201cwatch and see\u201d as their friends stay winning with IntegrityAI.","imageSrc":"https://integrityai.pro/assets/A-1-3677ffe9.png","videoSrc":"","url":"https://integrityai.pro/?ref=TNTwRemb21qZSyb2HR8NgGtxN5zriqfUM9","titleImage":"","projectUrl":"http://localhost:3000//projects/2","buttonText":"Join Integrity AI"}],"services":[],"aboutpara":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","resume":{"tagline":"\ud83d\udc4b  I\'m a software engineer, product designer.","description":"I have delivered world-class user experiences to millions of people. Well-versed with React, Javascript, and most of the Web frameworks.","experiences":[{"id":"1","dates":"March 2022 - Present","type":"Full Time","position":"Frontend Engineer at X","bullets":"Bullet One, Bullet Two"},{"id":"d495c23b-4f65-479a-9b8a-cfbc1c089725","dates":"July 2020 - March 2022","type":"Full Time","position":"Frontend Engineer at X","bullets":"Worked on the frontend of a React application, Worked on the frontend of a React application"}],"education":{"universityName":"University X","universityDate":"2016-2020","universityPara":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},"languages":["Javascript","HTML5","CSS","Python","Go"],"frameworks":["React","Typescript","NodeJs"],"others":["Figma","AdobeXD","AWS"]}}')}}]);