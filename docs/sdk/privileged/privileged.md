Privileged library
==================

## Motivation

Privileged service makes available certain APIs which are in protected access. These APIs of the Android framework need the application to
be system in order to be accessible.
In some cases, these APIs need to be accessible by a standard application.
This service is still protecting access by verifying signature of calling application.

Privileged library makes communication with Privileged service easier.

## Requirements

You need to have `Privileged Extension` application installed on device. This application is available on CopperApps.

## Download

Check out the last version in [our maven repo](https://nexus.coppernic.fr/)

```groovy
repositories {
    maven { url "https://nexus.coppernic.fr/repository/libs-release" }
}

dependencies {
    version = "0.3.0-coppernic"
    implementation "fr.coppernic.lib.privileged:Privileged:$version"
}
```

## Usage

- [Time API](time)

### Logs

This library uses [SLF4J](http://www.slf4j.org/) for logging. Please use android binding to
log into logcat. More info on [Android binding](http://www.slf4j.org/android/)

```groovy
dependencies {
    // https://mvnrepository.com/artifact/org.slf4j/slf4j-android
    implementation 'org.slf4j:slf4j-android:1.7.30'
}
```

You can also bind SLF4J to timber. In this case please use this dependency

```groovy
dependencies {
    implementation 'com.arcao:slf4j-timber:3.1'
}
```

To activate verbose logging, please add this into your code :

```java
LogDefines.setVerbose(true);
```

Sometimes, it can have log for profiling, in this case, to activate them please add
this in code :

```java
LogDefines.setProfile(true);
```

One `TAG` is used for all logging from lib. It would be easy to filter on this tag if you
want to disable all logging from lib. Filtering can be done with `Timber` and a `Tree`
from [Treessence](https://github.com/bastienpaulfr/Treessence)


```groovy
dependencies {
    implementation 'fr.bipi.treessence:treessence:0.3.0'
}
```
