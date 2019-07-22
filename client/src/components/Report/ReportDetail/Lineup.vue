<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">阵容分析</div>
    <div class="card-body">
      <h4 class="card-title">阵容分析</h4>
      <p class="card-text">{{getHostLineupData}}</p>
      <p class="card-text">{{getHostBenchData}}</p>
      <p class="card-text">{{getAwayLineupData}}</p>
      <p class="card-text">{{getAwayBenchData}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // 在vuex中获取数据
    getHostLineupData () {
      return this.$store.getters.report.hostExpectLineup
    },
    getHostBenchData () {
      return this.$store.getters.report.hostExpectBench
    },
    getAwayLineupData () {
      return this.$store.getters.report.awayExpectLineup
    },
    getAwayBenchData () {
      return this.$store.getters.report.awayExpectBench
    }
  }
}
</script>

<style scoped>

</style>
