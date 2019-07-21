<template>
  <div id="app">
    <app-nav ref="navbar"></app-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav/Nav'
export default {
  name: 'App',
  components: {
    'app-nav': Nav
  }
}
</script>

<style>

</style>
