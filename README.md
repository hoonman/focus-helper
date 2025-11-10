# Focus Helper v.1
Many times when I'm trying to do a deep-work session, I find myself distracted by visiting certain web pages unrelated to my work. This chrome extension will allow users to select certain URLs that they would like blocked so that they are able to have a meaningful deep work session

## Core functionalities
* Users can turn on/off focus mode 
* When the focus mode is on, users cannot visit certain URLs that the users themselves defined
* Focus mode can be turned on and off 
* Users can choose to turn it on for a certain period of time (ex. 30 minutes, 3 hours, etc)
* When focus mode is off, the focus mode logo will be gray. When it is on, it will be green (or other colors) within the upper tab area (similar to how Simplify's logo lits up when it is active).

## Implementation Details
* use a slider button to indicate focus mode is on or not
* if exists, use something like apple's slider to select the time to turn on / off the focus mode
* users can enter the domain name (something.com) to specify if they want that URL blocked. 
    * in the future maybe support some parts of a URL to be blocked as well 
    * ex. block reddit.com/r/distracting_site but don't block reddit.com
* store these user inputted domains into a set
* when user has focus mode on, and visits one of these URLs, we will not show the respective original page but a blank page reminding them to focus!
* LOCK IN mode: user cannot turn focus mode off if this is on. can only be used with the timer option. (maybe they can turn it off in the backend but we need to make it hard to turn it off)

## Additional Information
I plan to have this project completely open-source (not that it is particularly anything impressive) so that users can suggest other ideas on how to make this extension better. 