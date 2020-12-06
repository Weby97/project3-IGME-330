import * as lol from './lol.js'
import * as utils from './utils.js'
import * as cal from './calendar.js'

//UI controller
let app = new Vue({
    el: '#root',

    data: {
        title: "What Champion Should You Play?",
        regions: ["na1", "eun1", "euw1", "br1", "jp1", "kr", "la1", "la2", "oc1", "ru", "tr1"],
        videoNames: ['camile', 'kindred', 'xayah', 'warwick'],
        holidays: [],
        times: [],
        date: undefined,
        summonerInfo: {
            sn: "AhrilyBadAhri",
            id: "",
            masteredChampions: [],
            region: "na1",

        },

    },
    methods: {

        getRandomVideoUrl() {
            return `./media/${this.videoNames[utils.getRandomInt(0, this.videoNames.length)]}.webm`
        },
        searchHover() {
            searchButton.style.display = none;
            searchHoverButton.style.display = block;
        },
        searchClicked() {
            console.log("Searched Entered")
            let x = document.querySelector(".loader");
            x.style.display = "block";

            lol.getSummonerData(this.summonerInfo.sn, this.summonerInfo.region, summonerDataCallback);


        }

    }
});

//fetch all data from
function summonerDataCallback(e) {

    //console status message
    console.log("summoner data fetched")
    let summonerData;
    //summoner data object --
    try{
        summonerData = JSON.parse(e.target.response)
    }
    catch(err)
    {
        let x = document.querySelector(".loader");
        x.style.display = "none";
        document.querySelector("#errorMessage").innerHTML = "Invalid Name";
    }

    //update vue data variable
    app.summonerInfo.id = summonerData.id;

    //move on to next endpoint
    lol.getMasteries(app.summonerInfo, masteryCallback)

    //update vue data variable
    app.summonerInfo = summonerData;

    //callback function
    function masteryCallback(e) {

        //console status message
        console.log('mastery data fetched')

        console.log(app)

        //mastery data object
        let summonerMasteryData = JSON.parse(e.target.response)

        //update vue data variable
        app.summonerInfo.masteredChampions = summonerMasteryData;


        //done
        summonerDataFinished(storeData);

    }

}

//after all league of legends player data has been retrieved
function summonerDataFinished() {
            sortChampionList();


    //add a 'name' property to each mastered champion to use in the UI
    for (let champ of app.summonerInfo.masteredChampions) {
        champ.name = lol.getChampionName(champ.championId);
        champ.lastPlayDate = utils.getDateFromTimeStamp(champ.lastPlayTime);
    }

    // The Calendar magic happens here
    //for (let i = 0; i < 5; i++) {
    //      let time = utils.getDateFromTimeStamp(app.summonerInfo.masteredChampions[i].lastPlayTime);

<<<<<<< HEAD
    app.date = app.summonerInfo.masteredChampions[0].lastPlayDate;
=======
    app.date = app.summonerInfo.masteredChampions[1].lastPlayDate;
>>>>>>> origin/main


    //}

    cal.listCalendarData(app.date, calendarDataCallback);



}

function calendarDataCallback(e) {
    console.log("calendar data fetched");
<<<<<<< HEAD

=======
    let x = document.querySelector(".loader");
    x.style.display = "none";
>>>>>>> origin/main
    let obj = JSON.parse(e.target.response);

    console.log(app.date);
    console.log(obj);
    console.log(obj.response);
    console.log(obj.response.holidays);

    let holiday = obj.response.holidays[0];

    console.log(holiday)

<<<<<<< HEAD
=======
    if (holiday === undefined) {
        let date = app.times[0]
        app.summonerInfo.masteredChampions[1].holiday = `The last time you played this champion, it was: ${date[0]} / ${date[1]} / ${date[2]}`;
    } else {
        app.summonerInfo.masteredChampions[1].holiday = `The last time you played this champion, it was: ${holiday.name}`;
    }
>>>>>>> origin/main

    let champName = app.summonerInfo.masteredChampions[0].name;

<<<<<<< HEAD
    if (holiday === undefined) {
        let date = app.times[0]
        app.summonerInfo.masteredChampions[0].holiday = `The last time you played ${champName}, it was: ${date[0]} / ${date[1]} / ${date[2]}`;
    } else {
        app.summonerInfo.masteredChampions[0].holiday = `The last time you played ${champName}, it was: ${holiday.name}`;
    }


=======
>>>>>>> origin/main
    storeData();

}

//update local storage, navigate to next page
function storeData() {

    let holidayArray = app.holidays;
    console.log(holidayArray[0]);




    //add a 'holiday' property to each mastered champion to use in the UI
    //    let holiCount = 0;
    //    for (let holi of app.holidays) {
    //        app.summonerInfo.masteredChampions[holiCount].holiday = holi;
    //        holiCount++;
    //    }

    app.summonerInfo.summonerIconUrl = 'http://ddragon.leagueoflegends.com/cdn/10.24.1/img/profileicon/' + app.summonerInfo.profileIconId + '.png'

    //update local storage
    localStorage.setItem("summonerInfo", JSON.stringify(app.summonerInfo))
    console.log(app)
    window.location = 'results.html';
}

function sortChampionList() {

    let champions = app.summonerInfo.masteredChampions;
    champions.sort(byChestGranted)
    champions.sort(byLastPlayed)

    function byChestGranted(a, b) {
        if (a.chestGranted) {
            return -1;
        }
        if (!a.chestGranted) {
            return 1;
        }
        // a must be equal to b
        return 0;
    } function byLastPlayed(a, b) {
        if (a.lastPlayTime<b.lastPlayTime) {
            return -1;
        }
        if (a.lastPlayTime>b.lastPlayTime) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }

app.summonerInfo.masteredChampions = champions;
    console.log(app.summonerInfo.masteredChampions)

}

function init() {

    //set background
    let videoUrls = ['camile', 'kindred', 'xayah', 'warwick']
    let randomInt = utils.getRandomInt(0, videoUrls.length);
    document.querySelector('.fullscreen-bg__video').src = `./media/${videoUrls[randomInt]}.webm`

}

export {
    init
}
