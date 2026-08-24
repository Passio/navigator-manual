# Assignment History

## Assignment History Report

### Overview
The Assignment History report is an audit trail of historical assignment changes for a single vehicle (bus). It provides the detailed event-level explanations behind data shown in:
- In and Out of Service report
- Snapshot history on LiveMap
- Ridership report

Use this report to understand what changed, when it changed, what triggered the change, and which device or system performed the update.

### When to use
Use Assignment History as the first place to investigate client-reported data inaccuracies, including questions like:
- “Why did this vehicle show the wrong driver, block, or trip?”
- “When did the bus go out of service and what triggered it?”
- “Did a dispatcher override an assignment, or did it come from the vehicle?”

### What the report shows
Each row represents a single assignment change event for the selected vehicle, including:
- The time of the change (Assignment time)
- The device involved (Device)
- The origin of the change (Source)
- Which assignment attribute changed (Key)
- The new value that was set (Value)

#### Common triggering events
Assignment changes typically occur due to:
- MDT entering or exiting a geofence
- vMDT processing incoming GPS updates
- Driver actions on the MDT (for example, tapping to change states)
- Dispatcher updates via Dispatch and Messaging

### Filters and selection
- **Vehicle:** The report can only be filtered to a single vehicle at a time.
- **Date range:** The report can span multiple days by selecting a start and end date.
- **Assignment details to show:** Users can choose which assignment categories are included in the grid, such as:
  - Block
  - Driver
  - Trip
  - Out of Service
  - Route Block
  - Geofence
  - Stop
  - Paddle
  - Device Job
  - Time Point

### Reading the grid
#### Key fields
- **Assignment time:** Timestamp when the system recorded the change.
- **Device:** Identifier of the MDT/vMDT or device session that initiated or reported the change.
- **Source:** Who or what produced the change (examples: Driver, Dispatcher, vMDT).
- **Key:** The specific assignment attribute updated (examples: `driverId`, `tripId`, `blockId`, `outOfService`, stop or geofence related keys).
- **Value:** The new value applied by that event (often an ID, state, or reference).

#### How to interpret changes
- The grid shows changes, not a continuous state.
- To determine the previous value for a given **Key**, look for the most recent earlier row with the same **Key**.

### Export and sharing
Assignment History can be:
- **Viewed on screen** for quick investigation
- **Exported** for analysis and sharing:
  - **CSV** for Excel manipulation
  - **PDF** for a shareable, read-only snapshot

### Notes and limitations
- Only one vehicle can be selected at a time.
- Multi-day time ranges are supported, but larger ranges may increase the amount of data returned.
- The usefulness of the report depends on event coverage from MDT/vMDT, dispatch actions, and system triggers.
