<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建新的账户</p>
          <form @submit.prevent="onSubmit">
            <InputGroup inputType="text" textName="username" placeholder="用户名" v-model="username"/>
            <InputGroup inputType="email" textName="email" placeholder="邮箱" v-model="email"/>
            <InputGroup inputType="password" textName="password" placeholder="密码" v-model="password"/>
            <InputGroup inputType="password" textName="password2" placeholder="确认密码" v-model="password2"/>
            <input type="submit" class="btn btn-info btn-block mt-4">
          </form>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import InputGroup from '../../common/InputGroup'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      password2: ''
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
        axios.post('http://localhost:3500/api/users/register', formData)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
    }
  },
  components: {
    InputGroup
  }
}
</script>

<style scoped>

</style>
