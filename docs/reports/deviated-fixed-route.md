# Deviated Fixed Route

**Report: Deviated Fixed Route Riders** Hopelink GO Ride Request Enhancement resolved the Hopelink GO Ride Request export enhancement by introducing a new self-service report:

*Navigator → Reports → Route Performance → Deviated Fixed Route Riders*

This report replaces the previous broad GO Ride Request export for Hopelink and limits the output to only the required operational columns.

**Default Date Range Behavior** The report defaults to the most recent full month date behavior matches the NTD report logic

**The report now returns only the following fields:**
TripDate
TripTime
FirstName
LastName
PickUpAddress
ETA
Cancelled
Segment Name
Segment Block Name
Stop Name
Bus Name

*CSV Export Available*

Users can export results directly to CSV from the report view.

**What Filters Are Available?**
Date Range (defaults to last full month)
Route Group
Segment
Stop
Bus

Driver filter is not available (driverId is not stored in goRideRequest)

**Column Definitions (for Documentation / Help Text)**

TripDate
Date the ride request was created.
TripTime
Time associated with the trip request (ETA time field).
FirstName / LastName
Passenger name entered on the ride request.
PickUpAddress
Pickup location address for the rider.
ETA
Estimated time of arrival for pickup.
Cancelled
Displays:
True = ride was canceled
False = ride was not canceled
Segment Name
Route segment associated with the trip.
Segment Block Name
Route block tied to the segment.
Stop Name
Assigned stop for pickup.
Bus Name
Vehicle assigned to the ride request.

Tooltip Text (Short UI Help)

Report Description Tooltip

Date Range Tooltip

Defaults to the most recent full month. Date logic matches NTD reporting.

Cancelled Column Tooltip
Indicates whether the ride request was marked as canceled.
