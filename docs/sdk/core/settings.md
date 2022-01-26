Settings
========

NFC
---

Enable or disable NFC.

> Available on C-five

### Prerequisites

CpcSystemServices 2.2.0 or above installed on C-five.

### Code

```java
Nfc.enable(context, true, new Callback<RESULT>() {
            @Override
            public void onCallBack(RESULT var) {
                //Called when operation is done. Check the result to be sure that operation has gone well
                assertThat(var, is(RESULT.OK));
            }
        });
```
