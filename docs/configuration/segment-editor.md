# Segment Editor

## Segment Editor

#### Top row buttons

.CSV: Download the segment details with IDs\
Calc Times: Generate interpolated times based on existing timepoints and distance.\
Globe: View the trip on a map and edit the shapes\
Collapse: Hides secondary stops from the view\
Watch: Hides stops without timepoints\
Show Archive: Shows archived stops\
Edit: View and edit segment properties\
Add: Add a new segment stop to the trips

#### Block buttons
Edit: View and edit block properties\
Add Trip: Adds a new trip with empty timepoints to the block\
.CSV: Downloads the times and stops to a .CSV file


#### Stops

Top row shows the stops in stop order. If the stop has a code, it will be displayed under the stop name. Otherwise, the stop ID is displayed. If the stop code/id is colored, the stop is On Demand.

Click a stop name to edit segment stop properties.

#### Trips and timepoints

Trips are displayed going down the list. Each trip stop supports an arrival and departure time. More below on best practices.

Keyboard arrow keys can be used to navigate the timepoints. They go up, down and over as if it was a spreadsheet.

Enter timepoints in 24hr time. Entering 1511 will resolve to 3:11 PM. The : will be automatically added

To remove a timepoint, click Delete (fn + Delete on macOS)

To mark a stop as not serviced, type x in the timepoint fields.

Shapes will define which trips service which stops. These shapes will automatically be created or can be explicitly created in the Map view (click the globe)


#### Best Practices

The first stop of a trip only needs a departure time. For clients that are NTD reporters, put an arrival time and a departure time for the first stop. This will make sure scheduled metrics are calculated correctly.

The last stop of a trip must only have an arrival time.

Other stops should have departure times.

For the system to show a dwell time at a stop, populate the arrival and departure time. 

NTD reporting requires the first and last trip to have timepoints.

GTFS requires that at least two stops in a trip have timepoints.

Significant stops in the middle of trip should have arrival and departure times so riders know what to expect with regards to layovers and transfers.



