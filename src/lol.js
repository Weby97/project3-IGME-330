/*
----------
lol.js: Helper functions used to communicate with Riot Games endpoints through their Dev Portal: https://developer.riotgames.com/

API key used to access endpoints is stored on external proxy servers at this directory: https://people.rit.edu/cal7114/330/projects/Lear_P3Final/

Author: Chase Lear
----------
*/

import * as utils from "./utils.js"; //helper functions
import * as riotData from "./riotData.js"; //object containing static champion data from Riot's static api Data Dragon

let championData = riotData.leagueChampionData.data;//list of all champions in league;
let listCount = 10; //ammount of champions listed to user

//first endpoint documentation here: https://developer.riotgames.com/apis#account-v1/GET_getByPuuid
function getSummonerData(summonerName, region, callback) {

    //console status message
    //console.log("fetching summoner data...");

    //string formatting
    summonerName = summonerName.trim().split(" ").join("");

    //bail out if nothing is entered
    summonerName = encodeURIComponent(summonerName);
    if (summonerName.length < 1) {
        let x = document.querySelector(".loader");
        x.style.display = "none";
        document.querySelector("#errorMessage").innerHTML = "Enter Name"
        return;
    }

    //url to fetch summoner data from proxy server on Banjo
    let LOL_PROXY_URL = `https://people.rit.edu/cal7114/330/projects/Lear_P3Final/lol-proxy.php?region=${region}&summonerName=${summonerName}`;

    //make XHR request
    utils.xhrRequest(LOL_PROXY_URL, callback);

}

//second endpoint documentation here: https://developer.riotgames.com/apis#champion-mastery-v4/GET_getAllChampionMasteries
function getMasteries(summonerInfo, callback) {

    //console status message
    //console.log('fetching mastery data...');

    //enpoint parameters (strings)
    let region = summonerInfo.region;
    let summonerId = summonerInfo.id;

    ///url to fetch summoner mastery data from proxy server on Banjo
    let LOL_MASTERY_PROXY_URL = `https://people.rit.edu/cal7114/330/projects/Lear_P3Final/lol-mastery-proxy.php?region=${region}&id=${summonerId}`

    //console.log(LOL_MASTERY_PROXY_URL)

    //make XHR request
    utils.xhrRequest(LOL_MASTERY_PROXY_URL, callback);

}

//helper function that finds champion name from it's numeric id
function getChampionName(masteredChampionID) {

    let aChampion //string to return

    //iterating over all champions in League from local data object
    for (let champion in championData) {
        //the champion that matches the ID of the player's mastered champion
        if (parseInt(championData[champion].key) == masteredChampionID) {
            return aChampion = championData[champion].name;
        }
    }

}

export {
    getSummonerData, getMasteries, getChampionName
}
