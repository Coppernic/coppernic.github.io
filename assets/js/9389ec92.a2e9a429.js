"use strict";(self.webpackChunkcopper_docusaurus=self.webpackChunkcopper_docusaurus||[]).push([[1680],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6811:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={},l="Serial communication",s={unversionedId:"sdk/core/serial",id:"sdk/core/serial",isDocsHomePage:!1,title:"Serial communication",description:"You can take inspiration from this serial app.",source:"@site/docs/sdk/core/serial.md",sourceDirName:"sdk/core",slug:"/sdk/core/serial",permalink:"/docs/sdk/core/serial",editUrl:"https://github.com/Coppernic/coppernic.github.io/docs/sdk/core/serial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Power",permalink:"/docs/sdk/core/power"},next:{title:"Settings",permalink:"/docs/sdk/core/settings"}},u=[{value:"Getting serial object",id:"getting-serial-object",children:[]},{value:"Using SerialCom object",id:"using-serialcom-object",children:[]}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"serial-communication"},"Serial communication"),(0,i.kt)("p",null,"You can take inspiration from this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Coppernic/Serial"},"serial app"),"."),(0,i.kt)("h2",{id:"getting-serial-object"},"Getting serial object"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"SerialCom")," object is given by an ",(0,i.kt)("inlineCode",{parentName:"p"},"InstanceListener"),". A connection to Coppernic's system service is needed to give this object.\nWe are calling this ",(0,i.kt)("strong",{parentName:"p"},"assynchronous instanciation"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"SerialFactory.getDirectInstance(context, new InstanceListener<SerialCom>() {\n            @Override\n            public void onCreated(SerialCom instance) {\n                // You can store instance of SerialCOm for future use.\n                serialCom = instance;\n            }\n\n            @Override\n            public void onDisposed(SerialCom instance) {\n                // handle this case\n            }\n        });\n")),(0,i.kt)("h2",{id:"using-serialcom-object"},"Using SerialCom object"),(0,i.kt)("p",null,"As soon as this object is given, you can use it to communicate with serial port:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/* Error codes */\nint ERROR_OK = 0;\nint ERROR_FAIL = -1;\nint ERROR_OPEN = -2;\nint ERROR_TIMEOUT = -3;\nint ERROR_OPEN_SECURITY_EXCEPTION = -4;\nint ERROR_OPEN_IO_EXCEPTION = -5;\nint ERROR_NOT_BOUND = -6;\nint ERROR_ALREADY_OPENED = -7;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Port opening:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Opening port\nint ret = serial.open("/dev/ttyHSL1", 9600);\n// 0 means no error\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sending data:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"byte[] data = new byte[]{ 0x01, 0x02, 0x03};\nint ret = serial.send(data, data.length);\n// 0 means error, else return length of data sent\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Receiving data:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"byte[] data = new byte[10];\nint ret = serial.receive(1000, 10, data);\n// ret is an error code\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Close Port:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Closing port\nserial.close();\n")))}m.isMDXComponent=!0}}]);