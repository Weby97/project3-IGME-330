// ----- VALUES -----
let displayTerm = "";
let offset = 0;
let searchedFirst = false;

function searchButtonClicked(e){
    console.log("searchButtonClicked() called");
    if (e.target.id == "search"){
        offset = 0;
        if(!searchedFirst){
            searchedFirst = true;
            document.querySelector("#more").disabled = false;
        }
    }

    // 1
    // ----- https://calendarific.com/api-documentation -----
    const CALENDAR_URL = "https://calendarific.com/api/v2";

    // 2
    let CALENDAR_KEY = "b3de703f8dcbb296bcf442aa7481ea5561f8adb8";

    // 3 - build up our URL string
    let url = CALENDAR_URL;
    url += "?api_key=" + CALENDAR_KEY;

    // ----- THIS IS WHERE YOU WILL ADD YOUR EXTRA STUFF TO THE URL -----
    // ----- - - - - BELOW IS EXAMPLE OF WHAT YOU CAN DO - - - - -----

    // 4 - parse the user entered term we wish to seach
    // let term = document.querySelector("#searchterm").value;
    // displayTerm = term;

    // 5 - get rid of any leading and trailing spaces
    // term = term.trim();

    // 6 - encode spaces and special characters
    // term = encodeURIComponent(term);

    // 7 - if there's no term to search then bail out of the function (return does this)
    // if(term.length  < 1) return;

    // 8 - append the search term to the URL - the parameter name is 'q'
    // url += "&q=" + term;

    // 9 - grab the user chosen seach 'limit' from the <select> and append it to the URL
    // limit = document.querySelector("#limit").value;
    // url += "&limit=" + limit;

    // 9.5 - Append offset value to the query string 
    // url += "&offset=" + offset;

    // 10 - update the UI
    // document.querySelector("#status").innerHTML = "<b>Searching for '" + displayTerm + "'</b>";

    // 11 - see what the URL looks like
    console.log(url);

    // 12 - Request Data!
    getData(url);
}

// 3.5 - More Button Clicked
// function moreButtonClicked(e){
//     limit = document.querySelector("#limit").value;
//     offset += parseInt(limit);
//     searchButtonClicked(e);
// }

// 4
function getData(url){
    // 1 - create a new XHR object
    let xhr = new XMLHttpRequest();

    // 2 - set the onload handler
    xhr.onload = dataLoaded;

    // 3 - set the onerror handler
    xhr.onerror = dataError;

    // 4 - open connection and send the request
    xhr.open("GET",url);
    xhr.send();
}

// 5 - Callback Functions

function dataLoaded(e){
    // 5 - event.target is the xhr object
    let xhr = e.target;

    // 6 - xhr.responseText is the JSON file we just downloaded
    console.log(xhr.responseText);

    // 7 - turn the text into a parsable JavaScript object
    let obj = JSON.parse(xhr.responseText);

    // 8 - if there are no results, print a message and return
    if(!obj.data || obj.data.length == 0){
        // document.querySelector("#status").innerHTML = "<b>No results found for '" + displayTerm + "</b>";
        return; // Bail out
    }

    // 9 - Start building the HTML string we will display to the user
    let results = obj.data;
    console.log("results.length = " + results.length);
    let endRange = parseInt(offset) + parseInt(limit);
    let bigString = "<p><i>Here are " + results.length + " results for '" + displayTerm + "'</i> - (Start: "+ parseInt(offset) + " End: "+ parseInt(endRange) + ")" + "</p>";

    // 10 - loop through the array of results
    for (let i = 0; i < results.length; i++){
        let result = results[i];

        // 11 - get the URL to the GIF
        let smallURL = result.images.fixed_width_small.url;
        if (!smallURL) smallURL = "images/no-image-found.png";

        // 12 - get the URL to the GIPHY Page
        let url = result.url;

        let rating = result.rating;
        rating = rating.toUpperCase();
        // 13 - Build a <div> to hold each result
        // ES6 String Templating
        // let line = `<div class='result'><img src='${smallURL}' title= '${result.id}' />`;
        // line += `<span><a target='_blank' href='${url}'> View on Giphy</a>
        //     </span><p>Rating: '${rating}'</p></div>`;

        // 14 - another way to doing the same thing above
        // Replaces this:
        // var line = "<div class='result'>";
        //      line += "<img src'";
        //      line += smallURL;
        //      line += "' title= '";
        //      line += result.id;
        //      line += "' />";
        //
        //      line += "<span><a target='_blank' href='" + url + "'> View on Giphy</a></span>";
        //      line += "</div>";

        // 15 - add the <div> to 'bigString' and loop
        // bigString += line;
    }

    // 16 - all done building the HTML - show it to the user!
    // document.querySelector("#content").innerHTML = bigString;

    // 17 - update the status
    // document.querySelector("#status").innerHTML = "<b>Success!</b>";
}

function dataError(e){
    console.log("An error occurred");
}