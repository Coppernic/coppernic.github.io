"use strict";(self.webpackChunkcopper_docusaurus=self.webpackChunkcopper_docusaurus||[]).push([[5345],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,y=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5998:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={sidebar_position:1,title:"Security and update policies"},c="Operating System update policy",s={unversionedId:"os/policy",id:"os/policy",isDocsHomePage:!1,title:"Security and update policies",description:"Security update policy for Android",source:"@site/docs/os/policy.md",sourceDirName:"os",slug:"/os/policy",permalink:"/docs/os/policy",editUrl:"https://github.com/Coppernic/coppernic.github.io/docs/os/policy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Security and update policies"},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/docs/start/core"},next:{title:"Factory Reset",permalink:"/docs/os/factory_reset"}},u=[{value:"Security update policy for Android",id:"security-update-policy-for-android",children:[]},{value:"Support",id:"support",children:[]},{value:"System Applications",id:"system-applications",children:[]}],l={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"operating-system-update-policy"},"Operating System update policy"),(0,i.kt)("h2",{id:"security-update-policy-for-android"},"Security update policy for Android"),(0,i.kt)("p",null,"Coppernic combines the latest security patch and submits for approval to Google twice a year.\nThese updates are correlated with update given by Google to ",(0,i.kt)("a",{parentName:"p",href:"https://source.android.com/"},"aosp project"),". They\nare considered as ",(0,i.kt)("em",{parentName:"p"},"Major Release"),".\nIn the meantime, Coppernic can provide intermediary version with bug fixes if need be."),(0,i.kt)("p",null,"There are two kinds of updates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Classical"),": A ",(0,i.kt)("a",{parentName:"li",href:"/docs/os/factory_reset"},"factory reset")," is performed during update process. All custom data are lost and a full reinstall is needed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OTA"),": This is a differential update that can be performed between ",(0,i.kt)("em",{parentName:"li"},"Major Release")," OS. This method is available\nunder specific conditions. Please contact our ",(0,i.kt)("a",{parentName:"li",href:"https://support.coppernic.fr/index.php"},"support center")," for more information.")),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Coppernic gives support for developing on devices during the whole lifetime of contracts with Coppernic."),(0,i.kt)("h2",{id:"system-applications"},"System Applications"),(0,i.kt)("p",null,"OS signature keys are private to Coppernic and are not provided for security reason."),(0,i.kt)("p",null,"If you want to develop system applications, then you need to send your application to our ",(0,i.kt)("a",{parentName:"p",href:"http://support.coppernic.fr"},"support center")," for signature."))}d.isMDXComponent=!0}}]);