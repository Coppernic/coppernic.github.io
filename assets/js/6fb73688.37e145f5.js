"use strict";(self.webpackChunkcopper_docusaurus=self.webpackChunkcopper_docusaurus||[]).push([[3115],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),f=i,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6310:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],c={sidebar_position:1},p="C-One\xb2 e-ID",l={unversionedId:"product/cone-eid/cone-eid",id:"product/cone-eid/cone-eid",isDocsHomePage:!1,title:"C-One\xb2 e-ID",description:"Specifications",source:"@site/docs/product/cone-eid/cone-eid.md",sourceDirName:"product/cone-eid",slug:"/product/cone-eid/cone-eid",permalink:"/docs/product/cone-eid/cone-eid",editUrl:"https://github.com/Coppernic/coppernic.github.io/docs/product/cone-eid/cone-eid.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SmartCard",permalink:"/docs/product/access-er/smartcard"},next:{title:"Finger print",permalink:"/docs/product/cone-eid/fingerprint"}},u=[{value:"Specifications",id:"specifications",children:[]},{value:"Barcode Scanning",id:"barcode-scanning",children:[]},{value:"Key mapping",id:"key-mapping",children:[]},{value:"RFID",id:"rfid",children:[]},{value:"Other peripherals",id:"other-peripherals",children:[]}],d={toc:u};function s(e){var n=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c-one-e-id"},"C-One\xb2 e-ID"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6604).Z})),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("p",null,"Full specifications for C-One\xb2 e-ID can be downloaded ",(0,a.kt)("a",{parentName:"p",href:"https://www.coppernic.fr/en/documentations/"},"here"),"."),(0,a.kt)("h2",{id:"barcode-scanning"},"Barcode Scanning"),(0,a.kt)("p",null,"C-One\xb2 is equiped with a 2D barcode scanner. It can read both 1D and 2D symbologies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/sdk/barcode/manager"},"Barcode"))),(0,a.kt)("h2",{id:"key-mapping"},"Key mapping"),(0,a.kt)("p",null,"C-One\xb2 has 3 programmable buttons that can be managed using API. It is possible to remap a virtual key or an application on each of them:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(557).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/sdk/core/mapping"},"Documentation"))),(0,a.kt)("h2",{id:"rfid"},"RFID"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pcsc"},"Elyctis"))),(0,a.kt)("h2",{id:"other-peripherals"},"Other peripherals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"fingerprint"},"Fingerprint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"ocr"},"OCR")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pcsc"},"SAM & Smart Card"))))}s.isMDXComponent=!0},6604:function(e,n,t){n.Z=t.p+"assets/images/cone_eid-f2933f879566d7bc21bb6c0ae2c25838.jpg"},557:function(e,n,t){n.Z=t.p+"assets/images/cone_eid_remap-7e585cae341322cf8fa8062a62fb0adc.png"}}]);