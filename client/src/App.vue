<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
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
