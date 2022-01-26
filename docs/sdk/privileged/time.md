
# Time

## API

> Available from version 0.3

This API allows calling application to configure time on Android device.

This API is protected. Application shall be in list of authorised application in
privileged service. Application can also send an API key if it is not in this list.
API key is given by Coppernic dev team and shall stay secret.

**Getting TimeConnector object**

```java
TimeServiceConnector.Manager.get().getConnector(context, new ServiceEmitter() {
    public void onSuccess(TimeServiceConnector timeServiceConnector) {
        // Yeah !

        // Authenticate calling application with an API key
        timeServiceConnector.auth("");
    }

    public void onError( Throwable t) {
       // :-(
       Timber.e(t);
    }
})
```

**Set time**

```java
timeServiceConnector.setTime(millis);
```

**Set time Zone**

```java
// Accept only Olson ID
timeServiceConnector.setTime("Europe/Paris")
```

**Auto time**

```java
timeServiceConnector.enableAutoTime(true);

timeServiceConnector.getAutoTime(true);
```

**Auto time zone**

```java
timeServiceConnector.enableAutoTimeZone(true);

timeServiceConnector.getAutoTimeZone(true);
```

**Close connector when done**

```java
timeServiceConnector.close();
```

## Setup

**build.gradle**

```
repositories {
    maven { url "https://nexus.coppernic.fr/repository/libs-release" }
}

dependencies {
    implementation "fr.coppernic.lib.privileged:Privileged:0.5.1"
}
```
