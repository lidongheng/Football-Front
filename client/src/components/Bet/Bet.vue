<template>
  <div class="Bet">
    <div class="row mt-5">
      <div class="col-md-12">
        <button type="button" class="btn btn-info btn-block" @click="add">新增模拟投注</button>
      </div>
    </div>
    <form @submit.prevent="searchTeam">
      <div class="row mt-5">
        <div class="col-md-10">
          <InputItem id="form-control-lg" inputType="text" textName="search" placeholder="搜索球队名" :error="errors.team" v-model="team"/>
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">搜索</button>
        </div>
      </div>
    </form>
    <div class="row mt-3">
      <div class="col-md-12">
        <table class="table">
          <thead class="thead thead-default">
          <tr>
            <th>订单号</th>
            <th>对阵</th>
            <th>投注</th>
            <th>总结</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in betOrders" :key="index">
            <td>{{item.serialNumber}}</td>
            <td>{{item.host}}vs{{item.away}}</td>
            <td>{{item.betTeam}} {{item.handicap}} @ {{item.profit}}</td>
            <td>{{item.summary}}</td>
            <td>
              <button type="button" class="btn btn-outline-info btn-sm" @click="editSummary(item)">添加总结</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <InputDialog :show="isDialogShow" :content="editContent" :_id="editId"  @close="closeDialog" @add="addSummary"/>
    <app-pagination :pagination="pagination" :pageNumChange="pageNumChange"></app-pagination>
  </div>
</template>

<script>
import InputItem from '../common/InputItem'
import Pagination from '../common/Pagination'
import InputDialog from '../common/InputDialog'
export default {
  data () {
    return {
      team: '',
      betOrders: {},
      editContent: '',
      editId: '',
      pagination: {
        total: 22,
        pageSize: 10,
        pageNum: 1
      },
      isDialogShow: false,
      errors: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    add () {
      this.$router.push({name: 'addBet'})
    },
    getData () {
      const pageNow = this.$route.params.pageNow || 1
      this.$axios.get(`/api/bets/${pageNow}/`)
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            if (res.data.length !== 0) {
              console.log(res)
              this.betOrders = res.data.bets
              this.pagination.total = res.data.rows
              this.pagination.pageNum = pageNow
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    editSummary (item) {
      this.editContent = item.summary
      this.editId = item._id
      this.isDialogShow = true
    },
    closeDialog () {
      this.isDialogShow = false
    },
    addSummary (obj) {
      let data = {
        summary: obj.value,
        _id: obj.id
      }
      this.$axios.post('/api/bets/addSummary/', data)
        .then(res => {
          this.isDialogShow = false
          this.getData()
        })
        .catch(err => {
          console.log(err)
          this.isDialogShow = false
        })
    },
    searchTeam () {
      this.$axios.get(`/api/bets/?q=${this.team}&pageNow=1`)
        .then(res => {
          this.betOrders = res.data.bets
          this.$router.push({path: `/bet/??q=${this.team}&pageNow=1`})
        })
        .catch(err => {
          console.log(err)
        })
    },
    pageNumChange (newValue, oldValue) {
      this.$route.params.pageNow = newValue
      let q = this.team
      this.$axios.get(`/api/bets/?q=${q}&pageNow=${newValue}`)
        .then(res => {
          if (res.status === 200) {
            this.betOrders = res.data.bets
            this.pagination.total = res.data.rows
            this.pagination.pageNum = newValue
          }
          this.$router.push({path: `/bet/?q=${q}&pageNow=${newValue}`})
        })
        .catch(err => console.log(err))
    }
  },
  components: {
    InputItem,
    'app-pagination': Pagination,
    InputDialog
  }
}
</script>

<style scoped>

</style>
