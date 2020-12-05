import * as lol from './lol.js'
import * as utils from './utils.js'


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

            //this.summonerInfo.masteredChampions[0].lastPlayTime

            window.location = 'results.html'

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
                }

            }


        },

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
