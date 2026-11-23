# GTFS

### Use imported GTFS IDs in GTFS RT
If we the producer of record for GTFS, so Google and Transit use our Static link that looks like:
https://passio3.com/{agency}/passioTransit/gtfs/google_transit.zip
If yes, then uncheck ‘Use imported GTFS IDs in GTFS RT’.
If no, then check ‘Use imported GTFS IDs in GTFS RT’ checked and verify that consumers are using the correct GTFS link.


### GTFS Version history
As stored in feed_info.txt

| Version |What Changed |
| --- | --- |
| 2025-02-19      |  Added vehicle information to tripUpdates     |
| 2025-02-28      |  Added support for feed_start_date, feed_end_date and feed_version in feed_info.txt     |
| 2026-09-17      |  Added optional GTFS-Flex export, see below     |


### GTFS-Flex export
Off by default, enabled per account with the ‘Enable GTFS-Flex export’ setting.

Exported: locations.geojson with one ‘area_{geofenceId}’ feature per service area geofence, and the location_id, start_pickup_drop_off_window and end_pickup_drop_off_window fields in stop_times.txt.

A flex trip keeps its own trip_id, so its stop_times rows join to the trip ids GTFS-RT uses, but on-demand trips are not published in GTFS-RT, see below. A single service area gets two stop_times rows on the same location, pickup on the first and drop off on the second, the GTFS-Flex ‘on-demand service within a single zone’ pattern. Several service areas get one stop_times row per service area, sorted by geofence id, with pickup and drop off on every row, the ‘on-demand services across multiple zones’ pattern.

Not exported yet: booking_rules.txt (#7052) and continuous_pickup / continuous_drop_off (#7051). The service Booking Rules fields are stored but do not reach the feed.

Only route group services with a service area geofence produce flex stop times. When the feed exports none, the three stop_times.txt fields are omitted and locations.geojson is left out of google_transit.zip. The locations.geojson endpoint answers 404.


### GTFS-RT and on-demand services
Vehicle positions and trip updates leave out on-demand trips. On an on-demand trip every stop is a rider's pickup or drop off, and a public feed, archived by third parties, would show where riders live or travel. A GTFS-RT stop time update also has no way to reference a locations.geojson zone.

A route is on-demand when ‘On-demand’ is checked on the route, or when it is on a GTFS route group with a service that has a service area. That is the GTFS-Flex export rule, but it applies whether or not ‘Enable GTFS-Flex export’ is on, and a service area geofence that is deleted or has an invalid shape still counts, the vehicle stays hidden. Deviated fixed routes are published as before. Service alerts are not affected.

## GTFS Realtime Validator

Passio hosts a GTFS Realtime validator at **https://gtfs.passio3.com**. It checks an agency's live GTFS Realtime feeds against the agency's static GTFS and reports anything that breaks the GTFS Realtime spec or the best practices that consumers like Google Maps and Transit app expect.

Use it when:

- An agency or a consumer reports that realtime arrivals or vehicles are missing or wrong in a third party app
- You have changed routes, trips, or GTFS settings and want to confirm the realtime feeds still line up with the static feed
- You want to check a feed before sharing it with a new consumer

The validator is the open source [GTFS Realtime Validator from MobilityData](https://github.com/MobilityData/gtfs-realtime-validator). The full list of rules it checks is in [RULES.md](https://github.com/MobilityData/gtfs-realtime-validator/blob/master/RULES.md).

### Feed URLs

Replace `{agency}` with the agency's Passio username.

| Feed | URL |
| --- | --- |
| Static GTFS | `https://passio3.com/{agency}/passioTransit/gtfs/google_transit.zip` |
| Trip Updates | `https://passio3.com/{agency}/passioTransit/gtfs/realtime/tripUpdates` |
| Vehicle Positions | `https://passio3.com/{agency}/passioTransit/gtfs/realtime/vehiclePositions` |
| Service Alerts | `https://passio3.com/{agency}/passioTransit/gtfs/realtime/serviceAlerts` |

If the agency's consumers use an imported GTFS rather than the Passio static link (see **Use imported GTFS IDs in GTFS RT** on the GTFS page), use that imported GTFS zip URL in Step 1 instead. Validating against the wrong static feed will report a large number of false trip and stop ID errors.

### Running a validation

1. Open **https://gtfs.passio3.com**.
2. **Step 1:** paste the static GTFS zip URL into **GTFS feed**.
    - Leave **Run GTFS validation** unchecked unless you also want the static feed checked. It adds time before realtime checks start.
    - Check **Use shapes.txt for GTFS-realtime rules** to also flag vehicles that are far from their route shape.
3. **Step 2:** paste the Trip Updates URL into **GTFS-Realtime Feed 1**.
4. To check Vehicle Positions or Service Alerts in the same session, click **Add Feed** and paste the next URL.
5. Leave **Interval (seconds)** at 10. This is how often the validator fetches each realtime feed.
6. Click **Start**.

The validator downloads the static GTFS, then begins fetching the realtime feeds on the interval you set. Each realtime feed gets its own monitor page, linked from the home page while the session runs.

**Leave the tab open.** Validation only runs while the page is open. Many problems only show up at certain times of day, so run it for at least 15 to 30 minutes during active service. Running it when no vehicles are in service will show few or no results.

### Reading the results

Each monitor page has three parts.

**Summary** shows **Http requests** (how many times the feed was fetched) and **Unique responses** (how many of those fetches returned new data). If unique responses stays far below http requests, the feed is not updating as often as it is being fetched.

**The rules table** lists every rule that has been triggered:

| Column | Meaning |
| --- | --- |
| ID | Rule ID, for example `E003`. Look it up in RULES.md for a full explanation. |
| Title | Short description of the problem |
| Severity | **ERROR** breaks the spec and may cause consumers to reject data. **WARNING** is a best practice issue that may hurt rider experience. |
| Last iteration / Last time | When the rule was last triggered |
| Count | How many times it has been triggered this session |

Click **Show in log** on a row to see each occurrence, including the trip, stop, or vehicle involved.

**Log** lists every occurrence in order, with the fetch iteration and timestamp.

#### Looking up a trip ID

Results often name a `trip_id`. To see which route, trip group, and stop that ID belongs to in Navigator, use the ID converter described on the Public APIs page:

`https://passio3.com/{agency}/report/routeByTripId/{tripId}/routeByTripId.json`

### Past sessions

The home page lists **Past Sessions** with the feed URL, start and end time, and total error and warning counts.

Past sessions are not permanent. They are cleared whenever the validator is restarted or updated, so copy anything you need into the ticket.

### Tips

- Start with errors. Warnings are worth fixing, but errors are what cause consumers to drop data.
- A large burst of trip ID or stop ID errors right at the start usually means the static feed in Step 1 does not match the feed consumers are using.
- When reporting a problem to development, include the agency, the feed URL, the rule ID, a few example entries from the log, and the time window you ran it.
- Validate one agency at a time, and close the tab when you are done so the server is not polling feeds nobody is watching.

