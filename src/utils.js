import * as lol from './lol.js'

// ----- VALUES -----
let displayTerm = "";
let offset = 0;
let searchedFirst = false;
let day = 14
let year = 2019
let month = 3

//let cal = new Vue({
//    el: '#calendar',
//    data: {
//        title: "Calendar Events",
//        result: {}
//    },
//    created() {
//        this.search(`https://calendarific.com/api/v2/holidays?&api_key=b3de703f8dcbb296bcf442aa7481ea5561f8adb8&country=US&month=${month}&day=${day}&year=${year}`)
//    },
//    methods: {
//        search(url) {
//            fetch(url)
//                .then(response => {
//                    if (!response.ok) {
//                        throw Error(`ERROR: ${response.statusText}`);
//                    }
//                    return response.json();
//                })
//                .then(json => {
//                    console.log(json.response);
//                    this.result = json.response;
//                    let holidayArr = this.result.holidays;
//                    let tableEle = document.querySelector("#calData");
//                    for (let i = 0; i < holidayArr.length; i++) {
//                        let holiEle = document.createElement("tr");
//                        let holiData = document.createElement("td");
//                        holiData.innerHTML = holidayArr[i].name;
//                        holiEle.appendChild(holiData);
//                        holiData.innerHTML = holidayArr[i].description;
//                        holiEle.appendChild(holiData);
//                        tableEle.appendChild(holiEle);
//                    }
//                    console.log(this.result.holidays.length);
//                });
//        }, // end search
//    } // end methods
//});


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

// 3.5 - More Button Clicked
// function moreButtonClicked(e){
//     limit = document.querySelector("#limit").value;
//     offset += parseInt(limit);
//     searchButtonClicked(e);
// }

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



    ////CHASE: lets make this function work for any api, then do the further parsing in our own functions

}

function dataError(e) {
    console.log("An error occurred");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getDateFromTimeStamp(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = `${month} ${date}, ${year}`;
    return time;

}

export {
    getData,
    dataLoaded,
    getRandomInt,
    getDateFromTimeStamp
}

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
