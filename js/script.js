
let weatherState, searchType, urlChosen, weatherDetails, userInput ;

// Create main AJAX API URL's
//const UrlToday = `http://api.openweathermap.org/data/2.5/weather?q=Denver,US&APPID=5ec02333312079ed68f95a4c09a99088`

// URL used for a 7 day search** not in this version**
//const UrlSevenDay = "https://api.openweathermap.org/data/2.5/onecall?lat=39.74&lon=-104.99&exclude=hourly,current&appid=5ec02333312079ed68f95a4c09a99088"

const $selectorEl = $('.selector')
const input = $('input[type="text"]');



let $weatherEl = $('#weather');


//***The following code was to select the type of search, will leave this for future versions
//$('.selector :radio').change(function() {
    // this will contain a reference to the checkbox   
//    if (this.checked) {
//        if(this.value === "7") urlChosen = UrlSevenDay;
//        else if(this.value === "today") urlChosen = UrlToday;
//        else console.log("problem on line 18-20");
//    } else {
//        // the checkbox is now no longer checked
//    }
//    console.log(urlChosen);
//});

// **This was my first effort to collect the data from the day selector
//let $selectorEl = $('.selector')
//let $searchType = $('input[type="radio"]:checked').val();
//let $selectorEl.on('click', "input", test)
//function test() { console.log($searchtype)}
//***********************
// Event listeners for search button and capture data into variables
$selectorEl.on('click', "button", handleGetLocation);

// function to capture each input and pass it on to their respective variable

function handleGetLocation(evt) {
    event.preventDefault();
    userInput = input.val();
    const UrlToday = `http://api.openweathermap.org/data/2.5/weather?q=${userInput},US&APPID=5ec02333312079ed68f95a4c09a99088`
 console.log("Searching!!");
    $.ajax({
 //**for second version */       url: urlChosen
    url: UrlToday
    }).then(function(data){
       weather=data;
console.log(weather);
     render();

    }, function(error) {
        console.log(error);
    });
    
}

function render() {
    weatherDetails = weather.main;    
    weatherState= $.map(weatherDetails, function(index, value){
            return `<h5>  ${value}  : ${index}  </h5>`;

    })
    $weatherEl.html(weatherState);
}
