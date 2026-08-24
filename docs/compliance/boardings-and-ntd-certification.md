# Boardings & NTD Certification

## Boardings Report Help Guide

### Overview
The Boardings Report shows stop by stop passenger activity for the selected service window. It is based on log records that track every boarding and alighting event. Each row in the report represents a stop event that includes counts for boardings, alightings, passengers on board, passengers from the previous trip, and passengers continuing to the next trip.

The report is available under Reports > NTD Reports > Boardings Report.

---

### How Data is Collected

#### Passenger Count Source
Passenger activity comes from the onboard log table. Each log entry that has `onOff = 'on'` is counted as a boarding event. Entries with `onOff = 'off'` are counted as alightings. Only events where the door is open (`doorClosed = 0`) are included.

#### Service Day Grouping
Counts are grouped by the operational service day using the `startOfDay` value. This ensures late night and overnight trips roll into the correct day.

#### Additional Filters
The system removes:
- Setup vehicles  
- Out of service events  
- Training drivers  

The report also reuses the same date and route filters used throughout the NTD report section to guarantee totals match other views.

---

### Dynamic Passenger Load (DPL)
If the DPL option is enabled, the passenger load shown in the report is built directly from log entries rather than from static `paxLoad` values. This is recommended since it reflects any corrected on and off entries and keeps on board counts accurate for each trip segment.

---

### What Boardings Represent
NTD uses total boardings as the value for Unlinked Passenger Trips (UPT). A single person may appear multiple times if that person transfers to another vehicle. Each boarding counts as one trip in this report.

---

### Backend Processing Details

#### Data Pipeline
When the report is generated, the backend builds a BigQuery query that:
1. Filters log data based on the selected date and time  
2. Filters by route, bus, block, paddle, or group selections when those filters are enabled  
3. Pulls only on or off events  
4. Joins route and block metadata  
5. Calculates per trip passenger loads using either stored `paxLoad` or a dynamic sum  
6. Excludes setup vehicles and training driver activity  
7. Joins GPS data to calculate travel distance between stops  
8. Groups data so each row summarizes one stop event per vehicle

#### Passenger Type Handling
Only NTD passenger types are included. The system filters log entries to include:
- 201  
- 202  
- 203  
- APS10  
- APS11  
- APS12  

#### First and Last Stop Handling
For the first stop of a trip the system looks at the previous trip by the same vehicle at the same stop to populate “Passengers From Previous Trip.”  
For the final stop of a trip the system looks ahead to the next trip at the same stop to populate “Passengers Continuing.”

#### Missing On or Off Flags
If only the onOff flag is logged without a numeric count the backend resolves the correct counts during processing.

---

### Columns in the Report

#### Date and Time Columns
- **Date** – Service date of the trip  
- **Day of Week**  
- **Start Time** – Earliest log time for that stop event  
- **End Time** – Latest log time for consecutive events grouped at that same stop  

#### Route Information
- **Route Number**  
- **Segment or Block**  
- **Trip Group**  
- **Paddle**  
- **Trip Number**  
- **Direction**

#### Stop Information
- **Stop ID and Stop Name**  
- **Travel Distance** – Cumulative distance traveled by the bus at the time of that stop  

#### Vehicle Information
- **Vehicle Number**  

#### Passenger Counts
- **Passengers Boarded**  
- **Passengers Alighted**  
- **Passengers On Board** – Passengers currently on the vehicle after the event  
- **Passengers From Previous Trip** – Carried over from the last trip  
- **Passengers Continuing** – Carried into the next trip

---

### How Rows Are Merged
If the backend returns multiple records for the same stop for the same vehicle, route, and block during the same time window the frontend merges them. Times are stretched to cover the earliest start time and latest end time. Boarding, alighting, and on board totals are summed before display.

---

### Understanding the Results
The report highlights how passengers moved through the system for the chosen date range. It supports NTD certification by showing the exact values used for UPT and load calculations.

Selectable filters allow narrowing by date, route, group, paddle, or vehicle to focus on specific operations.
