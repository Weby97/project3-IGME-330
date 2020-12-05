import * as lol from './lol.js'
import * as utils from './utils.js'
import * as cal from './calendar.js'


let app = new Vue({
    el: '#root',

    data: {
        title: "What Champion Should You Play?",
        regions: ["na1", "eun1", "euw1", "br1", "jp1", "kr", "la1", "la2", "oc1", "ru", "tr1"],
        videoNames: ['camile', 'kindred', 'xayah', 'warwick'],

        summonerInfo: {
            sn: "AhrilyBadAhri",
            id: "",
            masteredChampions: [],
            region: "na1",
        },


    },
    methods: {

        getRandomVideoUrl() {
            return `./media/${this.videoNames[utils.getRandomInt(0,this.videoNames.length)]}.webm`
        },
        searchHover(){
          searchButton.style.display= none;
        searchHoverButton.style.display=block;
        },
        searchClicked() {

            lol.listSummonerData(this.summonerInfo.sn, this.summonerInfo.region, summonerDataCallback);

            localStorage.setItem("summonerInfo",JSON.stringify(this.summonerInfo))

            // The Calendar magic happens here



//            for(let i = 0; i < 3; i++){
//                let time = utils.getDateFromTimeStamp(this.summonerInfo.masteredChampions[i].lastPlayTime);
//                cal.listCalendarData(time, calendarDataCallback);
//            }

            localStorage.setItem("summonerInfo",JSON.stringify(this.summonerInfo.sn));
           // window.location = 'results.html';

            function calendarDataCallback(e){
                console.log("calendar data fetched");
                let calendarData = JSON.parse(e.target.response);
                console.log(calendarData.response.holidays);
            }
            function summonerDataCallback(e) {
                console.log("summoner data fetched")
                let summonerData = JSON.parse(e.target.response)
                console.log(summonerData.id)
                app.summonerInfo.id = summonerData.id;


                lol.listMasteries(app.summonerInfo, masteryCallback)

                function masteryCallback(e) {
                    console.log('mastery data fetched')
                    let summonerMasteryData = JSON.parse(e.target.response)
                    app.summonerInfo.masteredChampions = summonerMasteryData;
                    console.log(app)
                    app.dataFinished();


                }

            }


        },
        dataFinished(){

  console.log(app.summonerInfo.masteredChampions[0])

        }


    }
});


function init() {
    let videoUrls = ['camile', 'kindred', 'xayah', 'warwick']
    let randomInt = utils.getRandomInt(0, videoUrls.length);
    document.querySelector('.fullscreen-bg__video').src = `./media/${videoUrls[randomInt]}.webm`

}


export {
    init
}
