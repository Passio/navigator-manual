# SMS Command Log

!R0 (SMS report with ignition status) the response will be like shown below:
APP:046 5.0j
COM:-81 DA. 75.215.4.39
GPS:3D-RTIME 9
INP:0000000000111111 13.6V
MID:4644129809 ESN
INB:23.21.161.187:20500 LMD
--

* APP:046 5.0j  -  
 The Application ID value of the LMU indicating the host platform and the wireless networking technology of the LMU
* COM:-81 DA. 75.215.4.39  -  
 This is the signal strength the wireless modem sees from the network.
  - [./d/D]:
 If the character ‘D’ is present, it indicates the LMU had a data session established when it responded to the status request.
 The lower case ‘d’ indicates that only the Maintenance socket is ready.
 a ‘.’ indicates no sockets are ready.
  - [./a/A]:
 This field indicates if the LMU has received an Acknowledgement from the
 Inbound server. This field will be empty if the LMU has never received an
 ACK.
 The lower case ‘a’ will be present if it has received an ACK since the last
 cold boot (i.e. power cycle) but not the last warm boot (App Restart or Sleep).
 The upper case ‘A’ will be present if the LMU has received an ACK since the
 last warm boot. a ‘.’ Indicates no acknowledgement has been received.
  - [./L]:
This field indicates if the LMU’s log is currently active. An ‘L’ indicates that the log is currently in use (i.e. one or more records have been stored) where a ‘.’ indicates the log is inactive.
  - [IP Address]:
 This is an optional field if and is only present if the LMU has established a
 valid data session. This field will contain the current IP address of the LMU as
 assigned by the wireless network. Note that if you see a value of 192.168.0.0,
 this is an indication that the LMU has not been able to establish a data session.
* GPS:3D-RTIME 9  -  
 should be like this (in this case 9 is the number of satellite that the GPS see)
 if it shows RTIME 0 or "No Time Sync", that means there are no GPS satellite available for this unit.
* INP:0000000000111111 13.6V  -  
  - Input states: This field details the current state of each of the LMU’s discreet inputs.ong. The right most represents the state of input 0 (i.e. the ignition).
 A value of 1 indicates the input is currently in the high state (ON). A value of 0 indicates it is currently in the low state (OFF).
  - Vehicle voltage: This field will contain the current reading of the LMU’s internal A/D. This will be the supply voltage provided to the LMU in mV.
* MID:4644129809 ESN  -  
 The ESN number
* INB:23.21.161.187:20500 LMD  -  
 the "IP:PORT" is the outbound ip/port

Other SMS commands
----
!R3,5,0 - Clear Calamp internal log.

!R3,1,XX - Force the Calamp to send an event code (xx => 101,102 ...).

!R3,99,6 - Force the Calamp to sent message 5 (update VIN in the system) for OBD devices.

!R3,138,0 - Set the Calamp to use the actual ignition status.

!R3,138,1 - Simulate ignition OFF, it will STOP sending data like the vehicle is ignition off (DO NOT LEAVE IT WITH THIS STATUS).

!R3,138,2 - Simulate ignition ON, it will start sending data like the vehicle is ignition on (DO NOT LEAVE IT WITH THIS STATUS).

!R3,1,152 - Get telematic data.

!VV - Reply with OBD data including the VIN.

Move Calamps from PULS to CTC (Temporary)
----

| # | Command | Remark|
|---|---|---|
| 1 | !RP?2320,0,* | Check which DB calamp is in (PULS or CTC) |
| 2 | !R1,2320,0,dm.calamp.com | Move calamp to CTC |
| 3 | !R3,70,0 | Reset unit |

**Can take 5 mins to 24 hours for CTC check-in**
