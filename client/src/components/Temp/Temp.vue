<template>
  <div class="search-div">
    <input type="text" class="search-input" @focus="foo1" :value="value">
    <ul class="search-ul" v-show="shows">
      <li v-for="(item, index) in tag" :key="index">
        <div class="tag-div" @click="handlesss(item)">
          {{item}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Temp',
  props: ['show'],
  data () {
    return {
      shows: false,
      tag: ['大数据', '前端开发', '互联网', '后端开发', '机器学习', '后端开发', '码农'],
      value: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    foo1 () {
      this.shows = true
    },
    foo2 () {
      this.shows = false
    },
    handlesss (str) {
      console.log('111')
      this.value = str
      this.shows = false
    }
  },
  components: {

  }
}
</script>

<style scoped>
  .search-div {
    position: relative;
    width: 400px;
  }
  .search-input {
    width: 100%;
    height: 34px;
  }
  .search-ul {
    position: absolute;
    display: flex;
    top: 34px;
    flex-flow: row wrap;
    width: 100%;
    border: 1px solid #cccccc;
    box-shadow: 1px 1px 3px #ededed;
  }
  .search-ul li {
    flex:0 0 25%;
    height: 60px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tag-div {
    width: 70px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
  }
</style>
