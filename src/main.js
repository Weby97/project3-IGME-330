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
        time: [],
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
            lol.getSummonerData(this.summonerInfo.sn, this.summonerInfo.region, summonerDataCallback);

        }

    }
});

//fetch all data from
function summonerDataCallback(e) {

    //console status message
    console.log("summoner data fetched")

    //summoner data object
    let summonerData = JSON.parse(e.target.response)



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
        summonerDataFinished();
    }

}

//after all league of legends player data has been retrieved
function summonerDataFinished() {



    // The Calendar magic happens here
    for (let i = 0; i < 3; i++) {
        let time = utils.getDateFromTimeStamp(app.summonerInfo.masteredChampions[i].lastPlayTime);
        app.time = time;
        cal.listCalendarData(time, calendarDataCallback);
    }

    //add a 'name' property to each mastered champion to use in the UI
    for (let champ of app.summonerInfo.masteredChampions) {
        champ.name = lol.getChampionName(champ.championId);
    }

}

function calendarDataCallback(e) {
    console.log("calendar data fetched");
    let calendarData = JSON.parse(e.target.response);
    // On the day you last played this champion, it was ________
    if (typeof calendarData.response.holidays[0] === 'undefined') {
        let date = app.time;
        app.holidays.push(`The last time you played this champion, it was: ${date[0]} / ${date[1]} / ${date[2]}`);
    } else {
        app.holidays.push(`The last time you played this champion, it was: ${calendarData.response.holidays[0].name}`);
    }

    storeData();

    console.log(app.holidays);
}

//update local storage, navigate to next page
function storeData(){

    //add a 'holiday' property to each mastered champion to use in the UI
    let holiCount = 0;
    for (let holi of app.holidays) {
        app.summonerInfo.masteredChampions[holiCount].holiday = holi;
        holiCount++;
    }


    app.summonerInfo.summonerIconUrl='http://ddragon.leagueoflegends.com/cdn/10.24.1/img/profileicon/'+app.summonerInfo.profileIconId+'.png'

    //update local storage
    localStorage.setItem("summonerInfo", JSON.stringify(app.summonerInfo))
    window.location = 'results.html';
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
