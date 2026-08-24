# Headway

**The Headway Report** shows the wait time at a given stop between vehicle visits. For example, if the headway is 8 minutes, that means that a vehicle comes to the stop every 8 minutes on average. The initial grouping is averaged by day, but also available by week, month, and year.

* Data is filtered according to the route calendars (if present).

* Skips headways longer than 3 hours (to discard overnight data).

* GPS records are consolidated if the raw data shows the same vehicle going in and out of a geofence and not visiting another stop in order to normalize GPS data and accommodate for a backup GPS device reporting.

**Using the Headway Service Report**
* Data can be filtered by date range and presented (grouped) by day, week, month or year. 

* The time filter only trims time from the start and end dates in the date range. The start time applies to the first day in the date range and the end time applies to the last day in the date range.

* Headway "Details by Stop" shows the average time between buses that a stop is visited by a vehicle. This is how often the stop gets service.
  *   Arrival to Arrival= Time between buses on geofence entry to geofence entry
  *   Departure to Arrival= Time between buses on geofence departure to geofence entry (This is typically the shortest headway that indicates how long the passenger has to wait). 
  *   Departure to Departure=  Time between buses on geofence exit to geofence exit

* Headway "Details by Vehicle" shows the average time a particular vehicle took to travel between stops. 

* Filters available include: Routes, Stops, Calendars (If available - these are route calendars) and Vehicles. One or more of each can be chosen to filter. 

* Daily, Weekly, Monthly, Yearly - the headways averages can be presented for different time periods by selecting these options. For example, comparing performance month over month.

## Calendar Dates vs Service dates
This report filters data based on service date rather than calendar date. Since a single service date can extend across multiple calendar days and the report may query multiple service dates, the resulting data may include entries from more calendar dates than service dates.
