<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建新的账户</p>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <InputItem inputType="text" textName="username" placeholder="用户名" :error="errors.username" v-model="username"/>
              <div class="invalid-feedback d-block">{{errors.username}}</div>
            </div>
            <div class="form-group">
              <InputItem inputType="email" textName="email" placeholder="邮箱" :error="errors.email" v-model="email"/>
              <div class="invalid-feedback d-block">{{errors.email}}</div>
            </div>
            <div class="form-group">
              <InputItem inputType="password" textName="password" placeholder="密码" :error="errors.password" v-model="password"/>
              <div class="invalid-feedback d-block">{{errors.password}}</div>
            </div>
            <div class="form-group">
              <InputItem inputType="password" textName="password2" placeholder="确认密码" :error="errors.password2" v-model="password2"/>
              <div class="invalid-feedback d-block">{{errors.password2}}</div>
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4">
          </form>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import InputItem from '../../common/InputItem'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  },
  methods: {
    onSubmit () {
      if (this.password === this.password2) {
        const formData = {
          username: this.username,
          email: this.email,
          password: this.password,
          password2: this.password2
        }
        this.$axios.post('/api/users/register', formData)
          .then(res => console.log(res))
          .catch(err => {
            if (err.response.status === 400) {
              this.errors = err.response.data
            }
          })
      }
    }
  },
  components: {
    InputItem
  }
}
</script>

<style scoped>

</style>
