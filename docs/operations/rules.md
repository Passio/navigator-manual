# Rules

## How to use GBQ Rule Action

1. Create a Rule Action called "Email group with daily report - {report name}"
2. Set the Rule action type to `Email`
3. Enter your email (this is for testing and will be replaced with client email in the future)
4. Leave Next action blank
5. Create a Rule Action called "GBQ Report - {report name}"
6. Set the Rule action type to `Run GBQ Report`
7. Enter the query from Tech Services into GBQ query field
8. Set GBQ result type to `CSV`
9. For next action, select the Rule Action from step 1
10. Create a new Rule called "Daily {report name}"
11. Check the Active box
12. For Trigger, select `Timed`
13. Set the run action time to be 5 minutes in the future
14. For Action, add the Rule Action created in step 5.
15. Wait 5 minutes for email with report
16. Validate report contents
17. Change the email address set in step 3 to the client's email address
18. Change the time set in step 13 to be the time the client would like the report.
