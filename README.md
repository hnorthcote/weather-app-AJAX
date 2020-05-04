Title: Quick Weather

Technologies used:
AJAX API calling
Open Weather API
JavaScript
jQuery
HTML
CSS


Features:

City, state and zip code search
Options for 3 or 5 day forecast
Expand on details on weather per hour on the day selected.


User story:
The user will be presented with a screen to welcome them, and request a city+state or zip code

The app will create AJAX json commands to run a query for the entered city and state or zip.

The screen will refresh with the city in question 3 or 5 day forecast (also could be an option on a dropdown in the input area).

as an extra, the user can expand each day's weather for more details.


Wireframes:

/*----- constants -----*/
Location object
API url


/*----- app's state (variables) -----*/
City, state and zip
5 day search
7 day search
1 day search (hourly weather)

/*----- cached element references -----*/
DOM object to show if the selection is a 3 day or 5 day display including the location details.


/*----- event listeners -----*/
On click for submission of form
on click of one of the days presented.
on click for reset button

/*----- functions -----*/

concatenate AJAX API user input request.
concatenate AJAX API user clicked day.


Future goals:

Show USA map with zoom functions and select the city this way (maybe google maps or weather maps??)
present a video of a weather site on the side for the city selected (not sure how legal is this. Maybe use Youtube?)
Make the CSS more detailed and animate the page state interfaces more.