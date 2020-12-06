Vue.component('champion-card', {
 props: ['champion'],
            template: `
<div class="championCard">
        <img v-if='champion.masterylevel>=5' id='masteryIcon' :src="champion.masteryimageurl">
        <div class="image-cropper">
            <img :src="champion.championimageurl" alt="avatar" class="profile-pic">
        </div>

        <div class='caption'>
        <div class = "name">{{champion.championname}}</div>
        <div id = "masteryinfo">{{champion.lastplaydate}}</div>
        <div v-if='!champion.chestaquired' id = "info1"> <img id='chestIcon' src="images/ChestIconGold.png"> <span>Chest Not Yet Aquired</span></div>
        </div>
    </div>`
       });

//Vue.component('champion-card', {
// props: ['championname','championimageurl','masterylevel','masteryimageurl','lastplaydate','chestaquired'],
//            template: `
//<div class="championCard">
//        <img v-if='masterylevel>=5' id='masteryIcon' :src="masteryimageurl">
//        <div class="image-cropper">
//            <img :src="championimageurl" alt="avatar" class="profile-pic">
//        </div>
//
//        <div class='caption'>
//        <div class = "name">{{championname}}</div>
//        <div id = "masteryinfo">{{lastplaydate}}</div>
//        <div v-if='!chestaquired' id = "info1"> <img id='chestIcon' src="images/ChestIconGold.png"> <span>Chest Not Yet Aquired</span></div>
//        </div>
//    </div>`
//       });

