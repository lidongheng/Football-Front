<template>
  <div id="app">
    <app-nav ref="navbar"></app-nav>
    <div class="container">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>

<style>

</style>
