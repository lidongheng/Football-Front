<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">登录</h1>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <InputItem inputType="email" textName="email" placeholder="邮箱" :error="errors.email" v-model="email"/>
              <div class="invalid-feedback d-block">{{errors.email}}</div>
            </div>
            <div class="form-group">
              <InputItem inputType="password" textName="password" placeholder="密码" :error="errors.password" v-model="password"/>
              <div class="invalid-feedback d-block">{{errors.password}}</div>
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
import axios from 'axios'
import jwt_decode from 'jwt-decode'
export default {
  data () {
    return {
      email: '',
      password: '',
      errors: {}
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.$store.dispatch('setUser', null)
      vm.$store.dispatch('setLogin', false)
    })
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3500/api/users/login', formData)
        .then(res => {
          if (res.data.success) {
            // this.$store.dispatch('setUser', res.data.email)
            // this.$store.commit('setUser', res.data.email);
            this.$store.dispatch('setUser', {user: res.data.email})
            this.$router.push({path: 'home'})
            // this.$store.dispatch('setLogin', true)
            // this.$store.commit('setLogin', true)
            this.$store.dispatch('setLogin', {isLogin: true})
            localStorage.setItem('user', res.data.email)
            localStorage.setItem('token', res.data.token)
            const decoded = jwt_decode(res.data.token)
          }
        })
        .catch(err => {
          if (err.response.status === 400) {
            this.errors = err.response.data
          } else {
            console.log(err.response)
          }
        })
    }
  },
  components: {
    InputItem
  }
}
</script>

<style scoped>

</style>
