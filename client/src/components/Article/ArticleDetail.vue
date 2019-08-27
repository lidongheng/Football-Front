<template>
  <div class="articleDetail">
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center display-4 mt-3">文章详情</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center">{{article.title}}</h3>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-6 info">
        <p>作者：{{article.user}}</p>
      </div>
      <div class="col-md-6">
        <p>时间：{{article.date}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" v-for="(item,index) in article.paragraph" :key="index">
        <p>{{item}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <button type="button" class="btn btn-warning" @click="edit(article._id)">修改</button>
        <button type="button" v-show="canDelete(article.user)" class="btn btn-danger" @click="deleteOne(article._id)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import { articleDate } from '../../../utils/formatDate'
export default {
  data () {
    return {

    }
  },
  created () {
    this.getData()
  },
  computed: {
    article () {
      return this.$store.getters.article
    }
  },
  methods: {
    canDelete (id) {
      return (localStorage.getItem('userId') && localStorage.getItem('userId') === id)
    },
    getData () {
      const id = this.$route.params.id
      this.$axios.get(`/api/articles/${id}/`)
        .then(res => {
          let article = {}
          article.label = res.data.article.label
          article.about = res.data.article.about
          article._id = res.data.article._id
          article.user = res.data.article.user.username
          article.title = res.data.article.title
          article.paragraph = res.data.article.content.replace(/(\r\n)|(\n)/g, '<br>').split('<br>')
          article.date = articleDate(res.data.article.date)
          this.$store.dispatch('setArticle', {article: article})
        })
        .catch(err => console.log(err))
    },
    edit (id) {
      this.$router.push({path: `/article/edit/${id}/`})
    },
    deleteOne (id) {
      this.$axios.delete(`/api/articles/${id}/`)
        .then(res => {
          this.$store.dispatch('resetArticle', {article: {}})
          this.$router.push({name: 'Article'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.info {
  color: #333;
}
</style>
