# Headways

## Help file for Headways

There should be one headway for each time the number of vehicles change and for each active time period.

For example, for BH, there is M-W and Th-F.

There are 6 times that the number of vehicles change for M-W Trip Group and 7 times the number of vehicles change for Th-F Trip Group

Thus, there are 13 different headways for BH

For staggered starts, capture the maximum number of vehicle on the route.
For example here is a headway where the Trip duration is 45 minutes  

| Vehicle | Start Time |
| --- | --- |
| 1 | 7:00 |
| 2 | 7:30 |
| 3 | 8:30 |

| Headway | Start Time | End Time | Frequency | Vehicles |
| --- | --- | --- | --- | --- |
| 1 | 7:00 | 7:45 | 1800 sec | 2 |
| 2 | 7:45 | 8:30 | 1380 sec | 2 |
| 3 | 8:30 | ... | 900 sec | 3 |

Stop 1 will be serviced:
| Time | Bus | Freq | Details |
| --- | --- | --- | --- |
| 7:00 | 1 | ... | |
| 7:30 | 2 | 1800 sec | |
| 7:45 | 1 | 900 sec |  |
| 8:15 | 2 | 1800 sec | |
| 8:30 | 3 | 900 sec | |
| 8:45 | 1 | 900 sec | held from 8:30 arrival |
| 9:00 | 2 | 900 sec | |
| 9:15 | 3 | 900 sec | |
| ... | ... | ... |
