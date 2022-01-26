Barcode Manager
==============

> For C-One and C-five :
> Old documentation [here](https://github.com/Coppernic/ScanSample/blob/1.0.0/README.md)

API to use barcode scanner through Barcode Manager service.

There are 2 ways to trigger a barcode reading:

 - remap a physical button to barcode scan function
 - send an intent

## Supported devices

- C-One² and C-One² e-ID
- IDPlatform

This API is almost the same that the old one. The main differences is that for *C-One* and *C-five* devices,
`barcode service` is hosted inside `CpcSystemServices` application. For *C-One²* familly and *ID Platform*, `barcode service`
is hosted inside `Barcode Manager` application. `applicationId` is different for these apps so
`Intents` used for controlling barcode reader have different target compoenent names.

For instance, on *C-One²* we call `Intent.setPackage()` like this :

```java
intent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));
```

on *C-five*, we call `Intent.setPackage()` like this :

```java
intent.setPackage(OsHelper.getSystemServicePackage(context));
```

## Remap a physical button to barcode reading

In Android settings application, go to remap key & shortcuts (may change on different devices), then remap a key to SCAN or Barcode Scan
 (device dependent).

## Intents

This service can respond to `Intents`. There are two options to communicate via `Intents`:

- add a dependency to CpcBarcode library and use its helper function
- build an `Intent` from scratch and use it

In every cases, you shall declare a permission to be able to communicate with the service.

- **Permissions**

You shall declare `fr.coppernic.permission.BARCODE` permission into your manifest:

```xml
    <uses-permission android:name="fr.coppernic.permission.BARCODE" />
```

You also need to ask for this permission explicitly:

```java
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
    requestPermissions(new String[]{"fr.coppernic.permission.BARCODE"}, 42)
}
```

### Intents via CpcBarcode

- **Add CpcBarcode dependency**

More information [here](library)

- **Start service**

```java
ComponentName cn = BarcodeReader.ServiceManager.startService(context);
if(cn == null) {
    // Error
}
```

- **Stop service**

```java
ComponentName cn = BarcodeReader.ServiceManager.stopService(context);
if(cn == null) {
    // Error
}
```

- **Trig a scan**

```java
ComponentName cn = BarcodeReader.ServiceManager.startScan(context);
if(cn == null) {
    // Error
}
```

- **Stop a scan**

```java
ComponentName cn = BarcodeReader.ServiceManager.stopScan(context);
if(cn == null) {
    // Error
}
```

### Intents with CpcCore

#### Start service

```java
import fr.coppernic.sdk.core.Defines;
import fr.coppernic.sdk.utils.helpers.OsHelper;

public void startScan(){
    Intent scanIntent = new Intent();
    // Set package target for intent. We are using OsHelper to get real package name according to the device we are running on
    scanIntent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));
    // Set action for scan trig
    scanIntent.setAction("fr.coppernic.intent.action.start.barcode.service");
    // Tell service who we are
    scanIntent.putExtra(Defines.Keys.KEY_PACKAGE, context.getPackageName());
    // Send intent to service
    ComponentName ret;
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        ret = context.startForegroundService(intent);
    } else {
        ret = context.startService(intent);
    }
}
```

#### Stop service

```java
import fr.coppernic.sdk.core.Defines;
import fr.coppernic.sdk.utils.helpers.OsHelper;

public void startScan(){
    Intent scanIntent = new Intent();
    // Set package target for intent. We are using OsHelper to get real package name according to the device we are running on
    scanIntent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));
    // Set action for scan trig
    scanIntent.setAction("fr.coppernic.intent.action.stop.barcode.service");
    // Tell service who we are
    scanIntent.putExtra(Defines.Keys.KEY_PACKAGE, context.getPackageName());
    // Send intent to service
    ComponentName ret;
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        ret = context.startForegroundService(intent);
    } else {
        ret = context.startService(intent);
    }
}
```

#### Trig a scan

```java
import fr.coppernic.sdk.core.Defines;
import fr.coppernic.sdk.utils.helpers.OsHelper;

public void startScan(){
    Intent scanIntent = new Intent();
    // Set package target for intent. We are using OsHelper to get real package name according to the device we are running on
    scanIntent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));
    // Set action for scan trig
    scanIntent.setAction(Defines.IntentDefines.INTENT_ACTION_SCAN);
    // Tell service who we are
    scanIntent.putExtra(Defines.Keys.KEY_PACKAGE, context.getPackageName());
    // Send intent to service
    ComponentName ret;
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        ret = context.startForegroundService(intent);
    } else {
        ret = context.startService(intent);
    }
}
```

When reader is in continuous mode, it shall be stopped explicitly, **even if a barcode
is read**. Otherwise, it is stopped automatically by a read or a timeout.

#### Stop a scan

Stopping a scan is needed when the reader is in continuous mode.

```java
import fr.coppernic.sdk.core.Defines;
import fr.coppernic.sdk.utils.helpers.OsHelper;

public void stopScan(){
    Intent scanIntent = new Intent();
    // Set package target for intent. We are using OsHelper to get real package name according to the device we are running on
    scanIntent.setPackage(OsHelper.getSystemServicePackage(context, "fr.coppernic.features.barcode"));
    // Set action for scan trig
    scanIntent.setAction(Defines.IntentDefines.INTENT_ACTION_STOP_SCAN);
    // Tell service who we are
    scanIntent.putExtra(Defines.Keys.KEY_PACKAGE, context.getPackageName());
    // Send intent to service
    ComponentName ret;
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        ret = context.startForegroundService(intent);
    } else {
        ret = context.startService(intent);
    }
}
```

### Get scan result

 - Register a broadcast receiver

```java
import fr.coppernic.sdk.core.Defines;

public class Example extends android.app.Activity {
    private void registerReceiver() {
        IntentFilter filter = new IntentFilter();
        filter.addAction(Defines.IntentDefines.ACTION_SCAN_SUCCESS);
        filter.addAction(Defines.IntentDefines.ACTION_SCAN_ERROR);
        registerReceiver(scanResult, filter);
    }

    @Override
    protected void onResume() {
        super.onResume();
        registerReceiver();
    }

    @Override
    protected void onPause() {
         super.onPause();
         unregisterReceiver(scanResult);
    }
}
```

 - Get the result


```java
import fr.coppernic.sdk.core.Defines;
import fr.coppernic.sdk.utils.core.CpcResult.RESULT;

public class Example extends android.app.Activity {
    private final BroadcastReceiver scanResult = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            Log.d(TAG, "Receive " + intent + ", " + ObjPrinter.bundleToString(intent.getExtras()));
            if (intent.getAction().equals(ACTION_SCAN_SUCCESS)) {
                String dataRead = intent.getExtras().getString(BARCODE_DATA);
            } else if (intent.getAction().equals(ACTION_SCAN_ERROR)) {
                int result = intent.getIntExtra(KEY_RESULT, CpcResult.RESULT.ERROR.ordinal());
                CpcResult.RESULT resultAsEnum = CpcResult.RESULT.values()[result];
                Toast.makeText(context, getString(R.string.scan_error, resultAsEnum.toString()), Toast.LENGTH_SHORT).show();
            }
        }
    };
}
```

Intent's extras are :
 - **Defines.Keys.KEY_RESULT**: `int`, result of the scan. You can use `CpcResult.getResultFromOrdinal(int)` to get a `RESULT`
 - **Defines.Keys.KEY_BARCODE_DATA**: `String`, data scanned. Available only when result is `RESULT.OK`
 - **Defines.Keys.KEY_BARCODE_DATA_BYTES**: `byte[]`, data scanned in byte array. Available only when result is `RESULT.OK`

### Defines

  - **Defines.IntentDefines.INTENT_ACTION_SCAN** : `"fr.coppernic.intent.action.SCAN"`
  - **Defines.IntentDefines.INTENT_ACTION_STOP_SCAN** : `"fr.coppernic.intent.action.scan.STOP"`
  - **Defines.IntentDefines.ACTION_SCAN_SUCCESS** : `"fr.coppernic.intent.scansuccess"`
  - **Defines.IntentDefines.ACTION_SCAN_ERROR** : `"fr.coppernic.intent.scanfailed"`
  - **Defines.Keys.KEY_PACKAGE** : `"package"`
  - **Defines.Keys.KEY_RESULT** : `"res"`
  - **Defines.Keys.KEY_BARCODE_DATA** : `"BarcodeData"`
  - **Defines.Keys.KEY_BARCODE_DATA_BYTES** : `"BarcodeDataBytes"`
  - Package
     - C-One² Android 7 : `"fr.coppernic.features.barcode.conen"`
     - C-One² Android 8 : `"fr.coppernic.features.barcode.coneo"`
     - IDPlatform : `"fr.coppernic.features.barcode.idplatform"`
     - ...

## Configure the barcode's service

Barcode reader can be configured via Barcode Manager application. This application is usually installed on devices.
It is also available on [CopperApps](/start/copperapps.md).

#### General

* Scan sound: play a sound when scan is ended or not
* Scan display: display/hide scan indicator on screen (Set `false` to this option unless you know what you are doing)
* Continuous mode: enable/disable continuous mode (scan until button is released or barcode is read)
* Scan timeout: scan timeout
* Barcode service startup at boot: enable/disable automatic barcode service start when device boot is finished
* Keep barcode reader opened: if checked, it improves scan speed
* Keyboard wedge: send data to input buffer in addition to intent
* Keyboard fast wedge: use faster keyboard wedge, an additional keyboard application needs to be installed
* Search and replace: use regular expression to search for a pattern in data read and replace it by another value

#### Barcode reader

Barcode reader specific settings.

#### Parameters

Depend on devices.

#### Symbologies

Allow user to enable/disable symbologies, to add suffix and prefix, to add minimal and maximum lengths that can be read.

### Using CpcBarcode library

To configure the service, you shall depend on **CpcBarcode** available in SDK.

```java
import fr.coppernic.lib.barcode.core.GlobalConfig;

public class Example {
    public void configure(){
        // GlobalConfig is the class that will configure the barcode service.
        final GlobalConfig globalConfig = GlobalConfig.Builder.get(context);
        //enable or disable sound during scan
        globalConfig.enableSound(enable);
        //set continuous mode
        globalConfig.enableContinuous(enable);
        //set scan timeout (used when continuous mode is disabled
        globalConfig.setScanTimeoutSoft(timeout);
        //enable service notification
        globalConfig.enableDisplayStartupNotif(enable);
        //Enable service launch at device's startup
        globalConfig.enableBarcodeServiceStartAtBoot(enable)
    }
}
```
