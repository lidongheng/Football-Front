<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">登录</h1>
          <form @submit.prevent="onSubmit">
            <InputGroup inputType="email" textName="email" placeholder="邮箱" v-model="email"/>
            <InputGroup inputType="password" textName="password" placeholder="密码" v-model="password"/>
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
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3500/api/users/login', formData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  },
  components: {
    InputGroup
  }
}
</script>

<style scoped>

</style>
