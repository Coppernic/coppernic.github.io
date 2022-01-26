---
sidebar_position: 4
---

Quality
=======

## Generalities

While developping your application on our device, please follow guidelines
from google :

[Core App Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality)

Please also read google document about
[Battery Life Optimization](https://developer.android.com/topic/performance/power)

## Peripherals and power management

Peripheral power management is realized by your application. Power consumption on peripherals might decrease device battery life, especially when application is not used and has an impact in sleep mode.
Please make sure that when screen is turned off or when operator is leaving
your application, then all peripherals are turned off.

## RFID

Looking for a card (Hunting) can be power consuming. Please implement every
strategies that are fine for you to decrease time where RFID reader is in use.

For instance, during hunt time, RF field can be up during 200ms and then
turned off during 800ms. These settings ensure that user experience
will not be affected and preserve battery life.
