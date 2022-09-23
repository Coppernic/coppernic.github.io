"use strict";(self.webpackChunkcopper_docusaurus=self.webpackChunkcopper_docusaurus||[]).push([[9599],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=a.createContext({}),c=function(e){var n=a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=t,b=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return r?a.createElement(b,i(i({ref:n},p),{},{components:r})):a.createElement(b,i({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5073:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=r(7462),t=r(3366),o=(r(7294),r(3905)),i=["components"],l={},d="CpcBarcode library",c={unversionedId:"sdk/barcode/library",id:"sdk/barcode/library",isDocsHomePage:!1,title:"CpcBarcode library",description:"CpcBarcode is a library to control the barcode reader on Coppernic's devices.",source:"@site/docs/sdk/barcode/library.md",sourceDirName:"sdk/barcode",slug:"/sdk/barcode/library",permalink:"/docs/sdk/barcode/library",editUrl:"https://github.com/Coppernic/coppernic.github.io/docs/sdk/barcode/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/docs/sdk/core/settings"},next:{title:"Barcode Manager",permalink:"/docs/sdk/barcode/manager"}},p=[{value:"Supported devices",id:"supported-devices",children:[]},{value:"Build",id:"build",children:[]},{value:"Barcode reader",id:"barcode-reader",children:[{value:"C-One",id:"c-one",children:[]},{value:"C-five",id:"c-five",children:[]},{value:"C-izi",id:"c-izi",children:[]},{value:"C-eight",id:"c-eight",children:[]},{value:"IDPlatform",id:"idplatform",children:[]}]},{value:"Power Management",id:"power-management",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"CpcBarcode API",id:"cpcbarcode-api",children:[{value:"Get a reader",id:"get-a-reader",children:[]},{value:"Reader opening",id:"reader-opening",children:[]},{value:"Reader closing",id:"reader-closing",children:[]},{value:"Get firmware version",id:"get-firmware-version",children:[]},{value:"Scan data",id:"scan-data",children:[]},{value:"Connector",id:"connector",children:[]}]}],s={toc:p};function u(e){var n=e.components,r=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cpcbarcode-library"},"CpcBarcode library"),(0,o.kt)("p",null,"CpcBarcode is a library to control the barcode reader on Coppernic's devices."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For C-One and C-five :\nOld documentation ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Coppernic/BarcodeSample/blob/release/1.0/readme.md"},"here"))),(0,o.kt)("h2",{id:"supported-devices"},"Supported devices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C-One\xb2 and C-One\xb2 e-ID"),(0,o.kt)("li",{parentName:"ul"},"IDPlatform")),(0,o.kt)("p",null,"This API is almost the same that the old one. Only ",(0,o.kt)("inlineCode",{parentName:"p"},"groupId")," of dependencies is changing.\nOld one is ",(0,o.kt)("inlineCode",{parentName:"p"},'"fr.coppernic.sdk.barcode:CpcBarcode:3.5.0"')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nexus.coppernic.fr/#browse/browse:libs-release:fr%2Fcoppernic%2Fsdk%2Fbarcode%2FCpcBarcode"},"Old CpcBarcode repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nexus.coppernic.fr/#browse/browse:libs-release:fr%2Fcoppernic%2Flib%2Fbarcode"},"CpcBarcode repository"))),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"build.gradle")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    maven { url \'https://nexus.coppernic.fr/repository/libs-release\' }\n}\n\nString barcode = "1.3.3"\n\ndependencies {\n    // Standard implementation (Connector API use)\n    implementation "fr.coppernic.lib.barcode:CpcBarcode:$barcode"\n\n    // Implementation for specific product (only when you know what you are doing)\n    implementation "fr.coppernic.lib.barcode:CpcBarcode-cfive:$barcode"\n    implementation "fr.coppernic.lib.barcode:CpcBarcode-conen:$barcode"\n    implementation "fr.coppernic.lib.barcode:CpcBarcode-coneo:$barcode"\n    implementation "fr.coppernic.lib.barcode:CpcBarcode-idplatform:$barcode"\n}\n')),(0,o.kt)("p",null,"If you have product flavors with several devices including C-One\xb2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'\ndependencies {\n    implementation "fr.coppernic.lib.barcode:CpcBarcode:$barcode"\n}\n\n// This will change the actual barcode dependency with the specific dependency for C-One\xb2\nconfigurations.all {\n    if( name.matches("(light|full)[Cc]onen[a-zA-Z]+") ) {\n        resolutionStrategy.dependencySubstitution {\n            substitute module("fr.coppernic.lib.barcode:CpcBarcode:$barcode") with module("fr.coppernic.lib.barcode:CpcBarcode-conen:$barcode")\n        }\n    }\n}\n')),(0,o.kt)("p",null,"It is possible to add the same flavors than barcode library and to use these flavors in dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'\ndependencies {\n    conenImplementation "fr.coppernic.lib.barcode:CpcBarcode-conen:$barcode"\n    coneoImplementation "fr.coppernic.lib.barcode:CpcBarcode-coneo:$barcode"\n    cfiveImplementation "fr.coppernic.lib.barcode:CpcBarcode-cfive:$barcode"\n    idPlatformImplementation "fr.coppernic.lib.barcode:CpcBarcode-idplatform:$barcode"\n}\n\n')),(0,o.kt)("h2",{id:"barcode-reader"},"Barcode reader"),(0,o.kt)("p",null,"Currently supported Barcode readers are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Opticon mdi3100"),(0,o.kt)("li",{parentName:"ul"},"Honeywell n6603 decoded"),(0,o.kt)("li",{parentName:"ul"},"Honeywell n6003 undecoded"),(0,o.kt)("li",{parentName:"ul"},"ad002")),(0,o.kt)("h3",{id:"c-one"},"C-One"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Barcode reader"),(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Baudrate"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mdi3100"),(0,o.kt)("td",{parentName:"tr",align:null},"/dev/ttyHS1"),(0,o.kt)("td",{parentName:"tr",align:null},"115200")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"n6603_decoded"),(0,o.kt)("td",{parentName:"tr",align:null},"/dev/ttyHS1"),(0,o.kt)("td",{parentName:"tr",align:null},"115200")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"n6603_undecoded"),(0,o.kt)("td",{parentName:"tr",align:null},"camera"),(0,o.kt)("td",{parentName:"tr",align:null},"na")))),(0,o.kt)("h3",{id:"c-five"},"C-five"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Barcode reader"),(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Baudrate"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"n6603_undecoded"),(0,o.kt)("td",{parentName:"tr",align:null},"camera"),(0,o.kt)("td",{parentName:"tr",align:null},"na")))),(0,o.kt)("h3",{id:"c-izi"},"C-izi"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Barcode reader"),(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Baudrate"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mdi3100"),(0,o.kt)("td",{parentName:"tr",align:null},"/dev/ttyO0"),(0,o.kt)("td",{parentName:"tr",align:null},"9600")))),(0,o.kt)("h3",{id:"c-eight"},"C-eight"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Barcode reader"),(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Baudrate"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"n6603_undecoded"),(0,o.kt)("td",{parentName:"tr",align:null},"camera"),(0,o.kt)("td",{parentName:"tr",align:null},"na")))),(0,o.kt)("h3",{id:"idplatform"},"IDPlatform"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Barcode reader"),(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Baudrate"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ad002"),(0,o.kt)("td",{parentName:"tr",align:null},"?"),(0,o.kt)("td",{parentName:"tr",align:null},"9600")))),(0,o.kt)("h2",{id:"power-management"},"Power Management"),(0,o.kt)("p",null,"For power management, please go to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.coppernic.fr/#//sdk/core/power"},"Power Documentation")),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Before starting development on your application with the Barcode API, you should make sure your manifest has the appropriate permission declarations\nto allow use of camera hardware when required and other related features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.CAMERA" />\n')),(0,o.kt)("h2",{id:"cpcbarcode-api"},"CpcBarcode API"),(0,o.kt)("h3",{id:"get-a-reader"},"Get a reader"),(0,o.kt)("p",null,"A barcode reader instance is built using the ",(0,o.kt)("inlineCode",{parentName:"p"},"BarcodeFactory")," class. Barcode reader\ninstance is given asynchronously. ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreated()")," method is called with the newly created\ninstance. ",(0,o.kt)("inlineCode",{parentName:"p"},"onDisposed()")," is called if reader instance is disposed for any reason or if\nthe build has failed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Example implements BarcodeReader.BarcodeListener,\nInstanceListener<BarcodeReader> {\n\n    private BarcodeReader reader;\n\n    public void makeReader() {\n         BarcodeFactory factory = BarcodeFactory.get();\n         //Mandatory\n         factory.setBarcodeListener(this);\n\n         //Optional\n         factory.setBaudrate(115200);\n         factory.setPort("/dev/ttyHS1");\n         factory.setType(fr.coppernic.sdk.barcode.BarcodeReaderType.OPTICON_MDI3100);\n\n         boolean ok = factory.build(context, this);\n    }\n\n    // Called with the new instance\n    @Override\n    public void onCreated(BarcodeReader instance) {\n        Log.d(TAG, "onCreated " + instance);\n        reader = instance;\n        if (instance == null) {\n            Log.w(TAG, "No reader available");\n        } else {\n            //enable power\n            power(true);\n        }\n    }\n\n    // Called if an error occurred.\n    @Override\n    public void onDisposed(BarcodeReader instance) {\n        Log.d(TAG, "onDisposed " + instance);\n        reader = null;\n    }\n\n    // [...]\n}\n')),(0,o.kt)("h3",{id:"reader-opening"},"Reader opening"),(0,o.kt)("p",null,"Opening is done asynchronously. ",(0,o.kt)("inlineCode",{parentName:"p"},"onOpened()")," is called with the result of the operation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class Example implements BarcodeReader.BarcodeListener,\nInstanceListener<BarcodeReader> {\n\n    private void open() {\n        reader.open();\n    }\n\n    @Override\n    public void onOpened(RESULT res) {\n        Toast.makeText(getContext(), res.toString(), Toast.LENGTH_SHORT).show();\n        // Do some operations after opening here\n    }\n\n}\n")),(0,o.kt)("h3",{id:"reader-closing"},"Reader closing"),(0,o.kt)("p",null,"Be sure to close the reader when you are done with it. It can then free some resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Example implements BarcodeReader.BarcodeListener,\nInstanceListener<BarcodeReader> {\n\n    private void close() {\n        Log.d(TAG, "close");\n        if (reader != null && reader.isOpened()) {\n            reader.close();\n        }\n    }\n\n}\n')),(0,o.kt)("h3",{id:"get-firmware-version"},"Get firmware version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Example implements BarcodeReader.BarcodeListener,\nInstanceListener<BarcodeReader> {\n\n    private void getFirmware() {\n        RESULT res = reader.getFirmware();\n        Toast.makeText(getContext(), res.toString(), Toast.LENGTH_SHORT).show();\n    }\n\n    @Override\n    public void onFirmware(RESULT res, String s) {\n        Log.d(TAG, "onFirmware " + res);\n        log("Firmware : " + (s == null ? "null" : s));\n    }\n\n}\n')),(0,o.kt)("h3",{id:"scan-data"},"Scan data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Example implements BarcodeReader.BarcodeListener,\nInstanceListener<BarcodeReader> {\n\n    private void scan() {\n        RESULT res = reader.scan();\n        Toast.makeText(getContext(), res.toString(), Toast.LENGTH_SHORT).show();\n    }\n\n    @Override\n    public void onScan(RESULT res, ScanResult data) {\n        Log.d(TAG, "onScan " + res);\n        log(data == null ? "null" : data.toString() + ", " + res);\n    }\n}\n')),(0,o.kt)("h3",{id:"connector"},"Connector"),(0,o.kt)("p",null,"A Connector is a special kind of reader. It connects to the Barcode Service to get an instance of reader.\nHere is how to get one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Example implements BarcodeReader.BarcodeListener,\nInstanceListener<BarcodeReader> {\n\n    private BarcodeReader reader;\n\n    public void makeReader() {\n         BarcodeFactory factory = BarcodeFactory.get();\n         //Mandatory\n         factory.setBarcodeListener(this);\n\n         GlobalConfig globalConfig = GlobalConfig.Builder.get(mContext);\n         globalConfig.setPort(/*port of barcode reader*/);\n         globalConfig.setBarcodeType(/*type of barcode reader*/);\n\n         //Optional\n         factory.setType(fr.coppernic.sdk.barcode.BarcodeReaderType.CONNECTOR);\n\n         boolean ok = factory.build(context, this);\n    }\n\n    // Called with the new instance\n    @Override\n    public void onCreated(BarcodeReader instance) {\n        Log.d(TAG, "onCreated " + instance);\n        reader = instance;\n        if (instance == null) {\n            log("No reader available");\n        } else {\n            //enable power\n            power(true);\n        }\n    }\n\n    // Called if an error occurred.\n    @Override\n    public void onDisposed(BarcodeReader instance) {\n        Log.d(TAG, "onDisposed " + instance);\n        reader = null;\n    }\n\n    // [...]\n}\n')),(0,o.kt)("h4",{id:"timeout"},"Timeout"),(0,o.kt)("p",null,"Service is automatically configuring reader timeout to infinite.\nAs soon as the barcode service starts (when you disconnect from connector)\nthe timeout settings will change. If you need to handle a specific timeout,\nthen you need to configure it each time you get the connector instance."))}u.isMDXComponent=!0}}]);