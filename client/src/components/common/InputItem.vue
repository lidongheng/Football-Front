<template>
  <div class="form-group">
    <input v-bind:class="{'form-control':true,'form-control-lg':true,'is-invalid': error}" :type="inputType" :name="textName" :placeholder="placeholder"
           :error="error" ref="input" :value="value" v-on:input="updateValue($event.target.value)"/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['textName', 'placeholder', 'inputType', 'value', 'error'],
  methods: {
    updateValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>

</style>
