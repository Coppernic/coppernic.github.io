Serial Number for Android 10 or higher
====================

Starting in Android 10, some restictions have been introduced to retrieve serial number end other sensitive information.
You can have more details on these restictions here :
https://developer.android.com/about/versions/10/privacy/changes#non-resettable-device-ids

We have implemented a new method to get this serial number on Coppernic's devices.
You can use this method using CpcCore 2.1.5 or higher.


```java
// Get the serial through the Android 10+ compatible getSerial() method.
OsHelper.getSerial(applicationContext) { serialNumber ->
   val serial = serialNumber
   Timber.d("SERIAL: $serial")    
}
```