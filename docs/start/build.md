---
sidebar_position: 2
---

Build
======

We are supporting [Gradle](https://developer.android.com/studio/build) build system that comes with Android ecosystem.
We are not supporting other build system such as Xamarin, Cordova, Flutter or old Android build system with Eclipse and Ant.

Repository
----------

Coppernic's libs are stored in [nexus](https://nexus.coppernic.fr).

On your `build.gradle` file add a repository:

```groovy
repositories {
    //[...]
    maven { url "https://nexus.coppernic.fr/repository/libs-release" }
    // Some librairies hosted on github are published in bintray
    maven { url "https://dl.bintray.com/coppernic/maven" }
}
```

> :warning: `https://artifactory.coppernic.fr/artifactory/` is now redirected to `https://nexus.coppernic.fr/repository/`.
> Please change it in your **build.gradle** file :warning:

Dependencies
------------

You can then add Coppernic's dependencies in your build:

```groovy
dependencies {
    // Coppernic
    implementation 'fr.coppernic.sdk.cpcutils:CpcUtilsLib:6.18.4'
    implementation 'fr.coppernic.sdk.core:CpcCore:1.8.16'

    // --- Optional

    // Ui
    implementation 'fr.coppernic.lib:splash:0.2.0'

    // Some interactors used with RxJava
    implementation 'fr.coppernic.lib:interactors:0.1.5'

    // Logging
    implementation 'com.jakewharton.timber:timber:4.7.1'
    implementation 'fr.bipi.treessence:treessence:0.3.0'
    implementation 'com.arcao:slf4j-timber:3.1'
}
```
