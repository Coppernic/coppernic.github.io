---
sidebar_position: 4
---

Quality
=======

## Generalities

While developing your application on our device, please follow the guidelines from Google :

[Core App Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality)

We also recommend reading the Google document about
[Battery Life Optimization](https://developer.android.com/topic/performance/power)

## Peripherals and power management

Peripheral power management has to be managed by your application. Power consumption on peripherals might decrease device battery life, especially when the application is not used, and has an impact in sleep mode.
Please make sure all peripherals are turned off when screen is turned off or when the operator is leaving.

## RFID

Looking for a card (Hunting) can be power consuming. We recommend accommodating your business or peripheral interaction logic to have a scheme where the RFID reader is the least turned on and in use.

For instance, during hunt time, RF field can be up during 200ms and then
turned off during 800ms. These settings ensure that the user experience
will not be affected and preserve battery life.
