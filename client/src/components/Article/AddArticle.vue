<template>
  <div class="addArticle">
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
          <InputItem :error="errors.title" v-model="title"/>
          <div class="invalid-feedback d-block">{{errors.title}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="内容："/>
        </div>
        <div class="col-md-10">
          <TextAreaItem rows="25" :error="errors.content" v-model="content"/>
          <div class="invalid-feedback d-block">{{errors.content}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="相关球队："/>
        </div>
        <div class="col-md-10">
          <InputItem placeholder="写有关球队名，用逗号隔开" :error="errors.about" v-model="about"/>
          <div class="invalid-feedback d-block">{{errors.about}}</div>
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
import LabelItem from '../common/LabelItem'
import InputItem from '../common/InputItem'
import TextAreaItem from '../common/TextAreaItem'
export default {
  data () {
    return {
      title: '',
      content: '',
      about: '',
      errors: {}
    }
  },
  methods: {
    onSubmit () {
      this.about = this.about.replace(/，/g, ',')
      const formData = {
        title: this.title,
        content: this.content,
        about: this.about
      }
      this.$axios.post('/api/articles/', formData)
        .then(res => {
          console.log(res)
          this.$router.push({name: 'Article'})
        })
        .catch(err => {
          if (err.response.status === 400) {
            this.errors = err.response.data
          }
        })
    }
  },
  components: {
    LabelItem,
    InputItem,
    TextAreaItem
  }
}
</script>

<style scoped>

</style>
