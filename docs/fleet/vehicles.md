# Vehicles

## How they are used in Pasio
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

#### In Read-only mode
Vehicle information includes; the devices associated to the vehicle, documents uploaded that are specific to the vehicle, Telematics information (if you have purchased this solution), and Installations, which contain pictures and information from the original installations. 
Under the General tab, there is a section titled Solutions. This may or may not be populated, but will show the purchased solutions if they are tied directly to a vehicle. The Assets section is a place where additional vehicle assets can be identified to maintain a full asset record within Passio Navigator. 

## Best Practice or SOP (Standard Operating Procedure)
1. Fill in all Main fields for Operations and Reporting.
2. Fill in all additional fields for Asset management.


## Samsara Integration

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


## UTA GTFS-RT Integration

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


## Vestige Integration

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


## Revecorp TransitCheck Integration

For each vehicle

1. Go to Configuration > Vehicles.
2. Click the vehicle name to open vehicle detail.
3. Click Edit on vehicle detail.
4. Populate TransitCheck Vehicle Id with the ID from TransitCheck. This may be referred to as Assist ID
5. Make sure that `passio-api@transit-check.com` has read access to this account so they can pull driver and vehicle details
6. Let Dev know to update Revecorp API doc to include the new account

## CTS Virtual EPC Integration

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

## Zonar - GPS Tracking Integration

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

