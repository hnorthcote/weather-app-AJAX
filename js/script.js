
let weather;

// Create main AJAX queries for 1,5and 7 days
const testUrlToday = "http://api.openweathermap.org/data/2.5/weather?q=DENVER,US&APPID=5ec02333312079ed68f95a4c09a99088"



const $location = $('.location');

//const $checked = $('input[name:"typeSelect"]:checked').val();

let $weatherEl = $('#weather');

// Event listeners for search button and capture data into variables
$location.on('click', "button", handleGetLocation);



// function to capture each input and pass it on to their respective variable

function handleGetLocation(evt) {

    $.ajax({
        url: testUrlToday
    }).then(function(data){
       weather=data;

        render();

    }, function(error) {
        console.log(error);
    });
    
}


function render() {
    const weatherDetails = weather.main;
    
    weatherState= $.map(weatherDetails, function(index, value){
            return `<h5>  ${value}  : ${index}</h5>`;

    }
    )
    $weatherEl.html(weatherState);
}
