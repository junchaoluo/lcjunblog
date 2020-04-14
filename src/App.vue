<template>
  <div id="app">
    <el-row>
      <el-col :xs="4" :sm="4" class="left-nav">
        <div class="avatar">
          <img class="photo" src="/static/img/avatar.jpg" alt="胡歌" />
          <p>朝君</p>
          <p>啰啰嗦嗦</p>
        </div>
        <div class="nav">
      <ul>
        <li>
          <div class="nav-name">
            <i style="color:#409EFF" class="icon iconfont icon-shouye"></i>
            <router-link to="/" exact>首页</router-link>
          </div>
        </li>
        <li>
          <div class="nav-name">
            <i style="color:#E6A23C" class="icon iconfont icon-biaoqian"></i>
            <router-link to="/TagPage">标签</router-link>
          </div>
        </li>
        <!-- <li>
          <div class="nav-name">
            <i class="icon iconfont icon-yuedu"></i>
            <router-link to="/ReadPage">阅读</router-link>
          </div>
        </li> -->
        <li>
          <div class="nav-name">
            <i style="color:#67C23A" class="icon iconfont icon-xiangce"></i>
            <router-link to="/PhotoPage">相册</router-link>
          </div>
        </li>
        <li>
          <div class="nav-name">
            <i style="color:#F56C6C" class="icon iconfont icon-yijin04-guanyuwomen"></i>
            <router-link to="/AboutPage">关于</router-link>
          </div>
        </li>
      </ul>
    </div>
      </el-col>
      <el-col :xs="20" :sm="20" class="main">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.active{
  color: #E6A23C;
  text-decoration: underline;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
.clear {
  clear: both;
}
a{
  font-weight: 550;
  text-decoration: none;
  color: #606266;
}
.left-nav{
   height: calc(100vh);
  font-size: 16px;
  border: 1px solid wheat;
  background-color: white
}
.main {
    background-color: white;
    height: calc(100vh);
    overflow: auto;
}
.main::-webkit-scrollbar{
  display: none;
}
.avatar {
  padding: 12% 0;
  border-bottom: 1px solid wheat;
}
.avatar .photo {
  width: 50%;
  height: 50%;
  border-radius: 50%;
}
.iconfont {
  font-size: 20px;
}
.nav ul{
  margin: 0px;
  padding: 0px;
}
.nav ul li{
  list-style: none;
  cursor: pointer;
  padding: 15%;
}
.nav .nav-name{
  color: rgb(202, 140, 99);
}
.nav-name-label:hover{
  cursor: pointer;
  text-decoration: underline;
}
</style>
