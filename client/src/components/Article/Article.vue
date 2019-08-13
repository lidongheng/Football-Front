<template>
  <div class="article">
    <div class="row mt-5">
      <div class="col-md-12">
        <button type="button" class="btn btn-info btn-block" @click="add">写文章</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center display-4 mt-3">文章列表</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" v-for="item in article" :key="item._id">
        <NewsItem :time="date(item.date)" :category="item.label" :newsTitle="item.title" :link="'/article/'+item._id+'/'"/>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from '../common/NewsItem'
import {formatDate} from "../../../utils/formatDate";
export default {
  data () {
    return {
      article: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    add () {
      this.$router.push({name: 'addArticle'})
    },
    getData () {
      this.$axios.get('/api/articles/')
        .then(res => this.article = res.data.article)
        .catch(err => console.log(err))
    },
    date (d) {
      return formatDate(d)
    }
  },
  components: {
    NewsItem
  }
}
</script>

<style scoped>

</style>
