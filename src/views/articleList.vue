<script setup>
import {defineProps, getCurrentInstance, h, ref} from "vue";
 import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";
 const router = useRouter()
// 引入axios
const {proxy} = getCurrentInstance()
const axios = proxy.$axios

const articleList = ref([])
const commentList = ref([
  {
    id:1,
    name:"阿萨",
    articleTitle:"张伟是混蛋",
    createAt:"2023-12-28T20:10:35+08:00",
    text:"呀吼吼",
    imgUrl:'https://cravatar.cn/avatar/396229ff46550263587a25ee20956c50?s=96&d=monsterid&r=g'
  },{
     id:2,
     name:"张岩",
     articleTitle:"爱情公寓合集的表白",
     createAt:"2023-12-28T20:10:35+08:00",
     text:"我不希望得到一切 ，我只想得到你",
     imgUrl:'https://cravatar.cn/avatar/968b641a79502f3092b52cf387826058?s=96&d=monsterid&r=g'
   },{
     id:3,
     name:"曾小贤",
     articleTitle:"张伟是混蛋",
     createAt:"2023-12-28T20:10:35+08:00",
     text:"健康快乐每一天，爱你的小贤",
     imgUrl:'https://cravatar.cn/avatar/ce95383304848f5b4d225bc2cf66667c?s=96&d=monsterid&r=g'
   },{
     id:3,
     name:"曾小贤",
     articleTitle:"张伟是混蛋",
     createAt:"2023-12-28T20:10:35+08:00",
     text:"健康快乐每一天，爱你的小贤",
     imgUrl:'https://cravatar.cn/avatar/ce95383304848f5b4d225bc2cf66667c?s=96&d=monsterid&r=g'
   },{
     id:2,
     name:"张岩",
     articleTitle:"爱情公寓合集的表白",
     createAt:"2023-12-28T20:10:35+08:00",
     text:"我不希望得到一切 ，我只想得到你",
     imgUrl:'https://cravatar.cn/avatar/968b641a79502f3092b52cf387826058?s=96&d=monsterid&r=g'
   },{
     id:1,
     name:"阿萨",
     articleTitle:"张伟是混蛋",
     createAt:"2023-12-28T20:10:35+08:00",
     text:"呀吼吼",
     imgUrl:'https://cravatar.cn/avatar/396229ff46550263587a25ee20956c50?s=96&d=monsterid&r=g'
   },{
     id:1,
     name:"阿萨",
     articleTitle:"张伟是混蛋",
     createAt:"2023-12-28T20:10:35+08:00",
     text:"呀吼吼",
     imgUrl:'https://cravatar.cn/avatar/396229ff46550263587a25ee20956c50?s=96&d=monsterid&r=g'
   },{
     id:2,
     name:"张岩",
     articleTitle:"爱情公寓合集的表白",
     createAt:"2023-12-28T20:10:35+08:00",
     text:"我不希望得到一切 ，我只想得到你",
     imgUrl:'https://cravatar.cn/avatar/968b641a79502f3092b52cf387826058?s=96&d=monsterid&r=g'
   },])

const msg = (v) => {
  ElNotification({
    title: '消息通知',
    message: h('i', { style: 'color: teal' }, v),
    duration: 2000,
  })
}
 const getArticleList = () => {
   axios.get('/article/list').then(res=>{
     // msg(res.msg)
     // console.log(res.data)
     articleList.value = res.data
   }).catch(err=>{
     msg(err.response.data.msg)
   })
 }
 getArticleList()
 const filterTime = (time)=> {
   return time.substring(0,9)
 }
 const toInfo = (id)=> {
   router.push("info/"+id)
 }
</script>

<template>
  <div style="float: left;margin-left: 3%;width: 64%;">
    <el-card @click="toInfo(item.ID)" v-for="(item,index) in articleList" class="box-card article">
      <h1>{{item.Title}}</h1>
      <div>{{item.Text}}</div>
    </el-card>
    <div style="height: 200px"></div>
  </div>
  <div style="float:right; margin-right: 4%; width: 340px;text-align: left">
    <div class="comment" v-for="(item,index) in commentList">
      <el-avatar
          style="float:left;"
          :src="item.imgUrl"
      />
      <div style="">
          {{item.name}}发表在{{item.articleTitle}}
      </div>
      <div class="time">
        {{filterTime(item.createAt)}}
      </div>
      <div class="font">
        {{item.text}}
      </div>
    </div>
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
.comment{
  margin-top: 30px;
}

.comment:first-child{
  margin-top: 0px;
}
.comment > div {
  margin-left:  50px;
}
.comment > .time {
  padding-top: 3px;
  font-size: .75em;
}
.comment > .font {
  padding-top: 5px;
  font-size: .875em;
}
</style>