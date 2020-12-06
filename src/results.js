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
            lastPlayDate: "Last played ???"
        }, {
            championName: '',
            championImageUrl: ``,
            masteryLevel: 0,
            masteryImageUrl: ``,
            chestAquired: false,
            lastPlayDate: "Last played ???"
        }, {
            championName: '',
            championImageUrl: ``,
            masteryLevel: 0,
            masteryImageUrl: ``,
            chestAquired: false,
            lastPlayDate: "Last played ???"
        }],
        champion1:{},
        champion2:{},
        champion3:{},

    },
    created() {

        for (let i = 0; i < 2; i++) {
            this.threeChampions[i].championName = this.summonerInfo.masteredChampions[i].name,
            this.threeChampions[i].championImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.threeChampions[i].championName}_0.jpg`,
            this.threeChampions[i].masteryLevel = this.summonerInfo.masteredChampions[i].championLevel,
            this.threeChampions[i].masteryImageUrl = `https://people.rit.edu/cal7114/330/projects/Lear_P3Final/images/m${this.threeChampions[i].masteryLevel}.png`,
            this.threeChampions[i].chestAquired = this.summonerInfo.masteredChampions[i].chestGranted,
            this.threeChampions[i].lastPlayDate = this.summonerInfo.masteredChampions[i].holiday



        }

        this.champion1=this.threeChampions[0],
        this.champion2=this.threeChampions[1],
        this.champion3=this.threeChampions[2],



        console.log(this)
    },
    methods: {





    }
});
