"use strict";(self.webpackChunkcopper_docusaurus=self.webpackChunkcopper_docusaurus||[]).push([[4356],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={},c="App management",l={unversionedId:"app/management",id:"app/management",isDocsHomePage:!1,title:"App management",description:"Application update",source:"@site/docs/app/management.md",sourceDirName:"app",slug:"/app/management",permalink:"/docs/app/management",editUrl:"https://github.com/Coppernic/coppernic.github.io/docs/app/management.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HID iClass Wedge",permalink:"/docs/app/iclass_wedge"},next:{title:"MRZ Read",permalink:"/docs/usecases/mrz"}},u=[{value:"Application update",id:"application-update",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app-management"},"App management"),(0,o.kt)("h2",{id:"application-update"},"Application update"),(0,o.kt)("p",null,"There are several ways to keep your applications up to date on your Coppernic devices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ADB")," : Very handful at development stage. This tool from google allows you to do many things with your device. ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/adb"},"https://developer.android.com/studio/command-line/adb"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"SD Card")," : You can put an apk in device's memory (SD Card or internal memeory), browse to your file and click on it for installation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Google Play")," : On devices where ",(0,o.kt)("a",{parentName:"p",href:"https://www.android.com/intl/en_us/gms/"},"GMS")," are available, you can deploy your application on an market place such as Google Play.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"EMM")," : You can deploy your app wit an EMM such as MobiControl from Soti."))),(0,o.kt)("p",null,"Both CopperApps and MobiControl can update your application even when device is kiosked.\nWe could also give some pieces of advice to choose the kiosk application that's right for you."))}m.isMDXComponent=!0}}]);