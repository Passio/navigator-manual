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
