<template>
  <div class="form-group">
    <span class="mx-2 my-2">{{title1}}</span>
    <input v-bind:class="{'form-control':true,'is-invalid': error}" :type="inputType" name="winOdd"
           :error="error" v-bind:value='value.winOdd'
           @input="$emit('input', {winOdd: $event.target.value, drawOdd: value.drawOdd, loseOdd: value.loseOdd})"/>
    <span class="mx-2 my-2">{{title2}}</span>
    <input v-bind:class="{'form-control':true,'is-invalid': error}" :type="inputType" name="drawOdd"
           :error="error" v-bind:value='value.drawOdd'
           @input="$emit('input', {winOdd: value.winOdd, drawOdd: $event.target.value, loseOdd: value.loseOdd})"/>
    <span class="mx-2 my-2">{{title3}}</span>
    <input v-bind:class="{'form-control':true,'is-invalid': error}" :type="inputType" name="loseOdd"
           :error="error" v-bind:value='value.loseOdd'
           @input="$emit('input', {winOdd: value.winOdd, drawOdd: value.drawOdd, loseOdd: $event.target.value})"/>
  </div>
</template>

<script>
export default {
  props: ['winOdd', 'drawOdd', 'loseOdd', 'inputType', 'error', 'title1', 'title2', 'title3', 'value']
}
</script>

<style scoped>
  input {
    display: inline-block;
    width:15%;
  }
</style>
