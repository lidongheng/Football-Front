<template>
  <div class="report">
    <div class="row">
      <div class="col-md-12 mt-5">
        <button type="button" @click="addReport" class="btn btn-block btn-info">新增报告</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center display-4 mt-3">报告列表</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mt-5">
        <NewsItem v-for="(item,index) in match" :key="index" :time="item.date" :category="item.user.username" :newsTitle="item.host + ' vs ' + item.away"/>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from '../../common/NewsItem'
import axios from 'axios'
import { formatDate } from '../../../utils/formatDate'
export default {
  data () {
    return {
      match: []
    }
  },
  created () {
    this.getMatchList()
  },
  methods: {
    addReport () {
      this.$router.push({name: 'addReportLink'})
    },
    getMatchList () {
      axios.get('http://localhost:3500/api/betForm/match')
        .then(res => {
          if (res.status === 200) {
            res.data.match.map(item => {
              item.date = formatDate(item.date)
            })
            this.match = res.data.match
          } else {
            console.log(res)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },

  components: {
    NewsItem
  }
}
</script>

<style scoped>

</style>
