import * as lol from './lol.js'
import * as utils from './utils.js'

function init() {

    //event handler for league search button
    document.querySelector('#summonerSearchButton').onclick = () => {
        lol.listSummonerData();
    }

    let videoUrls = ['camile', 'kindred', 'xayah', 'warwick']

    //randomize animated background
let randomInt = utils.getRandomInt(0, videoUrls.length);
//    if (randomInt == 2) {
//        document.querySelector('h1').style.color = "black"
//    } else {
//        document.querySelector('h1').style.color = "white"
//    }

    document.querySelector('.fullscreen-bg__video').src = `./media/${videoUrls[randomInt]}.webm`
}


let cal = new Vue({
    el: '#calendar',
    data: {
        title: "Calendar Events",
        result: {}
    },
    created() {
        this.search()
    },
    methods: {
        search() {
            fetch("https://calendarific.com/api/v2/holidays?&api_key=b3de703f8dcbb296bcf442aa7481ea5561f8adb8&country=US&month=2&year=2019")
                .then(response => {
                    if (!response.ok) {
                        throw Error(`ERROR: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(json => {
                    console.log(json.response);
                    this.result = json.response;
                    console.log(this.result.holidays.length);
                });
        }, // end search
        fillHTML() {
            let holidayArr = this.result.holidays;
            let tableEle = document.querySelector("#calData");
            for (let i = 0; i < holidayArr.length; i++) {
                let holiEle = document.createElement("tr");
                let holiData = document.createElement("td");
                holiData.innerHTML = holidayArr[i].name;
                holiEle.appendChild(holiData);
                holiData.innerHTML = holidayArr[i].description;
                holiEle.appendChild(holiData);
                tableEle.appendChild(holiEle);
            }
        }
    } // end methods
});

//cal.fillHTML();

export {
    init
}
