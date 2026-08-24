# Exporting & GTFS Feeds

## Static GTFS

The General Transit Feed Specification (GTFS) is an industry standard format for describing public transportation schedules and associated geographic information. A Static GTFS feed is a collection of structured text files that define agencies, routes, stops, trips, stop times, calendars, fare attributes, shapes, and other service metadata. Together, these files represent the published schedule and planned service for a transit system.

Static GTFS serves as the authoritative source of scheduled service. It defines where vehicles are expected to operate, when they are scheduled to arrive and depart, how routes are structured, and how service changes across days, holidays, and service periods. This dataset forms the baseline against which real time vehicle data, arrival predictions, and performance metrics are aligned.

The system supports full ingestion and management of Static GTFS feeds. Uploaded feeds are parsed and validated to populate routes, trips, stops, stop times, calendars, and related schedule data within the platform. This ensures schedule fidelity across trip planning, vehicle tracking alignment, reporting, and downstream integrations.

Both timepoint based and frequency based service models are fully supported:

- **Timepoint based service** uses published stop times to anchor schedule adherence and arrival predictions. The platform leverages scheduled arrival and departure times at defined stops to measure on time performance and generate rider facing ETAs.
- **Frequency based service** uses headway definitions in `frequencies.txt` to represent service that operates at consistent intervals rather than fixed departure times. The platform processes these headways to generate appropriate trip instances and service windows, ensuring accurate representation of high frequency routes.

Static GTFS is widely consumed by third parties. Mapping and trip planning platforms such as Google Maps, Apple Maps, and other mobility applications use GTFS feeds to provide route planning, stop information, and schedule lookups. Regional planning organizations, open data portals, and research institutions also rely on GTFS for analysis, accessibility studies, and service planning. By adhering to the GTFS standard, agencies ensure interoperability with external tools and services across the broader transit ecosystem.

Each agency in the system is associated with a unique Agency ID within the database. The Agency ID is an auto incrementing field that is automatically created when the user account is established. This guarantees consistent internal identification and proper data isolation across agencies.
