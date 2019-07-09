<template>
  <div class="form-group">
    <input class="form-control form-control-lg" :type="inputType" :name="textName" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: ['textName', 'placeholder', 'inputType']
}
</script>

<style scoped>

</style>
