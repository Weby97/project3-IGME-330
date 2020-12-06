
import * as utils from "./utils.js"; //helper functions

function listCalendarData(time,callback) {

    console.log("fetching calendar data...");
    let cal_url = "https://calendarific.com/api/v2/holidays?&api_key=b3de703f8dcbb296bcf442aa7481ea5561f8adb8&country=US";
    cal_url += `&month=${time[0]}&day=${time[1]}&year=${time[2]}`;

    //continue to collect champion mastery data with another xhr request
    utils.xhrRequest(cal_url,callback)
}

export { listCalendarData }
