
import * as utils from "./utils.js"; //helper functions

function listCalendarData(time,callback) {

    //console.log("fetching calendar data...");

//    console.log(time)
//    for(let time of times){
    let cal_url = `https://calendarific.com/api/v2/holidays?&api_key=9040df1eb391ec4eb3ac9c5246f8089dddb60421&country=US&month=${time[0]}&day=${time[1]}&year=${time[2]}`;

    //continue to collect champion mastery data with another xhr request
    utils.xhrRequest(cal_url,callback)
//    }



}

export { listCalendarData }
