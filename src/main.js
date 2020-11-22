import * as lol from './lol.js'
function init() {
    document.querySelector('#summonerSearchButton').onclick = () => {
            lol.listSummonerData();
    }
}

export {init}
