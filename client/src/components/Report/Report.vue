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
                <button type="button" class="btn btn-outline-warning btn-sm" @click="editReport(item._id)">编辑报告</button>
                <button type="button" v-show="canDelete(item.user._id)" class="btn btn-outline-danger btn-sm" @click="deleteOne(item._id)">删除报告</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <app-pagination :pagination="pagination" :pageNumChange="pageNumChange"></app-pagination>
  </div>
</template>

<script>
import NewsItem from '../../common/NewsItem'
import InputGroup from '../../common/InputGroup'
import LabelItem from '../../common/LabelItem'
import Pagination from '../../common/Pagination'
import { formatDatetime } from '../../../utils/formatDate'
export default {
  data () {
    return {
      match: [],
      pagination: {
        total: 22,
        pageSize: 10,
        pageNum: 1
      },
    }
  },
  created () {
    this.getMatchList()
  },
  methods: {
    canDelete (id) {
      return (localStorage.getItem('userId') && localStorage.getItem('userId') === id)
    },
    addReport () {
      this.$router.push({name: 'fundamentalLink'})
    },
    addEuroOdd (id) {
      this.$router.push({path: `/report/add/EuroOdd/${id}`})
    },
    addAsiaOdd (id) {
      this.$router.push({path: `/report/add/AsiaOdd/${id}`})
    },
    deleteOne (id) {
      this.$axios.delete(`/api/betForm/${id}/`)
        .then(res => {
          this.getMatchList()
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMatchList () {
      this.$axios.get('/api/betForm/match/1/')
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            res.data.match.map(item => {
              item.date = formatDatetime(item.date)
            })
            this.match = res.data.match
            this.pagination.total = res.data.rows
            this.pagination.pageNum = pageNow
          } else {
            console.log(res)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    editReport (id) {
      this.$router.push({path: `/report/edit/${id}/`})
    },
    pageNumChange (newValue, oldValue) {
      this.$route.params.pageNow = newValue
      this.$axios.get(`/api/betForm/match/${newValue}/`)
        .then(res => {
          if (res.status === 200) {
            res.data.match.map(item => {
              item.date = formatDatetime(item.date)
            })
            this.match = res.data.match
            this.pagination.total = res.data.rows
            this.pagination.pageNum = newValue
          }
          this.$router.push({path: `/report/${newValue}/`})
        })
        .catch(err => console.log(err))
    }
  },

  components: {
    NewsItem,
    InputGroup,
    LabelItem,
    'app-pagination': Pagination
  }
}
</script>

<style scoped>
  select {
    display: inline-block;
    width:60%;
  }
</style>
