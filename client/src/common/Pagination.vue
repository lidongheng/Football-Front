<template>
  <div id="pagination" class="row justify-content-center">
    <div class="col-auto">
      <ul v-if="pagination.total>pagination.pageSize" class="pagination">
        <li class="page-item">
          <a href="javascript:void(0);" @click="startPage" class="page-link">首页</a>
        </li>
        <li v-for="i in displayPage" :key="'pagination_'+i" :class="paginationItemActive(i)">
          <a href="javascript:void(0);" @click="selectPage(i)" class="page-link">{{i}}</a>
        </li>
        <li class="page-item">
          <a href="javascript:void(0);" @click="endPage" class="page-link">尾页</a>
        </li>
      </ul>
    </div>
    <div class="col-auto mb-3">
      <div class="input-group" style="width:150px;">
        <input type="text" class="form-control" :placeholder="jumpPageNumPlaceholder" v-model.number="jumpPageNum">
        <div class="input-group-append">
          <button @click="jumpPageClick" @blur="jumpPageBlur" class="input-group-text">跳转</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data () {
    return {
      jumpPageNum: '',
      jumpPageNumPlaceholder: '跳转到...'
    }
  },
  props: {
    pagination: Object,
    pageNumChange: Function
  },
  computed: {
    displayPage () {
      let totalPage = this.pagination.total % this.pagination.pageSize === 0 ? (parseInt(this.pagination.total / this.pagination.pageSize)) : (parseInt(this.pagination.total / this.pagination.pageSize) + 1)
      let pageNum = this.pagination.pageNum
      if (totalPage < 10) {
        return totalPage
      } else {
        let arr = []
        if (pageNum < 5) {
          for (let i = 1; i <= 10; i++) {
            arr.push(i)
          }
        } else if (pageNum >= totalPage - 5) {
          for (let i = totalPage - 9; i <= totalPage; i++) {
            arr.push(i)
          }
        } else {
          for (let i = pageNum - 4; i <= pageNum + 5 && i < totalPage; i++) {
            arr.push(i)
          }
        }
        return arr
      }
    }
  },
  watch: {
    'pagination.pageNum'(newValue, oldValue) {
      console.log(newValue, oldValue)
      this.pageNumChange(newValue, oldValue)
    }
  },
  methods: {
    paginationItemActive (i) {
      if (i == this.pagination.pageNum) {
        return 'page-item active'
      } else {
        return 'page-item'
      }
    },
    selectPage (pageNum) {
      this.pagination.pageNum = pageNum
    },
    startPage () {
      if (this.pagination.pageNum !== 1) {
        this.pagination.pageNum = 1
      }
    },
    endPage () {
      let totalPage = this.pagination.total % this.pagination.pageSize === 0 ? (parseInt(this.pagination.total / this.pagination.pageSize)) : (parseInt(this.pagination.total / this.pagination.pageSize) + 1)
      if (this.pagination.pageNum !== totalPage) {
        this.pagination.pageNum = totalPage
      }
    },
    jumpPageBlur () {
      this.jumpPageNumPlaceholder = '跳转到...'
    },
    jumpPageClick () {
      let regex = /^[0-9]+$/
      if (regex.test(this.jumpPageNum)) {
        let jumpPageNum = parseInt(this.jumpPageNum)
        if (jumpPageNum > 0 && jumpPageNum <= (this.pagination.total % this.pagination.pageSize === 0 ? (parseInt(this.pagination.total / this.pagination.pageSize)) : (parseInt(this.pagination.total / this.pagination.pageSize) + 1))) {
          this.pagination.pageNum = jumpPageNum
        } else {
          this.jumpPageNumPlaceholder = '超出范围'
        }
      } else {
        this.jumpPageNumPlaceholder = '输入错误'
      }
      this.jumpPageNum = ''
    }
  }
}
</script>

<style scoped>

</style>
