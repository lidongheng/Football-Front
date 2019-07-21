<template>
  <div class="news">
    <span class="date">{{time}}</span>
    <span class="tab">{{category}}</span>
    <router-link tag="a" class="news_title" :to="'/report/'+link">{{newsTitle}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['time', 'category', 'newsTitle', 'link']
}
</script>

<style scoped>
  .news {
    font-size:14px;
    border-bottom: 1px solid #eaeaea;
    padding: 12px;
  }
  .date {
    margin-right: 10px;
    margin-left: 10px;
  }
  .tab {
    border: 1px solid #ED6565;
    font-size: 0.9em;
    padding: 0px 15px 0px 15px;
    margin-right: 10px;
    color: #ED6565;
  }

  .news_title {
    color: #333;
  }
  .news_title:hover {
    text-decoration: none;
  }
</style>
