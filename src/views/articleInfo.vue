<script setup>
import {defineProps, getCurrentInstance, h, ref} from "vue";
import {ElNotification} from "element-plus";
  // 引入axios
  const {proxy} = getCurrentInstance()
  const axios = proxy.$axios

  let articleData = ref({
    CreatedAt:'',
    DeletedAt:'',
    ID:'',
    Modified:'',
    Sender:'',
    Text:'',
    Title:'',
    UpdatedAt:'',
  })
  let user = ref({
    Email:'',
    ID:'',
    ImgUrl:'',
    Name:'',
    Number:'',
    Role:''
  })
  const msg = (v) => {
    ElNotification({
      title: '消息通知',
      message: h('i', { style: 'color: teal' }, v),
      duration: 2000,
    })
  }
  let commentList = ref([
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

  let props = defineProps({
    id:Number,
  })
  const getUser = (id) => {
    axios.get('/user/get?id='+id).then(res=>{
      user.value=res.data
    }).catch(err=>{
      msg(err.response.data.msg)
    })
  }
  const getArticle = ()=> {
    axios.get('/article/get?id='+props.id).then(res=>{
      articleData.value=res.data
      getUser(articleData.value.Sender)
    }).catch(err=>{
      msg(err.response.data.msg)
    })
  }
  getArticle()
  const formattedText = (value) => {
    return value.replace(/\n/g, '<br>');
  }
  const formattedTime = (time)=> {
    return time.substring(0,9)
  }
  const formattedTimeHour = (time)=> {
    return time.substring(11,19)
  }
  const getLength = (v)=> {
    return v.length
  }

  const replyStatus = ref()
  // 切换回复部分的显示/隐藏状态
  const toggleReply = (index) => {
    for (let i = 0; i < commentList.value.length; i++) {
      commentList.value[i].reply = false
    }
    if (replyStatus.value===index){
      commentList.value[index].reply = false
      replyStatus.value = undefined
    } else {
      commentList.value[index].reply = true
      replyStatus.value = index
    }
  };
  const replyText =ref()
  const submitReply = () => {

  }
</script>

<template>
  <div style="margin: 0 23%">
    <h1 style="font-size: 30px" class="left">{{articleData.Title}}</h1>
    <el-avatar
        style="float:left;height: 25px;width: 25px;"
        :src="user.ImgUrl"
    />
    <el-breadcrumb style="margin-top: 30px;margin-left: 35px" separator="/">
      <el-breadcrumb-item>山化大树洞</el-breadcrumb-item>
      <el-breadcrumb-item>{{ formattedTime(articleData.CreatedAt) }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="color: #FF9541">『感谢<b style="font-weight:bold;color: #FF8C00">{{user.Name}}</b>同学的投递』</div>
    <div style="margin-top: 20px" class="left" v-html="formattedText(articleData.Text)"></div>

    <div style="margin-top: 100px;" class="left">
      <h1 style="font-size: 30px;">{{getLength(commentList)}} 评论</h1>
      <div v-for="(item,index) in commentList">
        <hr style="border: none;border-top: 1px solid #ccc;margin: 50px 0;">
        <el-avatar
            style="float: left;height: 50px;width: 50px;"
            :src="item.imgUrl"
        />
        <el-button class="replyBtn" @click="toggleReply(index)" style="float: right" size="small" type="primary" plain>
          {{ item.reply ? '收起回复' : '回复' }}
        </el-button>
        <div style="float: right;margin-right: 5px;margin-top: 5px">
          <el-breadcrumb  separator="/">
            <el-breadcrumb-item>{{ formattedTime(item.createAt) }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ formattedTimeHour(item.createAt) }}</el-breadcrumb-item>
          </el-breadcrumb >
        </div>
        <div>
          <div class="commentFont" style="font-size: 16px;font-weight: 700;">{{item.name}}</div>
          <div class="commentFont">{{item.text}}</div>
        </div>
        <!-- 回复部分 -->
        <div v-if="item.reply" style="margin-left: 60px">
          <hr style="border: none;border-top: 1px solid #ccc;margin: 50px 0;">
          <h1>回复给{{item.name}}</h1>
          <el-input
              v-model="replyText"
              :rows="5"
              type="textarea"
              placeholder="输入你的回复"
              style="font-size: 20px"
          />
          <el-button style="margin-top: 20px;background-color: #0371E6;color: white;height: 35px;width: 212px;border: 0px;border-radius: 0.22rem;" type="primary" >发表评论</el-button>
        </div>
      </div>
    </div>
    <div>
      <hr style="border: none;border-top: 1px solid #ccc;margin: 50px 0;">
      <h1>留下评论</h1>
      <el-input
          v-model="replyText"
          :rows="5"
          type="textarea"
          placeholder="输入你的回复"
          style="font-size: 20px"
      />
      <el-button style="float:left; margin-top: 20px;background-color: #0371E6;color: white;height: 35px;width: 212px;border: 0px;border-radius: 0.22rem;" type="primary" >发表评论</el-button>
    </div>
  </div>
  <div style="height: 200px"></div>
</template>

<style scoped>
.left {
  text-align: left;
}
.commentFont{
  margin-top: 15px;
  margin-left: 60px;
}
.commentFont:last-child{
  margin-top: 20px;
}
.replyBtn:active,.replyBtn:focus{
  background-color: #ECF5FF;
  color: #409EFF;
  border-color: #A0CFFF;
}
.replyBtn--primary:hover{
  background-color: #ECF5FF;
  color: #409EFF;
}

</style>