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


export {
    init
}
