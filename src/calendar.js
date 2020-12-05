
function listCalendarData(time,callback) {

    console.log("fetching calendar data...");
    let cal_url = "https://calendarific.com/api/v2/holidays?&api_key=b3de703f8dcbb296bcf442aa7481ea5561f8adb8&country=US";
    cal_url += `&month=${time[0]}&day=${time[1]}&year=${time[2]}`;

    //continue to collect champion mastery data with another xhr request
    getCalendarData(cal_url,callback)
}

function getCalendarData(url,callback) {
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

export { getCalendarData, listCalendarData }