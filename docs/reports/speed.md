# Speed

**Boundary & Speed Report Help File**

**Overview**: 
This report provides information about the speed within a specified boundary of a bus driven by a specific driver on a particular route.

The default filters are 7 Days and 65+ mph.

**Columns:**

 - Vehicle: Name of the vehicle.
 - Driver: Name of the driver.
 - Route: Route short name and name.
 - Min speed: The minimum speed of the bus recorded during the 'Start' and 'End' time period.
 - Max speed: The maximum speed of the bus recorded during the 'Start' and 'End' time period.
 - Start: The start time of the boundary and speed record.
 - End: The end time of the boundary and speed record.

**Usage:**

To access the Boundary & Speed report, navigate to the report section of your transportation management software and select the report from the list of available reports.
Once you have selected the report, enter filters such as the Vehicle name, Driver name, or Route name.
Run the report to generate the results.
Review the report to check the minimum and maximum speed of the bus recorded during the specified period.
Use the report to identify any instances of speeding or erratic driving and take corrective action as necessary.

_**Note: The information provided in this report is for monitoring purposes only and should not be used to discipline drivers without first conducting an investigation into the circumstances surrounding any incidents of speeding or erratic driving. Always follow company policies and procedures when addressing driver performance issues._


## How Speed is Calculated in Our System

In our system, speed is calculated based on GPS data received from each vehicle. This process ensures accuracy and reliability for monitoring vehicle movement.

### Step 1: Collecting GPS Data

Each vehicle sends its GPS location approximately every 3 seconds. Each GPS record includes:

- **Latitude & Longitude** (Position)  
- **Timestamp** (Time the location was recorded)  
- **Heading** (Direction the vehicle is traveling)  

### Step 2: Checking for Accuracy

To improve accuracy, the system applies a **dead reckoning** process, which refines position estimates based on prior GPS points and known route paths. This helps smooth out errors caused by temporary GPS signal loss or inconsistencies.

### Step 3: Calculating Distance Traveled

Once we have two consecutive GPS points, we calculate the distance the vehicle has moved using the **haversine formula**. This formula computes the shortest path between two latitude/longitude points on the Earth’s surface, taking the planet’s curvature into account.

### Step 4: Determining Speed

Speed is determined using the basic formula:

\[
\text{Speed} = \frac{\text{Distance Traveled}}{\text{Time Interval}}
\]

- The **distance traveled** is calculated using the haversine formula.  
- The **time interval** is typically 3 seconds (the time between GPS readings).  

### Step 5: Filtering Out Errors

To prevent inaccurate readings, the system filters out:

- **Sudden large jumps** in position that would indicate unrealistic speeds.  
- **GPS drift** when the vehicle is stationary but still reporting slight position changes.  
