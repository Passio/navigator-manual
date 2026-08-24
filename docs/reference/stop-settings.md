# Stop Settings

**Manual MDT ann.** - These are messages that show up on the MDT for the driver to be able to manually select and announce on demand while they are on route.

**Stop service ann.** - These are pre-defined, repeatable, announcements that can be selected in the Route Stop properties in order to play after a Stop name has played. An example is, "Please check your seat and take all of your belongings."

**Public address ann.** - These are pre-defined, repeatable, announcements that are specified to play on 1 or more Routes, every 'n' minutes. An example is, "Please remember to practice social distancing while you are enjoying your ride."

**Proceeding ann. (en)** - this is the 'english' speaking preceeding announcement to all Stop Announcements. The default is, "Now approaching... stopName", but this can be change per account if a customer would like to change it.

**Next stop ann. (en)** - similar to the 'Proceeding ann. (en)', but for the Next stop announcement

**Beep before ann.** - This proceeds all Route stop announcements with a 'beep' tone. There is the ability to change the tone which is configured at the device level.

**Double stop ann.** - this announces the stop twice, but is almost never used.

**Double stop ann. delay** - time between a double announcement, but almost never used.

**Second ann. language** - option to have all announcements in a 2nd language, which would follow the primary language announcement

**Third ann. language** - option for a 3rd language (rarely used)


** **Exterior Announcements** - IF the buses are wired and the customer paid for Internal & Exterior announcments, the Stop Service and Public address announcements, can be setup to annuonce on the Exterior speakers by inserting a   `<ext>`   tag into the text field. This will automatically send the text to voice announcement to the exterior speakers. This also works at the Stop level if there is a specific message to be played at a specific place. 
