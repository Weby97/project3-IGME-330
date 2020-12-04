import * as utils from "./utils.js"
import * as riotData from "./riotData.js"

//let region = document.querySelector("#regionDropdown").value;
//let summonerName = document.querySelector("#summonerNameInput").value;
let championData = riotData.leagueChampionData.data//list of all champions in league;
let listCount = 10; //ammount of champions listed to user
console.log(championData);


/////returns a object containing all relevant info about the user's League of Legends Account
function listSummonerData(summonerName,region,callback) {

    console.log("fetching summoner data...");
    //document.querySelector("#status").innerHTML = `Searching for ${summonerName} (${region})`;
//debugger;
    let listTitle = document.querySelector('#championListTitle')
    //listTitle.innerHTML = `${summonerName}'s mastered champions:`

    summonerName = summonerName.trim().split(" ").join("");
    //console.log(summonerName);
    summonerName = encodeURIComponent(summonerName);
    if (summonerName.length < 1) return;

    //url to fetch summoner data from riot (contains summoner ID) via proxy server on banjo
    let LOL_PROXY_URL = `https://people.rit.edu/cal7114/330/projects/Lear_P3Checkpoint/lol-proxy.php?region=${region}&summonerName=${summonerName}`;

    //update page to show proper summoner name -- not written yet
    //updateSummonerInfo()

    //continue to collect champion mastery data with another xhr request
    getSummonerData(LOL_PROXY_URL,callback)


}
function getSummonerData(url,callback) {
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
function summonerDataLoaded(region,summonerId,callback) {
    //event.target is the xhr object
    let xhr = e.target;

    //turn the text into a parsable JavaScript object
    let obj = JSON.parse(xhr.responseText);

    //set summonerData variable
    summonerData = obj;

    listMasteries()


}


//uses champion id from summonerData to get champion mastery data from Riot api
function listMasteries(summonerInfo,callback) {
    console.log('fetching mastery data...')
   let region = summonerInfo.region;
    let summonerId = summonerInfo.id;
    //url to second proxy server, which sends request to Riot to retrieve champion mastery data with summoner ID
    let LOL_MASTERY_PROXY_URL = `https://people.rit.edu/cal7114/330/projects/Lear_P3Checkpoint/lol-mastery-proxy.php?region=${region}&id=${summonerId}`

    getMasteryData(LOL_MASTERY_PROXY_URL,callback);
    //document.querySelector("#status").innerHTML = ``;

}
function getMasteryData(url,callback) {
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
function getChampionName(masteredChampionID) {
    let aChampion //String variable used to match the player's mastered champion to the corresponding champion in the entire list

    //iterating over all champions in League
    for (let champion in championData) {
        //the champion that matches the ID of the player's mastered champion
        if (parseInt(championData[champion].key) == masteredChampionID) {
            //assigning the string of the Champion's name to be used in html
            return aChampion = championData[champion].name;
        }
    }

}
function dataError(e) {
    console.log("An error occurred");
}
export {
    listSummonerData,summonerDataLoaded,listMasteries
}
