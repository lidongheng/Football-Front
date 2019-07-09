<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建新的账户</p>
          <form action="">
            <InputGroup inputType="text" textName="username" placeholder="用户名"/>
            <InputGroup inputType="password" textName="password" placeholder="密码"/>
            <InputGroup inputType="password2" textName="password2" placeholder="确认密码"/>
            <input type="submit" class="btn btn-info btn-block mt-4">
          </form>

          </div>
        </div>
    </div>
  </div>

</template>

<script>
import InputGroup from '../../common/InputGroup'
export default {
  data () {
    return {
      inputField: [
        {placeholder: '用户名', value: '', name: 'username', type: 'text'},
        {placeholder: '密码', value: '', name: 'password', type: 'password'}
      ]
    }
  },
  components: {
    InputGroup
  }
}
</script>

<style scoped>

</style>
