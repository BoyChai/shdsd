<script setup>
  import {ref} from "vue";

  const articleData = ref({"ID":2,"CreatedAt":"2023-12-28T20:12:02+08:00","UpdatedAt":"2023-12-28T20:12:04+08:00","DeletedAt":null,"Title":"回到小时候，继续我们的爱","Text":"这是我第二次投稿，也是为了一个人，就用爱情公寓的方式，向她表白吧！\n" +
        "\n" +
        "每次看见你，我都会有种小鹿在乱撞的感觉，不知道什么时候开始起，你高兴我就高兴，你伤心我就难过，我不敢保证给你王子童话般的生活，但是我能保证，你能在半年的时间里度过一段很快乐的时光，每次我都会认为，我不会再见到我的太阳，但是我抓住了机会，有一首诗是这样的：日，太阳啊！我见到了我的太阳，如此美丽无瑕，翩翩舞动而来，我们能得到那梦寐以求的数字，像整数一样圆满，我不能给你你想要的生活，但是我可以保证，你可以向公主一样生活在快乐之中…… 我可以追你吗？","Sender":1,"Modified":0},)
  const user = ref({
    name: "关谷奇怪",
    imgUrl:"https://cravatar.cn/avatar/542dea54a9607af8a9498b13ae39612b?s=50&d=monsterid&r=g",
  })
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
</script>

<template>
  <div style="margin: 0 23%">
    <h1 style="font-size: 30px" class="left">{{articleData.Title}}</h1>
    <el-avatar
        style="float:left;height: 25px;width: 25px;"
        :src="user.imgUrl"
    />
    <el-breadcrumb style="margin-top: 30px;margin-left: 35px" separator="/">
      <el-breadcrumb-item>爱情公寓</el-breadcrumb-item>
      <el-breadcrumb-item>{{ formattedTime(articleData.CreatedAt) }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="color: #FF9541">『感谢<b style="font-weight:bold;color: #FF8C00">{{user.name}}</b>同学的投递』</div>
    <div class="left" v-html="formattedText(articleData.Text)"></div>

    <div style="margin-top: 100px;" class="left">
      <h1 style="font-size: 30px;">{{getLength(commentList)}} 评论</h1>
      <div v-for="(item,index) in commentList">
        <hr style="border: none;border-top: 1px solid #ccc;margin: 50px 0;">
        <el-avatar
            style="float: left;height: 50px;width: 50px;"
            :src="item.imgUrl"
        />
        <div style="float: right">
          <el-breadcrumb  separator="/">
            <el-breadcrumb-item>{{ formattedTime(item.createAt) }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ formattedTimeHour(item.createAt) }}</el-breadcrumb-item>
          </el-breadcrumb >
        </div>
        <div>
          <div class="commentFont" style="font-size: 16px;font-weight: 700;">{{item.name}}</div>
          <div class="commentFont">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
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

</style>