# Rider Alert Log

**User Help File:**
GO Alert Logs:

Alert Logs is a feature that allows you to view all the notifications sent by the system, including important information such as creating, editing, and deleting rides. You can find it in the main menu of the site, under the Alert Logs tab.

- Created At: Created At is a column that shows the date and time when the notification was first created.
- Last Edited At: Last Edited At is a column that shows the date and time when the notification was last edited.
- Name: Name is a column that shows the name of the notification. It can include important information about ride requests or alerts.
- Important: Important is a column that indicates whether the notification is of high importance or not.
- As push: As push is a column that indicates whether the notification was sent as a push notification or not. For push notifications to work, make sure the account has GTFS Service Alerts enabled.
- Route: Route is a column that shows the pickup and drop-off location of the ride.
- From: From is a column that shows the beginning of the ride.
- To: To is a column that shows the end of the ride.
- Duration: Duration is a column that shows the length of the ride.

### Supported Tags

Passio GO Alerts have limited support for HTML and markdown tags. This will work in Passio GO apps, but will not always be respected in GTFS-RT Service alerts<br/><br/>

Line Break: `<br/>`<br/>
Adds a new line to the end of the text<br/><br/>

Usage: `This is a line<br/>This is my second line`<br/>
Result:<br/>
This is a line<br/>
This is my second line

---

Images: `<img/>`<br/>
Embed an image into your alert<br/><br/>

Usage: `![](../assets/image-3.svg)`<br/>
Result:<br/>
![](../assets/image-3.svg)

---
Links: `<a/>`<br/>
Link to an external website<br/><br/>

Usage: `<a href="https://passiotech.com">Passio is made with love</a>`<br/>
Result:<br/>
<a href="https://passiotech.com">Passio is made with love</a><br/>

---

Bold: `*`<br/><br/>

Usage: `*This text is now bold*`<br/>
Result:<br/>
**This text is now bold**<br/>

---

Italic: `_`<br/><br/>

Usage: `_This is now in italics_`<br/>
Result:<br/>
_This is now in italics_<br/>


### Other
To control when the last stop is to correctly wrap the times in Passio GO, set the `hourOfLastRide` config option.

To show arrival times in GO, set the config option `showArrivalTimesOnGO` to 1

### Direct URLs
Passio GO Web has been updated to allow direct access to a single Route Group. Previously, it only allowed direct access to a single Segment based on ID, which required knowing the ID (for the current version) and it would only display one leg of an inbound/outbound config. The new way will accept an ID, or a Route Group name or a Segment name

Enhanced Passio GO to support additional query strings in the URL scheme, enabling the resolution and display of specific routes or route groups based on provided parameters.
- Supported query strings include routeName, routeGroupId, and route.
- routeName query string finds the Route name and resolves to a routeGroupId or route, rewriting the URL if resolved.
- routeGroupId and route query strings display the respective route group or route by ID.
- All input query strings are URL decoded before database lookup.
- Searches are case-insensitive.
- If routeName cannot be resolved, the app handles it gracefully with an appropriate message or fallback.


This update improves usability and navigation within the app by allowing direct access to specific routes or route groups via the URL.  
Template: `https://{agency}.passiogo.com/?routeName={routeName}`  
Examples:
- https://clemson2.passiogo.com/?routeName=purple%20route
- https://clemson2.passiogo.com/?routeName=gsp%20pick%20up
- https://clemsonu.passiogo.com/?routeName=tiger%20commute


### VPAT links
[Mobile VPAT](http://passio.github.io/vpat/app.pdf)
[Web VPAT](http://passio.github.io/vpat/web.pdf)


## Passio GO Errors

### "route configuration issue" ETA error

#### What riders and staff see

A stop shows `--` instead of an arrival time and is listed at the bottom of
the predictions. The ETA debug/error output includes a message such as:

```
route configuration issue (0>5400)
```

#### What it means

The system predicted that the next vehicle would take **longer to reach the
stop than the agency's ETA limit allows**. There was also no scheduled time
for that stop to show instead. Rather than display an unrealistic arrival
time, Passio GO hides the prediction.

The numbers in the parentheses:

| Value | Meaning |
|-------|---------|
| First number (always `0`) | Not the real prediction. The ETA has already been cleared when the message is written, so this is always `0`. |
| Second number (e.g. `5400`) | The agency's ETA limit, **in seconds**. `5400` = 90 minutes. |

#### Where the limit is set

**Passio GO → Alert log →** gears icon (top right) **→ Settings →
GO limit ETA by nn minutes**

- Enter the number of minutes. Any prediction longer than this is treated as
  unrealistic.
- `0` (the default) turns the limit off.
- `1` is treated as **90 minutes**. Older accounts used this as an on/off
  checkbox.
- Values of 10 minutes or less are ignored, so they behave like `0`.

#### What happens when a prediction exceeds the limit

1. If the stop has a scheduled time later today, Passio GO shows the
   scheduled time instead. No error appears.
2. If there is no scheduled time, the stop shows `--` and the
   **route configuration issue** error is recorded.

On-demand predictions work differently: they are capped at the limit, not
hidden.

#### Common causes

- **Stop is near the end of a long route.** The vehicle really is more than
  the limit away, for example a stop just behind the bus on a long loop.
- **Route or stop setup problem.** Stops are in the wrong order, a stop is
  assigned to the wrong route, or the route path is drawn incorrectly. Any of
  these makes the vehicle's trip to the stop look much longer than it really
  is. This is the most common reason for the "route configuration" wording.
- **No schedule for the stop.** Without a schedule, Passio GO has no
  fallback time to show.

#### How to troubleshoot

1. Check the route's **stop order** and the **route path** on the map. Make
   sure the stop is on the route and in the correct position.
2. Check whether the vehicle is actually far away. If it is, the `--` is
   expected.
3. If long predictions are normal for this route, **raise** the
   **GO limit ETA by nn minutes** value, or set it to `0` to turn the limit
   off.
4. Add a schedule for the route so that Passio GO can show scheduled times
   instead of `--`.
5. If none of these explain it, escalate to engineering with the agency, route
   and stop names, and the time you saw the error.


