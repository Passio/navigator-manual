# Routes (Trip Mode)

## Definition
**Segments** in a Fixed Route system are made up of trips which contain a collection of stops, in sequence, with their associated schedules, for the creation of Routes, reporting and Public display. Deviated and On-demand stops are also included in the Segments, however, they may not be required to be in sequence. 

## How they are used in Passio
  > _The ability for you to read or write different pages and action buttons is based on the solutions purchased and the user level permission assigned_


**In a Trip based system, Segment Trips are grouped together to form Routes, giving more granular control over how the Agency runs their vehicles**

Often multiple segments will define a Route. Segments also house segment groups, which are groupings of trips that reflect the activities of a single vehicle. For example, if there are multiple vehicles running on the same route, at the same day and time, then there would be one segment group for each bus. Additional segment groups would be added when the Service days are different, for example in the case when Saturday service is different from Weekday service. 

There is also the ability to create Deadhead Segments. This is useful for highly accurate NTD reporting. Deadhead segments are similar to regular sgements, but the are non-revenue and are treated that way by the MDT and the reports.

Routes have several properties that are used depending on the type of system running and the agency's preferences. The tool tips on the field labels should help identify their uses.  
  
  <p>Pad & Pencil Icon - Edit Segment properties</p>
  <p>Globe Icon - Edit Stop Order, Path, and Announcement Geofences</p>
  <p>Column status Items</p>
  <li>Length - Route length in miles
    <li>MJ - Maximum stop jumps - highest number of stops that the MDT is allowed to switch to. Typically 1
      <li>VA - Voice announcement enabled. Must also enable at the Stop level.
        <li>LED - Interior passenger sign messaging enabled (Transign) </li>
             --> Transign LED commands:[currentStop] - new in 0.23.02 [routeName] [driverName] [busName] [busNumber] [routeNumber] [destStop] [time] [date] - new in 0.23.00 [datetime] [nextStop] [scrolling] [weather] - new in 0.23.00, 2kB/hour [forecast] - new in 0.23.00, 16kB/hour
duration in seconds: from <1> to <19>
          <li>xLED - Headsign or destination sign code (Luminator, Twinvision, or Hanover)
            <li>Days - Days running service
              <li>Stops - Listing of the first stops in order for visual reference
              <li>Route Blocks - Listing of all blocks for this segment</li>
              
### AVA Fields

<li>AVA Fields can be found in the Segment or Route map view
  
- `Stop` announcement checkboxes can be used to select which stops should announce the stop name when entering the AVA geofence. These announcements can be configured under the 'Stops' tab in Navigator.
- `Next` announcement checkboxes can be used to select which stops should announce the Next stop right after the current stop is announced on AVA geofence entry. 
- `R&D` announcement checkboxes can be used to select which stops should announce the Route and Destination announcement. This announcement can be configured at the Segment or Route properties level. 
- `NxtExt` announcement checkboxes can be used to select which stops should announce the Next stop after exiting the current Stop geofence.
- `Int` announcement checkboxes can be used to select which stops should announce a 'Door Open' announcement on the interior speakers when the passenger door is opened at the stop. 'Door Open' announcements can be configured under 'More'.
- `Ext` announcement checkboxes can be used to select which stops should announce a 'Door Open' announcement on the exterior speakers when the passenger door is opened at the stop. 'Door Open' announcements can be configured under 'More'.
- `LED` announcement checkboxes can be used to select which stops should display a passenger facing LED Stop announcement on AVA geofence entry. These announcements can be configured under the 'Stops' tab in Navigator.
- `NA LED` announcement checkboxes can be used to select which stops should display a passenger facing 'Now approaching' LED message on AVA geofence entry, prior to the LED Stop message. 
 
 ## Best Practices or SOP (Standard Operating Procedures)
 
Segment Naming convention - [RouteName Headsign Direction] Blue Line via the Library Inbound

Block Naming convention - [RouteShrtName or RouteAbbreviatedName BusBlock#] Blue 01

Versioning - When creating a new version of a Segment, upon expiration, the active version will revert back
to the 'Original' version. Therefore to avoid the original version from 'activating' again unexpectedly, 
make the end date 10 years from the start date. When creating a second or greater version, change the 
'to be replaced versions' end date to match the incoming 'start date'. This will make the versions more 
consistent. Overlapping date ranges do enable the most recently created version. 

A Trip Group should be created for every vehicle that runs at peak service. Also, additional Trip Groups 
should be created when vehicles run that have different schedules from the Peak Service schedule. Common practice 
is to create a different Trip Group for Saturday or Sunday schedules or for non-peak service when those schedules 
don't fit within the same scheduled times.

New Segments should be created when the routePath or stopOrder changes. They should also be split when changing
direction (ie. Inbound vs Outbound) and/or when the 'Headsign Destination' would or should change. 
The 'Headsign Destination' includes the information that Passio GO might present to Riders.

## Headways

When building routes that run on a specific frequency rather than specific time points, configure the stops, stop patterns and route path as normal.

- In the Trip Group properties, set Trips Are to "Headways"
- Set the depature time of the first stop to 00:00. All times with headways are relative. Stop "times" are relative to the first stop. If it take 5 minutes to get from stop 1 to stop 2, stop 1 will be 00:00 and stop 2 will be 00:05

## GTFS

To include a segment in GTFS, check `Include in GTFS feed`. Archived or expired segments won't show up in GTFS. Segments and their trip groups must be active (not archived) to appear in GTFS, regardless of the calendar status. An active trip group will generate a line in services.txt, even if the calendar is not active today. If a segment should not be in GTFS, archive the segment or its trip groups.

All segments must be associated with a Route Group in order to be listed in trips.txt, stop_times.txt and shapes.txt

## When to Use Segment Versioning vs. Time Point Versioning

### Segment Versioning:

- Temporary or Detour Routes: When you plan to revert back to the original route in the future.
- Seasonal Routes: For routes that will likely be the same in the future, such as those based on school semesters (Fall, Winter, Spring, Summer).

### Time Point Versioning (in most other cases):

- When making long-term changes to an existing route, such as:
- Changing a timepoint.
- Adding or removing a stop.
- Adding or removing a trip.
- Adding or removing a trip group.
- Modifying the trip path.

Note: Time point versioning can be applied to versioned segments. This is useful for seasonal routes where updates to timepoints or other items are needed.

## Ride Request usage
To enable a rider to make a request at a stop, check 'Ride request stop' at the Route Stop level.

By default all vehicles assigned to that route will be notified.

To only notify the closest vehicle (based on direction the vehicle is driving), check 'On Demand stop'

## Additional Segment Stop Settings
- `Use for GPS Reports` checkboxes are used to select the segment or route stops that should be used for GPS reports such as On Time, Schedule Adherence or Headway reports. Use for GPS Reports should not be enabled for the last stop of (1) Looping segments or routes with the same first stop/last stop or (2) Directional Segments that share the same last stop in one direction as the same first stop as the other directional segment (i.e. Transit Hub is the first stop of an Outbound segment and last stop of an Inbound segment). While all stops can be selected as Use for GPS Report stops, limiting this setting to primary or timepoints stops generally produce more relevant reports and reduces over information.
  
- `Secondary stop` checkboxes are used to select those stops that are on the route path but not deemed primary or timepoint stops. Secondary stops can include stops that a vehicle does not regularly stop at every trip or where a vehicle will only stop if a passenger signals their intention to board or alight by waving or flagging the driver (flag stop).
