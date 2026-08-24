# Public APIs

**Overview:**
This dashboard report provides an overview of the customer profile, including primary contacts, communication details, key account details, report details, and real-time status. It also includes solutions and general information such as account users, installation locations, route block information, and device types.


1. **Primary contacts** of the Agency/Client
2. **Communication** information and procedure details for Passio support
3. **Key account details** relevant to Passio support for understanding the setup
4. **Report details** to help define Report specific setting for the client
5. **Real time status** of the Vehicles and Routes
6. **Solutions** purchased and enabled on the account
7. **Active Routes** map overview
8. **Users** with access but without defined permission. They could have read-only, write, or limited page access
9. **Other General information** about the account and operation
10. **Devices installed** on the account. This may include test devices used by Passio support.



### Available APIs

#### GTFS
This describes the general shape and schedule of the transit system. It shows when stops will be serviced, when schedules are ran, where the stops are and where the routes run.

  

#### GTFS-RT
This provides real-time updates for stop ETAs, vehicle's GPS location and system alerts. This is the best way to capture current state of the system.

#### Websockets
This provides streaming GPS location of vehicles using wss protocol. This has extensive filtering capabilities.

  

#### Log API
This is a paid upgrade. This provides raw count history, raw assignment history, raw card swipe history. It has extensive filtering, can be pulled in real time and is the best way to capture current state of the system with Passio specific data that is not available in GTFS-RT.

  

#### Telematics API
This is a paid upgrade and requires installation of a device that has vehicle telemetry capabilities. This provides odometer reading, DTC codes and other engine/vehicle specific information as exposed by the vehicle

  

#### Active Driver API
This is a paid upgrade. This provides a list of driver activity segmented by IS/OOS and vehicle.

  

#### Headway API
This is a paid upgrade. This shows headway data for every stop by every vehicle for the given date range.

  

#### Active Vehicle Count API
This is a paid upgrade. This shows unique number of vehicles in service aggregated by hour.

  

#### Deviated Fixed Route Request API
This requires Deviated Fixed Route. This data feed shows all requests for a given period, the information about the request and the status of the request.

#### Ridership by stop
This API returns a dataset for yesterday’s bus trips by pulling together information from different sources. It shows details like the bus route and stop information, the first time the bus arrived at each stop, and the total number of passengers who got on or off, along with the highest number of passengers on board at any point. It also includes the date, day of the week, the bus’s location, the type of passenger data recorded, and the device used, ensuring that all relevant transit data is organized for each stop on that day.

## ID converters
We have special URLs that can be used to get more information from IDs. This is useful when looking at a GTFS validation result. We will be adding more of these

### Route and Trip Group information from TripId
https://passio3.com/{user}/report/routeByTripId/{tripId}/routeByTripId.json

https://passio3.com/scott/report/routeByTripId/465212/routeByTripId.json

The JSON response includes `routeName`, `routeColor`, `routeGroupName`, `routeGroupColor`,
`routeGroupShortName`, `tripGroupName`, `tripId`, `tripDirection`,
`tripHeadsign`, `departure`, `interpolated`, `arrival`, and `stopName`.

## Software Development Lifecycle
Here is how our software development lifecycle works in regards to reported bugs and feature requests.

### Bug Resolution Process:
When a bug is reported, our team acts immediately. We first work to replicate the issue using the details provided. Once the issue is confirmed, we create a development ticket and assign it to a developer. After the fix is implemented, it undergoes a technical review by our lead developer and a product review by myself or another team member. If approved, we schedule the deployment. Urgent bug fixes are deployed overnight, while standard patches are rolled out on Saturday mornings. If we cannot replicate the issue, we work closely with the client to gather more information, sometimes adding additional logging to aid in diagnosis. We then follow the standard process once we can reproduce the issue.

### Feature Request Categories:

**Committed:** These requests are features we have committed to building, typically from RFP responses or contractual obligations made during the sales cycle. We generate a detailed scope of work and establish timeline milestones. Stakeholders are actively involved in reviewing the development issues before implementation to ensure the end goal is understood.

**On the Roadmap:** These features are planned for future development, either as part of our platform’s evolution or to explore new market opportunities. While they are fully designed from a technical standpoint, they haven’t been scheduled for active development. Roadmap features often advance to committed projects when clients express heightened interest or are willing to become financial partners.

**In Evaluation:** These are features under consideration that haven’t undergone technical analysis or scheduling. We collect and organize feedback from clients and internal teams, and review these requests regularly. As new information becomes available, we adjust their status accordingly. We also keep a record of which clients have requested these features to provide updates as the status evolves.

#### Force SSO
If an account has **Force SSO login** turned on, users who can access that account must sign in through SSO (like Google/Microsoft SSO) instead of a password.

- Regular users: password login is blocked with “single sign-on required.”
- Admin users: excluded from this rule (they can still log in with password).

#### Disable Password Reset
If an account has **Disable Password Reset** turned on, users with direct access to that account cannot use the normal “forgot/reset password” flow.

- Reset requests are blocked with a message telling them to contact an administrator.
- Admins can still update passwords.
- Users with permission to edit users from the Access/My Profile area can still change passwords there.



