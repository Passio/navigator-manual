# NTD Reporting

After data reporting was required by Congress in 1974, the FTA's National Transit Database (NTD) was set up to be the repository of data about the financial, operating and asset conditions of American transit systems. The NTD records the financial, operating, and asset condition of transit systems helping to keep track of the industry and provide public information and statistics.

FTA uses NTD data to apportion funding to urbanized and rural areas in the United States. Transit agencies report data on a number of key metrics including Vehicle Revenue Miles (VRM), Vehicle Revenue Hours (VRH), Passenger Miles Traveled (PMT), Unlinked Passenger Trips (UPT), and Operating Expenses (OE).
https://www.transit.dot.gov/ntd

















## Settings

**Filter by Calamp Ignition Events**: This setting should always be unchecked. This is intended to utilize ignition events from Calamp devices to filter out records that should not be captured for NTD reporting. However, Calamp ignition events are unreliable. By keeping this setting unchecked, the system will not rely on these ignition events and will instead use more reliable methods such as dead reckoning and Yard geofences to correctly filter out records that should not be considered for NTD reporting. 

**Hide Archived Routes**: This setting should usually be unchecked. This filters out data that is assigned to a route marked as draft or inactive due to the `from` and `to` dates. By keeping this setting unchecked, the system includes data for routes that were active at any point during the reporting period, ensuring that the NTD report captures all relevant data. This is important because the NTD report is typically run over a long period, and route configurations may have changed during that time. Therefore, data from routes that were active during the report period but are now inactive should still be included.

**Show scheduled metrics** This should usually be checked. This setting enables the calculations of schedules miles and hours. Scheduled metrics are required for federal reporters.

**Use Trip Group Duration**: This should always be checked. This setting is part of the Scheduled Metrics calculations for Scheduled Hours. It looks at the start time and end time of each trip to determine how long it takes to run that trip. Then it adds up all the trips on active routes (based on calendars) to generate the Scheduled Hours metric. This is why it is crucial for routes that have 'Enable for NTD Reports' to have first and last stop time points. Best practice is to have a time point at the first stop departure and a time point at the last stop arrival.

**Ignore Speeds Below**: This setting should be around 2 MPH. This will filter out location records that are below this threshold, smoothing out situations where the bus appears to be drifting due to poor GPS connectivity.

**Ignore Speeds Above**: This setting should be around 70-80 MPH based on the agency. This will filter out location records that are above this threshold, smoothing out situations where the bus appears to make large jumps due to poor GPS connectivity.

**DPL**: Dynamic Pax Load. This should always be checked. This setting calculates the bus passenger load from `log.onOff` and `log.count` instead of `location.paxLoad`. The static paxLoad doesn't take into consideration amended log records and has other issues that are resolved by looking at the individual on/off records.

**DPL Rules**: These should only be adjusted by an admin and after consulting with the dev team. These enforce route and date-specific carry-over rules regarding how many people can carry over from one trip to the next trip on the same vehicle. This advanced smoothing technique is enabled in situations where APCs were not performing correctly.

**Closed months** These should only be adjusted by an admin and after consulting with dev team. This locks the data for a specific month.

**Use Revenue Hours Calculation v2**: This should always be checked. This resolves an issue where the revenue and deadhead hours were not being calculated correctly when a device would go offline.

**Skip Tracker Location Records**: This should usually be enabled. There is a setting on the MDT (Background services and tracking >> Track me) that will record location data when the app is backgrounded. This location data will use the previously known assignment of the vehicle (as currently captured in the `bus` table). The location data will have `{'tracker' : 1}` appended to the `more` field of the location record. Since we don't want non-Fixed Route work logged in NTD, enabling this flag will filter out records that include `{'tracker' : 1}` from being calculated for NTD data.


## Reading the data

The data is aggregated across all filtered routes. To view detailed metrics for each individual route, click the hamburger icon next to the metric. This will open a new window displaying the breakdown by route.

A green checkmark indicates that the actual metrics are close to the scheduled values, while a warning icon appears if the actual metrics fall outside the expected range. If a warning is displayed, verify that the calendars and assignments are accurate for the selected date range.

 ## Data capture details

**Mileage Capture Process** GPS record is captured every 1-10 seconds, or at change of direction, or every 20 meters, whichever happens first. Distance is calculated using latitude and longitude of previous record and current record.	

**NTD Time/Day Filters** Data is filtered using customer-defined parameters for Weekday, Weekend, Holiday, Early AM, AM Peak, Mid-day, PM Peak, and Late Night (or others)

**Active Route Calendars** Active days are set at the ROUTE BLOCK level using SERVICE Calendars. This is the set time that a particular ROUTE BLOCK is considered active for the public riders. Typically this is the scheduled route time.

**Passenger Load Capture Process** boardings less alightings (passenger load) are captured constantly using the onboard counting mechanism. Passenger Load is multiplied by the miles traveled calculation in the GPS record.

**Discarded Deadhead Metrics**
If a bus only recorded deadhead data for a given day without any corresponding revenue service data, the deadhead data is discarded. This typically indicates an error in data collection. For deadhead metrics to be valid, they must be accompanied by revenue data.

## Metrics

### Miles and Hours Without Route Assignment

**Miles Without Route Assignment:**
The total distance driven by vehicles operated without an active route assignment. This typically occurs when a driver begins moving the vehicle before selecting a route or job, or when dispatchers manually reset the vehicle’s assignment to ‘Unassigned Route’ via Passio Navigator. These miles highlight procedural gaps requiring attention for accurate reporting.

**Hours Without Route Assignment:**
The total operational hours for vehicles without an assigned route. This includes time spent operating before route selection by operators or after dispatch resets the vehicle’s assignment to ‘Unassigned Route’ in Passio Navigator. Monitoring these hours helps identify and correct assignment process issues.

**Total Actual Miles**
Definition: Total miles traveled by a vehicle. Data is captured using GPS location records. Uses NTD Time/Day Filters.

     [IN SERVICE MILES] + [OUT OF SERVICE MILES] = [TOTAL ACTUAL MILES]

**NTD calendar miles**
Definition: The vehicle must be IN SERVICE and within ACTIVE ROUTE CALENDAR time period. If a vehicle is put in service during a time not scheduled in the active route calendar, that time will not count for this metric. 

**In Service miles**
Definition: Miles driven while vehicle is placed IN SERVICE on the Mobile Data Terminal or via Passio Navigator Dispatch Module

     [TOTAL ACTUAL MILES] - [OUT OF SERVICE MILES] = [IN SERVICE MILES] 

**Out of Service miles**
The total miles driven while vehicle is placed OUT OF SERVICE on the Mobile Data Terminal or via Passio Navigator Dispatch Module

**Yard OOS miles**
The total miles driven or collected while vehicle is placed OUT OF SERVICE on the Mobile Data Terminal or via Passio Navigator Dispatch Module AND the vehicle is inside a defined Yard Geofence.

**Scheduled Revenue Miles**
Scheduled Revenue Miles refers to the total number of miles a vehicle is scheduled to travel while providing transportation services to passengers. This is calculated based on the distance from the first stop to the last stop of each scheduled trip using the route path. It use the Trip Group calendars to determine if the trip will be active for the dates in the reporting period. It excludes non-revenue movements such as deadhead, layovers, and repositioning miles.

**Scheduled Revenue Hours**
The total number of hours scheduled for providing transportation services to passengers. This is calculated based on the duration of time between the first stop to the last stop of each scheduled trip using the route path. It use the Trip Group calendars to determine if the trip will be active for the dates in the reporting period.

**Total Actual Hours**
Data is captured using GPS location records. Time from each reported location record is added for each day and vehicle. Uses NTD Time/Day Filters.

     [TOTAL ACTUAL HOURS] = [IN SERVICE HOURS] + [OUT OF SERVICE HOURS]

**NTD Calendar hours**
The vehicle must be IN SERVICE and within ACTIVE ROUTE CALENDAR time period. If vehicle is put in service during a time not scheduled in the active route calendar, that time will not count for this metric. 

**In Service hours**
Hours driven while vehicle is placed IN SERVICE on the Mobile Data Terminal or via Passio Navigator Dispatch Module. 

     [TOTAL ACTUAL HOURS] - [OUT OF SERVICE HOURS] = [IN SERVICE HOURS] 

**Out of Service hours**
The total number of hours driven while vehicle is placed OUT OF SERVICE on the Mobile Data Terminal or via Passio Navigator Dispatch Module.

**Yard OOS hours**
The total number of hours driven while vehicle is placed OUT OF SERVICE on the Mobile Data Terminal or via Passio Navigator Dispatch Module AND the vehicle is inside a defined Yard Geofence.

**Unlinked Passenger Trips (UPT)**
The total number of passenger boardings during the specified time. Passengers are counted each time they board a vehicle regardless of how many vehicles they use from origin to destination.

**Passenger Miles Traveled (PMT)**
The total number of miles traveled by all passengers during the specified period, calculated at each stop by multiplying the passengers on board (paxLoad) by the distance between stops. These calculations are added together during the specified period.

     ([PAXLOAD] X [STOPn1 to STOPn2 DISTANCE]) + ([PAXLOAD] X [STOPn1 to STOPn2 DISTANCE]) + ... for the specified period

**Passenger Trip Length**
The average distance traveled per passenger during the specified period.

     [PASSENGER MILES TRAVELED] / [UNLINKED PASSENGER TRIPS] = [PASSENGER TRIP LENGTH]
























**VOMS (Vehicles Operated in Annual Maximum Service)** A system wide metric designed to use the selected timeframe to calculate the metric (it is not per route). For example, if you select 'Last Month', VOMS would reflect that time period.
