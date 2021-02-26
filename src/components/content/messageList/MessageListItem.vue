<template>
  <div class="message-slot-item">
    <div class="head"><slot name="head"></slot></div>
    <div class="username"><slot name="username"></slot></div>
    <div class="date"><slot name="date"></slot></div>
    <div class="content"><slot name="content"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'messageListItem'
}
</script>

<style scoped>
.message-slot-item {
  height: 60px;
  border-bottom: 1px solid #eee;
}

.message-slot-item .head {
  position: absolute;
  left: 10px;
}

.message-slot-item .head img {
  width: 50px;
  border-radius: 50%;
  margin-top: 0px;
}

.message-slot-item .username {
  margin-top: 12px;
  margin-left: 70px;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
}

.message-slot-item .date {
  font-size: 14px;
  line-height: 14px;
  margin-top: -16px;
  margin-left: 300px;
}

.message-slot-item .content {
  font-size: 14px;
  line-height: 14px;
  margin-top: 10px;
  margin-left: 70px;
  width: 270px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>