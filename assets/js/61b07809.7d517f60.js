"use strict";(self.webpackChunkcopper_docusaurus=self.webpackChunkcopper_docusaurus||[]).push([[8205],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},280:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={},c="Barcode Manager",s={unversionedId:"sdk/barcode/manager",id:"sdk/barcode/manager",isDocsHomePage:!1,title:"Barcode Manager",description:"For C-One and C-five :",source:"@site/docs/sdk/barcode/manager.md",sourceDirName:"sdk/barcode",slug:"/sdk/barcode/manager",permalink:"/docs/sdk/barcode/manager",editUrl:"https://github.com/Coppernic/coppernic.github.io/docs/sdk/barcode/manager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CpcBarcode library",permalink:"/docs/sdk/barcode/library"},next:{title:"Privileged library",permalink:"/docs/sdk/privileged/privileged"}},p=[{value:"Supported devices",id:"supported-devices",children:[]},{value:"Remap a physical button to trigger barcode reading",id:"remap-a-physical-button-to-trigger-barcode-reading",children:[]},{value:"Intents",id:"intents",children:[{value:"Intents via CpcBarcode",id:"intents-via-cpcbarcode",children:[]},{value:"Intents with CpcCore",id:"intents-with-cpccore",children:[]},{value:"Get scan result",id:"get-scan-result",children:[]},{value:"Defines",id:"defines",children:[]}]},{value:"Configure the barcode&#39;s service",id:"configure-the-barcodes-service",children:[{value:"Using CpcBarcode library",id:"using-cpcbarcode-library",children:[]}]}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"barcode-manager"},"Barcode Manager"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For C-One and C-five :\nOld documentation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Coppernic/ScanSample/blob/1.0.0/README.md"},"here"))),(0,i.kt)("p",null,"The API to use barcode scanners through Barcode Manager service."),(0,i.kt)("p",null,"There are 2 ways to trigger a barcode reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"remap a physical button to barcode scan function"),(0,i.kt)("li",{parentName:"ul"},"send an intent")),(0,i.kt)("h2",{id:"supported-devices"},"Supported devices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C-One\xb2 and C-One\xb2 e-ID"),(0,i.kt)("li",{parentName:"ul"},"IDPlatform")),(0,i.kt)("p",null,"This API is almost the same that the old one. The main differences include the fact that for ",(0,i.kt)("em",{parentName:"p"},"C-One")," and ",(0,i.kt)("em",{parentName:"p"},"C-five")," devices,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"barcode service")," is hosted inside ",(0,i.kt)("inlineCode",{parentName:"p"},"CpcSystemServices")," application. For the ",(0,i.kt)("em",{parentName:"p"},"C-One\xb2")," familly and the ",(0,i.kt)("em",{parentName:"p"},"ID Platform"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"barcode service"),"\nis hosted inside ",(0,i.kt)("inlineCode",{parentName:"p"},"Barcode Manager")," application. The ",(0,i.kt)("inlineCode",{parentName:"p"},"applicationId")," is different for these apps so\n",(0,i.kt)("inlineCode",{parentName:"p"},"Intents")," used for controlling barcode reader have different target compoenent names."),(0,i.kt)("p",null,"For instance, on ",(0,i.kt)("em",{parentName:"p"},"C-One\xb2")," we call ",(0,i.kt)("inlineCode",{parentName:"p"},"Intent.setPackage()")," like this :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'intent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));\n')),(0,i.kt)("p",null,"on ",(0,i.kt)("em",{parentName:"p"},"C-five"),", we call ",(0,i.kt)("inlineCode",{parentName:"p"},"Intent.setPackage()")," like this :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"intent.setPackage(OsHelper.getSystemServicePackage(context));\n")),(0,i.kt)("h2",{id:"remap-a-physical-button-to-trigger-barcode-reading"},"Remap a physical button to trigger barcode reading"),(0,i.kt)("p",null,"In Android settings application, go to remap key & shortcuts (may change on different devices), then remap a key to SCAN or Barcode Scan\n(device dependent)."),(0,i.kt)("h2",{id:"intents"},"Intents"),(0,i.kt)("p",null,"This service can respond to ",(0,i.kt)("inlineCode",{parentName:"p"},"Intents"),". There are two options to communicate via ",(0,i.kt)("inlineCode",{parentName:"p"},"Intents"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add a dependency to CpcBarcode library and use its helper function"),(0,i.kt)("li",{parentName:"ul"},"build an ",(0,i.kt)("inlineCode",{parentName:"li"},"Intent")," from scratch and use it")),(0,i.kt)("p",null,"In every cases, you shall declare a permission to be able to communicate with the service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Permissions"))),(0,i.kt)("p",null,"You should declare the ",(0,i.kt)("inlineCode",{parentName:"p"},"fr.coppernic.permission.BARCODE")," permission into your manifest:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'    <uses-permission android:name="fr.coppernic.permission.BARCODE" />\n')),(0,i.kt)("p",null,"You also need to ask for this permission explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {\n    requestPermissions(new String[]{"fr.coppernic.permission.BARCODE"}, 42)\n}\n')),(0,i.kt)("h3",{id:"intents-via-cpcbarcode"},"Intents via CpcBarcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add CpcBarcode dependency"))),(0,i.kt)("p",null,"More information ",(0,i.kt)("a",{parentName:"p",href:"library"},"here")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start service"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ComponentName cn = BarcodeReader.ServiceManager.startService(context);\nif(cn == null) {\n    // Error\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stop service"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ComponentName cn = BarcodeReader.ServiceManager.stopService(context);\nif(cn == null) {\n    // Error\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trig a scan"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ComponentName cn = BarcodeReader.ServiceManager.startScan(context);\nif(cn == null) {\n    // Error\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stop a scan"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ComponentName cn = BarcodeReader.ServiceManager.stopScan(context);\nif(cn == null) {\n    // Error\n}\n")),(0,i.kt)("h3",{id:"intents-with-cpccore"},"Intents with CpcCore"),(0,i.kt)("h4",{id:"start-service"},"Start service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import fr.coppernic.sdk.core.Defines;\nimport fr.coppernic.sdk.utils.helpers.OsHelper;\n\npublic void startScan(){\n    Intent scanIntent = new Intent();\n    // Set package target for intent. We are using OsHelper to get real package name according to the device we are running on\n    scanIntent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));\n    // Set action for scan trig\n    scanIntent.setAction("fr.coppernic.intent.action.start.barcode.service");\n    // Tell service who we are\n    scanIntent.putExtra(Defines.Keys.KEY_PACKAGE, context.getPackageName());\n    // Send intent to service\n    ComponentName ret;\n    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\n        ret = context.startForegroundService(intent);\n    } else {\n        ret = context.startService(intent);\n    }\n}\n')),(0,i.kt)("h4",{id:"stop-service"},"Stop service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import fr.coppernic.sdk.core.Defines;\nimport fr.coppernic.sdk.utils.helpers.OsHelper;\n\npublic void startScan(){\n    Intent scanIntent = new Intent();\n    // Set package target for intent. We are using OsHelper to get real package name according to the device we are running on\n    scanIntent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));\n    // Set action for scan trig\n    scanIntent.setAction("fr.coppernic.intent.action.stop.barcode.service");\n    // Tell service who we are\n    scanIntent.putExtra(Defines.Keys.KEY_PACKAGE, context.getPackageName());\n    // Send intent to service\n    ComponentName ret;\n    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\n        ret = context.startForegroundService(intent);\n    } else {\n        ret = context.startService(intent);\n    }\n}\n')),(0,i.kt)("h4",{id:"trig-a-scan"},"Trig a scan"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import fr.coppernic.sdk.core.Defines;\nimport fr.coppernic.sdk.utils.helpers.OsHelper;\n\npublic void startScan(){\n    Intent scanIntent = new Intent();\n    // Set package target for intent. We are using OsHelper to get real package name according to the device we are running on\n    scanIntent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));\n    // Set action for scan trig\n    scanIntent.setAction(Defines.IntentDefines.INTENT_ACTION_SCAN);\n    // Tell service who we are\n    scanIntent.putExtra(Defines.Keys.KEY_PACKAGE, context.getPackageName());\n    // Send intent to service\n    ComponentName ret;\n    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\n        ret = context.startForegroundService(intent);\n    } else {\n        ret = context.startService(intent);\n    }\n}\n')),(0,i.kt)("p",null,"When the reader is in continuous mode, it should be stopped explicitly, ",(0,i.kt)("strong",{parentName:"p"},"even if a barcode\nis read"),". Otherwise, it is stopped automatically by a read or a timeout."),(0,i.kt)("h4",{id:"stop-a-scan"},"Stop a scan"),(0,i.kt)("p",null,"Stopping a scan is needed when the reader is in continuous mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import fr.coppernic.sdk.core.Defines;\nimport fr.coppernic.sdk.utils.helpers.OsHelper;\n\npublic void stopScan(){\n    Intent scanIntent = new Intent();\n    // Set package target for intent. We are using OsHelper to get real package name according to the device we are running on\n    scanIntent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));\n    // Set action for scan trig\n    scanIntent.setAction(Defines.IntentDefines.INTENT_ACTION_STOP_SCAN);\n    // Tell service who we are\n    scanIntent.putExtra(Defines.Keys.KEY_PACKAGE, context.getPackageName());\n    // Send intent to service\n    ComponentName ret;\n    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\n        ret = context.startForegroundService(intent);\n    } else {\n        ret = context.startService(intent);\n    }\n}\n')),(0,i.kt)("h3",{id:"get-scan-result"},"Get scan result"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Register a broadcast receiver")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import fr.coppernic.sdk.core.Defines;\n\npublic class Example extends android.app.Activity {\n    private void registerReceiver() {\n        IntentFilter filter = new IntentFilter();\n        filter.addAction(Defines.IntentDefines.ACTION_SCAN_SUCCESS);\n        filter.addAction(Defines.IntentDefines.ACTION_SCAN_ERROR);\n        registerReceiver(scanResult, filter);\n    }\n\n    @Override\n    protected void onResume() {\n        super.onResume();\n        registerReceiver();\n    }\n\n    @Override\n    protected void onPause() {\n         super.onPause();\n         unregisterReceiver(scanResult);\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get the result")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import fr.coppernic.sdk.core.Defines;\nimport fr.coppernic.sdk.utils.core.CpcResult.RESULT;\n\npublic class Example extends android.app.Activity {\n    private final BroadcastReceiver scanResult = new BroadcastReceiver() {\n        @Override\n        public void onReceive(Context context, Intent intent) {\n            Log.d(TAG, "Receive " + intent + ", " + ObjPrinter.bundleToString(intent.getExtras()));\n            if (intent.getAction().equals(ACTION_SCAN_SUCCESS)) {\n                String dataRead = intent.getExtras().getString(BARCODE_DATA);\n            } else if (intent.getAction().equals(ACTION_SCAN_ERROR)) {\n                int result = intent.getIntExtra(KEY_RESULT, CpcResult.RESULT.ERROR.ordinal());\n                CpcResult.RESULT resultAsEnum = CpcResult.RESULT.values()[result];\n                Toast.makeText(context, getString(R.string.scan_error, resultAsEnum.toString()), Toast.LENGTH_SHORT).show();\n            }\n        }\n    };\n}\n')),(0,i.kt)("p",null,"Intent's extras are :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.Keys.KEY_RESULT"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", result of the scan. You can use ",(0,i.kt)("inlineCode",{parentName:"li"},"CpcResult.getResultFromOrdinal(int)")," to get a ",(0,i.kt)("inlineCode",{parentName:"li"},"RESULT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.Keys.KEY_BARCODE_DATA"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", data scanned. Available only when result is ",(0,i.kt)("inlineCode",{parentName:"li"},"RESULT.OK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.Keys.KEY_BARCODE_DATA_BYTES"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"byte[]"),", data scanned in byte array. Available only when result is ",(0,i.kt)("inlineCode",{parentName:"li"},"RESULT.OK"))),(0,i.kt)("h3",{id:"defines"},"Defines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.IntentDefines.INTENT_ACTION_SCAN")," : ",(0,i.kt)("inlineCode",{parentName:"li"},'"fr.coppernic.intent.action.SCAN"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.IntentDefines.INTENT_ACTION_STOP_SCAN")," : ",(0,i.kt)("inlineCode",{parentName:"li"},'"fr.coppernic.intent.action.scan.STOP"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.IntentDefines.ACTION_SCAN_SUCCESS")," : ",(0,i.kt)("inlineCode",{parentName:"li"},'"fr.coppernic.intent.scansuccess"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.IntentDefines.ACTION_SCAN_ERROR")," : ",(0,i.kt)("inlineCode",{parentName:"li"},'"fr.coppernic.intent.scanfailed"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.Keys.KEY_PACKAGE")," : ",(0,i.kt)("inlineCode",{parentName:"li"},'"package"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.Keys.KEY_RESULT")," : ",(0,i.kt)("inlineCode",{parentName:"li"},'"res"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.Keys.KEY_BARCODE_DATA")," : ",(0,i.kt)("inlineCode",{parentName:"li"},'"BarcodeData"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Defines.Keys.KEY_BARCODE_DATA_BYTES")," : ",(0,i.kt)("inlineCode",{parentName:"li"},'"BarcodeDataBytes"')),(0,i.kt)("li",{parentName:"ul"},"Package",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"C-One\xb2 Android 7 : ",(0,i.kt)("inlineCode",{parentName:"li"},'"fr.coppernic.features.barcode.conen"')),(0,i.kt)("li",{parentName:"ul"},"C-One\xb2 Android 8 : ",(0,i.kt)("inlineCode",{parentName:"li"},'"fr.coppernic.features.barcode.coneo"')),(0,i.kt)("li",{parentName:"ul"},"IDPlatform : ",(0,i.kt)("inlineCode",{parentName:"li"},'"fr.coppernic.features.barcode.idplatform"')),(0,i.kt)("li",{parentName:"ul"},"...")))),(0,i.kt)("h2",{id:"configure-the-barcodes-service"},"Configure the barcode's service"),(0,i.kt)("p",null,"Barcode reader can be configured via Barcode Manager application. This application is usually installed on devices.\nIt is also available on ",(0,i.kt)("a",{parentName:"p",href:"/docs/start/copperapps"},"CopperApps"),"."),(0,i.kt)("h4",{id:"general"},"General"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scan sound: play a sound when scan is ended or not"),(0,i.kt)("li",{parentName:"ul"},"Scan display: display/hide scan indicator on screen (Set this option to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"  unless you know what you are doing)"),(0,i.kt)("li",{parentName:"ul"},"Continuous mode: enable/disable continuous mode (scan until button is released or barcode is read)"),(0,i.kt)("li",{parentName:"ul"},"Scan timeout: The time before the reader stops if there is no scans"),(0,i.kt)("li",{parentName:"ul"},"Barcode service startup at boot: enable/disable automatic barcode service start when device boot is finished"),(0,i.kt)("li",{parentName:"ul"},"Keep barcode reader opened: if checked, it improves scan speed"),(0,i.kt)("li",{parentName:"ul"},"Keyboard wedge: send data to input buffer in addition to intent"),(0,i.kt)("li",{parentName:"ul"},"Keyboard fast wedge: use faster keyboard wedge, an additional keyboard application needs to be installed"),(0,i.kt)("li",{parentName:"ul"},"Search and replace: use regular expression to search for a pattern in data read and replace it by another value")),(0,i.kt)("h4",{id:"barcode-reader"},"Barcode reader"),(0,i.kt)("p",null,"Barcode reader specific settings."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"Depend on devices."),(0,i.kt)("h4",{id:"symbologies"},"Symbologies"),(0,i.kt)("p",null,"Allow user to enable/disable symbologies, to add suffix and prefix, to add minimal and maximum lengths that can be read."),(0,i.kt)("h3",{id:"using-cpcbarcode-library"},"Using CpcBarcode library"),(0,i.kt)("p",null,"To configure the service, you should depend on ",(0,i.kt)("strong",{parentName:"p"},"CpcBarcode")," available in the SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import fr.coppernic.lib.barcode.core.GlobalConfig;\n\npublic class Example {\n    public void configure(){\n        // GlobalConfig is the class that will configure the barcode service.\n        final GlobalConfig globalConfig = GlobalConfig.Builder.get(context);\n        //enable or disable sound during scan\n        globalConfig.enableSound(enable);\n        //set continuous mode\n        globalConfig.enableContinuous(enable);\n        //set scan timeout (used when continuous mode is disabled\n        globalConfig.setScanTimeoutSoft(timeout);\n        //enable service notification\n        globalConfig.enableDisplayStartupNotif(enable);\n        //Enable service launch at device's startup\n        globalConfig.enableBarcodeServiceStartAtBoot(enable)\n    }\n}\n")))}u.isMDXComponent=!0}}]);