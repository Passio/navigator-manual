# APC Certification

## APC Certification Process 

Automatic Passenger Counters (APCs) automatically count passengers as they board and alight transit vehicles using sensors without any interaction from vehicle operators. These counts are tagged with time, date, vehicle, route, latitude, longitude, and stop information for reporting and tracking purposes. Transit agencies must submit both a benchmarking plan and a maintenance plan to certify the accuracy of their APCs. To certify APCs, manual counts must be made on a cross section of relevant trips, routes, and vehicles. The manually counted data is compared to the recorded APC counts found in Passio Navigator’s reporting tool for accuracy within acceptable thresholds. Once the initial APC data has been confirmed and submitted, agencies must conduct an annual maintenance study to calibrate the APCs after the benchmark year. Passio has developed a comprehensive certification support process to fully aid and assist our customers with all the steps necessary to support them as they work to certify APC counts under the FTA requirements.  

To be certified, the APC system must meet the FTA’s 95% confidence and 10% precision levels for count accuracy.  The Benchmarking Plan includes the following procedures for the first year an agency uses APC data for NTD reporting purposes.  

- A sample of one-way vehicle trips that covers a representative time period, within one year.  
- A sample of different vehicle types and, if applicable, different automated passenger counters. 
- Comparison of parallel APC data and manual data tested for statistical equivalence.  
- Adjustments, if necessary, of UPT (Unlinked Passenger Trips), APTL (Average Passenger Trip Length) and PMT (Passenger Miles Traveled) to replicate the data produced by the manual check.  

The maintenance plan includes procedures to calibrate APCs every year after the initial benchmark year using a modified validation plan to ensure the upkeep of the agency’s certification. Ride checkers are assigned to specific routes to collect UPT and PMT data. This data is compared to the APC collected data for comparison of statistical variance between the data sets. The maintenance study is conducted annually following the initial year. Documentation of results of the study are submitted to the FTA annually.  

Passio will work with your agency to gather vehicle information such as make, model, year, and number of doors. Passio will document peak versus off peak ridership times and types and quantity of each APC model in use. This information will be analyzed by Passio to create a sampling plan that meets FTA data requirements. Next, we will provide you with a sampling template that your ride checkers will use to fill out during the sampling trips. This template will include basic information such as route, stop, vehicle, start and end times, number of passengers boarded/alighted, and the odometer readings at each stop. Finally, Passio will provide your agency with an Automatic Passenger Count Certification Checklist. The checklist includes information such as APC vendor/installation date, process of selecting trips to sample, internal agency procedures, FTA required confirmations, and sample collection methodology descriptions. Once these three steps have been completed your agency will have all the documentation necessary to submit the APC certification plan to the FTA for review and final approval.    


## APC Certification Steps 

1. Passio sends operational inquiry of fleet information for client to complete.
2. Passio analyzes vehicle info, times, and APC types to select trips for the client to sample.
    - The sample should include heavy ridership trips and at least one trip per vehicle type and APC model.
3. Client downloads trips to be sampled from the Sampling Schedule online. 
    - The client uses these forms on-board to take their samples.
4. Client uploads samples and Passio automatically compares the client data to the backend data from the sampled day, trip and vehicle for accuracy. 
5. Passio sends the client the post sample checklist. 
6. Passio sends the client the NTD Certification Assessment. 
7. Passio sends the client the APC Certification Certificate.

All of these steps will be outlined in your personalized Monday.com Certification Board. Please contact support@passiotech.com to begin your sampling process. 

## User Guide for .csv Download Sampling
- If the last stop of the sampled trip is the same as the first stop of your next trip in the Block/Job, the system will allocate the OFF's (alightings) to the last stop of your sampled trip and the ON's (boardings) to the first stop of the next trip. 
- If the sample was taken outside of the trip start and end time (as seen in the .csv download), please adjust your start and end time window to encapsulate the actual sampled time period.
- For PM uploads, configure `Start Time` and `End Time` columns to be in `hh:mm:ss` format using 24 hour time.
- The system will check that your date sampled matches the Day of Week selected. 
- If the driver boards or alights the vehicle during the sample period, they must be added as a boarding and/or alighting on the .csv
- Required columns: `A, R, S, T, U, V` (vehicle column is optional, but can be used for agency record keeping)
- **Previous Trip Riders** are riders already on board at the beginning of your sample. There may be none on board, which is fine, but if anyone is on board from a previous trip (whether you sampled that trip or not), make sure to take note of that, so that the numbers add up properly. This only needs to be filled out at the beginning of the trip being sampled.
- **On-board** is a continuous count of the number of passengers on board at each stop. This column serves as an audit to the 'Boarded' and 'Alighted' columns.
- **Continuing Riders** are riders that are still on board at the end of your sampled trip. If they have not exited the vehicle, and are staying on board for the next trip (whether you are sampling the next trip or not), please make note. This only needs to be filled out at the end of your sampled trip.
- Any boxes that are pre-filled in with an `N/A`, do not need to be filled out.
- Sample upload must be in .csv format
- If uploading sample data for the same day, wait 30 minutes after trip is complete to upload .csv for full results 
- Please refresh the browser page after the sample is uploaded to see results 


## FTA’s 95% Confidence and 10% Precision Levels for Count Accuracy

### 95% Confidence Level
- This means that if data were repeatedly sampled multiple times, **95% of those samples would contain the true value** within the given margin of error.
- It’s a statistical measure ensuring **high reliability** in the reported data.

### 10% Precision Level
- The reported count should be within **±10% of the actual true count**.
- Example: If the true number of boardings at a stop is **100 passengers**, the system’s reported count should fall between **90 and 110** in most cases.

### Why It Matters for Transit Data
- Ensures **passenger count data is accurate** for funding, reporting (e.g., NTD reporting), and operational decisions.
- APC systems must meet or exceed these standards to be considered reliable for federal reporting.
