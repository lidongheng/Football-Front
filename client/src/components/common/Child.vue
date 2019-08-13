<template>
  <div class="child">
    <input type="text" v-bind:value='value.winOdd' @input="$emit('input', {winOdd: $event.target.value, drawOdd: value.drawOdd, loseOdd: value.loseOdd})">
    <input type="text" v-bind:value='value.drawOdd' @input="$emit('input', {winOdd: value.winOdd, drawOdd: $event.target.value, loseOdd: value.loseOdd})">
    <input type="text" v-bind:value='value.loseOdd' @input="$emit('input', {winOdd: value.winOdd, drawOdd: value.drawOdd, loseOdd: $event.target.value})">
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style scoped>

</style>
