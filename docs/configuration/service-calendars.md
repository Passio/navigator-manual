# Service Calendars

**Calendars, referred to as Service Calendars are used to define the days that the routes are running**

Calendars are used to show the available daily service on the MDT, on Passio GO, and in GTFS feeds. It also is critical in proper NTD Reporting. 

If you purchased the **NTD Module** and are a full NTD Reporting Agency, it is **critical** to setup the calendars properly. With the need to report on historical Scheduled Miles and Hours, the calendars on the Segment Blocks will need to correctly align with the bus blocks. Once the calendars are properly setup, dates in the past should not be modified or they will affect historical Scheduled data. When you create new Segments or new Segment blocks or new versions of those, you will need to create a new calendar with correct start and end dates. Otherwise, you will have duplication of Scheduled data. 

## Best Practice
Always add the Calendar type 'Days of Week' first.

Then, if the route is normally going to be active (example, a city route that runs every day but not on holidays)

Add the exception dates:
1. Select Calendar type 'Date'
2. Enter the date ('12/25/2024')
3. Leave 'Active' unchecked (this means the date is inactive)
4. Click 'Add Service Calendar Rule'
5. Repeat for calendar exceptions

Or, if the route is normally inactive (example a university orientation route that only runs a few days in Spring and Fall)

Add the inclusion dates:
1. Select Calendar type 'Date'
2. Enter the date ('3/11/2025')
3. Check 'Active'
4. Click 'Add Service Calendar Rule'
5. Repeat for calendar inclusions

## GTFS
Service calendars impact `calendar.txt` and `calendar_dates.txt`. If an expired service appears in `calendar.txt`, check the associated Trip Groups and Segments to ensure they are versioned or archived.

Only Calendar type 'Date' writes to `calendar_dates.txt`. To ensure GTFS service exclusions are included, use Calendar type 'Date' instead of Calendar type 'Date interval'.

