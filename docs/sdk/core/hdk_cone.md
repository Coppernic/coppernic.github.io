HDK for C-One
=============

Don't known what a C-One is ? The answer is [here](https://www.coppernic.fr/prehome-mobility-fr/).

HDK API is designed with [RxJava2](https://github.com/ReactiveX/RxJava).

Prerequisites
-------------

For first generation of products, app **CpcSystemServices** at version 2.1.0 or above needs to be installed on device.
For [second generation](/start/quickstart.md) **CoreService** app must be installed instead of **CpcSystemServices**.
Please contact [Coppernic Support](mailto://support@coppernic.fr) in case of difficulties.

Use Pins of C-One's expansion port
----------------------------------

* Get a GpioPort instance:

```java
private GpioPort gpioPort;

@Override
public void onStart() {
    super.onStart();
    GpioPort.GpioManager.get()
        .getGpioSingle(getContext())
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe(new Consumer<GpioPort>() {
            @Override
            public void accept(GpioPort g) throws Exception {
                gpioPort = g;
            }
        });
}
```

* Use it:

```java
RESULT res = gpioPort.setPin1(true)
```

Observe input pin state
-----------------------

```java
//Register an observer to the input state
Disposable d = GpioPort.observeInputPin4(getContext(), 200, TimeUnit.MILLISECONDS)
                // Be notified only when value is changing
                .distinctUntilChanged()
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Consumer<Boolean>() {
                    @Override
                    public void accept(Boolean aBoolean) throws Exception {
                        //Do something
                    }
                });
//Dispose the observer when you are done
d.dispose()
```
