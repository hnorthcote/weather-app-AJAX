//URL constant for days

const baseUrlDay = "api.openweathermap.org/data/2.5/forecast/daily?zip=80206,us"

//URL constant for today
const baseURLToday = 

// appkey

const apiKey = "5ec02333312079ed68f95a4c09a99088"

// Create variables to capture the inputs and AJAX queries
let weather, searchDays, state, city;

// Create main AJAX queries for 1,5and 7 days
const testUrlToday = "http://api.openweathermap.org/data/2.5/weather?q=DENVER,US&APPID=5ec02333312079ed68f95a4c09a99088"

//Rest of url
const urlDay = `${baseUrlDay}${city}${searchDays}${apiKey}`;
const urlToday = `${baseURLToday}${city}${state}${apiKey}`;

//Cached element references

const $city = $('#city');
const $state = $('#state');
const $location = $('.location');
const $searchType = $('#type');
//const $checked = $('input[name:"typeSelect"]:checked').val();

console.log($searchType);

// Event listeners for search button and capture data into variables
$location.on('click', "button", handleGetLocation);



// function to capture each input and pass it on to their respective variable

function handleGetLocation(evt) {
    
    city = $city.val() || "denver"

    console.log(city);
    state =$state.val() || "colorado"

    console.log(state);

    searchDays = $searchType.input
    console.log(searchDays);
    

}


   if(searchDays === "today")
    $.ajax({
        url: baseUrl + "?agency=NYPD&$limit="+ limit + "&borough=" + borough
    }).then(function(data){
       complaints = data;

       //we want to render the results to the screen

       render();

    }, function(error) {
        console.log(error);
    });
    
}

function handleToggleVisibility() {
    $(this).parent().siblings("p").toggleClass('hidden');
}

// Create functions to concatenate static info with input
// create elements to insert the rendered ajax output into DOM
// Create functions to render the outputs of AJAX to objects

// Constants

const baseUrl = "https://data.cityofnewyork.us/resource/erm2-nwe9.json"

// State variables
 
let limit, complaints, borough;







//Event listeners



//Functions

init();

function init() {
    $yearEl.html(new Date().getFullYear())
    complaints = [];
  
}

function handleGetData(evt) {
    borough= evt.target.dataset.borough
    limit = $inputEl.val() || "10";

    $.ajax({
        url: baseUrl + "?agency=NYPD&$limit="+ limit + "&borough=" + borough
    }).then(function(data){
       complaints = data;

       //we want to render the results to the screen

       render();

    }, function(error) {
        console.log(error);
    });
    
}

function handleToggleVisibility() {
    $(this).parent().siblings("p").toggleClass('hidden');
}

function generateUI () {
   return complaints.map(function(complaint) {
        return `
                    <section class="complaint">
        <div>
            <h5>🚨 ${complaint.descriptor}</h5>
            <button class= "btn btn-small red">What Did The Police Do?</button>
        </div>
        <p class="hidden">${complaint.resolution_description}</p>
    </section>`;
    })
}

 function render() {
     const html = generateUI().join("");
     $complaintListEl.html(html);

 }
*/