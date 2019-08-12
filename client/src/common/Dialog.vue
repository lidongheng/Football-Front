<template>
  <div class="dialog-wrapper">
    <div class="background-dialog">
      <div class="dialog">
        <div class="league-wrapper">
          <div class="line"></div>
          <div class="line"></div>
          <p class="league">英超</p>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="match-wrapper">
          <span>北京国安</span>
          <span>vs</span>
          <span>广州恒大</span>
        </div>
        <div class="bet-wrapper">
          <p>广州恒大 -0.5 @ 1.85</p>
          <p>让球</p>
        </div>
        <div class="confirm-wrapper">
          <i class="fa fa-check-circle"></i>
          <span>注单已确认</span>
        </div>
        <div class="info-wrapper">
          <div>
            <span>投注金额</span>
            <span>382.78元</span>
          </div>
          <div>
            <span>可赢金额</span>
            <span>325.36元</span>
          </div>
          <div>
            <span>注单号</span>
            <span>20180812102103</span>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-block btn-primary btn-confirm">注单已确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
  .background-dialog {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog {
    width: 300px;
    height: 427px;
    background: #fdfdfd;
    border-radius: 5%;
    overflow: hidden;
  }
  .league-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 10px 0;
  }
  .league-wrapper p {
    padding: 0;
    margin: 0 40px;
    color: #333;
  }
  .line {
    width: 2px;
    height: 12px;
    border-radius: 20%;
    background: lightcoral;
    transform:rotate(15deg);
    margin:2px;
  }
  .match-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 40px;
  }
  .bet-wrapper {
    background: #5FAAEB;
    height: 100px;
    margin: 20px 12px;
    border-radius: 6px;
  }
  .bet-wrapper p {
    text-align: center;
    color: #fff;
  }
  .bet-wrapper p:nth-child(1) {
    padding: 15px 0 10px 0;
    margin: 0;
  }
  .confirm-wrapper {
    color: #5FAAEB;
    text-align: center;
    margin: 10px 0 30px 0;
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
  }
  .info-wrapper div{
    display: flex;
    justify-content: space-between;
    margin:8px 12px;
  }
  .btn-confirm {
    background: #5FBBEB;
    border-color:#5FBBEB;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
