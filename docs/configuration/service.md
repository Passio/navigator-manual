# Service

## Definition

Services are used to define flexible transit offerings by the Agency. Flexible transit options, much like Uber and Lyft, would provide on-demand service within a set zone hailed by phone or app. Relative to fixed route transit, corner-to-corner service reduces walking time and distance, and real time vehicle tracking reduces idle wait time. Flexible transit is generally better suited to serve suburban neighborhoods with lower population and development density than fixed routes.

## How they are used in Passio (IN DEVELOPMENT)

In Passio, Services are configured in Navigator > Configuration > Service and once enabled, will display on Passio GO for riders to see and potentially select for their ride. Riders can select a stop to see the available services or they can initiate a planned trip through the Trip Planner function and available service will show up there for selection.

The Services feature is very flexible. It's features include the ability to define the services as: 
  - Any Start type to Any End type
    - Curb to curb
    - Door to door
    - Stop to stop
    - Any to any (curb to door, door to curb, door to stop, etc)
  - One or more Geofence areas with the ability to separately define starting and ending geofences
  - Calendars to flexibly show active service days and times

## Best Practices or SOP (Standard Operating Procedures)

---

### Connect Setup and Configuration Guide

#### Service Overview

1. **Service Description**
   Provide a detailed explanation of your service, including the type of transportation offered, target users, operational areas, and any unique features or benefits.

2. **Trip Request Methods**
   - **Set Stops**: Riders request trips from predefined stops to other predefined stops.
   - **Geofence**: Riders can request trips from/to any location within a defined geofence using an address search similar to Google Maps.

3. **Trip Approval Scenarios**
   - **Dispatcher Approval**: All trip requests must be approved by dispatchers before being scheduled.
   - **Auto-Accept**: All trip requests are automatically accepted and dispatchers assign them to drivers.
   - **Auto-Schedule**: Trip requests are automatically accepted and scheduled without dispatcher intervention, suitable for services like overnight "Safe Ride".

4. **Dispatcher Role**
   Confirm if your service includes dispatchers who will assign trips to drivers.

#### Configuration Steps

1. **Add Solution**
   - In Access, provide Connect Rider user write access to Agency for API.

2. **Account Settings**
   - **External Integrations**: Check "Connect Dispatch for On-Demand".
   - **Branding**: Set Connect agency name, link to logo, default color, and secondary color.
   - **Email Notifications**: Enter dispatcher email for notifications.
   - **Trip Settings**: Configure auto-approve, auto-schedule, max ride time, address search options, round trip option, default program, service link, and FAQ link.

3. **Create Geofences**
   - Navigate to Rules >> Geofences to define operational areas.

4. **Vehicles, Drivers, and Calendars**
   - Set up vehicles, drivers, and operational calendars as usual.

5. **Add Services**
   - Define service names, pickup/drop-off levels of service (LOS), service areas, operational hours, membership requirements, extra riders option, future/return trip scheduling, and auto-schedule fail actions.

6. **Add Segments/Routes**
   - Ensure on-demand service is enabled and assign appropriate stops or geofences.

7. **Import Riders**
   - Import rider data if applicable.

8. **Additional Options**
   - Consider single sign-on (SSO) integration if required.
   - Confirm agency's method for handling trip requests:
     - **Dispatcher Controlled**: Manual approval and scheduling.
     - **Dispatcher Scheduled**: Auto-accepted requests needing manual scheduling.
     - **No Dispatcher**: Fully automated acceptance and scheduling.

   - Configure trip request methods:
     - **Geofences**: Use Google Maps search within geofences.
     - **Stops**: Provide a list of predefined stops for pickup and drop-off.

   - Set auto-schedule fail actions:
     - Notify rider if the trip cannot be performed.
     - Accept the trip and leave unscheduled for dispatcher.
     - Force the trip to be assigned to a vehicle despite constraints.

---

### Practice Exercise

1. **Access Dispatch and Rider Portals**
   - Log in to Connect Dispatch using your Navigator credentials.
   - Create a pretend rider account using a format like first.last+demorider@passiotech.com.
   - Use your cell phone number for text alerts.

2. **Driver Tablet Setup**
   - Use Passio Transit app with MDT_0.39.10.apk or newer.
   - Sign in to the tablet with your own Navigator credentials.
   - Select any vehicle, driver, and route in your account.

3. **Practice Trip Request and Completion**
   - Request a ride from Connect Rider and follow the auto-scheduling process.
   - Move the trip to your route if necessary.
   - Complete the trip on MDT by marking each step (Arrive at PU, Rider is on, Arrive at DO, Rider is off).

4. **Create Your Own Setup**
   - Create a new driver, vehicle, and route.
   - Add the route to Connect Dispatch with a distant end date (e.g., 2030).
   - Repeat the trip request and completion process to experience all roles (rider, dispatcher, driver).

---

### Rider Instructions

#### Quick Start Guide

1. **Launch the App**
    - Open the Passio GO app on your device.
    - From the menu, select the on-demand service to launch the rider app.

2. **Sign Up (First Use Only)**
    - Click the "Sign up" link at the bottom of the page.
    - Fill in First Name, Last Name, Phone, and Email Address.
    - Enter and confirm your desired password.
    - Click "Create Account".

3. **Sign In**
    - Sign in with Google, Microsoft, or your email address and password/PIN.
    - Check "Remember me" to stay signed in.
    - Tap "Sign In".

4. **Password Recovery**
    - Tap "Forgot password?" on the sign-in screen.
    - Enter your email address and follow the instructions in the recovery email to reset your password.

5. **Booking a Ride**
    - After signing in, access the ride booking screen.
    - Select the service you want to use.
    - Enter pick-up and drop-off addresses.
    - Review the route and estimated duration on the map.
    - Tap "Request Trip" to book your ride.

6. **Ride Status Updates**
    - Receive real-time status updates once your ride is booked.
    - The status screen shows details such as assigned driver, pick-up/drop-off addresses, and scheduled times.

#### User Manual

1. **Launching the App**
    - Launch Passio GO and select the appropriate service from the menu.

2. **Signing In**
    - Check "Remember me" to stay signed in for future sessions.

3. **Password Recovery**
    - Tap "Forgot password?" and follow the instructions to reset your password.

4. **Booking a Ride**
    - Select the service, enter pick-up/drop-off addresses, and tap "View Details" to confirm the route and duration.
    - Tap "Request Trip" to book your ride.

5. **Receiving Ride Status Updates**
    - Stay updated with real-time ride status, including pick-up/drop-off addresses and scheduled times.

#### Tips for Using the Rider App
- Ensure accurate addresses for pick-up/drop-off.
- Stay updated with ride status changes.
- Utilize the map feature for route and travel time visualization.

---

### Dispatch Instructions

#### Logging In
1. Log in to https://dispatch.passioconnect.com with your credentials.
2. Click on the On-Demand icon on the left panel.
3. Log in to Connect Dispatch and check 'Remember me' to stay logged in.

#### Start of Shift
1. Set up today's runs for each vehicle/driver:
    - Click "New Run" at the top of Connect Dispatch.
    - Select Route (e.g., Route 1, Route 2).
    - Select Vehicle.
    - Select Driver.
    - Set Start and End times for their shift.
    - Click "Add Run" at the bottom of the form.
    - Repeat for each vehicle/driver being used today.
2. Schedule any existing trips that have been pre-requested.

#### Schedule Existing Trips
1. Assign existing trips to runs:
    - Click the hamburger menu on the bottom right of each trip.
    - Assign the run at the bottom of the details card.
    - Alternatively, drag and drop trips onto a run to assign it.
2. The system should automatically schedule incoming trips if vehicles have capacity. Dispatch can override this manually.

#### Adding a New Rider
1. If a rider needs to be added:
    - Click "Riders" at the top of the Dispatch screen.
    - Click "New Rider".
    - Fill in the rider's details (First Name, Last Name, Phone, and Email).
    - Optionally, set up a password for them or they can use "Forgot Password" to set one up later.

#### Adding a Trip
1. To manually add a trip:
    - Click "New Request" at the top of the Dispatch screen.
    - Select the rider by typing their name.
    - Enter Pick-Up and Drop-Off locations.
    - Select the appropriate service.
    - Adjust the pick-up date/time if needed.
    - Optionally, assign the run or leave it in unscheduled trips to be assigned later.
    - Click "Request Trip".

  ### Request Time Validations and Filter On-Demand Services Based on Rider Eligibility
  1. Validation Required:
     - Sign into Production and go to account
     - Click on Account -> Configuration -> Services
     - Create Validation Required Service (if already created, then open the service)
     - Verify Validation required is checked
     - Save Service
     - Go to Rider application
     - Select services dropdown
     - Validation Code is now listed
  3. Validation Code:
     - Create a new Account or Edit an Existing Account
     - Go Into Passio Navigator -> Configuration -> Services
     - Select Add New Service
     - Name = Validation Code
     - Check the validation required checkbox
     - Enter the validation code needed
     - Log in to Rider
     - Select services dropdown
     - Verify validation code is displayed
  4. Valid Emails:
     - Sign into Production and go to account
     - Click on Account -> Configuration -> Services
     - Open Validation Code Service
     - Verify Validation Code area is blank
     - Enter valid email(s) that will be exclusively white listed (multiple emails, separated with commas is allowed)
     - Save Service
     - Go to Rider application
     - Select services dropdown
     - All the emails that are whitelisted will now receive the service requested
  5. Valid Domains
     - Sign into Production and go to account
     - Click on Account -> Configuration -> Services
     - Open Validation Code Service
     - Verify Validation Code, and valid emails area is blank
     - Enter valid domains that will be exclusively white listed (multiple domains, separated with commas is allowed)
     - Save Service
     - Go to Rider application
     - Select services dropdown
     - All the domains that are whitelisted will now receive the service requested
  6. Membership Required
     - Sign into Production and go to account
     - Click on Account -> Configuration -> Services
     - Create or open Membership Required Service
     - Click the check box for Membership Required
     - Save Service
     - Go to Rider application
     - Select services dropdown
     - Membership required is now displayed from the dropdown for services
  
    
     
       

