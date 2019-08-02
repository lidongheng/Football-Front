<template>
  <div class="temp">
    <button type="button" class="btn" @click="showModal">打开Modal</button>
    <Modal v-show="isModalVisible" @close="closeModal"></Modal>
  </div>
</template>

<script>
import Modal from '../../common/Modal'
export default {
  name: 'Temp',
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal: function () {
      this.isModalVisible = true
    },
    closeModal: function () {
      this.isModalVisible = false
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>

</style>


