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
          <InputItem v-model="title"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="内容："/>
        </div>
        <div class="col-md-10">
          <TextAreaItem rows="25" v-model="content"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="相关球队："/>
        </div>
        <div class="col-md-10">
          <InputItem placeholder="写有关球队名，用逗号隔开" v-model="about"/>
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
      id: '',
      title: '',
      content: '',
      about: '',
      errors: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.id = this.$route.params.id
      if (this.$store.getters.article && this.$store.getters.article._id === this.id) {
        const article = this.$store.getters.article
        this.title = article.title
        this.content = article.content
        if (typeof article.about === 'object') {
          this.about = article.about.join(',')
        } else {
          this.about = article.about
        }
      } else {
        this.$axios.get(`/api/articles/${this.id}/`)
          .then(res => {
            this.$store.dispatch('setArticle', {article: res.data.article})
            const article = this.$store.getters.article
            this.title = article.title
            this.content = article.content
            this.about = article.about.join(',')
          })
          .catch(err => console.log(err))
      }
    },
    onSubmit () {
      let teams = this.about
      teams = teams.replace(/，/g, ',')
      const formData = {
        id: this.id,
        title: this.title,
        content: this.content,
        about: teams
      }
      console.log(formData)
      this.$axios.post('/api/articles/', formData)
        .then(res => {
          console.log(res)
          this.$router.push({path: `/article/${res.data.article_id}`})
        })
        .catch(err => {
          console.log(err)
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
