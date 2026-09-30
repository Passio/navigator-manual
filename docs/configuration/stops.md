# Stops

## Definition
Stops are locations within the system where specific things occur when a vehicle enters or exists them. A stop is determined by a latitude and longitude which is entered in Passio Navigator. A stop is where vehicles pick up or drop off riders, but they also can define a bus yard location, maintenance facility, station, station entrance, or other unique and important location within a transit system.

### How does a stop location (latitude and longitude) get into Passio Navigator?
OPTION 1: Directly enter the information using the Passio Navigator user interface.  
1. Stops, jobs, trips, segments, and routes are typed or uploaded directly into Passio Navigator.

2. Once the information is entered into Passio Navigator, GTFS files can be generated directly from Passio Navigator and shared with any entities or programs that the agency allows.  

OPTION 2: Import an independently created GTFS feed into Passio (created from an different software).
1. The GTFS specification uses latitudes and longitudes to represent the location of each stop and transit station.  
    
    1. Key Components of a GTFS file:  
        
        1. stop_id is a unique identifier
        2. stop_code and stop_name typically contain rider-facing information
        3. The exact location is provided using coordinates (stop_lat and stop_lon)
        4. location_type is used to differentiate stops from stations
    
    2. A full list of GTFS stop property definitions can be found here: [https://gtfs.org/schedule/reference/#stopstxt](https://gtfs.org/schedule/reference/#stopstxt)

## How are stops used in Passio?
Stops play a key role in configuration, setting up trips, segments and routes. **Stops must be defined before Segments & Trips can be built.** They are also at the heart of much of the performance reporting generated within the system. Stop coordinates can identify a location such as a route stop, platform, station, entrance or exit, generic node or boarding area.
Once stops are defined, they can be inserted into Routes or Segments to outline the sequence that the buses will service the stops.

### Specialty Stops
The most common definition of a stop is a location along a route where passengers can board or alight. There are other 'specialty stop definitions' which are highlighted below.

YARD STOP - this typically identifies a location where vehicles leave from and arrive back to at the end of service. Depending on the operational requirements there may be more than one YARD STOP and vehicles can enter into and leave from any one of the designated yard stops.
1. The Passio system has the option to automatically place a vehicle OOS (Out of Service) when it enters a YARD STOP.
2. Advantages of using YARD STOPS include the ability to track deadhead miles and hours for NTD reporting from the vehicle departure until it reaches the first route stop location for revenue service
3. Inside the YARD STOP area Yard movement reports to track efficiency of non-revenue activity can be generated.
HIDDEN STOP - these are stops that are hidden from the public but are used for administrative or internal reporting purposes. A stop can be designated 'hidden' within Passio Navigator.

## Stop Properties CAD/AVL
* Multiple routes may use the same stop_id, however if the route is going in the opposite or distinctly different direction, a separate stop_id should be used.
* Some stops may have a **green exclamation mark** to the right of the stop name. This means that the stops were imported, and these are identified as 'newly' imported stops.
* The **Routes** list on the stop form shows every route that includes this stop, including routes where the stop has been archived. A route appearing in this list does not mean the stop is currently active on that route.
* A **folder icon** next to a route name means the route itself is archived. It does not show whether the stop is archived on that route.
* The same route name may appear more than once. Each entry is a separate route record, for example an active route and an older archived copy with the same name.
* To confirm whether a stop is active on a route, click the route name to open it and review the route's stop list. Stops that are archived on that route are marked with a folder icon there.
* **Stops have many properties**, most of which are optional but potentially helpful for the riders, and often are dependent on the solutions purchased.
* Within Passio Navigator a user can hover over the stop labels to view the Tool Tops will define each field.

### Stop Properties for Additional Solutions
* AVA (Automated Voice Announcements)
  * Verbiage for text to speech announcements
  * Settings for announcement triggers such as entering or existing the stop geofence. There are multiple announcement triggers.
  * Upload of audio files

* LED Internal and External (Destination Sign) Display
  * Display message entered into Passio Navigator.
  * Settings for announcement triggers such as entering or existing the stop geofence. There are multiple announcement triggers.
  * Route code trigger information for integration with LED sign solutions not provided by Passio such as Luminator, Hanover or others.
 
### On Demand Stops

Stops can be configured as 'On Demand,' meaning the vehicle will not automatically stop there on every trip. To assist riders in notifying the agency when they wish to be picked up at these stops, the 'Ride Request' feature can be enabled. Both the 'On Demand' and 'Ride Request' settings can be configured at the Segment Stop level.

For accurate reporting of NTD Scheduled Revenue Miles, route paths should exclude stops marked as 'On Demand.' This ensures Scheduled Revenue Miles accurately reflect the typical travel distance for each trip.

### Best Practice or SOP (Standard Operating Procedure)
1. When manually creating stops, use a consistent naming convention for each of the fields; stop name, reporting name, short name, and stop code.

    **_“How to Name Stops Consistently?”_** 
    
    “Use a consistent naming convention for the stop name. For example, the following names could be used for a stop, but unless one naming convention is used, duplicate stops will be created:
    - East 69th Street 
    - E. 69th St 
    - 69th Street East
    - E. 69th & First Ave
    All stops should use the exact same naming convention to prevent duplicates from being entered. If duplicates are entered, Route operations will be affected.” 


2. 6 digit stop codes will automatically be generated if left blank.

3. Geofence size will determine when a vehicle is reported to enter or exit the stop. It is critical that the size of the geofence is large enough to effectively capture the GPS reading. A very small geofence will often miss report intervals due to satellite positioning, timing, and vehicle speed. Typically a minimum radius of 50m is recommended.

4. Larger geofences are best practice recommendations if stops are along a stretch of road where the vehicle speeds averages or exceeds 35mph. A geofence radius of 110m is recommended, and the larger geofence should not overlap another stop. The radius in meters should be at least double the expected maximum miles per hour. If a vehicle will travel 50 MPH, the geofence radius should be at least 100 meters.

5. Stop geofences may overlap on a Route or Segment depending on the properties of that Route or Segment. The logic for addressing stop overlaps will be defined further in the documentation for creating a Route or Segment.

6. When a stop services a route in two directions, create two stops (one for each direction). An example would be a Route that stops at the Library in both directions, going North and South. Common directional attributes that should be used are Library-Northbound and Library-Southbound; or other directional attributes such as Eastbound or Westbound; and Inbound or Outbound.
