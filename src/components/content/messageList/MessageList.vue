<template>
  <div class="message-bar">
    <message-list-item v-for="item in messages" :key="item.username">
      <img slot="head" :src="item.head" alt="">
      <div slot="username">{{item.username}}</div>
      <div slot="date">{{item.date}}</div>
      <div slot="content">{{item.content}}</div>
    </message-list-item>
    <div class="bottom">~(・ˍ・ )已经到底了哦</div>
  </div>
</template>

<script>
// 子组件
import MessageListItem from "./MessageListItem";

export default {
  name: "messageBar",
  data() {
    return {};
  },
  props: {
    messages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    MessageListItem
  },
};
</script>

<style scoped>
.message-bar .bottom {
  font-size: 16px;
  opacity: 0.8;
  text-align: center;
}
</style>