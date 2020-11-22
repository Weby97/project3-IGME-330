import * as lol from './lol.js'
function init() {
<<<<<<< HEAD
    document.querySelector('#summonerSearchButton').onclick = () => {
            lol.listSummonerData();
    }
}

export {init}
=======
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

    cal.fillHTML();

}

export { init }
>>>>>>> origin/main
