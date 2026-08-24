# Rider Profiles

The Card database is where the rider's card numbers are stored and managed for Passio Gateway. 

The active card numbers, and related information, are typically uploaded daily by a customer integration and pushed out to the MDT's on boot up and server connection each morning.

Navigator users are able to upload 'related information' to the card numbers in order to report on that information. This may include demographic data like Student, Employee, Contractor, etc.

Cards ending in LF or CRLF at the end of the line, can be uploaded to the card files database

 **Settings**
    
   - Card number starting position = starting character from a card swipe/tap to read the card number; Enter starting character position if card read does not start with the 1st character

   - Card number length = total length from a card swipe/tap of card number to read

   - Card ranges = Manual function to bulk add or remove card numbers to the database

   - Download card db = Enable download for validation to the MDTs

   - Card db delimiter = Typically `,` for a .csv file, but we can accept other delimiters from the upload

   - Hash card = This first hashes the card number before downloading to the MDT for security reasons (typically enabled)

   - Validate cards = Onboard, on card swipe/tap, the MDT will compare if that swipped/tapped card is 'active' in the database.

   - Fix 16 bit cards = bug fix for legacy magnetic cards

   - Rider profile fields = The is where the 'related information' fields are defined

   - Cards db uploads = Log file of client uploads

Example Gateway Validate card setup: Test card has Card ID of 123456789. Test card reads 55555123456789333 when swiped.
- Card number starting position = 6
- Card number length = 9
- Validate cards ENABLED



## How to use Passio SFTP for Card Uploads

### Configure Account:
1. Set `Use SFTP to upload card database` to `Using username/password`  
2. Set the username to {login}ftp (ie  > chicagoftp)  
3. Set the password to a value from random.org https://www.random.org/passwords/?num=5&len=8&format=html&rnd=new  
4. Save account  

### Test Account
For Mac, use Terminal. For Windows, use Powershell  
`sftp -P 2023 {username}@passio3.com`  
If it prompts for a password or to accept a fingerprint, the test has succeeded  

### Send Information
Provide the following information to the user  
Username: {username from above}  
Password: {password from above}  
Hostname: passio3.com  
Port: 2023  
Instructions:  
Browse to CSV in Terminal or Powershell  
Connect to SFTP  
Run `put filepath.csv`  
Check Passio Navigator > Cards database to validate upload. The process will take less than 60 seconds.
