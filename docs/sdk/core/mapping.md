Key Mapping
===========

## API from CpcCore 1.8.0 (package `mapping`)

This API is made to work on all Coppernic's products (Currently C-One, C-five and C-One²), and on all OS.
But you have to keep in mind that this API uses different internal API under the hood that can have some limitations.

For instance, to get the actual mapping value on C-five, you need to have at least the OS version v20180709.

This API is fully implemented on:

  - C-five OS v20180928
  - C-One² OS v20180907

All other OS and C-One are also supported but it may have some limitation. Please test API you need and contact [Coppernic Support](mailto://support@coppernic.fr) if you need help.

### Get a `Mapper` object

First thing to do is getting a `Mapper` object. A connection to a service is needed so getting a reference is done in an asynchronous manner. RxJava is here to help:

```java
Mapper.Factory.getKeyMapperSingle(context)
                 .subscribe(new DisposableSingleObserver<Mapper>() {

            @Override
            public void onSuccess(Mapper km) {
                // you can store a reference for a later use
                mapper = km;
            }

            @Override
            public void onError(Throwable e) {
                // Handle the error here
            }
        });
```

### Mapping

#### Import

```java
import fr.coppernic.sdk.mapping.Mapper;
import fr.coppernic.sdk.mapping.Mapper.MappingType;
import fr.coppernic.sdk.mapping.utils.MapperUtils;

import static fr.coppernic.sdk.mapping.Mapper.ProgKey.P1;
import static fr.coppernic.sdk.mapping.Mapper.ProgKey.P2;
import static fr.coppernic.sdk.mapping.Mapper.ProgKey.P3;
```

#### Prog keys

Programmable keys values are defined in `Mapper.ProgKey` enum.

#### API

```java
// Remove mapping for button 1
mapper.remove(P1);
// Remove mapping for button 2
mapper.remove(P2);
// Remove mapping for button 3
mapper.remove(P3);

// Remove all mapping
mapper.removeAll();

// Map a key
mapper.mapKey(P1, KeyEvent.KEYCODE_1);
mapper.mapKey(P2, KeyEvent.KEYCODE_2);
mapper.mapKey(P3, KeyEvent.KEYCODE_3);

// Get current mapping
assertThat(mapper.getKeyMapping(P1), is(KeyEvent.KEYCODE_1));
assertThat(mapper.getKeyMapping(P2), is(KeyEvent.KEYCODE_2));
assertThat(mapper.getKeyMapping(P3), is(KeyEvent.KEYCODE_3));
assertThat(mapper.getMappingType(P1), is(MappingType.KEY));
assertThat(mapper.getMappingType(P2), is(MappingType.KEY));
assertThat(mapper.getMappingType(P3), is(MappingType.KEY));

// Map P1 to BARCODE_SCAN
mapper.mapKey(P1, MapperUtils.getBarcodeMappingKeyCode());

// Map a shortcut
mapper.mapShortcut(P1, context, "com.google.android.youtube");
assertThat(mapper.getShortcutMapping(P1), is("com.google.android.youtube"));
assertThat(mapper.getMappingType(P1), is(MappingType.SHORTCUT));

//When you are done with mapper object
mapper.close();
```
### Special Case for Barcode

#### C-One²

API is stable from OS v20180907

- Map a key to BARCODE_SCAN: `mapper.mapKey(P1, MapperUtils.getBarcodeMappingKeyCode())`
- Get the BARCODE_SCAN value: `assertThat(mapper.getKeyMapping(P1), is(MapperUtils.getBarcodeMappingKeyCode()));`

#### C-five

- OS v20171117:
  - `mapper.getKeyMapping()` is not working well.
- OS v20180709:
  - Map a key to BARCODE_SCAN: `mapper.mapKey(P1, 293)`
  - Get the BARCODE_SCAN value: `assertThat(mapper.getKeyMapping(P1), is(KeyEvent.KEYCODE_BUTTON_MODE));`
- OS v20180928
  - Map a key to BARCODE_SCAN: `mapper.mapKey(P1, MapperUtils.getBarcodeMappingKeyCode())`
  - Get the BARCODE_SCAN value: `assertThat(mapper.getKeyMapping(P1), is(MapperUtils.getBarcodeMappingKeyCode()));`
