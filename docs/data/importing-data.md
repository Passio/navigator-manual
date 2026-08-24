# Importing Data

## GTFS

Upload the GTFS .zip file.  
Existing matching routes and stops data will be replaced with GTFS data.

## Stops

Upload a .csv file for importing routes and/or stops. 

**Supported fields:**  
`route`, `stopOrder`, `distance`, `latitude`, `longitude`, `stop`, `stopCode`, `stopDescription`, `radius`

**Field formatting**
- `route`: The route name.
- `stop`: The stop name.
- `radius`: A stop radius of `50` is default unless specified.

Make sure to preview the stop file first in Excel to make sure the apostrophes are properly formatted. If they are improperly formatting, they will appear in Passio Navigator as correct, but will export with improper formatting.

[Download sample](../assets/import.csv)
## Logs

Upload a .csv file with logs using the following field names.

For trip based systems, use Segment name for the `route` field.  
For `routeBlock`, enter the Trip Group name.  
Driver names will be entered as they are in the system. Use LastName,First if that is how they are formatted.

**Required fields:**   
`date`, `time`, `bus`, `route`, `routeBlock`, `driver`, `passengerType`, `onOff`, `count` , `device`

Device must be included in the .CSV file. If the device is unknown or not needed to be specified, use "manual" as the value


**Optional fields:**   
`stop`, `tripId`

**Using Id instead of name:**  
In the header row, the following Id fields can be swapped for their name field equivalent.  For example route can be swapped for routeId.  The upload may not have a field header for both the name field and Id field at the same time.  For example a header can not have both route and routeId fields in the header on the same upload.  
`busId`, `routeId`, `routeBlockId`, `driverId`, `stopId`

**Field formatting**
- `date`: DD/MM/YYYY (this is a formatting setting in your spreadsheet software)
- `time`: HH:MM:SS (in 24 hour format) 7:15 AM = `07:15:00` and 11:59 PM = `23:59:00`
- `driver`: the driver's first and last name `Abraham Lincoln`
- `route` and `routeBlock`: Only non-archived routes may be uploaded by name.  Archived routes may be uploaded using `routeId` and `routeBlockId`. Use Segment name for Trip based systems. routeBlock is the same as Trip Group
- `onOff`: `on` or `off`
- `count`: positive or negative number
- `passengerType`: The key name of the passenger type.

**Best practices:**
- Label the file with the date or month of impacted data.  
- Field header names should be spelled using camelCase.  
- Stamp each record with a `time` that falls within the window the bus was actually in service on that route and `routeBlock` that day. Uploading a count also writes the vehicle assignment (bus → route, block, driver) at that timestamp, so a time when the bus was out of service or running a different route will misreport the count and can distort assignment history. Prefer a nominal time tied to the specific block (for example, shortly after that block pulls out) over a single time for the whole file.  
- When offsetting or correcting a previously uploaded row (see below), reuse the exact `date` and `time` of the original row so the correction lands on the same assignment.  

**How uploaded times interact with assignments:**  

Each uploaded row does two things: it records the ridership count, and it writes an assignment record (`bus → route`, `routeBlock`, `driver`, in/out of service) at the row's date and time. Reports do not read the route or driver off the log row itself — for a bus at a given moment they derive the assignment from the most recent assignment record at or before that moment, carried forward until the next change (up to 120 days). Practical consequences:

- Do not upload a count at a time the bus was out of service or unassigned. A row with a route but no `routeBlock` is reported as out of service and drops out of route and block totals.
- Because the derived assignment carries forward, a count stamped at the wrong time can flip a bus to in service and reassign it for that whole window — changing how GPS and other data near that time is reported, not just the uploaded row.
- For historical or archived data, upload using `routeId` and `routeBlockId`, include `tripId`, and choose times that do not overwrite real assignment changes.  

**Upload success and errors:**  

-	An upload will only be accepted if 100% of the data being uploaded is valid.  A success message will appear in the import status table field with the number of logs imported.
  
-	An upload terminates at the first encounter of an error in data being uploaded.  That first error will appear in the import status table field.  The error status will specify the row number and field name where the error was encountered.  The file’s field header name row is considered row 1.
  
-	Troubleshoot by checking any formatting requirements for that field, correct spelling and ID numbers, and that field header names are spelled correctly.  

**If a mistake is uploaded, follow these steps:**
1. Create and upload new manual upload file with negative data. Reference table below for example.
2. Create and upload new manual upload file with correct data. Reference table below for example.
3. Be sure not to remove log uploads. This only removes the upload and does not impact the data.

### Example where 45 counts were uploaded when actual count was 52
| Type              | Contents                        |
| ----------------- | ------------------------------- |
| File with Mistake | `03/11/2023, 07:15:00, ..., 45` |

| Step | Type             | Contents                         |
| ---- | ---------------- | -------------------------------- |
| 1    | Offset log file  | `03/11/2023, 07:15:00, ..., -45` |
| 2    | Correct log file | `03/11/2023, 07:15:00, ..., 52`  |



[Download sample](../assets/importLog.csv)

Support for `tripId` was added on July 28, 2023. This is useful when uploading data that needs to be reported at the trip level. For example, Passenger Miles Travelled is based on trip-level data. If there is incorrect data at the trip level, this can now be reconciled.

## Paddles

Upload the .csv file with paddles.  
  
**Required fields:**  
`block_id` (GTFS block_id), `paddle` (paddle name)  

[Download sample](../assets/importPaddle.csv)

## Drivers

Upload a .csv file with Drivers.   
  
**Supported fields:**  
`name` (required), `email`, `pin`, `phone`, `firstName`, `lastName`

**Field formatting**
- `name`: the driver's first and last name `First Last`

[Download sample](../assets/importDriver.csv)

## Devices

Upload a .csv file with hardware devices

**Supported fields**:
`name` (required), `system` (required - matches by name), `systemid`, `bus` (name) OR `busid`, `calampesn`, `phone`, `routerlastfourletters`, `serialnumber`, `fullserialnumber`, `simcardid`, `imei`, `usectc`, `calampctc`, `apsActive`, `gpsactive`, `enablevirtualmdt`, `vmdt`, `teamviewer`

[Download sample](../assets/importDevice.csv)

## Vehicles

Upload a .csv file with vehicles

**Supported fields**:
`name` (required), `seatedCap`, `totalCap`, `doorCount`, `adaAccessible`, `adaSeatCount`, `setupVehicle`, `mapApp`, `hideOnFleetLogistics`, `vin`, `vehicleTypeId`, `vehicleLength`, `yearOfManufacture`, `odometerReading`, `manufacturer`, `model`, `ownership`, `yearOfRebuild`


## Riders (Connect)
`email` (required), `password`, `name` (required), `birthdate`, `phone` (required), `agencyId` (required)

