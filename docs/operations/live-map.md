# Live Map

## Live Map help

Live Map displays all agency defined Routes, Segments, Stops, and Paths. It also contains layers that can show: Stop geofences and Other geofences. this allows an Agency to have an overall view of their system and to be able to pan and zoom around. You will also be able to click on the Stops and see Stop properties, such as Stop Name and Stop Code, typically used for relaying to the public. 

If the Agency has purchased OpsView or Passio GO, they will also see the Real-time locations of all vehicles and buses managed in their account. Depending on the solutions setup, you will be able to view a lot of vehicle properties including: Passenger load as a count and percentage, assigned Route name, assigned Block name, Next stop, DeviceID reporting, assigned Driver, Direction of travel, assigned Job, Speed of vehicle, and the last reported date and time of this information. 

Other features of Live Map include: 

1. Replay - Historical view of real time activity with start, stop, fastforward, and drag buttons for control.
2. SnapShot - The next version of Replay
3. Dispatch - provides a vehicle list with assignments

In addition to the Layers, other filters include Routes, Vehicles, Devices, Incidents, and Views. 

### SnapShot

**Snapshot** is a powerful replacement for **Replay**. By default, it displays all GPS points and incidents for the selected time period, which defaults to today.

To view a different day, click the date-time at the bottom of the screen, select the desired date from the pop-up calendar, and then click **Snapshot**.




Once the data is loaded, use the **scrubbers** and **playhead** to control the amount of data displayed.

- The **scrubbers** on either end of the green bar adjust the start and end times of the displayed data.  
- The **playhead** controls the exact point in time reflected on the map, showing each vehicle’s location at that moment. You can move the playhead by clicking and dragging it or by using the **play**, **fast-forward**, or **super fast-forward** buttons to advance the timeline.




Clicking on a vehicle displays its status at that exact time. If you leave the information window open while changing the time, the data for that vehicle will update accordingly.

Clicking on a **cookie-crumb** data point reveals details about the vehicle that dropped that crumb.




By default, **cookie-crumb data** and **incidents** are loaded. To view additional information, click the **Layers** button and select the desired data. The **Stop Geofence** layer is particularly useful for seeing when a vehicle entered an exact stop radius.




## ETA Settings

These settings control where ETAs come from for the ETA API, GTFS RT Trip Updates, text-to-ETA, and the stop markers on the map.

### ETA version

Picks the engine that produces ETA predictions. Clients are normally set to version 2. A new client starts on version 1 until someone changes it.

#### Version 2 (v2)

Use for clients with blocks. v2 predicts arrivals from the schedule for the bus's block:

1. Loads the schedule for the bus's block.
2. Finds the bus's current trip and stop in that schedule.
3. Adds up the scheduled travel times to each stop ahead, adjusting if the bus is running late.

v2 recalculates when a bus arrives at or leaves a stop, and once a minute while it is sitting at a stop.

**Without blocks:** v2 can only fall back to the route's timepoints, or to the route's transit time and calendar, and it often produces no ETAs. For clients without blocks, use version 1 with both GO endpoint settings on.

Saving version 2 also turns on **GO ETA use table**. Switching back to version 1 does not turn it off.

#### Version 1 (v1)

The original engine. It doesn't need a schedule or blocks. Use it for clients without blocks.

#### Version 4

Oracle clients have their ETAs stored as version 4.

### ETA API and GTFS RT - use GO ETA endpoint directly

Instead of reading stored predictions, the ETA API asks GO for live ETAs, so riders get the same numbers they see in the GO app. This covers:

- ETA API
- GTFS RT Trip Updates
- Text-to-ETA

Requirements:

- **ETA version must be 1.** On version 2 this setting does nothing.
- **ETA based on timetable must be off.** That setting takes priority.

Limits:

- No next-trip predictions.
- No scheduled times in the output.

Use this for clients without blocks, where v2 can't produce ETAs.

### ETA marker - use GO ETA endpoint directly

Only controls the ETA popup on stop markers in the map. When it's on, the popup shows GO's live ETAs instead of the ETA API's.

- Works on any ETA version.
- Needs **Show stop ETA's** turned on, or no popup appears.
- Admins always see every ETA source in the popup, whatever this setting say
- Does not change the ETA API, GTFS RT, or text-to-ETA.

### Common setups

| Client | ETA version | ETA API and GTFS RT - GO endpoint | ETA marker - GO endpoint | ETA based on timetable |
|---|---|---|---|---|
| Has blocks | 2 | Off | Off | Off |
| No blocks | 1 | On | On | Off |

Turn both GO endpoint settings on or off together. If only one is on, the map and text-to-ETA can show different times for the same stop.

Changes take up to about a minute to show up because of caching.
