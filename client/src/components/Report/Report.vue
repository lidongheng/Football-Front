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
      <div class="col-md-12">
        <table class="table">
          <thead class="thead thead-default">
          <tr>
            <th>时间</th>
            <th>作者</th>
            <th>对阵</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in match" :key="index">
              <td>{{item.date}}</td>
              <td>{{item.user.username}}</td>
              <td><router-link tag="a" :to="'/report/'+item._id">{{item.host + ' vs ' + item.away}}</router-link></td>
              <td>
                <button type="button" class="btn btn-outline-info btn-sm" @click="addEuroOdd(item._id)">添加欧指</button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="addAsiaOdd(item._id)">添加亚指</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from '../../common/NewsItem'
import InputGroup from '../../common/InputGroup'
import LabelItem from '../../common/LabelItem'
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
      this.$router.push({name: 'fundamentalLink'})
    },
    addEuroOdd (id) {
      this.$router.push({path: `/report/add/EuroOdd/${id}`})
    },
    addAsiaOdd (id) {
      this.$router.push({path: `/report/add/AsiaOdd/${id}`})
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
    NewsItem,
    InputGroup,
    LabelItem
  }
}
</script>

<style scoped>
  select {
    display: inline-block;
    width:60%;
  }
</style>
