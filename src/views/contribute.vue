<script setup>
  import {ref} from "vue";
  let Title = ref()
  let Text = ref()
</script>

<template>
  <div style="text-align:left;float: left;margin-left: 20%;width: 64%;">
    <h1>我要投稿</h1>
    标题内容：
    <el-input
      v-model="Title"
      placeholder="文章标题"
      style="font-size: 20px;"
    >

    </el-input>
    文本内容：
    <el-input
        v-model="Text"
        :rows="10"
        type="textarea"
        placeholder="投稿内容 后期支持markdown语法"
        style="font-size: 20px;"
    />
    <el-button style="float:left; margin-top: 20px;background-color: #0371E6;color: white;height: 35px;width: 212px;border: 0px;border-radius: 0.22rem;" type="primary" >投稿</el-button>

  </div>
</template>

<style scoped>

</style>