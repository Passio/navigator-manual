# Routes

## Definition
Routes in a Fixed Route system are a collection of stops, in sequence, with their associated schedules, for reporting and Public display. Deviated and On-demand stops are also included in the Routes/Segments, however, they may not be required to be in sequence. 

## How they are used in Passio
  > _The ability for you to read or write different pages and action buttons is based on the solutions purchased and the user level permission assigned_

Route Block systems, sometimes referred to as Shuttle systems, contain Routes that are a sequence of stops and typically followed by an individual or multiple buses, for reporting and Public display










Routes have several properties that are used depending on the type of system running and the agency's preferences. The tool tips on the field labels should help identify their use.  
  
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

## Route and text colors

Be sure to always use hex codes (starts with #) for colors and text colors. Hex codes can be found here - https://htmlcolorcodes.com/
 
 ## Best Practices or SOP (Standard Operating Procedures)
      Route Naming convention - [RouteName Headsign Direction] Blue Line via Downtown Inbound

      Block Naming convention - [RouteShrtName or RouteAbbreviatedName BusBlock#] Blue 01

      Versioning - When creating a new version of a Route, upon expiration, the active version will revert back
      to the 'Original' version. Therefore to avoid the original version from 'activating' again unexpectedly, 
      make the end date 10 years from the start date. When creating a second or greater version, change the 
      'to be replaced versions' end date to match the incoming 'start date'. This will make the versions more 
      consistent. Overlapping date ranges do enable the most recently created version. 

      A RouteBlock should be created for every vehicle that runs at peak service. Also, additional route blocks 
      should be created when vehicles run that have different schedules from the Peak Service schedule. Common practice 
      is to create a different RouteBlock for Saturday or Sunday schedules or for non-peak service when those schedules 
      don't fit within the same scheduled times.

      New Route versions should be created when the routePath or stopOrder changes. If only timepoints are updated or stops are either removed or added, that can be managed within the same version.


