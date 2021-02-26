<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="#07f">
        <!-- 将内容填充到对应slot属性的地方 -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-focus" src="~assets/img/tabbar/home_focus.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/dynamic" activeColor="#07f">
        <img slot="item-icon" src="~assets/img/tabbar/dynamic.svg" alt="" />
        <img slot="item-icon-focus" src="~assets/img/tabbar/dynamic_focus.svg" alt="" />
        <div slot="item-text">动态</div>
      </tab-bar-item>
      <tab-bar-item path="/send" activeColor="#07f">
        <img slot="item-icon" src="~assets/img/tabbar/send.svg" alt="" />
        <img slot="item-icon-focus" src="~assets/img/tabbar/send_focus.svg" alt="" />
        <!-- <div slot="item-text">send</div> -->
      </tab-bar-item>
      <tab-bar-item path="/message" activeColor="#07f">
        <img slot="item-icon" src="~assets/img/tabbar/message.svg" alt="" />
        <img slot="item-icon-focus" src="~assets/img/tabbar/message_focus.svg" alt="" />
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#07f">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img slot="item-icon-focus" src="~assets/img/tabbar/profile_focus.svg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
/* 在style里引用要用 @import */
/* @import "./assets/css/base.css"; */
</style>