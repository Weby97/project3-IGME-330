let app = new Vue({
    el: '#root',

    data: {
        summonerInfo: JSON.parse(localStorage.getItem("summonerInfo")),
        threeChampions: [{
            championName: '',
            championImageUrl: ``,
            masteryLevel: 0,
            masteryImageUrl: ``,
            chestAquired: false,
            lastPlayDate: "Last played 12/5/2020"
        }, {
            championName: '',
            championImageUrl: ``,
            masteryLevel: 0,
            masteryImageUrl: ``,
            chestAquired: false,
            lastPlayDate: "Last played 12/5/2020"
        }, {
            championName: '',
            championImageUrl: ``,
            masteryLevel: 0,
            masteryImageUrl: ``,
            chestAquired: false,
            lastPlayDate: "Last played 12/5/2020"
        }],

    },
    created() {

        for (let i = 0; i < 2; i++) {
            this.threeChampions[i].championName = this.summonerInfo.masteredChampions[i].name,
            this.threeChampions[i].championImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.championName}_0.jpg`,
            this.threeChampions[i].masteryLevel = this.summonerInfo.masteredChampions[i].championLevel,
            this.threeChampions[i].masteryImageUrl = `https://people.rit.edu/cal7114/330/projects/Lear_P3Final/images/m${this.masteryLevel}.png`,
            this.threeChampions[i].chestAquired = this.summonerInfo.masteredChampions[i].chestGranted,
            this.threeChampions[i].lastPlayDate = "Last played 12/5/2020"



        }



        console.log(this)
    },
    methods: {





    }
});
