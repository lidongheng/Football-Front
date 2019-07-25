<template>
  <div class="temp">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center my-5">球队风格评述</h1>
        <p class="text-center">美丽足球，前场双子星火力强劲，但是阵容厚度差，应付不了双线作战，而且后场很坑。</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center my-5">一线队球员一览</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th scope="col">index</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">importance && status</th>
            <th scope="col">description</th>
          </tr>
          </thead>
          <tbody>
          <tr v-show="FW.length === 0">
            <td colspan="5" align="center">暂无数据</td>
          </tr>
          <tr v-for="(item,index) in FW" :key="'a'+index">
            <th scope="row">{{index+1}}</th>
            <td>{{item.player}}</td>
            <td>{{item.position}}</td>
            <td>{{item.importance}}</td>
            <td>{{item.description}}</td>
          </tr>
          </tbody>
        </table>
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th scope="col">index</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">importance && status</th>
            <th scope="col">description</th>
          </tr>
          </thead>
          <tbody>
          <tr v-show="MF.length === 0">
            <td colspan="5" align="center">暂无数据</td>
          </tr>
          <tr v-for="(item,index) in MF" :key="'b'+index">
            <th scope="row">{{index+1}}</th>
            <td>{{item.player}}</td>
            <td>{{item.position}}</td>
            <td>{{item.importance}}</td>
            <td>{{item.description}}</td>
          </tr>
          </tbody>
        </table>
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th scope="col">index</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">importance && status</th>
            <th scope="col">description</th>
          </tr>
          </thead>
          <tbody>
          <tr v-show="DF.length === 0">
            <td colspan="5" align="center">暂无数据</td>
          </tr>
          <tr v-for="(item,index) in DF" :key="'c'+index">
            <th scope="row">{{index+1}}</th>
            <td>{{item.player}}</td>
            <td>{{item.position}}</td>
            <td>{{item.importance}}</td>
            <td>{{item.description}}</td>
          </tr>
          </tbody>
        </table>
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th scope="col">index</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">importance && status</th>
            <th scope="col">description</th>
          </tr>
          </thead>
          <tbody>
          <tr v-show="GK.length === 0">
            <td colspan="5" align="center">暂无数据</td>
          </tr>
          <tr v-for="(item,index) in GK" :key="'d'+index">
            <th scope="row">{{index+1}}</th>
            <td>{{item.player}}</td>
            <td>{{item.position}}</td>
            <td>{{item.importance}}</td>
            <td>{{item.description}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      team: ''
    }
  },
  created () {
    this.getData()
  },
  computed: {
    FW () {
      return this.$store.getters.FW
    },
    MF () {
      return this.$store.getters.MF
    },
    DF () {
      return this.$store.getters.DF
    },
    GK () {
      return this.$store.getters.GK
    }
  },
  methods: {
    getData () {
      this.team = this.$route.params.team
      this.$axios.get(`/api/players/${this.team}/`)
        .then(res => {
          console.log(res)
          const FW = res.data.players.filter(player => player.attr.toString() === 'FW')
          const MF = res.data.players.filter(player => player.attr.toString() === 'MF')
          const DF = res.data.players.filter(player => player.attr.toString() === 'DF')
          const GK = res.data.players.filter(player => player.attr.toString() === 'GK')
          this.$store.dispatch('setPlayers', {FW: FW, MF: MF, DF: DF, GK: GK})
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
