<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">战意分析</div>
    <div class="card-body">
      <h4 class="card-title">战意分析</h4>
      <p class="card-text">{{getData}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // 在vuex中获取数据
    getData () {
      return this.$store.getters.report.analysis
    }
  }
}
</script>

<style scoped>

</style>
