<template>
  <div class="PIndex">
    <div class="row">
      <div class="col-md-12">
        <h1 class="display-4 text-center">英超近期场次前瞻</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th scope="col">index</th>
            <th scope="col">Time</th>
            <th scope="col">Match</th>
            <th scope="col">Odds</th>
            <th scope="col">Forward</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in forwards" :key="item._id">
            <td>{{index+1}}</td>
            <td>{{item.time}}</td>
            <td>{{item.match}}</td>
            <td>{{item.odds}}</td>
            <td>{{item.forward}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="display-4 text-center">英超六强近期赛程</h1>
        <div class="match_wrapper">
          <div class="match_title">
            <p class="lead text-center">曼城</p>
          </div>
          <div class="match_table">
            <table class="table Mancity">
              <thead class="thead-dark">
              <tr>
                <th scope="col">index</th>
                <th scope="col">Time</th>
                <th scope="col">League</th>
                <th scope="col">Match</th>
                <th scope="col">Period</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in Mancity" :key="item._id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.time}} {{item.weekday}}</td>
                <td>{{item.league}}</td>
                <td>{{item.match}}</td>
                <td>{{item.period+'时'}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="match_wrapper">
          <div class="match_title">
            <p class="lead text-center">利物浦</p>
          </div>
          <div class="match_table">
            <table class="table Liverpool">
              <thead class="thead-dark">
              <tr>
                <th scope="col">index</th>
                <th scope="col">Time</th>
                <th scope="col">League</th>
                <th scope="col">Match</th>
                <th scope="col">Period</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in Liverpool" :key="item._id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.time}} {{item.weekday}}</td>
                <td>{{item.league}}</td>
                <td>{{item.match}}</td>
                <td>{{item.period+'时'}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="match_wrapper">
          <div class="match_title">
            <p class="lead text-center">热刺</p>
          </div>
          <div class="match_table">
            <table class="table TottenhamHotSpur">
              <thead class="thead-dark">
              <tr>
                <th scope="col">index</th>
                <th scope="col">Time</th>
                <th scope="col">League</th>
                <th scope="col">Match</th>
                <th scope="col">Period</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in TottenhamHotSpur" :key="item._id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.time}} {{item.weekday}}</td>
                <td>{{item.league}}</td>
                <td>{{item.match}}</td>
                <td>{{item.period+'时'}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="match_wrapper">
          <div class="match_title">
            <p class="lead text-center">阿森纳</p>
          </div>
          <div class="match_table">
            <table class="table Arsenal">
              <thead class="thead-dark">
              <tr>
                <th scope="col">index</th>
                <th scope="col">Time</th>
                <th scope="col">League</th>
                <th scope="col">Match</th>
                <th scope="col">Period</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in Arsenal" :key="item._id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.time}} {{item.weekday}}</td>
                <td>{{item.league}}</td>
                <td>{{item.match}}</td>
                <td>{{item.period+'时'}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="match_wrapper">
          <div class="match_title">
            <p class="lead text-center">曼联</p>
          </div>
          <div class="match_table">
            <table class="table ManUtd">
              <thead class="thead-dark">
              <tr>
                <th scope="col">index</th>
                <th scope="col">Time</th>
                <th scope="col">League</th>
                <th scope="col">Match</th>
                <th scope="col">Period</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in ManUtd" :key="item._id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.time}} {{item.weekday}}</td>
                <td>{{item.league}}</td>
                <td>{{item.match}}</td>
                <td>{{item.period+'时'}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="match_wrapper">
          <div class="match_title">
            <p class="lead text-center">切尔西</p>
          </div>
          <div class="match_table">
            <table class="table Chelsea">
              <thead class="thead-dark">
              <tr>
                <th scope="col">index</th>
                <th scope="col">Time</th>
                <th scope="col">League</th>
                <th scope="col">Match</th>
                <th scope="col">Period</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in Chelsea" :key="item._id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.time}} {{item.weekday}}</td>
                <td>{{item.league}}</td>
                <td>{{item.match}}</td>
                <td>{{item.period+'时'}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="match_wrapper">
          <div class="match_title">
            <p class="lead text-center">狼队</p>
          </div>
          <div class="match_table">
            <table class="table Wolfhampton">
              <thead class="thead-dark">
              <tr>
                <th scope="col">index</th>
                <th scope="col">Time</th>
                <th scope="col">League</th>
                <th scope="col">Match</th>
                <th scope="col">Period</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in Wolfhampton" :key="item._id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.time}} {{item.weekday}}</td>
                <td>{{item.league}}</td>
                <td>{{item.match}}</td>
                <td>{{item.period+'时'}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Mancity: '',
      Liverpool: '',
      TottenhamHotSpur: '',
      Arsenal: '',
      ManUtd: '',
      Chelsea: '',
      Wolfhampton: '',
      forwards: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getBigSixMatch () {
      return this.$axios.get('/api/teams/bigSixMatch/')
    },
    getForwards () {
      return this.$axios.get('/api/forwards/')
    },
    getData () {
      this.$axios.all([this.getBigSixMatch(), this.getForwards()])
        .then(res => {
          this.forwards = res[1].data.forwards
          res[0].data.teams.map(team => {
            if (team.club === 'Mancity') {
              this.Mancity = team.recentMatch
            }
            if (team.club === 'Liverpool') {
              this.Liverpool = team.recentMatch
            }
            if (team.club === 'TottenhamHotSpur') {
              this.TottenhamHotSpur = team.recentMatch
            }
            if (team.club === 'Arsenal') {
              this.Arsenal = team.recentMatch
            }
            if (team.club === 'ManUtd') {
              this.ManUtd = team.recentMatch
            }
            if (team.club === 'Chelsea') {
              this.Chelsea = team.recentMatch
            }
            if (team.club === 'Wolfhampton') {
              this.Wolfhampton = team.recentMatch
            }
          })
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
