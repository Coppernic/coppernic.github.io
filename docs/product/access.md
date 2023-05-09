Access
======

![](/img/devices/access.png)

Specifications
--------------

Full specifications for Access can be downloaded [here](https://www.coppernic.fr/en/documentations/).

Barcode Scanning
----------------

Access is equiped with a 2D barcode scanner. It can read both 1D and 2D symbologies:

- [Barcode](/sdk/barcode/manager.md)

Key mapping
-----------

Access has 2 programmable buttons that can be managed using API. It is possible to remap a virtual key or an application on each of them:


- [Documentation](/sdk/core/mapping.md)


Optional 'Pistol Grip'
-----------

![](/img/devices/access-pistol-grip.png)

The Pistol Grip is generating a key event when trigger is pressed and can be accessed from any application using standard Android Key Event management [here](https://developer.android.com/reference/android/view/KeyEvent.Callback).

The event trigger code is defined in Coppernic SDK

You can add Coppernic's dependencies in your build:
```groovy
dependencies {
    implementation 'fr.coppernic.sdk.core:CpcCore:2.2.4'
```

And the code in activity will be :

```java
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent keyEvent) {
        if (keyCode == OsHelper.getTriggerKey()) {
           // do action
           return false;
        }
        return super.onKeyDown(keyCode, keyEvent);
    }
```

:warning: Avoid using "Scan display" option in BarcodeManager, as event will be raised as key down when icon is displayed.
:warning: Like with a keyboard key event, several key down event will be generated if the finger remains pressed on the pistol trigger without releasing.

A sample which demonstrates the use of a Pistol trigger to activate the barcode scan is available [here](https://github.com/Coppernic/ScanSample)
