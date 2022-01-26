Agrident Wedge
=====


Introduction
------------
This application demonstrates how to use the Agrident Wedge application on a C-One² with LF Agrident RFID reader.
The application is composed of two parts:

 - Agrident Wedge Settings (AW Settings)
 - Agrident Wedge Scan (AW Scan)


Prerequisites
-------------

### C-One² LF Agrident

 - CoreServices version 1.9.0 and above must be installed on the device.
 - Agrident Wedge 2.4.0 and above must be installed on the device.

 The applications above can be found on [CopperApps](/start/copperapps.md).

What is a keyboard wedge?
-------------------------

A keyboard wedge is an application that can acquire data and send it directly into the keyboard buffer, just as if it was typed on a virtual keyboard.

Coppernic's wedge applications add a deeper integration capability by using Android `Intent` in order to send reader's events (successful read or read failure).


Agrident settings
--------------
Agrident Settings allows configuring wedge for the Sound, Timeout and so on...


![](/img/application/agrident_settings.png)

 - Scan Sound: plays a sound after a good or bad read.
 - Scan Display: displays an icon while reader is scanning.
 - Scan Timeout: allows setting time in seconds while the device is trying to read a tag.
 - Agrident Service startup boot: when enabled, the service will start automatically when the device boots.
 - Continuous Read: reads continuously until service is stopped or screen turns off.
 - Keyboard Wedge: when enabled, it will send result to the keyboard buffer. It is still broadcasting Intents.
 - Scan Enter: adds a carriage return of the data read in keyboard buffer.
 - Remove leading 0: Remove 0 from the first data sent.


Agrident Wedge Scan
---------
 This application just starts a scan to read an LF tag.
 You can use it remapping this application to one (or more) of the 3 programmable buttons. You can do it on the device in Settings > Remap key & shortcut.


 Using Agrident Wedge as a regular keyboard wedge
 --------
 - Remap the Agrident Wedge application to one (or more) of the 3 programmable buttons of the C-One.
 - Push the button.
 - Data will be sent as keyboard entries directly to the system.


 Using Agrident Wedge with Intents.
 ---------------------------------

 - For this example, Coppernic Utility library is used. You must declare it in build.gradle:

 ``` groovy
 // At project level
 allprojects {
     repositories {
         google()
         jcenter()
         maven { url "https://nexus.coppernic.fr/repository/libs-release" }
     }
 }
 ```

 ``` groovy
 // At module level
 dependencies {
     implementation 'fr.coppernic.sdk.cpcutils:CpcUtilsLib:6.13.0'
}
 ```


 - Declare a broadcast receiver in your class, it will receive the intents from the Agrident Wedge application:

 ``` java
 private BroadcastReceiver agridentReceiver = new BroadcastReceiver() {
     @Override
     public void onReceive(Context context, Intent intent) {        
         if (intent.getAction().equals(CpcDefinitions.ACTION_AGRIDENT_SUCCESS)) {
             // Data is available as a String
             String dataRead = intent.getStringExtra(CpcDefinitions.KEY_BARCODE_DATA);           
         } else if (intent.getAction().equals(CpcDefinitions.ACTION_AGRIDENT_ERROR)) {
             // Read failed (main cause is timeout)
         }
     }
 };
 ```

 - Register the receiver, for example in onStart:

 ``` java
 @Override
 protected void onStart() {
     super.onStart();
     // Registers agrident wedge intent receiver
     IntentFilter intentFilter = new IntentFilter();
     intentFilter.addAction(CpcDefinitions.ACTION_AGRIDENT_SUCCESS);
     intentFilter.addAction(CpcDefinitions.ACTION_AGRIDENT_ERROR);
     registerReceiver(agridentReceiver, intentFilter);
 }    
 ```

 - And unregister it, in onStop for example:

 ``` java
 @Override
 protected void onStop() {
     // Unregisters agrident wedge receiver
     unregisterReceiver(agridentReceiver);
     super.onStop();
 }
 ```

 - Trig a read:

 ```java
 private static final String AGRIDENT_WEDGE = "fr.coppernic.tools.cpcagridentwedge";

 // Starts Agrident wedge
 Intent launchIntent = getPackageManager().getLaunchIntentForPackage(AGRIDENT_WEDGE);
 if (launchIntent != null) {
     startActivity(launchIntent);//null pointer check in case package name was not found
 }
 ```

 If you don't want to declare CpcUtilsLib in your build, then here are
 string values:

 ```java
 public static final String ACTION_AGRIDENT_SUCCESS = "fr.coppernic.intent.agridentsuccess";
 public static final String ACTION_AGRIDENT_ERROR = "fr.coppernic.intent.agridentfailed";
 public static final String ACTION_AGRIDENT_SERVICE_STOP = "fr.coppernic.intent.action.stop.agrident.service";
 public static final String ACTION_AGRIDENT_SERVICE_START = "fr.coppernic.intent.action.start.agrident.service";
 public static final String ACTION_AGRIDENT_READ = "fr.coppernic.tools.agrident.wedge.READ";
 public static final String KEY_BARCODE_DATA = "BarcodeData";
 ```
