<template>
  <div class="input-dialog-background" @click="close" v-show="show">
    <div class="dialog" @click.stop>
      <form>
        <div class="row mt-5 ml-2">
          <div class="col-md-9">
            <input type="text" class="form-control" name="summary" value=""/>
          </div>
          <div class="col-md-3">
            <button type="submit" class="btn btn-primary">添加</button>
            <button type="submit" class="btn btn-danger" @click="close">取消</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Temp',
  props: ['show'],
  data () {
    return {

    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  components: {

  }
}
</script>

<style scoped>
  .input-dialog-background {
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
    width: 700px;
    height: 150px;
    background: #fdfdfd;
    border-radius: 10px;
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


