import * as lol from './lol.js'

// ----- VALUES -----
let displayTerm = "";
let offset = 0;
let searchedFirst = false;
let day = 14
let year = 2019
let month = 3

function searchButtonClicked(e) {
    console.log("searchButtonClicked() called");
    if (e.target.id == "search") {
        offset = 0;
        if (!searchedFirst) {
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

    // 11 - see what the URL looks like
    console.log(url);

    // 12 - Request Data!
    getData(url);
}


// 4
function getData(url) {
    // 1 - create a new XHR object
    let xhr = new XMLHttpRequest();

    // 2 - set the onload handler
    xhr.onload = dataLoaded;

    // 3 - set the onerror handler
    xhr.onerror = dataError;

    // 4 - open connection and send the request
    xhr.open("GET", url);
    xhr.send();

}

// 5 - Callback Functions

function dataLoaded(e) {
    // 5 - event.target is the xhr object
    let xhr = e.target;

    // 6 - xhr.responseText is the JSON file we just downloaded
    //console.log(xhr.responseText);

    // 7 - turn the text into a parsable JavaScript object
    let obj = JSON.parse(xhr.responseText);
    //console.log(obj)

}

function dataError(e) {
    console.log("An error occurred");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getDateFromTimeStamp(UNIX_timestamp) {

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let a = new Date(UNIX_timestamp);

    let year = a.getFullYear();
    let month = a.getMonth()+1;
    let date = a.getDate();
    let hour = a.getHours()+1;
    let min = a.getMinutes()+1;
    let sec = a.getSeconds()+1;
    let time = [month, date, year];
    return time;

}

function xhrRequest(url,callback) {
    // 1 - create a new XHR object
    let xhr = new XMLHttpRequest();

    // 2 - set the onload handler
    xhr.onload = callback;

    // 3 - set the onerror handler
    xhr.onerror = dataError;

    // 4 - open connection and send the request
    xhr.open("GET", url);
    xhr.send();
}


export {
    getData,
    dataLoaded,
    getRandomInt,
    getDateFromTimeStamp,xhrRequest,dataError
}

