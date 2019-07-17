<template>
  <div class="form-group">
    <label class="text-right font-weight-bold">{{textName}}</label>
  </div>
</template>

<script>
export default {
  props: ['textName']
}
</script>

<style scoped>
 label {
   flex: 1;
   line-height: 48px;
   justify-content: flex-end;
   width:100%;
 }
</style>
