"use strict";(self.webpackChunkcopper_docusaurus=self.webpackChunkcopper_docusaurus||[]).push([[9181],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return b}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,y=u["".concat(p,".").concat(b)]||u[b]||l[b]||i;return t?n.createElement(y,o(o({ref:r},d),{},{components:t})):n.createElement(y,o({ref:r},d))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1172:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={sidebar_position:1,title:"Keyboard peripherals"},p="Keyboard peripherals",s={unversionedId:"bestpractices/keyboard_peripherals",id:"bestpractices/keyboard_peripherals",isDocsHomePage:!1,title:"Keyboard peripherals",description:"About keyboard Peripherals",source:"@site/docs/bestpractices/keyboard_peripherals.md",sourceDirName:"bestpractices",slug:"/bestpractices/keyboard_peripherals",permalink:"/docs/bestpractices/keyboard_peripherals",editUrl:"https://github.com/Coppernic/coppernic.github.io/docs/bestpractices/keyboard_peripherals.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Keyboard peripherals"},sidebar:"tutorialSidebar",previous:{title:"MRZ Read",permalink:"/docs/usecases/mrz"}},d=[{value:"About keyboard Peripherals",id:"about-keyboard-peripherals",children:[]},{value:"Impact on Android activity life cycle",id:"impact-on-android-activity-life-cycle",children:[]}],l={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keyboard-peripherals"},"Keyboard peripherals"),(0,i.kt)("h2",{id:"about-keyboard-peripherals"},"About keyboard Peripherals"),(0,i.kt)("p",null,"Some peripherals available on Coppernic devices are managed as keyboard-type device by Android OS.\nIt concerns some barcode reader, RFID reader, MRZ reader."),(0,i.kt)("p",null,"A device like ",(0,i.kt)("a",{parentName:"p",href:"/docs/product/access-er/hid"},"HID reader on Access-ER")," can act as CCID device, or as a keyboard wedge, depending on its configuration."),(0,i.kt)("h2",{id:"impact-on-android-activity-life-cycle"},"Impact on Android activity life cycle"),(0,i.kt)("p",null,"By default an Android Activity treats a keyboard plug as a configuration change."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/resources/runtime-changes#HandlingTheChange"},"https://developer.android.com/guide/topics/resources/runtime-changes#HandlingTheChange")),(0,i.kt)("p",null,"This leads to Activity being recreated when a keyboard peripheral is power on or powered off, and may seem to be a bad user experience, or look like a bug."),(0,i.kt)("p",null,"To avoid this, it is possible to disable Activity recreation by using android:configChanges in the manifest of the Activity."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/manifest/activity-element"},"https://developer.android.com/guide/topics/manifest/activity-element")),(0,i.kt)("p",null,"It can be recommended to use this value in the manifest file :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'android:configChanges="orientation|screenSize|screenLayout|keyboardHidden|keyboard|locale"\n')))}u.isMDXComponent=!0}}]);