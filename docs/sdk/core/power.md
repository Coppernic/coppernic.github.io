Power
=====

Setup
-----

* Create a power listener:

```java
private final PowerListener powerListener = new PowerListener() {
    @Override
    public void onPowerUp(RESULT res, Peripheral peripheral) {
        if (res == RESULT.OK) {
            //Peripheral is on
        } else {
            //Peripehral power status is undefined
        }
    }

    @Override
    public void onPowerDown(RESULT res, Peripheral peripheral) {
        //Peripehral is off
    }
};
```

 * Register the listener:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    PowerManager.get().registerListener(powerListener);
}
```

 * Select a peripheral according to device and power it on:

```java
if (OsHelper.isCone()) {
    peripheral = ConePeripheral.FP_IB_COLOMBO_USB;
	//Could be any other enum value corresponding to your device
} else if (OsHelper.isIdPlatform()) {
    peripheral = IdPlatformPeripheral.FINGERPRINT;
	//Could be any other enum value corresponding to your device
}

peripheral.on(context);
//The the listener will be called with the result
```

 * Power off when you are done:

```java
peripheral.off(context);
//The the listener will be called with the result
```

 * Release resources:

```java
@Override
protected void onDestroy() {
    PowerManager.get().unregisterAll();
    PowerManager.get().releaseResources();
    super.onDestroy();
}
```

More information
----------------

- On C-One, C-One² and their e-ID counterpart, you can use `MASTER_ASKEY_CONE_GPIO` to power off all devices at the same time.

- On C-One² and C-One² e-ID, you can use `USB_HOST_ASKEY_CONE_GPIO.off(context)` to force USB being device. This allows C-One² to be powered by USB. Please use `CpcCore` at version 1.8.16 for this.
