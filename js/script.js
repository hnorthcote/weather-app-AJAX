
let weather;

// Create main AJAX queries for 1,5and 7 days
const testUrlToday = "http://api.openweathermap.org/data/2.5/weather?q=DENVER,US&APPID=5ec02333312079ed68f95a4c09a99088"



const $location = $('.location');

//const $checked = $('input[name:"typeSelect"]:checked').val();



// Event listeners for search button and capture data into variables
$location.on('click', "button", handleGetLocation);



// function to capture each input and pass it on to their respective variable

function handleGetLocation(evt) {

    $.ajax({
        url: testUrlToday
    }).then(function(data){
       weather=data;

        console.log(weather);

    }, function(error) {
        console.log(error);
    });
    
}
/*
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

    
    }, function(error) {
        console.log(error);
    });
    
}


function render() {
    const html = generateUI().join("");
    $complaintListEl.html(html);

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


*/