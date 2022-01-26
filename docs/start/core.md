Core
====

Build
-----

**build.gradle**

```groovy
repositories {
        //[...]
        maven { url "https://nexus.coppernic.fr/repository/libs-release" }
    }
```

```groovy
dependencies {
    implementation 'fr.coppernic.sdk.cpcutils:CpcUtilsLib:6.19.1'
    implementation 'fr.coppernic.sdk.core:CpcCore:1.11.2'

}
```

 * Last versions of libs can be found in [repo](https://nexus.coppernic.fr/#browse/browse).
 * `implementation` is a key work of Android gradle plugin 3.x.x, if you are using an older plugin, consider using `compile` instead.

HDK
---

How to use HDK on:

 * [C-One & C-One² family](/sdk/core/hdk_cone.md)

Power
-----

 - [power package](/sdk/core/power.md)

Others
--------

 * [Settings](/sdk/core/settings.md)
 * [Key Mapping](/sdk/core/mapping.md)
