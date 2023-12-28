<script setup>
 import {ref} from "vue";

 const List = ref([{"ID":1,"CreatedAt":"2023-12-28T20:10:35+08:00","UpdatedAt":"2023-12-28T20:10:37+08:00","DeletedAt":null,"Title":"张伟是混蛋","Text":"你觉得张伟是混蛋吗","Sender":1,"Modified":0},{"ID":2,"CreatedAt":"2023-12-28T20:12:02+08:00","UpdatedAt":"2023-12-28T20:12:04+08:00","DeletedAt":null,"Title":"回到小时候，继续我们的爱","Text":"世界如此忙\n忙得你和我都失去了判断\n赢了所有\n却失去最初的梦 最爱的人 最好的时光\n如果可以，请回到小时候，继续我们的爱情…","Sender":1,"Modified":0},{"ID":2,"CreatedAt":"2023-12-28T20:12:02+08:00","UpdatedAt":"2023-12-28T20:12:04+08:00","DeletedAt":null,"Title":"回到小时候，继续我们的爱","Text":"世界如此忙\n忙得你和我都失去了判断\n赢了所有\n却失去最初的梦 最爱的人 最好的时光\n如果可以，请回到小时候，继续我们的爱情…","Sender":1,"Modified":0},{"ID":2,"CreatedAt":"2023-12-28T20:12:02+08:00","UpdatedAt":"2023-12-28T20:12:04+08:00","DeletedAt":null,"Title":"回到小时候，继续我们的爱","Text":"世界如此忙\n忙得你和我都失去了判断\n赢了所有\n却失去最初的梦 最爱的人 最好的时光\n如果可以，请回到小时候，继续我们的爱情…","Sender":1,"Modified":0}])
</script>

<template>
  <div style="float: left;margin-left: 3%;width: 64%;">
    <el-card v-for="(item,index) in List" class="box-card article">
      <h1>{{item.Title}}</h1>
      <div>{{item.Text}}</div>
    </el-card>
    <div style="height: 200px"></div>
  </div>
</template>

<style scoped>
.article{
  margin-top: 10px;
  height: 200px;
}
.article:first-child{
  margin-top: 0px;
}
</style>