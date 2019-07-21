<template>
  <div class="EuroOddForm">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-1">
          <LabelItem textName="欧指："></LabelItem>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <span class="mx-2 my-2">机构：</span>
            <select class="form-control" v-model="EuroCompanyId">
              <option v-for="item in companyName" :key="item.id" :value="item.id">{{item.name}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <InputGroup inputType="text" title1="胜" title2="平" title3="负" v-model="Euroodd"/>
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-info btn-sm">增加</button>
          <button type="button" class="btn btn-danger btn-sm" @click="goback">取消</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputGroup from '../../../common/InputGroup'
import LabelItem from '../../../common/LabelItem'
import axios from 'axios'
export default {
  data () {
    return {
      id: '',
      companyName: [
        {'id': 1, 'name': '竞彩'},
        {'id': 2, 'name': '威廉希尔'},
        {'id': 3, 'name': '立博'},
        {'id': 4, 'name': 'Bet365'},
        {'id': 5, 'name': '伟德'},
        {'id': 6, 'name': 'Crown'},
        {'id': 7, 'name': '澳彩'},
        {'id': 8, 'name': '易胜博'}
      ],
      EuroCompanyId: '',
      Euroodd: ''
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  methods: {
    onSubmit () {
      const formData = {
        match: this.id,
        EuroCompanyId: this.EuroCompanyId,
        Euroodd: this.Euroodd
      }
      axios.post('http://localhost:3500/api/odds/EuroOdds', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },
    goback () {
      this.$router.go(-1)
    }
  },
  components: {
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
