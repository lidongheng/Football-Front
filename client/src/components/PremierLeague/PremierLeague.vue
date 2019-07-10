<template>
  <div class="premierLeague">
    <div class="row">
      <div class="col-md-12 ml-auto">
        <div class="navbar_wrapper">
          <ul>
            <li v-for="img in imgList">
              <a href="#">
                <img :src="img.image" alt="arsenal">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="display-1 text-center">敬请期待</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        {image: '/static/images/premierLeague/Arsenal.jpg'},
        {image: '/static/images/premierLeague/Liverpool.jpg'},
        {image: '/static/images/premierLeague/Mancity.jpg'},
        {image: '/static/images/premierLeague/TottenhamHotSpur.jpg'},
        {image: '/static/images/premierLeague/Chelsea.jpg'},
        {image: '/static/images/premierLeague/ManUtd.jpg'},
        {image: '/static/images/premierLeague/Everton.jpg'},
        {image: '/static/images/premierLeague/Wolfhampton.jpg'},
        {image: '/static/images/premierLeague/Leichester.jpg'},
        {image: '/static/images/premierLeague/Watford.jpg'},
        {image: '/static/images/premierLeague/Westham.jpg'},
        {image: '/static/images/premierLeague/CrystalPalace.jpg'},
        {image: '/static/images/premierLeague/NewCastle.jpg'},
        {image: '/static/images/premierLeague/Southampton.jpg'},
        {image: '/static/images/premierLeague/Arsenal.jpg'},
        {image: '/static/images/premierLeague/Burnley.jpg'},
        {image: '/static/images/premierLeague/AFCBournemouth.jpg'},
        {image: '/static/images/premierLeague/Norwich.jpg'},
        {image: '/static/images/premierLeague/Sheffield.jpg'},
        {image: '/static/images/premierLeague/AstonVilla.jpg'}
      ]
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
