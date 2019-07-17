<template>
  <div class="form-group">
    <textarea class="form-control" :name="name" cols="30" :rows="rows" :placeholder="placeholder"
              ref="input" :value="value" v-on:input="updateValue($event.target.value)"></textarea>
  </div>
</template>

<script>
export default {
  props: ['rows', 'name', 'placeholder', 'value'],
  methods: {
    updateValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>

</style>
