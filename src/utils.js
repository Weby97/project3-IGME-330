function dataError(e) {
    //console.log("An error occurred");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getDateFromTimeStamp(UNIX_timestamp) {

    //let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let a = new Date(UNIX_timestamp);

    let year = a.getFullYear();
    let month = a.getMonth()+1;
    let date = a.getDate();
    // let hour = a.getHours()+1;
    // let min = a.getMinutes()+1;
    // let sec = a.getSeconds()+1;
    let time = [month, date, year];
    return time;

}

function xhrRequest(url,callback) {
    // 1 - create a new XHR object :)
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
    getRandomInt,
    getDateFromTimeStamp,xhrRequest,dataError
}

