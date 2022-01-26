CpcBarcode library
==================

CpcBarcode is a library to control barcode reader on Coppernic's devices.

> For C-One and C-five :
> Old documentation [here](https://github.com/Coppernic/BarcodeSample/blob/release/1.0/readme.md)

Supported devices
-----------------

- C-One² and C-One² e-ID
- IDPlatform

This API is almost the same that the old one. Only `groupId` of dependencies is changing.
Old one is `"fr.coppernic.sdk.barcode:CpcBarcode:3.5.0"`

- [Old CpcBarcode repository](https://nexus.coppernic.fr/#browse/browse:libs-release:fr%2Fcoppernic%2Fsdk%2Fbarcode%2FCpcBarcode)
- [CpcBarcode repository](https://nexus.coppernic.fr/#browse/browse:libs-release:fr%2Fcoppernic%2Flib%2Fbarcode)

Build
-----

**build.gradle**

```groovy
repositories {
    maven { url 'https://nexus.coppernic.fr/repository/libs-release' }
}

String barcode = "1.3.3"

dependencies {
    // Standard implementation (Connector API use)
    implementation "fr.coppernic.lib.barcode:CpcBarcode:$barcode"

    // Implementation for specific product (only when you know what you are doing)
    implementation "fr.coppernic.lib.barcode:CpcBarcode-cfive:$barcode"
    implementation "fr.coppernic.lib.barcode:CpcBarcode-conen:$barcode"
    implementation "fr.coppernic.lib.barcode:CpcBarcode-coneo:$barcode"
    implementation "fr.coppernic.lib.barcode:CpcBarcode-idplatform:$barcode"
}
```

If you have product flavors with several devices including C-One²:

```groovy

dependencies {
    implementation "fr.coppernic.lib.barcode:CpcBarcode:$barcode"
}

// This will change the actual barcode dependency with the specific dependency for C-One²
configurations.all {
    if( name.matches("(light|full)[Cc]onen[a-zA-Z]+") ) {
        resolutionStrategy.dependencySubstitution {
            substitute module("fr.coppernic.lib.barcode:CpcBarcode:$barcode") with module("fr.coppernic.lib.barcode:CpcBarcode-conen:$barcode")
        }
    }
}
```

It is possible to add the same flavors than barcode library and to use these flavors in dependencies:

```groovy

dependencies {
    conenImplementation "fr.coppernic.lib.barcode:CpcBarcode-conen:$barcode"
    coneoImplementation "fr.coppernic.lib.barcode:CpcBarcode-coneo:$barcode"
    cfiveImplementation "fr.coppernic.lib.barcode:CpcBarcode-cfive:$barcode"
    idPlatformImplementation "fr.coppernic.lib.barcode:CpcBarcode-idplatform:$barcode"
}

```

Barcode reader
--------------

Barcode readers currently supported are :

 - Opticon mdi3100
 - Honeywell n6603 decoded
 - Honeywell n6003 undecoded
 - ad002

### C-One

| Barcode reader  | Port        | Baudrate |
| --------------- | ----------- | -------- |
| mdi3100         | /dev/ttyHS1 | 115200   |
| n6603_decoded   | /dev/ttyHS1 | 115200   |
| n6603_undecoded | camera      | na       |

### C-five

| Barcode reader  | Port   | Baudrate |
| --------------- | ------ | -------- |
| n6603_undecoded | camera | na       |

### C-izi

| Barcode reader | Port       | Baudrate |
| -------------- | ---------- | -------- |
| mdi3100        | /dev/ttyO0 | 9600     |

### C-eight

| Barcode reader  | Port   | Baudrate |
| --------------- | ------ | -------- |
| n6603_undecoded | camera | na       |

### IDPlatform

| Barcode reader  | Port        | Baudrate |
| --------------- | ----------- | -------- |
| ad002           | ?      | 9600       |

Power Management
----------------

To use power management, please go to [Power Documentation](https://developer.coppernic.fr/#//sdk/core/power)

Permissions
-----------

Before starting development on your application with the Barcode API, you should make sure your manifest has the appropriate declarations
to allow use of camera hardware when required and other related features.

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

CpcBarcode API
--------------

### Get a reader

A barcode reader instance is built using the `BarcodeFactory` class. Barcode reader
instance is given asynchronously. `onCreated()` method is called with the newly created
 instance. `onDisposed()` is called if reader instance is disposed for any reason or if
 the build has failed.

```java
public class Example implements BarcodeReader.BarcodeListener,
InstanceListener<BarcodeReader> {

    private BarcodeReader reader;

    public void makeReader() {
         BarcodeFactory factory = BarcodeFactory.get();
         //Mandatory
         factory.setBarcodeListener(this);

         //Optional
         factory.setBaudrate(115200);
         factory.setPort("/dev/ttyHS1");
         factory.setType(fr.coppernic.sdk.barcode.BarcodeReaderType.OPTICON_MDI3100);

         boolean ok = factory.build(context, this);
    }

    // Called with the new instance
    @Override
    public void onCreated(BarcodeReader instance) {
        Log.d(TAG, "onCreated " + instance);
        reader = instance;
        if (instance == null) {
            Log.w(TAG, "No reader available");
        } else {
            //enable power
            power(true);
        }
    }

    // Called if an error occurred.
    @Override
    public void onDisposed(BarcodeReader instance) {
        Log.d(TAG, "onDisposed " + instance);
        reader = null;
    }

    // [...]
}
```

### Reader opening

Opening is done asynchronously. `onOpened()` is called with the result of the operation.

```java
public class Example implements BarcodeReader.BarcodeListener,
InstanceListener<BarcodeReader> {

    private void open() {
        reader.open();
    }

    @Override
    public void onOpened(RESULT res) {
        Toast.makeText(getContext(), res.toString(), Toast.LENGTH_SHORT).show();
        // Do some operations after opening here
    }

}
```

### Reader closing

Be sure to close the reader when you are done with it. It can then free some resources.

```java
public class Example implements BarcodeReader.BarcodeListener,
InstanceListener<BarcodeReader> {

    private void close() {
        Log.d(TAG, "close");
        if (reader != null && reader.isOpened()) {
            reader.close();
        }
    }

}
```

### Get firmware version

```java
public class Example implements BarcodeReader.BarcodeListener,
InstanceListener<BarcodeReader> {

    private void getFirmware() {
        RESULT res = reader.getFirmware();
        Toast.makeText(getContext(), res.toString(), Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onFirmware(RESULT res, String s) {
        Log.d(TAG, "onFirmware " + res);
        log("Firmware : " + (s == null ? "null" : s));
    }

}
```

### Scan data

```java
public class Example implements BarcodeReader.BarcodeListener,
InstanceListener<BarcodeReader> {

    private void scan() {
        RESULT res = reader.scan();
        Toast.makeText(getContext(), res.toString(), Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onScan(RESULT res, ScanResult data) {
        Log.d(TAG, "onScan " + res);
        log(data == null ? "null" : data.toString() + ", " + res);
    }
}
```

### Connector

Connector is a special kind of reader. It is connecting to Barcode Service to get an instance of reader.
Here is how to get one:


```java
public class Example implements BarcodeReader.BarcodeListener,
InstanceListener<BarcodeReader> {

    private BarcodeReader reader;

    public void makeReader() {
         BarcodeFactory factory = BarcodeFactory.get();
         //Mandatory
         factory.setBarcodeListener(this);

         GlobalConfig globalConfig = GlobalConfig.Builder.get(mContext);
         globalConfig.setPort(/*port of barcode reader*/);
         globalConfig.setBarcodeType(/*type of barcode reader*/);

         //Optional
         factory.setType(fr.coppernic.sdk.barcode.BarcodeReaderType.CONNECTOR);

         boolean ok = factory.build(context, this);
    }

    // Called with the new instance
    @Override
    public void onCreated(BarcodeReader instance) {
        Log.d(TAG, "onCreated " + instance);
        reader = instance;
        if (instance == null) {
            log("No reader available");
        } else {
            //enable power
            power(true);
        }
    }

    // Called if an error occurred.
    @Override
    public void onDisposed(BarcodeReader instance) {
        Log.d(TAG, "onDisposed " + instance);
        reader = null;
    }

    // [...]
}
```

#### Timeout

Service is automatically configuring reader timeout to infinite.
As soon as the barcode service starts (when you disconnect from connector)
timeout settings will change. If you need to handle a specific timeout,
then you need to configure it each time you get the connector instance.
