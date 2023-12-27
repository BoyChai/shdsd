<template>
  <div class="common-layout" v-if="loginStatus">
    <el-container>
      <el-header id="header" class="bg_color" style=" height: 120px; display: flex; align-items: center;">
        <div class="margins">
          <h1 style="float: left;">山化大树洞</h1>
          <div class="navigation bg_color">
            <span class="bg_color">我要登陆</span>
            <span class="bg_color">我要投稿</span>
            <span class="bg_color">首页</span>
          </div>
        </div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer style="background-color:#F2F5F7;height: 100px; display: flex; align-items: center;position: fixed;left: 0px;bottom: 0px;right: 0px;">
        <div style="background-color:#F2F5F7;margin-left: 6%">
          版权所有 © 2023 - 山东化工职业学院 的 计算机社团
        </div>
      </el-footer>
    </el-container>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
* {
  margin: 0;
  padding: 0;
  background-color: #FAFBFC;
}
#header>*{
  background-color: white;
}
.margins{
  margin: 0 6%;width: 100%;
}
.bg_color {
  background-color: white
}
.navigation>span {
  margin-left: 20px;
  float: right;
}
</style>
<script setup>
import {ref} from "vue";

const loginStatus = ref(true)
</script>