# Route Groups (Trip Mode)

## Definition
Routes in a Fixed Route system are a collection of Segments for reporting and Public display. Deviated and On-demand routes are also displayed here. 


Routes have several properties that are used depending on the type of system running and the agency's preferences. Routes are a sequence of segment trips and typically followed by an individual or multiple buses, for reporting and Public display. 

"Copy properties to selected Segment" copy these specific properties:

- Color
- Text color
- Short Name
- Show on public map/Passio GO
- Include in GTFS feed

You will see Route filters in the Ridership Report and the Business Intelligence Dashboard Reports. These fileter are also available on Live Map.


## Best Practices or SOP (Standard Operating Procedures)

When configuring an account with Deadhead Segments, those should be included with the route group. This is for reporting purposes and will ensure the out of service miles and hours are associated with the proper route group. The Deadhead segment should have GTFS unchecked so it does not produce deadhead trips and route paths in GTFS.
