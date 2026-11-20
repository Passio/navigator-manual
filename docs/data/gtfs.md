# GTFS

## Use imported GTFS IDs in GTFS RT
If we the producer of record for GTFS, so Google and Transit use our Static link that looks like:
https://passio3.com/{agency}/passioTransit/gtfs/google_transit.zip
If yes, then uncheck ‘Use imported GTFS IDs in GTFS RT’.
If no, then check ‘Use imported GTFS IDs in GTFS RT’ checked and verify that consumers are using the correct GTFS link.


## GTFS Version history
As stored in feed_info.txt

| Version |What Changed |
| --- | --- |
| 2025-02-19      |  Added vehicle information to tripUpdates     |
| 2025-02-28      |  Added support for feed_start_date, feed_end_date and feed_version in feed_info.txt     |
| 2026-09-17      |  Added optional GTFS-Flex export, see below     |


## GTFS-Flex export
Off by default, enabled per account with the ‘Enable GTFS-Flex export’ setting.

Exported: locations.geojson with one ‘area_{geofenceId}’ feature per service area geofence, and the location_id, start_pickup_drop_off_window and end_pickup_drop_off_window fields in stop_times.txt.

A flex trip keeps its own trip_id, so its stop_times rows join to the trip ids GTFS-RT uses, but on-demand trips are not published in GTFS-RT, see below. A single service area gets two stop_times rows on the same location, pickup on the first and drop off on the second, the GTFS-Flex ‘on-demand service within a single zone’ pattern. Several service areas get one stop_times row per service area, sorted by geofence id, with pickup and drop off on every row, the ‘on-demand services across multiple zones’ pattern.

Not exported yet: booking_rules.txt (#7052) and continuous_pickup / continuous_drop_off (#7051). The service Booking Rules fields are stored but do not reach the feed.

Only route group services with a service area geofence produce flex stop times. When the feed exports none, the three stop_times.txt fields are omitted and locations.geojson is left out of google_transit.zip. The locations.geojson endpoint answers 404.


## GTFS-RT and on-demand services
Vehicle positions and trip updates leave out on-demand trips. On an on-demand trip every stop is a rider's pickup or drop off, and a public feed, archived by third parties, would show where riders live or travel. A GTFS-RT stop time update also has no way to reference a locations.geojson zone.

A route is on-demand when ‘On-demand’ is checked on the route, or when it is on a GTFS route group with a service that has a service area. That is the GTFS-Flex export rule, but it applies whether or not ‘Enable GTFS-Flex export’ is on, and a service area geofence that is deleted or has an invalid shape still counts, the vehicle stays hidden. Deviated fixed routes are published as before. Service alerts are not affected.
