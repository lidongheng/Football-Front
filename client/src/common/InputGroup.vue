<template>
  <div class="form-group">
    <input class="form-control form-control-lg" :type="inputType" :name="textName" :placeholder="placeholder"
           ref="input" :value="value" v-on:input="updateValue($event.target.value)"/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['textName', 'placeholder', 'inputType', 'value'],
  methods: {
    updateValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>

</style>
