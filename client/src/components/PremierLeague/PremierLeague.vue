<template>
  <div class="premierLeague">
    <div class="row">
      <div class="col-md-12 ml-auto">
        <div class="navbar_wrapper">
          <ul>
            <li v-for="(img,index) in imgList" :key="index">
              <a href="javascript:void(0);" @click="toTeam(img.alt)">
                <img :src="img.image" :alt="img.alt">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        {image: '/static/images/premierLeague/Arsenal.jpg', alt: 'Arsenal'},
        {image: '/static/images/premierLeague/Liverpool.jpg', alt: 'Liverpool'},
        {image: '/static/images/premierLeague/Mancity.jpg', alt: 'Mancity'},
        {image: '/static/images/premierLeague/TottenhamHotSpur.jpg', alt: 'TottenhamHotSpur'},
        {image: '/static/images/premierLeague/Chelsea.jpg', alt: 'Chelsea'},
        {image: '/static/images/premierLeague/ManUtd.jpg', alt: 'ManUtd'},
        {image: '/static/images/premierLeague/Everton.jpg', alt: 'Everton'},
        {image: '/static/images/premierLeague/Wolfhampton.jpg', alt: 'Wolfhampton'},
        {image: '/static/images/premierLeague/Leichester.jpg', alt: 'Leichester'},
        {image: '/static/images/premierLeague/Watford.jpg', alt: 'Watford'},
        {image: '/static/images/premierLeague/Westham.jpg', alt: 'Westham'},
        {image: '/static/images/premierLeague/CrystalPalace.jpg', alt: 'CrystalPalace'},
        {image: '/static/images/premierLeague/NewCastle.jpg', alt: 'NewCastle'},
        {image: '/static/images/premierLeague/Southampton.jpg', alt: 'Southampton'},
        {image: '/static/images/premierLeague/Brighton.jpg', alt: 'Brighton'},
        {image: '/static/images/premierLeague/Burnley.jpg', alt: 'Burnley'},
        {image: '/static/images/premierLeague/AFCBournemouth.jpg', alt: 'AFCBournemouth'},
        {image: '/static/images/premierLeague/Norwich.jpg', alt: 'Norwich'},
        {image: '/static/images/premierLeague/Sheffield.jpg', alt: 'Sheffield'},
        {image: '/static/images/premierLeague/AstonVilla.jpg', alt: 'AstonVilla'}
      ]
    }
  },
  methods: {
    toTeam (team) {
      this.$router.push({path: `/premierLeague/${team}/`})
      this.$axios.get(`/api/players/${team}/`)
        .then(res => {
          console.log(res)
          const FW = res.data.players.filter(player => player.attr.toString() === 'FW')
          const MF = res.data.players.filter(player => player.attr.toString() === 'MF')
          const DF = res.data.players.filter(player => player.attr.toString() === 'DF')
          const GK = res.data.players.filter(player => player.attr.toString() === 'GK')
          this.$store.dispatch('setPlayers', {FW: FW, MF: MF, DF: DF, GK: GK})
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  .navbar_wrapper {
    margin-top:15px;
  }
  a img {
    width:30px;
    height: 30px;
    margin: 10px;
  }
  a:hover img{
    width: 50px;
    height: 50px;
    margin: 0;
    transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
  }
  li {
    display:inline-block;
  }
</style>
