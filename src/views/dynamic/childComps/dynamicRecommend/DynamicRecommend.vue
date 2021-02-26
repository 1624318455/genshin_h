<template>
  <div class="dynamic-recommend">
    <div class="dynamic-recommend-item" v-for="item in recommends" :key="item.uid">
      <recommend-slot>
        <recommend-slot-item>
          <img slot="head" class="head" :src="item.head" alt="" />
          <span slot="uid">{{ item.username }}</span>
          <span slot="date">{{ item.date }}</span>
          <span slot="title">{{ item.title }}</span>
          <span slot="text">{{ item.text }}</span>
          <img slot="first" :src="item.image[0]" alt="" />
          <img slot="second" :src="item.image[1]" alt="" />
        </recommend-slot-item>
      </recommend-slot>
    </div>
  </div>
</template>

<script>
import RecommendSlot from "components/common/recommendSlot/RecommendSlot";
import RecommendSlotItem from "components/common/recommendSlot/RecommendSlotItem";

export default {
  name: "dynamicRecommend",
  components: {
    RecommendSlot,
    RecommendSlotItem,
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
/* .dynamic-recommend {
  border: 1px solid black;
} */

.dynamic-recommend-item {
  width: 375px;
  border-bottom: 6px solid #eee;
}

#recommend-slot {
  position: relative;
  width: 335px;
  /* top: 40px; */
  left: 20px;
  height: 380px;
  /* border: 1px solid black; */
}

#recommend-slot .head {
  position: absolute;
  width: 36px;
  height: 36px;
  top: 10px;
  border-radius: 50%;
}

#recommend-slot .uid {
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  left: 40px;
  top: 15px;
}

#recommend-slot .date {
  position: absolute;
  font-size: 12px;
  color: gray;
  left: 40px;
  top: 30px;
}

#recommend-slot .title {
  position: absolute;
  font-size: 16px;
  color: black;
  font-weight: bolder;
  top: 55px;
}

#recommend-slot .text {
  position: absolute;
  font-size: 14px;
  top: 95px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

#recommend-slot .footer {
  position: absolute;
  bottom: 20px;
  font-size: 14px;
}

#recommend-slot .footer .tag {
  position: absolute;
  border-radius: 2px;
  box-shadow: 0 0 1px 6px #eee;
  top: -35px;
  left: 5px;
  background-color: #eee;
}

#recommend-slot .footer .wcl {
  position: relative;
  width: 200px;
  display: flex;
  text-align: center;
  top: -35px;
  left: 150px;
}

#recommend-slot .footer .wcl span {
  flex: 1;
  /* margin-left: 50px; */
  color: #b7b7b7;
}

#recommend-slot .footer .wcl .watch::before {
  content: "";
  position: absolute;
  display: block;
  background: url("~assets/img/home/homeRecommend/footerwcl/watch.svg");
  width: 16px;
  height: 16px;
  left: 5px;
}
#recommend-slot .footer .wcl .comment::before {
  content: "";
  position: absolute;
  display: block;
  background: url("~assets/img/home/homeRecommend/footerwcl/comment.svg");
  width: 16px;
  height: 16px;
  left: 70px;
}
#recommend-slot .footer .wcl .like::before {
  content: " ";
  position: absolute;
  display: block;
  background: url("~assets/img/home/homeRecommend/footerwcl/like.svg");
  width: 16px;
  height: 16px;
  left: 140px;
}

.recommend-slot-item {
  /* flex: 1; */
  text-align: center;
}

/* .recommend-slot-item img {
  margin: 5px 10px 0;
  width: 140px;
  height: 140px;
  border: 1px solid slategray;
}

.recommend-slot-item img:last-child {
  margin-top: 150px;
} */
</style>