<template>
  <div class="comment">
    <div class="row mt-5">
      <div class="col-md-8">
        <div class="editComment">
          <div>
            <textAreaItem rows="5" cols="20" name="" :error="errors.content" v-model="text"/>
            <div class="invalid-feedback d-block">{{errors.content}}</div>
          </div>
          <div class="commit">
            <button type="button" class="btn btn-info btn-lg" @click="add">提交评论</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-8">
        <div class="comments">
          <div class="showContents">
            <!-- 评论区 -->
            <div class="noContent" v-show="contentsLength===0">暂无留言</div>
            <div class="commentList" >
              <div class="message" v-for="item in contents" :key="item._id">
                <p class="messageContent">{{item.content}}</p>
                <p class="operation">
                  <span class="time">{{time(item.date)}}</span>
                  <span class="handle">
                    <a href="#" class="like" @click="onLikeClick(item._id)">
                      <i ref="modify" :class="{'fas': true, 'fa-thumbs-up': true, 'text-info': findUserLike(item.likes)}"></i>
                      <span class="badge badge-light">{{item.likes.length}}</span>
                    </a>
                    <a href="#" class="unlike" @click="onUnlikeClick(item._id)">
                      <i class="fas fa-thumbs-down text-secondary"></i>
                    </a>
                    <a href="#" class="cut" v-show="canDelete(item.user)" @click="onDelete(item._id)">删除</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="pages">
            <app-pagination :pagination="pagination" :pageNumChange="pageNumChange"></app-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDatetime} from '../../../utils/formatDate'
import pagination from '../common/Pagination'
import TextAreaItem from '../common/TextAreaItem'
export default {
  data () {
    return {
      text: '',
      pagination: {
        total: 22,
        pageSize: 5,
        pageNum: 1
      },
      errors: {}
    }
  },
  created () {
    this.getData()
  },
  computed: {
    contentsLength () {
      return this.$store.getters.contents.length
    },
    contents () {
      return this.$store.getters.contents
    }
  },
  methods: {
    canDelete (id) {
      return (localStorage.getItem('userId') && localStorage.getItem('userId') === id)
    },
    getData () {
      const pageNow = this.$route.params.pageNow || 1
      this.$axios.get(`/api/comment/${pageNow}/`)
        .then(res => {
          if (res.status === 200) {
            if (res.data.length !== 0) {
              console.log(res)
              this.$store.dispatch('setContents', {contents: res.data.contents})
              this.pagination.total = res.data.rows
              this.pagination.pageNum = pageNow
            }
          }
        })
        .catch(err => console.log(err))
    },
    add () {
      const formData = {
        content: this.text
      }
      this.$axios.post('/api/comment/', formData)
        .then(res => {
          if (res.status === 200) {
            this.$store.dispatch('addContents', {comment: res.data.comment})
          }
        })
        .catch(err => {
          if (err.response.status === 400) {
            this.errors = err.response.data
          }
        })
    },
    time (date) {
      return formatDatetime(date)
    },
    onLikeClick (id) {
      this.$axios.post(`/api/comment/like/${id}/`)
        .then(res => this.getData())
        .catch(err => console.log(err))
    },
    onUnlikeClick (id) {
      this.$axios.post(`/api/comment/unlike/${id}/`)
        .then(res => this.getData())
        .catch(err => console.log(err))
    },
    findUserLike (likes) {
      let userId = localStorage.getItem('userId')
      return likes.filter(like => like.user === userId).length > 0
    },
    onDelete (id) {
      this.$axios.delete(`/api/comment/${id}`)
        .then(res => this.getData())
        .catch(err => console.log(err))
    },
    pageNumChange (newValue, oldValue) {
      this.$route.params.pageNow = newValue
      this.$axios.get(`/api/comment/${newValue}`)
        .then(res => {
          if (res.status === 200) {
            this.$store.dispatch('setContents', {contents: res.data.contents})
            this.pagination.total = res.data.rows
            this.pagination.pageNum = newValue
          }
          this.$router.push({path: `/comment/${newValue}/`})
        })
        .catch(err => console.log(err))
    }
  },
  components: {
    'app-pagination': pagination,
    TextAreaItem
  }
}
</script>

<style scoped>
  .editComment {
    border: 1px solid #ccc;
    height:280px;
    border-radius: 20px;
    padding: 5%;
    background: #F4F8FD;
  }
  .commit {
    padding-right: 20px;
    padding-top: 20px;
    float:right;
  }
  .comments {
    border: 1px solid #ccc;
    padding: 3%;
    border-radius: 20px;
  }
  .noContent {
    text-align:center;
    display:block;
    background:#FFF;
    border-bottom:#e9e9e9 solid 1px;
    border-top:#e9e9e9 solid 1px;
    color:#999;
    padding: 10px;
  }
  .message {
    overflow:hidden;
    padding:10px 20px;
    background:#FFF;
    border-top:#e9e9e9 solid 1px;
    border-bottom:#e9e9e9 solid 1px;
  }
  .messageContent {
    line-height:24px;
    font-size:14px;
    color:#2b2b2b;
  }
  .operation{
    clear:both;
    width:100%;
    height:30px;
    margin-top:8px;
  }
  .handle{
    float:right;
    padding-top:6px;
  }
  .handle a{
    text-decoration:none;
    float:left;
    margin-left:12px;
    /*background:url(../../../static/images/comment/icons.png) 0 0 no-repeat;*/
    height:18px;
    line-height:18px;
    padding-left:20px;
  }
  .handle .like{
    color: black;
  }
  .handle .unlike{
    color: black;
  }
  .handle .cut{
    background-position:0 -33px;
  }
  .handle a:active{
    color:#09F;
  }
</style>
