Serial Number for Android 10 or higher
====================

As of Android 10, Google has introduced some restrictions that disallow normal applications from retrieving sensitive information, including the serial number. You can find more details on these restrictions here: https://developer.android.com/about/versions/10/privacy/changes#non-resettable-device-ids

To adapt to this change, we have implemented a new method to retrieve the serial number on Coppernic devices. To use this method, ensure that CpcCore 2.1.5 or a higher version is installed on the device.

Here are the steps to retrieve the serial number:

```java
// Get the serial through the Android 10+ compatible getSerial() method.
OsHelper.getSerial(applicationContext) { serialNumber ->
   val serial = serialNumber
   Timber.d("SERIAL: $serial")    
}
```
