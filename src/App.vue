<template>
  <div class="common-layout" v-if="loginStatus">
    <el-container>
      <el-header id="header" class="bg_color" style="position:fixed;right: 0;top:0;left:0;height: 120px; display: flex; align-items: center;">
        <div class="margins">
          <h1 style="float: left;">山化大树洞</h1>
          <div class="navigation bg_color" style="margin-top: 2%">
            <span class="bg_color">我要登陆</span>
            <span class="bg_color">我要投稿</span>
            <span class="bg_color">首页</span>
          </div>
        </div>
      </el-header>
      <el-main>
        <div style="margin-top: 120px">Main</div>
      </el-main>
      <el-footer style="background-color:#F2F5F7;height: 100px; display: flex; align-items: center;position: fixed;left: 0px;bottom: 0px;right: 0px;">
        <div style="background-color:#F2F5F7;margin-left: 6%">
          版权所有 © 2023 - 山东化工职业学院 - 计算机社团
        </div>
      </el-footer>
    </el-container>
  </div>
  <div v-else class="common-layout" style="position: fixed;bottom: 0px;left: 0px;top:0px;right: 0px;">
    <el-container style="height: 100%;">
      <el-aside style="height: 100%; border: 1px solid rebeccapurple" width="40%">
        <h1 style="font-size: 50px;margin-top: 50%">山化大树洞</h1>
      </el-aside>
      <el-main  style="height: 100%; padding: 0">
        <div  style="text-align: left;margin-top: 16%;margin-left: 25%;float:left;width: 100px;">
          <h1 style="margin-left: -5px;font-family:Gabriola,serif;font-size: 35px">登录</h1>
          <div style=" margin-top:-30%;font-size: 20px">
            手机号
          </div>
          <input class="loginInput" />
          <div style="font-size: 20px">
            密码
          </div>
          <input class="loginInput" type="password" />
        </div>
        <div style="margin-top: 50%; float: left;margin-left: -100px">
          <button class="loginBtn">登录账号</button>
          <button @click="signupVisible=true" class="loginBtn" style="margin-left: 5px">注册账号</button>
        </div>
        <el-dialog
            v-model="signupVisible"
            title="注册账号"
            width="50%"
            :before-close="handleClose"
        >
          <div style="text-align: left;margin-left: 110px">
            手机:<input class="loginInput" />
            <br>
             密码:<input class="loginInput" />
            <br>
            验证:<input class="loginInput" />

          </div>
          <template #footer>
            <span class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">注册账号</el-button>
            <el-button type="primary" @click="signupVisible=false">前往登录</el-button>
      </span>
          </template>
        </el-dialog>
      </el-main>
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

html {
  margin:0;
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

.loginInput{
  //margin-left: px;
  margin-top: 10px;
  border: 2px solid #c3ccd1;
  width: 402px;
  height: 19px;
  border-radius: 0.66rem;
  font-size: 0.95rem;
  padding: 0.6rem 0.75rem;
}
.loginBtn {
  background-color: #0371E6;
  color: white;
  height: 35px;
  width: 212px;
  border: 0px;
  border-radius: 0.66rem;
}
</style>
<script setup>
import {ref} from "vue";

const loginStatus = ref(false)
const signupStatus = ref(false)
const signupVisible = ref(false)
import 'element-plus/dist/index.css'

</script>