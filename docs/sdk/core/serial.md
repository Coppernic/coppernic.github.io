Serial communication
====================

You can take inspiration from this [serial app](https://github.com/Coppernic/Serial).

Getting serial object
---------------------

A `SerialCom` object is given by an `InstanceListener`. A connection to Coppernic's system service is needed to give this object.
We are calling this **assynchronous instanciation**:

```java
SerialFactory.getDirectInstance(context, new InstanceListener<SerialCom>() {
            @Override
            public void onCreated(SerialCom instance) {
                // You can store instance of SerialCOm for future use.
                serialCom = instance;
            }

            @Override
            public void onDisposed(SerialCom instance) {
                // handle this case
            }
        });
```
Using SerialCom object
----------------------

As soon as this object is given, you can use it to communicate with serial port:

```java
/* Error codes */
int ERROR_OK = 0;
int ERROR_FAIL = -1;
int ERROR_OPEN = -2;
int ERROR_TIMEOUT = -3;
int ERROR_OPEN_SECURITY_EXCEPTION = -4;
int ERROR_OPEN_IO_EXCEPTION = -5;
int ERROR_NOT_BOUND = -6;
int ERROR_ALREADY_OPENED = -7;
```

* Port opening:

```java
// Opening port
int ret = serial.open("/dev/ttyHSL1", 9600);
// 0 means no error
```

* Sending data:

```java
byte[] data = new byte[]{ 0x01, 0x02, 0x03};
int ret = serial.send(data, data.length);
// 0 means error, else return length of data sent
```

* Receiving data:

```java
byte[] data = new byte[10];
int ret = serial.receive(1000, 10, data);
// ret is an error code
```

* Close Port:

```java
// Closing port
serial.close();
```
