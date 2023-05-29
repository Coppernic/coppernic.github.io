Serial Number for Android 10 or higher
====================

As of Android 10, Google have introduced some restrictions disallowing normal applications to retrieve sensitive information including the serial number.
You can view more details on these restrictions here:
https://developer.android.com/about/versions/10/privacy/changes#non-resettable-device-ids

In order to account to this change, we have implemented a new method to retrieve this serial number on Coppernic devices.
In order to be able to use this method, CpcCore 2.1.5 or higher should be installed on the device.

Here is how to retrieve a serial number:

```java
// Get the serial through the Android 10+ compatible getSerial() method.
OsHelper.getSerial(applicationContext) { serialNumber ->
   val serial = serialNumber
   Timber.d("SERIAL: $serial")    
}
```
