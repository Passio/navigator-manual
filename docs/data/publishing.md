# Publishing

**'Publish config'** relates to pushing the configuration updates (Routes, Stops, Driver names, etc) to the MDT's on-board the vehicles. 

**Publish immediately**, is right now, irrespective of vehicle status. All online vehicles will immediately receive the update. All offline vehicles will receive the update immediately upon Internet access. 

**Publish on Out of Service** waits for each MDT to go Out of Service first and then it downloads and receives the changes. The update occurs when the MDT **_switches_** to Out of Service, so if the MDT is currently offline, it may not receive the update until after it has booted up, gone In Service, received Internet connection, and then placed Out of Service. 

This action can not be undone. Once it's published, it is published. The last datetime and user who published the configuration will appear to the right.
