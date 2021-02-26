<template>
  <div class="message">
    <nav-bar>
      <div class="centerr" slot="center"><span>消息</span></div>
      <div class="right" slot="right"><img src="~assets/img/message/setting.svg" alt="" width="24px"></div>
    </nav-bar>
    <function-bar>
      <div slot="left"><img src="~assets/img/functionBar/message.svg" alt=""></div>
      <div slot="center"><img src="~assets/img/functionBar/good.svg" alt=""></div>
      <div slot="right"><img src="~assets/img/functionBar/notification.svg" alt=""></div>
    </function-bar>
    <message-list  :messages="messages" />
  </div>
</template>

<script>
// 子组件
import NavBar from "components/content/navbar/NavBar";
import FunctionBar from 'components/content/functionBar/FunctionBar'
import MessageList from 'components/content/messageList/MessageList'
export default {
  name: "Message",
  data() {
    return {
      messages: [
        {
          head: require("assets/img/home/homeRecommend/genshin/01.png"),
          username: 'Robot01',
          date: '01-01',
          content: '机器人一号机器人一号机器人一号机器人一号机器人一号',
        },
        {
          head: require("assets/img/home/homeRecommend/genshin/02.png"),
          username: 'Robot02',
          date: '01-02',
          content: '机器人二号',
        },
        {
          head: require("assets/img/home/homeRecommend/genshin/03.png"),
          username: 'Robot03',
          date: '01-03',
          content: '机器人三号',
        },
        {
          head: require("assets/img/home/homeRecommend/genshin/04.png"),
          username: 'Robot04',
          date: '01-04',
          content: '机器人四号',
        },
        {
          head: require("assets/img/home/homeRecommend/genshin/05.png"),
          username: 'Robot05',
          date: '01-05',
          content: '机器人五号',
        },
        {
          head: require("assets/img/home/homeRecommend/genshin/06.png"),
          username: 'Robot06',
          date: '01-06',
          content: '机器人六号',
        },
      ]
    }
  },
  components: {
    NavBar,
    FunctionBar,
    MessageList
  },
  methods: {
    spread() {
      
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: #eee;
}

.message .centerr {
  color: black;
  font-weight: bolder;
}

.message .right {
  position: relative;
  left: 68px;
  top: 8px;
}

.function-bar {
  top: 44px;
}

.message-bar {
  position: relative;
  top: 132px;
}

</style>