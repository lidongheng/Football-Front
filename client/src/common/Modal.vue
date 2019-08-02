<template>
  <transition name="modal-fade">
    <div class="Modal-backdrop" @click="close" v-show="show">
      <div class="Modal" @click.stop role="dialog" aria-labelledby="modalTitle" arial-describedby="modalDescription">
        <div class="Modal-header" id="modalTitle">
          <slot name="header">
            <h2>这是Modal弹框的标题</h2>
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
          </slot>
        </div>
        <div class="Modal-body" id="modalDescription">
          <slot name="body">
            这是modal弹框的主体
          </slot>
        </div>
        <div class="Modal-footer">
          <slot name="footer">
            这是Modal弹框的脚部
            <button type="button" class="btn-green" @click="close" aria-label="Close Modal">关闭</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: ['show'],
  data () {
    return {

    }
  },
  methods: {
    close: function () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .Modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Modal {
    background-color: #fff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  .Modal-header,.Modal-footer {
    padding: 15px;
    display: flex;
  }
  .Modal-header {
    border-bottom: 1px solid #eee;
    color: #4aae9b;
    justify-content: space-between;
  }
  .Modal-footer {
    border-top: 1px solid #eee;
    justify-content: flex-end;
  }
  .Modal-body {
    position: relative;
    padding: 20px 10px;
  }
  .btn-close {
    border: none 0;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background-color: transparent;
  }
  .btn-green {
    color: #fff;
    background-color: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
  }
  .modal-fade-enter, .modal-fade-leave-active { opacity: 0; } .modal-fade-enter-active, .modal-fade-leave-active { transition: opacity .5s ease }
</style>
