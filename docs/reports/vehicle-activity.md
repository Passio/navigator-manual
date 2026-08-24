# Vehicle Activity

Technical Help File for Vehicle Activity Report

**Purpose:**

The Vehicle Activity report displays details of the vehicle's movement and activity, including the start and end time of the activity, the type of activity, the route and job involved, the duration, the idle and moving time, the maximum speed, the geographical distance, the trip distance, and the trip time. The data presented is raw data activity without any data normalization. 

Filter Settings:

You can filter the report by specifying the Vehicles, Routes, Stops, Incidents, Geofences and date and time range during which the activities occurred. The report will show only the vehicle activities that fall within the specified date and time range.

**Report Columns:**

_**It records all entry/exit of geofences on route, irrespective of routeStop order._

The report contains the following columns:

 - Vehicle = VehicleId

- Filter** = Selection to restrict Report data by Vehicle, Route, Stop, Incident, or Geofence
- Activity type** = activity that the row data relates to
- Name** = Activity name (ie. Stop name, incident name, geofence name)
- Route** = Assigned route
- Duration** = total activity duration
- Idle time** = time vehicle was reporting less than 3mph/4.8kph during this activity
- Mov. time** = time vehicle was reporting more than 3mph/4.8kph during this activity
- Max speed** = Maximum speed while in the geofence
- Geo distance** = Distance traveled inside the geofence
- Trip distance** = Distance elapsed since the trip started*
- Trip time** = Time elapsed since the trip started*


**Exporting and Printing:**

You can export the report data in various formats, including Excel and PDF. You can also print the report directly from the application interface.

**Using the Report:**

The Vehicle Activity report can be used to monitor the performance and movement of vehicles running on various routes and jobs. It can help you track the time taken to complete a trip, the idle time of the vehicle, and the maximum speed recorded during the activity. It can also help you optimize vehicle performance, increase efficiency, and reduce costs.


*Trip started = either ignition on or midnight, whichever is less

This report will show data that might be filtered out in other reports due to route assignments, calendars or In Service/Out Of Service status
