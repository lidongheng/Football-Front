<template>
  <div class="comment">
    <div class="row mt-5">
      <div class="col-md-8">
        <div class="editComment">
          <div>
            <textarea class="form-control" name="" id="" cols="20" rows="5" v-model="text"></textarea>
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
            <div class="commentList" v-for="item in contents" :v-key="item.id">
              <div class="message">
                <p class="messageContent">{{item.content}}</p>
                <p class="operation">
                  <span class="time">{{item.date}}</span>
                  <span class="handle">
                    <a href="#" class="cut">删除</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="pages">
            <!-- 分页区 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      text: '',
      contents: []
    }
  },
  created () {
    axios.get('http://localhost:3500/api/comment/')
      .then(res => {
        if (res.status === 200) {
          if (res.data.length !== 0) {
            this.contents = res.data.contents
          }
        }
      })
      .catch(err => console.log(err))
  },
  computed: {
    contentsLength () {
      return this.contents.length
    }
  },
  methods: {
    add () {
      const formData = {
        content: this.text
      }
      axios.post('http://localhost:3500/api/comment', formData)
        .then(res => {
          if (res.status === 200) {
            this.contents.unshift({
              content: res.data.comment.content,
              time: res.data.comment.date,
              like: res.data.comment.like,
              unlike: res.data.comment.unlike,
              id: res.data.comment._id
            })
          }
        })
        .catch(err => console.log(err))
    }
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
</style>
