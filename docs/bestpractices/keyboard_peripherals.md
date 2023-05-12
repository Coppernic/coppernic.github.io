---
sidebar_position: 1
title: Keyboard peripherals
---

Keyboard peripherals
==================================

About keyboard Peripherals
------------------------

Some peripherals available on Coppernic devices are managed as keyboard-type device by Android OS.
It concerns some barcode reader, RFID reader, MRZ reader.

A device like [HID reader on Access-ER](/docs/product/access-er/hid) can act as CCID device, or as a keyboard wedge, depending its configuration.

Impact on Android activity life cycle
------------------------

By default an Android Activity treats a keyboard plug as a configuration change.

https://developer.android.com/guide/topics/resources/runtime-changes#HandlingTheChange

This leads to Activity being recreated when a keyboard peripheral is power on or powered off, and can seem to a bad user experience, or seems there is a bug.

To avoid this, it is possible to disable Activity recreation by using android:configChanges in the manifest of the Activity.

https://developer.android.com/guide/topics/manifest/activity-element

It can be recommended to use this value in the manifest file :

```java
android:configChanges="orientation|screenSize|screenLayout|keyboardHidden|keyboard|locale"
```

