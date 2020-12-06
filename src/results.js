let app = new Vue({
    el: '#root',

    data: {
        summonerInfo: JSON.parse(localStorage.getItem("summonerInfo")),
        championName: 'Ahri',
        championImageUrl: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${5}_0.jpg`,
        masteryLevel: 7,
        masteryImageUrl: 'https://people.rit.edu/cal7114/330/projects/Lear_P3Final/images/m7.png',
        chestAquired: false,
        lastPlayDate: "Last played 12/5/20202"
    },
    created(){

        console.log(this)
    },
    methods: {





    }
});
