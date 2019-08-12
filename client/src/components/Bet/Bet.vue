<template>
  <div class="Bet">
    <div class="row mt-5">
      <div class="col-md-12">
        <button type="button" class="btn btn-info btn-block" @click="add">新增模拟投注</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    add () {
      this.$router.push({name: 'addBet'})
    }
  }
}
</script>

<style scoped>

</style>
