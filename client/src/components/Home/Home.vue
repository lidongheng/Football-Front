<template>
  <div class="home">
      <div class="row">
        <div class="col-md-3">濒临下课主帅名单</div>
        <div class="col-md-6 ml-auto">
          <h1 class="display-4">重要新闻</h1>
          <NewsItem newsTitle="英超19-20赛季大阅兵之——阿森纳"/>
          <NewsItem newsTitle="热刺战术分析——阿里和埃里克森在队伍中的作用"/>
          <NewsItem newsTitle="赛季前瞻——狼队的综合实力配得上他的野心吗？"/>
          <NewsItem newsTitle="新赛季的输盘王，是阿森纳曼联，还是曼城利物浦？"/>
        </div>
        <div class="col-md-3">稳胆投注比赛列表</div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4 text-center">近期焦点赛事</h1>
          <table class="table">
            <thead class="thead-dark">
            <tr>
              <th scope="col">index</th>
              <th scope="col">League</th>
              <th scope="col">Match</th>
              <th scope="col">Time</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>中超</td>
              <td>北京国安 vs 重庆斯威</td>
              <td>2019-07-10 20:00</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>中超</td>
              <td>天津泰达 vs 广州恒大</td>
              <td>2019-07-11 20:00</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>非洲杯</td>
              <td>科特迪瓦 vs 阿尔及利亚</td>
              <td>2019-07-12 00:00</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

  </div>
</template>

<script>
import NewsItem from '../../common/NewsItem'
export default {
  components: {
    NewsItem
  }
}
</script>

<style scoped>

</style>
