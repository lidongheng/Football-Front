<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link tag="a" class="nav-link" to="/">首页 <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/timeline">时间线</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/newsItem">临时</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/premierLeague">英超</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/ChineseSuperLeague">中超</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/news">新闻</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/report">报告</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        <li class="nav-item">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </li>
      </ul>
      <div class="register">
        <router-link to="/register" class="nav-link">注册</router-link>
      </div>
      <div class="login">
        <router-link tag="a" to="/login" class="nav-link">登录</router-link>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
.register a{
  color: #ffffff;
}
.login a{
  color: #ffffff;
}
</style>
