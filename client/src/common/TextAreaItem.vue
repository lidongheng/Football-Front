<template>
  <div class="form-group">
    <textarea v-bind:class="{'form-control':true,'is-invalid': error}" :name="name" :cols="cols" :rows="rows" :placeholder="placeholder"
              ref="input" :value="value" v-on:input="updateValue($event.target.value)"></textarea>
  </div>
</template>

<script>
export default {
  props: ['rows', 'name', 'placeholder', 'error', 'value', 'cols'],
  methods: {
    updateValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>

</style>
