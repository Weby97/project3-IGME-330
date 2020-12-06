Vue.component('champion-card', {
 props: ['champion'],
            template: `
<div class="championCard">
        <img v-if='champion.masteryLevel>=5' id='masteryIcon' :src="champion.masteryImageUrl">
        <div class="image-cropper">
            <img :src="champion.championImageUrl" alt="avatar" class="profile-pic">
        </div>

        <div class='caption'>
        <div class = "name">{{champion.championName}}</div>
        <div id = "masteryinfo">{{champion.lastPlayDate}}</div>
        <div v-if='!champion.chestAquired' id = "info1"> <img id='chestIcon' src="images/ChestIconGold.png"> <span>Chest Not Yet Aquired</span></div>
        </div>
    </div>`
       });

Vue.component('profile-header', {
 props: ['summonerinfo'],
            template: `<div ><span id='sn'>{{summonerinfo.name}}</span><img id='sicon' :src="summonerinfo.summonerIconUrl"></div>`
       });


