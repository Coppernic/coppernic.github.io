Access-ER & Access-ER e-ID
======

![](/img/devices/access_er_rfid-eid.jpg)

Specifications
--------------

Full specifications for Access ER can be downloaded [here](https://www.coppernic.fr/en/documentations/).

Barcode Scanning
----------------

Access ER is equiped with a 2D barcode scanner. It can read both 1D and 2D symbologies:

- [Barcode](/sdk/barcode/manager.md)

Key mapping
-----------

Access ER has 3 programmable buttons that can be managed using API. It is possible to remap a virtual key or an application on each of them:


- [Documentation](/sdk/core/mapping.md)

HID
-----------

AccessER HID embeds an HID RFID reader.
This reader is an OmniKey 5127CK.

Two modes are available :
- Wedge mode : Reader is emulating a keyboard, reading a card is generating a new keyboard event
- CCID mode : allows the use of standard PCSC library to communicate with the cards.


#### Wedge mode

In Wedge mode, the reader will act as keyboard device while reading a card.
Wedge mode can be configured, according to your needs. Contact Coppernic support for more details.


#### CCID mode

In CCID mode, communication are done using a PC/SC library. Coppernic publishes a compatible library, CpcPcsc.

For reader management, documentation and sample code can be found [here](https://github.com/Coppernic/PcscSample).

For advanced usage of the 5127CK, you may need to contact HID to have access on protected documentation. Contact Coppernic support for more details.

#### Switch mode

The applications "5127CKMINI Config Tools" is available on [CopperApps](docs/start/copperapps)
This application allows user to switch mode between CCID mode and Wedge Mode.
Wedge mode is configured to allowing reading all type of cards except Felica.

![](/img/hid/hid_ccid.png)
![](/img/hid/hid_wedge.png)

<!---
RFID
----

 [HID](/docs/product/access/hid)

Fingerprint
----

- Coming soon...
-->
