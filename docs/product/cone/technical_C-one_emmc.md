Technical note about E-MMC change on C-One devices (V1)
=======================================================

## e-MMC change (Flash MEMORY)

Due to the end of life of the internal flash memory (e-MMC) of the C-One, this memory was replaced in 2018.

This change was done between the serial numbers **E18BG007595** and **E18BG008068**.

  - All the C-One with serial number older than **E18BG007595** use and old memory Flash version 1 (eMMC-v1)
  - All the C-One with serial number newer than **E18BG008068** use new memory Flash version 2 (eMMC-v2)
  - Between these serial numbers, it is difficult to know which version have been installed.

## Operating System

C-One’s Operating System (OS) has also been changed to support both eMMC version.

OS versions newer or equal to

  - Jelly Bean : **20171013**
  - KitKat : **20180712**

are supporting both eMMC versions.

Older OS versions do not work with eMMC-V2.

It is strongly recommended to validate that the OS version supports both versions. We do not have any more motherboard in stock with eMMC-V1.

Please contact [support](https://support.coppernic.fr/index.php) if you have any problems with this flash memory change.

## Current leakage on serial communication

We have also corrected a current leakage from OS newer and equal to

  - Jelly Bean: **20180706**
  - KitKat: **20180712**

In order to correct it, we need to enable the serial connection (`EXTERNAL_UART_MODE`) before communicating with serial reader (ASK) connected on the C-One.
This modification has been applied from library `CpcCore 1.8.2` and `CpcAsk 3.2.1`.
You will need to update these libraries with new OS to make your application work.
You will also need to update `CpcSystemServices` to at least `v3.3.1`.

For Jelly Bean, using OS **20171013** will allow using old software and using the new eMMC version.

For Kitkat, you will have no other choice but to update the libraries in your application.

## Summary

### E-MMC

| | Before E18BG007595 | E18BG007595 <-> 8068 | After E18BG008068 |
| --- | --- | --- | --- |
| Version eMMC | eMMC-V1 | ? | eMMC-V2 |
| Version OS JB | All versions | **20171013** and after, do not use older versions | **20171013** and after, do not use older versions |
| Version OS KK | All versions | **20180712** and after, do not use older versions | **20180712** and after, do not use older versions |

### Current Leakage

| | JB 20171013 | JB 20180706 and newer | KK 20180712 and newer |
| --- | --- | --- | --- |
| CpcCore < `1.8.2`, CpcAsk < `3.2.1`, CpcSystemServices < `3.3.1` | :heavy_check_mark: |  :x: |  :x: |
| CpcCore >= `1.8.2`, CpcAsk >= `3.2.1`, CpcSystemServices >= `3.3.1` | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
