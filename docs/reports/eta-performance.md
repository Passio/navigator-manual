# ETA Performance

## ETA Performance report

The ETA Performance report compares how **ETA v1** and **ETA v2** performed against real stop arrivals. Use it to find routes/segments and time periods where **v2 is less accurate than v1**, so we can identify client configuration that may be contributing to ETA accuracy issues.

This report is best viewed side by side on two screens, with **v1** open on one screen and **v2** open on the other.

### How the report works

- We generate ETAs for **every stop** in the system every **30 seconds** using both algorithms (ETA v1 and ETA v2).
- When the bus actually arrives at the stop, we record the **actual arrival time**.
- Each ETA prediction is compared to the actual arrival time to calculate **accuracy** and to bucket the result as early, accurate, late, or missed.

#### Earliest available data

Data is available starting **February 1, 2026**. Date ranges that go earlier than **2026-02-01** will not have reportable results.

### Controls and filters

#### Algorithm toggle

Use the toggle buttons to switch between:

- **v1 (Original PHP)**
- **v2 (Remastered JS)**

To compare v1 vs v2, set the same filters and date range in both views and compare the charts and route table.

#### Date range

Use the quick selectors (for example: last year, current year, last month, current month, 7 days) or choose **Range** to set a custom start and end date.

#### Time groups (prediction horizon)

The time group toggle buttons (for example: **0-10 min**, **10-20 min**, **20-40 min**, **40-90 min**) group ETAs by how far ahead of the actual arrival the prediction was generated.

Example: A prediction in the **10-20 min** group was generated between 10 and 20 minutes before the bus arrived at the stop.

Why this matters:

- ETAs naturally become more accurate closer to the stop (0-10 min should look best).
- We still expect strong performance **45 minutes or more** before arrival. Use the **40-90 min** group to focus on longer horizon accuracy.

### Understanding the metrics

#### Early, accurate, and late buckets

Each prediction is bucketed by percent error relative to the actual time-to-arrival at the moment the prediction was made:

- **Early** means the ETA predicted an arrival sooner than the actual arrival (optimistic).
- **Late** means the ETA predicted an arrival later than the actual arrival (pessimistic).
- **Accurate** means the ETA was within the acceptable error range (shown as **Accurate +/- 5%**).

The legend buckets include:

- **>50% early**
- **10-50% early**
- **5-10% early**
- **Accurate +/- 5%**
- **5-10% late**
- **10-50% late**
- **50-80% late**
- **>80% late**
- **Missed stop**

#### Missed stops (critical)

**Missed stop** means we predicted an ETA for a trip-stop, but the bus never serviced the stop (no actual arrival was recorded).

Missed stops are a crucial metric because they indicate a breakdown in service or data integrity for that stop. Investigate and report any consistent missed stop trends (by route or by prediction horizon) to Passio Support.

### Reading the report

The report shows performance in multiple views so you can quickly detect trends and then drill down:

- **ETA performance (pie chart)**: Overall distribution of early, accurate, late, and missed buckets for the current filters.
- **ETA performance by date (line chart)**: Daily trend of each bucket across the selected date range.
- **ETA performance by hour (line chart)**: Time-of-day trend across a typical day to spot peak hour issues.
- **Route table**: Route level breakdown of bucket percentages, including missed stop rate.

### Recommended workflow to compare v1 vs v2

1. Open the report twice (two windows, tabs, or screens).
2. Set one view to **v1** and the other view to **v2**.
3. Use the same **date range** and **time group** in both views.
4. Compare in this order:
   - **Missed stop rate**
   - **Accurate +/- 5%** share
   - Movement into large error buckets (**>50% early**, **>80% late**)
5. Use the by date and by hour charts to identify whether the issue is:
   - tied to specific dates (incidents, weather, school schedules, one-off events)
   - tied to specific hours (peak traffic, bell times, dispatch patterns)
6. Use the route table to isolate routes with the largest v2 regression.

### What to report to Passio Support

When you find a repeatable trend where **v2 is less accurate than v1**, report it with enough detail to reproduce:

- Client
- Date range (start and end)
- Time group (0-10, 10-20, 20-40, 40-90)
- Routes affected
- Whether the issue is dominated by **missed stops**, early ETAs, or late ETAs
- The strongest pattern you see (by date and by hour)

Include screenshots of both v1 and v2 views if possible, aligned to the same filters.

### How can ETAs be better

1. Device Configuration
   - Make sure each vehicle has an active GPS device and that active device has `virtual MDT` enabled. In most cases, also make sure `GO IS on first stop` is also enabled. If the bus only has an MDT, make sure that device has `virtual MDT` enabled.
  
2. Route Configuration
   - The first Route Path point must be inside the first stop geofence. The Route Path points are those white doughnuts with the orange center.
   - Each stop geofence MUST have at least one Route Path point in it.
   - When each stop is properly configured and the first point is inside the first stop, then the flag "Route points are ready for ETA" can be checked. This provide anchors for the ETA engine, speeds up the algorithm and increases the accuracy.
   - Make sure there are plenty of scheduled arrival and departure times (or durations for headways) in each trip. This provides hints to the ETA and assignment engine.
   - For headway trips, make sure the duration is correct. Use Transit Time report and snapshot to validate. If the duration does not reflect reality, but the client will not change it, then populate `Transit time` on the Route and the ETA engine will use that time instead.
