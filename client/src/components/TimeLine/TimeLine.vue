<template>
  <div class="timeline">
      <div class="row">
        <div class="col-md-12 ml-auto mt-5">
          <div class="timeLine" v-for="(item,index) in timeline" :key="index">
            <ul>
              <li>
                <div class="left"></div>
                <div class="center">
                  {{item.date}}
                </div>
                <div class="right">
                  {{item.event}}
                  <span style="color:red">{{item.desc}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      timeline: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('/api/timeline/')
        .then(res => {
          this.timeline = res.data.timeline
          console.log(res.data.timeline)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .timeLine {
    font-size: 16px;
  }
  ul {
    white-space: nowrap;
    margin: 0;
    padding: 0;
  }
  li {
    border-left: 1px solid #89c7ff;
    margin-left: 10px;
    line-height: 50px;
  }
  .left {
    position: relative;
    left: -7.5px;
    width: 5%;
    min-width: 15px;
    max-width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 4px solid #89c7ff;
  }
  .center {
    width: 20%;
    min-width: 55px;
  }
  .right {
    width: 75%;
    white-space: normal;
  }
  li div {
    display: inline-block;
    vertical-align: top;
  }
</style>
