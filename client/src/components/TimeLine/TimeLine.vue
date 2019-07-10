<template>
  <div class="timeline">
    <div class="container">
      <div class="row">
        <div class="col-md-12 ml-auto mt-5">
          <light-timeline :items='items'></light-timeline>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import Vue from 'vue'
import LightTimeline from 'vue-light-timeline'
Vue.use(LightTimeline)
export default {
  data () {
    return {
      items: [
        {
          tag: '2019-02-12',
          content: '测试内容'
        },
        {
          tag: '2019-02-13',
          type: 'circle',
          content: '练习内容'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
