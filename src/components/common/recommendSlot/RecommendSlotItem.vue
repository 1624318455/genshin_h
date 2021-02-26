<template>
  <div class="recommend-slot-item" @click="itemClick()">
    <div class="head"><slot name="head"></slot></div>
    <div class="uid"><slot name="uid"></slot></div>
    <div class="date"><slot name="date"></slot></div>
    <div class="title"><slot name="title"></slot></div>
    <div class="text"><slot name="text"></slot></div>
    <div class="first"><slot name="first"></slot></div>
    <div class="second"><slot name="second"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'RecommendSlotItem',
  methods: {
    itemClick() {
      console.log('itemClick')
      this.$router.push('/feature/' + 1111)
    }
  }
}
</script>

<style scoped>
.recommend-slot-item .head {
  position: absolute;
  width: 36px;
  height: 36px;
  left: 0px;
  top: 10px;
  border-radius: 50%;
}

.recommend-slot-item .uid {
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  left: 40px;
  top: 15px;
}

.recommend-slot-item .date {
  position: absolute;
  font-size: 12px;
  color: gray;
  left: 40px;
  top: 30px;
}

.recommend-slot-item .title {
  position: absolute;
  font-size: 16px;
  color: black;
  font-weight: bolder;
  top: 55px;
}

.recommend-slot-item .text {
  position: absolute;
  font-size: 14px;
  top: 95px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.recommend-slot-item .first {
  position: absolute;
  left: 0px;
  margin-top: 150px;
  /* border: 1px solid slategray; */
}

.recommend-slot-item .first img {
  width: 160px;
}

.recommend-slot-item .second {
  position: absolute;
  right: 0px;
  margin-top: 150px;
  /* border: 1px solid slategray; */
}

.recommend-slot-item .second img {
  width: 160px;
}
</style>