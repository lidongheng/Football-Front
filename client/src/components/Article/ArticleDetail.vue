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
      <div class="col-md-12">
        <p>{{article.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      const id = this.$route.params.id
      this.$axios.get(`/api/articles/${id}`)
        .then(res => {
          console.log(res)
          this.article = res.data.article
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.info {
  color: #333;
}
</style>
