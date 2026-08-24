# Idle

Technical Help File: **Vehicle Idle Report**

This report shows the idle time of vehicles for a given timeframe. The report lists the vehicle details, driver details, route details, start and end times, duration of idle time, and location where the idle happened.

**Minimum Idle Time:**
The report includes only those vehicles that have idled for more than 10 minutes. However, if you need to change the minimum idle time, modify the query accordingly.

**Column Details:**

- Vehicle: ID or number of the vehicle
- Driver: Name of the driver
- Route: Route number or name
- Start time: Time when the vehicle started the journey
- End time: Time when the vehicle completed the journey
- Duration: Total idle time of the vehicle in hours, minutes, and seconds.
- Location: Latitudes and longitudes of the location where the vehicle idled.

**Filters:**
By default, the report shows data for the current date only. However, you can modify the query to fetch data for any date range. To apply filters, modify the query's 'where' clause.

**Sorting:**
The data is sorted by the start time of the journey in ascending order. However, you can modify the query to sort the data in any order you like. To sort the data, modify the query's 'order by' clause.

**Exporting data:**
You can export the data to various formats like .csv, .pdf, or .xlsx. To export the data, click the export button and select the desired format.

**Conclusion:**
This report helps you track the idle time of vehicles and identify the locations where the idle happened. This information can help you optimize routes, reduce fuel consumption, and increase the overall efficiency of your fleet.

