import * as lol from './lol.js'
import * as utils from './utils.js'
function init() {

    //event handler for league search button
    document.querySelector('#summonerSearchButton').onclick = () => {
            lol.listSummonerData();
    }
}

export { init }
