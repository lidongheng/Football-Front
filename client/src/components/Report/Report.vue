<template>
  <div class="report">
    <div class="row">
      <div class="col-md-12 mt-5">
        <button type="button" @click="redirect" class="btn btn-block btn-info">新增报告</button>
      </div>
      <div class="col-md-12 mt-5">
        <NewsItem newsTitle="北京国安 vs 重庆斯威"/>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from '../../common/NewsItem'
export default {
  methods: {
    redirect () {
      this.$router.push({name: 'addReportLink'})
    }
  },
  components: {
    NewsItem
  }
}
</script>

<style scoped>

</style>
