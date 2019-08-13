<template>
  <div class="addReport">
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center display-4 my-4">新增投注单</h3>
      </div>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="比赛编号："/>
        </div>
        <div class="col-md-10">
          <InputItem inputType="text" textName="number" placeholder="如：023。没有就001" :error="errors.number" v-model="number"/>
          <div class="invalid-feedback d-block">{{errors.number}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="联赛："/>
        </div>
        <div class="col-md-10">
          <InputItem inputType="text" textName="league" placeholder="如：英超、世界杯" :error="errors.league" v-model="league"/>
          <div class="invalid-feedback d-block">{{errors.league}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="比赛场次："/>
        </div>
        <div class="col-md-4">
          <InputItem inputType="text" textName="host" placeholder="如：阿森纳" :error="errors.host" v-model="host"/>
          <div class="invalid-feedback d-block">{{errors.host}}</div>
        </div>
        <span class="lead text-center pt-2">vs</span>
        <div class="col-md-4">
          <InputItem inputType="text" textName="away" placeholder="如：热刺" :error="errors.away" v-model="away"/>
          <div class="invalid-feedback d-block">{{errors.away}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="投注球队："/>
        </div>
        <div class="col-md-10">
          <InputItem inputType="text" textName="betTeam" placeholder="如：曼联" :error="errors.betTeam" v-model="betTeam"/>
          <div class="invalid-feedback d-block">{{errors.betTeam}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="盘口："/>
        </div>
        <div class="col-md-4">
          <InputItem inputType="text" textName="handicap" placeholder="如：+0.25" :error="errors.handicap" v-model="handicap"/>
          <div class="invalid-feedback d-block">{{errors.handicap}}</div>
        </div>
        <span class="lead text-center pt-2">水位</span>
        <div class="col-md-4">
          <InputItem inputType="text" textName="profit" placeholder="如：1.03" :error="errors.profit" v-model="profit"/>
          <div class="invalid-feedback d-block">{{errors.profit}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="模拟投注额："/>
        </div>
        <div class="col-md-10">
          <InputItem inputType="text" textName="amount" placeholder="如：600" :error="errors.amount" v-model="amount"/>
          <div class="invalid-feedback d-block">{{errors.amount}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mb-5">
          <button type="submit" class="btn btn-info btn-block">提交</button>
        </div>
      </div>
    </form>
    <Dialog v-if="isDialogVisible" :bet_order="bet_order" @close="closeDialog"></Dialog>
  </div>
</template>

<script>
import InputItem from '../common/InputItem'
import LabelItem from '../common/LabelItem'
import Dialog from '../common/Dialog'
export default {
  data () {
    return {
      number: '',
      league: '',
      host: '',
      away: '',
      betTeam: '',
      handicap: '',
      profit: '',
      amount: '',
      errors: {},
      bet_order: {},
      isDialogVisible: false
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        number: this.number,
        league: this.league,
        host: this.host,
        away: this.away,
        betTeam: this.betTeam,
        handicap: this.handicap,
        profit: this.profit,
        amount: this.amount,
      }
      this.$axios.post('/api/bet/', formData)
        .then(res => {
          console.log(res)
          this.bet_order = res.data.bet
          this.isDialogVisible = true
        })
        .catch(err => {
          console.log(err)
        })
    },
    closeDialog (val) {
      this.isDialogVisible = val
    }
  },
  components: {
    InputItem,
    LabelItem,
    Dialog
  }
}
</script>

<style scoped>

</style>
