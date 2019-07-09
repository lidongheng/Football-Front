<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    Main,
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>

<style>

</style>
