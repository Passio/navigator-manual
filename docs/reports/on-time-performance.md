# On Time Performance

**The On-time Report** displays the percentage of on-time departures from stops as defined in *settings*. The data can be validated with Live Map Snapshot mode and the headway report. Initial grouping by day, but also available by week, month, and year.

*Data is filtered according to the route calendars.*

The percentage is calculated by measuring the number of times a stop falls within each of the on time report ranges and divides by the total number of stops for the time period selected. 

Example: If the stop is serviced 20 times in a day, and the vehicles are ‘on time’ 16 times, the on time performance would be 80%. If the report is shown at the route level, it would add all of the statistics together for all stops on the route. 

Boardings are the captured unlinked passenger trips as recorded from the MDT or APC's. 

Traveled distance is calculated based on the vehicles being In Service and assigned to that route. 

Scheduled trips are calculated from the bus blocks and calendars. If calendars are not setup, the scheduled trips will be overstated. 

Actual trips are the calculated number of trips that the bus completed a round if in a route block system or the number of one ways / looping if setup in a trip based system.

**Settings options**

"Location based on-time report" uses the server-side GPS records, not the MDT report.
This option is checked (on) as a system default (do not turn it off). This feature is only available to customers that use timepoints.

"Show Trips on the 3rd level" displays the actual trips vs. the times

"Use Closest timepoint" - This looks at all of the timepoints on route and compares the current vehicle location and time to the closest timepoint. Use closest timepoint makes the Report higher accuracy, but doesn't mean that it's necessarily right. So for example:

1. At a given stop, let's say the route runs every 15min, so therefore that stop is serviced at 11:00, 11:15, 11:45, etc...
2. if a vehicle is on the Trip that is supposed to be at the stop at 11:00am, but it shows up at 11:14am
3. With "use closest..." unchecked, it will show 14min late or in the ">10min late grouping"
4. With "use closest..." checked, it will show 1min early or in the "on-time" grouping

**Intervals**

All intervals are entered based on customer preferences. "Out of Range" may be used to capture vehicle activity that registers outside of the standard intervals. This is typically due to incorrect route, route block, or segment assignment, or GPS tracking issues.
