<template>
  <div id="app">
    <app-nav></app-nav>
    <img src="./assets/logo.png">
    <HelloWorld/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    HelloWorld,
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>

<style>

</style>
