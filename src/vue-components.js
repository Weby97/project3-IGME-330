Vue.component('champion-card', {
 props: ['championname','championimageurl','masterylevel','masteryimageurl','lastplayDate','chestaquired'],
            template: `
<div class="championCard">
        <img v-if='masterylevel>=5' id='masteryIcon' :src="masteryimageurl">
        <div class="image-cropper">
            <img :src="championimageurl" alt="avatar" class="profile-pic">
        </div>

        <div class='caption'>
        <div class = "name">{{championname}}</div>
        <div id = "masteryinfo">{{lastplaydate}}</div>
        <div v-if='!chestaquired' id = "info1"> <img id='chestIcon' src="images/ChestIconGold.png"> <span>Chest Not Yet Aquired</span></div>
        </div>
    </div>`
       });

