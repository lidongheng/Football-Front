<template>
  <div class="editArticle">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center display-4 my-4">写文章</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="标题："/>
        </div>
        <div class="col-md-10">
          <InputItem/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="内容："/>
        </div>
        <div class="col-md-10">
          <TextAreaItem rows="25"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="相关球队："/>
        </div>
        <div class="col-md-10">
          <InputItem placeholder="写有关球队名，用逗号隔开"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-10">
          <button type="submit" class="btn btn-info btn-block">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LabelItem from '../../common/LabelItem'
import InputItem from '../../common/InputItem'
import TextAreaItem from '../../common/TextAreaItem'
export default {
  components: {
    LabelItem,
    InputItem,
    TextAreaItem
  }
}
</script>

<style scoped>

</style>
