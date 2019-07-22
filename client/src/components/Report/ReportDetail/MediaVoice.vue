<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">舆论详情</div>
    <div class="card-body">
      <h4 class="card-title">舆论详情</h4>
      <p class="card-text">{{getHostData}}</p>
      <p class="card-text">{{getAwayData}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // 在vuex中获取数据
    getHostData () {
      return this.$store.getters.report.hostNews
    },
    getAwayData () {
      return this.$store.getters.report.awayNews
    }
  }
}
</script>

<style scoped>

</style>
