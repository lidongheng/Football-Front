<template>
  <div class="temp">
    <form @submit.prevent="OnSubmit">
      <Child v-model="Euroodd"/>
      <button class="btn btn-info">提交</button>
    </form>
  </div>
</template>

<script>
// import InputGroup from '../../common/InputGroup'
import Child from '../../common/Child'
export default {
  data () {
    return {
      Euroodd: ''
    }
  },
  methods: {
    OnSubmit () {
      console.log(this.Euroodd)
    }
  },
  components: {
    Child
  }
}
</script>

<style scoped>

</style>
