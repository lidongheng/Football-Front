<template>
  <div class="reportDetail">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center display-5 mt-4">分析页面</h1>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-4">
        <router-link tag="li" class="nav-link" :to="'/report/intention/'+id+'/'">
          <a class="list-group-item list-group-item-action">战意分析</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="'/report/recentMatch/'+id+'/'">
          <a class="list-group-item list-group-item-action">近期比赛</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="'/report/oddsAnalysis/'+id+'/'">
          <a class="list-group-item list-group-item-action">赔率分析</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="'/report/lineup/'+id+'/'">
          <a class="list-group-item list-group-item-action">阵容分析</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="'/report/style/'+id+'/'">
          <a class="list-group-item list-group-item-action">风格分析</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="'/report/mediaVoice/'+id+'/'">
          <a class="list-group-item list-group-item-action">舆论详情</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="'/report/other/'+id+'/'">
          <a class="list-group-item list-group-item-action">其他分析</a>
        </router-link>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      report: {},
      id: ''
    }
  },
  created () {
    this.getReport()
    this.id = this.$route.params.id
  },
  methods: {
    getReport () {
      let nid = this.$route.params.id
      axios.get(`http://localhost:3500/api/betForm/${nid}/`)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
