<template>
  <div class="input-dialog-background" @click="close" v-show="show">
    <div class="dialog" @click.stop>
      <div class="row mt-5 ml-2">
        <div class="col-md-9">
          <input ref="content" type="text" class="form-control" name="summary" :value="content"/>
        </div>
        <div class="col-md-3">
          <button type="button" class="btn btn-primary" @click="add">添加</button>
          <button type="button" class="btn btn-danger" @click="close">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      require: true
    },
    content: {
      type: String,
      require: true
    },
    _id: {
      type: String,
      require: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    add () {
      let data = {
        value: this.$refs.content.value,
        id: this._id
      }
      this.$emit('add', data)
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
</style>
