# Vehicles

### How they are used in Pasio
> _The ability for you to read or write different pages and action buttons is based on the solutions purchased and the user level permission assigned._

**Most of the software modules provided by Passio require the understanding of buses and vehicles of the Agency. We "make every passenger count" after all. Therefore, it is essential to have the correct vehicles listed with the correct information in order to properly use each of the software modules. **

Typically, all buses are created by Passio support. If no buses are shown, clicking on the top left action button, "+ New Vehicle", will open up a modal to enter in all vehicle data. 

Once vehicles are shown, you can click on the vehicle number to see the Read-only version information of the vehicle. If you have Write access, you will see an "Edit" button in that modal. This will allow Write users to edit certain vehicle information. 

**The main fields that should be filled out for all vehicles are:**
 - Name
 - Seated capacity
 - Total capacity
 - Doors
 - ADA accessible status
**While seated capacity is fixed based on the number of seats, Total capacity could be variable. Total capacity is used to determine % full on Live Map, related Reports, and Passio GO. **

**Other fields are optional**, but provide a great place for the Agency to maintain their Asset information. Tool tips, shown by hovering above the field text, should describe the purpose of each field. The main fields listed above are used in most of the software modules, including Live Map, Dispatch & Messaging, SysOps, Driver Mgmt, Fleet Logistics, Inspector, Passio GO, and several others. 

Images can be uploaded, but are also uploaded if the Passio Installer app is used to initially install and setup the equipment or during servicing of the equipment. 

##### In Read-only mode
Vehicle information includes; the devices associated to the vehicle, documents uploaded that are specific to the vehicle, Telematics information (if you have purchased this solution), and Installations, which contain pictures and information from the original installations. 
Under the General tab, there is a section titled Solutions. This may or may not be populated, but will show the purchased solutions if they are tied directly to a vehicle. The Assets section is a place where additional vehicle assets can be identified to maintain a full asset record within Passio Navigator. 

### Best Practice or SOP (Standard Operating Procedure)
1. Fill in all Main fields for Operations and Reporting.
2. Fill in all additional fields for Asset management.


### Samsara Integration

Here is how to configure vehicles for Samsara GPS integration and optionally make the vehicle the default source for GPS data in Live Map, Passio GO, Websockets and GTFS

For each vehicle with Samsara device

1. Go to Configuration > Vehicles.
2. Click the vehicle name to open vehicle detail.
3. Click Edit on vehicle detail.
4. Select "Samsara" for GPS Provider
5. Select the vehicle name from the list for GPS Provider vehicle ID.
6. Click Save Vehicle.
7. Go to Configuration > Devices
8. Click + New Device
9. Set the name as "Samsara (<vehicle name>)", like "Samsara (Granada)"
10. Set "Samsara API" as the system
11. Set the correct vehicle
12. Leave GPS Active checked IF Samsara should be default GPS source. Otherwise uncheck.
13. Click Add Device


### UTA GTFS-RT Integration

Here is how to configure vehicles for UTA Occupancy Status GTFS RT integration

For each vehicle

1. Go to Configuration > Vehicles.
2. Click the vehicle name to open vehicle detail.
3. Click Edit on vehicle detail.
4. At External Providers, click "Add"
5. From the list, select "GTFS RT (Occupancy Status)"
6. Once added, click "GTFS RT (Occupancy Status)" to show External Provider detail
7. In the window that opened up, type the Vehicle ID from UTA
8. Click Save. The window will dismiss
9. Verify "GTFS RT (Occupancy Status)" now has the Vehicle ID in the label.
10. Click Save Vehicle


### Vestige Integration

Here is how to configure vehicles for Vestige Live Stream integration

For each vehicle

1. Go to Configuration > Vehicles.
2. Click the vehicle name to open vehicle detail.
3. Click Edit on vehicle detail.
4. At External Providers, click "Add"
5. From the list, select "Vestige"
6. Once added, click "Vestige" to show External Provider detail
7. In the window that opened up, type the Vehicle ID from Vestige (It is a long string called a GUID or UUID)
8. Click Save. The window will dismiss
9. Verify "Vestige" now has the Vehicle ID in the label.
10. Click Save Vehicle


### Revecorp TransitCheck Integration

For each vehicle

1. Go to Configuration > Vehicles.
2. Click the vehicle name to open vehicle detail.
3. Click Edit on vehicle detail.
4. Populate TransitCheck Vehicle Id with the ID from TransitCheck. This may be referred to as Assist ID
5. Make sure that `passio-api@transit-check.com` has read access to this account so they can pull driver and vehicle details
6. Let Dev know to update Revecorp API doc to include the new account

### CTS Virtual EPC Integration

For each vehicle

1. Configuration > Devices > New device
2. Device name is "Virtual EPC (externalID)"...so if the vehicle name is CN03925 and the External ID for that vehicle is 103, the device name would be "Virtual EPC (103)
3. Device System is Virtual Device
4. Vehicle is the Passio vehicle. So for the above example, select CN03925
5. Save Device
6. Click Edit on the assigned vehicle
7. Under External Providers, select `EPC Provider`
8. Click EPC Provider and populated "External Vehicle ID"
9. Save Vehicle

### Zonar - GPS Tracking Integration

Here is how to configure vehicles for Zonar GPS integration and optionally make the vehicle the default source for GPS data in Live Map, Passio GO, Websockets and GTFS

For each vehicle with Zonar device

1. Go to Configuration > Vehicles.
2. Click the vehicle name to open vehicle detail.
3. Click Edit on vehicle detail.
4. Select "Zonar" for GPS Provider
5. Select the vehicle name from the list for GPS Provider vehicle ID.
6. Type in Zonar ID
7. Click Save Vehicle.
8. Go to Configuration > Devices
9. Click + New Device
10. Set the name as "ZONAR_ID_()", like "ZONAR_ID_22"
11. Set "Web integration - Zonar API" as the system
12. Set the correct vehicle
13. Leave GPS Active checked (and Enable virtual MDT) IF Zonar should be default GPS source. Otherwise uncheck.
14. Click Add Device



## Active Route Management (ARM)

Active Route Management (ARM) helps drivers keep even spacing between buses on the same route. It tells each driver to **Maintain speed**, **Slow down**, **Speed up**, **Stop and wait**, or **Drop & Go**. The goal is to prevent bus bunching, where buses on the same route end up running nose to tail.

ARM is advice only. It does not change schedules, ETAs, or assignments.

### How ARM works

1. The MDT checks in with the Passio server on its event interval while the driver is logged in on an ARM-enabled route, in service, and not on a deadhead.
2. The server finds every bus that has been on the same route in the last 10 minutes. It places each bus on the route path using GPS from the MDT, or from the GPS device on the same bus.
3. For each bus, the server works out the bus **in front** and the bus **behind**, and the distance to each along the route.
4. It turns those distances into minutes using the route block's historical average speed for that day of the week. If there is no speed history, it assumes about 22 mph (10 m/s).
5. It compares the gaps and sends the driver a command (see "ARM logic" below).
6. The MDT shows the command, plus the bus in front and the bus behind (stops, miles, minutes) and a strip showing every bus on the route.

Only buses on the **same route** are compared. Buses on other routes, out of service, or on a deadhead are ignored.

### Turning ARM on

1. **Account:** Passio enables the **Active route mgmt UI** admin setting on the account. This adds **Overview > Active Route Mgmt** to Navigator.
2. **Route:** Check **Enable ARM** on each route that should use it, either in the route settings or on the Active Route Mgmt page.
3. **MDTs:** Settings marked with a red lightning bolt on the Active Route Mgmt page are stored on the MDT. After changing them, send a config update to the MDTs on that route.

### ARM logic

ARM has three ways to decide what "evenly spaced" means. Which one runs depends on the route settings.

#### Logic 1: 50/50 (default)

Used when no headway lock or route time lock is set.

ARM compares the minutes to the bus in front with the minutes to the bus behind:

- The two gaps are within 1 minute of each other: **Maintain speed**
- The bus in front is closer than the bus behind: **Slow down**
- The bus behind is closer than the bus in front: **Speed up** (or **Drop & Go**)

The MDT explanation reads: "You will arrive Xm after the front bus, and the back one will arrive Y after you."

#### Logic 2: Headway lock

Used when **Headway lock** is checked and **Desired headway** is set. It is also used automatically when the route block is part of a Headway that is active right now. In that case the Headway frequency replaces the ARM headway setting.

ARM compares the minutes to the bus in front with the target headway:

- Within 1 minute of the headway: **Maintain speed**
- More than 1 minute shorter than the headway: **Slow down**
- More than 1 minute longer than the headway: **Speed up** (or **Drop & Go**)

The MDT explanation reads: "Your interval between arrivals is Xm, but headway is Ym."

#### Logic 3: Route time lock

Meant to divide **Desired route time** by the number of buses to get the headway, then run like Logic 2. See "Known limitations" before using it.

#### Stop and wait

Stop and wait applies when ARM would say **Slow down** and the bus in front is less than 1 minute ahead:

- It only shows while the bus is inside a stop geofence. Outside a stop, the driver sees **Slow down** instead.
- It runs once per stop.
- The MDT shows a countdown. The countdown is capped at the stop's **Dwell** time when a dwell time is set.
- In the last 5 seconds the MDT shows **GO**.

#### Drop & Go

When **Drop & Go logic** is checked, **Speed up** is replaced with **Drop & Go**, telling the driver to let riders off and leave without waiting. It only shows inside a stop geofence. Outside a stop the driver sees **Maintain speed**.

### Settings

Route settings are on **Overview > Active Route Mgmt**. Click a route to open its properties.

| Setting | What it does |
|---|---|
| Enable ARM | Turns ARM on for the route. Update MDT config after changing it. |
| Suspended | Meant to pause ARM without turning it off. See "Known limitations." |
| Drop & Go logic | Shows Drop & Go instead of Speed up. |
| Desired bus amount | For reference only. Not used in any calculation. |
| Desired headway, minutes | Target minutes between buses. Used only when Headway lock is checked. |
| Headway lock (Logic 2) | Use the desired headway instead of 50/50. |
| Desired route time, minutes | Total time for one trip around the route. Used only when Route time lock is checked. |
| Route time lock (Logic 3) | Use route time divided by number of buses as the headway. |
| Action switch in Geo, seconds | Minimum time a command stays on screen before ARM can change it. Default 60. |
| Action switch out Geo, seconds | Same as above. Default 180. ARM currently uses the **smaller** of the two values for both. |
| Max allowed detour, meters | How far a bus can be from the route path and still be placed on the route. Default 100 m when blank. |
| Ignore visited stop | Place the bus by GPS only, ignoring the last stop the driver counted at. Use when drivers count early and buses jump ahead on the ARM screen. |

Per-stop setting:

| Setting | What it does |
|---|---|
| Dwell | Longest time a Stop and wait countdown can run at this stop. 0 means no cap. |

### What the driver sees

The ARM screen opens on its own once the bus is moving, and comes back 30 seconds after the driver taps away. Drivers can also open it by tapping the clock.

| Command | Color | Meaning |
|---|---|---|
| Maintain speed | Green | Spacing is fine |
| Slow down | Yellow | Too close to the bus in front |
| Speed up | Violet | Too far behind the bus in front |
| Drop & Go | Violet | Like Speed up, at a stop |
| Stop and wait | Red | Hold at this stop for the countdown |
| GO | Green | Countdown finished |

Status messages instead of a command:

| Message | Meaning |
|---|---|
| Waiting for GPS... (N) | The server cannot place this bus on the route yet. N is the percent of expected GPS points received in the last 20 minutes. |
| Wrong GPS Active device | Neither the MDT nor another device on the bus is marked GPS Active. |
| Clock error Nh | The MDT clock is off by N hours. |
| suspended | ARM is turned off for this route on the server. |
| no data / bad data / updating | The MDT did not get a usable answer from the server. |

### Troubleshooting

#### "Slow down" with only one bus on the route

With one bus, the bus in front and the bus behind are the same bus. The gap is the time for one full trip around the route.

- With 50/50 logic, both gaps are equal, so the driver always sees Maintain speed.
- With Headway lock, or with an active Headway on the route block, ARM compares the full trip time to the headway. If the trip is more than 1 minute shorter than the headway, the driver sees **Slow down** all the time.

On routes that often run with one bus, clear Headway lock. If the block is set up with a Headway, check that the Headway frequency matches the real trip time when one bus is running. ARM adds nothing on a route that only ever has one bus.

#### Commands flip too often

- Raise **both** Action switch values (for example to 120 seconds). ARM uses the smaller of the two, so a 0 in either field means commands can change on every check-in.
- The tolerance is a fixed 1 minute. On short routes or with short headways, small changes in traffic can push buses back and forth across that line.

#### Times on the ARM screen look wrong

Minutes come from distance divided by the route block's historical average speed. On a new route block, or one with little history, ARM uses about 22 mph. On slow campus loops that makes gaps look shorter than they are, which leads to too many Slow down commands. Times get better as speed history builds up.

#### Buses missing, jumping, or in the wrong order

- Check that each bus has a GPS Active device and is logged in on the right route.
- Check that the route path matches the road. Buses more than the Max allowed detour away from the path cannot be placed.
- If drivers count stops early, check **Ignore visited stop**.
- "Wrong stop order!" on the Active Route Mgmt page means the bus is visiting stops in a different order than the route.

#### Checking what a driver was told

On **Overview > Active Route Mgmt**, click a bus and choose **Real device log** to see the last command ARM sent to that MDT. Passio support can pull the full command history for the last month.

### Known limitations

- **Suspended** is not honored by the server. To pause ARM, clear **Enable ARM** and update the MDT config.
- **Route time lock** does not divide by the number of buses. It uses the full route time as the headway, so most buses are told to Slow down. Use Headway lock instead.
- **Action switch in/out Geo** are not applied separately. The smaller value is used for both.
- **Desired bus amount** is not used.

