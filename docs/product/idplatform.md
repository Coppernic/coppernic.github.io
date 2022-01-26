ID Platform
===========

Specifications
--------------

Full specifications for ID Platform can be downloaded from [this page](https://www.coppernic.fr/en/documentations/).

Quick start
-----------

### Powering

To control powering of peripherals, `CoreServices` application needs to be installed.
This application is available on [CopperApps](/start/copperapps.md).
Power control is done via [CpcCore](/sdk/core/core.md) library.
More information [here](/sdk/core/power.md).

It is strongly advised to power off peripherals when screen is going off. This can be done
in `onStop()` method of `Activity` or `Fragment`. Powering off devices this way
will help saving battery life.

### USB-C and powering

The device contains an USB-C connector. As some peripherals are connected internally through USB, powering them causes USB-C not being available, especially for Android Debug Bridge (ADB).
So it's strongly recommanded to use ADB over WIFI when debugging an application (adb logcat).
ADB over WIFI is configured as follows :
- Enable (once) developer mode :
	- Go to `Settings` ==> `About phone` and press 5 times on `Build number`, until message "You are now a developer" is displayed
- Enable ADB over Wifi
	- Go to `Settings` ==> `System` ==> `Advanced` ==> `Developer options` ==> enable `WIFI debugging`
- Connect your device on WIFI network shared with your computer
- Get the WIFI IP address in `Settings` ==> `About phone` ==> `IP address`
- From your computer enter :
	- `adb connect [DEVICE_IP_ADDR]` (Replace [DEVICE_IP_ADDR] by the IP address of your device)
- Check that adb over wifi is connected by :
	- `adb devices`

Then you can execute `adb -s [DEVICE_IP_ADDR]:5555 logcat` or `adb -s [DEVICE_IP_ADDR]:5555 install [APK_PATH]` to execute logcat or apk install through WIFI.

If apk file is too big to install, it's recommanded to install the apk through USB-C, then debug through ADB over WIFI.

To ensure USB-C is active, you can enter the secret code in Phone application : `*#*#44004#*#*`

It shows the state of each peripherals, you can disable all USB connected peripherals (including USB Host) to have USB-C available.



### Peripherals

Each tablet can contain a set of peripherals, depending on which version you have. These peripherals can be connected to the main board via USB, Serial or SPI connections.



#### Permissions

[Android permissions](https://developer.android.com/guide/topics/permissions/overview) are needed to be able to communicate with USB peripherals.
These permissions remove the need to handle [USB permissions](https://developer.android.com/guide/topics/connectivity/usb/host) and to have a pop up displayed to the user.

Here is a list of permissions to declare in Manifest for each peripheral family:

| Peripheral family | Permission |
| ----------------- | ---------- |
| OCR reader | `"com.id2mp.permissions.MRZ"` |
| Fingerprint reader | `"com.id2mp.permissions.FINGERPRINT"` |
| Barcode reader | `"com.id2mp.permissions.BARCODE"` |
| HID RFID reader | `"com.id2mp.permissions.HID"` |
| Smart Card reader | `"com.id2mp.permissions.SCR"` |

1. Declare permission in **AndroidManifest.xml**:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="fr.coppernic.lib.interactors.ocr">

    <uses-permission android:name="com.id2mp.permissions.MRZ" />

    <application ...>
    </application>

</manifest>
```

2. [Ask for permission explicitely in your application](https://developer.android.com/training/permissions/requesting#perm-check):

[AndroidSplashScreen](https://github.com/Coppernic/AndroidSplashScreen) is here to help.

#### Samples

Samples are hosted on [gitlab](https://gitlab.com/Coppernic/idplatform/) but access is protected.

If you got a 404 error, you will need to have access granted by Coppernic team. Please ask [support](https://support.coppernic.fr/index.php) from our ticketing tool or send an email to [support@coppernic.fr](mailto://support@coppernic.fr).
