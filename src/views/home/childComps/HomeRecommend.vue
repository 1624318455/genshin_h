<template>
  <div class="recommend">
    <div class="information">
      <img src="~assets/img/home/homeRecommend/recommend.svg" alt="图片">
      <span class="text">推荐</span>
    </div>
    <div v-for="item in recommends" :key="item.url" class="recommend-item">
      <div class="wrapper" @click="tofeature()">
        <recommend-slot>
          <recommend-slot-item>
            <img slot="head" class="head" :src="item.head" alt="">
            <span slot="uid">{{item.username}}</span>
            <span slot="date">{{item.date}}</span>
            <span slot="title">{{item.title}}</span>
            <span slot="text">{{item.text}}</span>
            <img slot="first" :src="item.image[0]" alt="">
            <img slot="second" :src="item.image[1]" alt="">
        </recommend-slot-item>
        </recommend-slot>
        <div class="footer">
          <span class="tag">{{item.tag}}</span>
          <div class="wcl">
            <span class="watch">{{item.watch}}</span>
            <span class="comment">{{item.comment}}</span>
            <span class="like">{{item.like}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecommendSlot from "components/common/recommendSlot/RecommendSlot";
import RecommendSlotItem from "components/common/recommendSlot/RecommendSlotItem";

export default {
  name: "HomeRecommend",
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
  methods: {
    tofeature() {
      console.log(this.recommends[0].id)
    },
  },
};
</script>

<style scoped>
.recommend .information {
  width: 340px;
  font-weight: bolder;
  position: relative;
  left: 18px;
  margin-top: 10px;
}

.recommend-item {
  width: 100%;
  border-bottom: 6px solid #eee;
}

.recommend .wrapper {
  position: relative;
  width: 335px;
  /* top: 40px; */
  left: 20px;
  height: 380px;
  /* border: 1px solid black; */
}

/* .recommend .wrapper .head {
  position: absolute;
  width: 36px;
  height: 36px;
  left: 0px;
  top: 10px;
  border-radius: 50%;
} */









.recommend  .wrapper .footer {
  position: absolute;
  bottom: 20px;
  font-size: 14px;
}

.recommend .wrapper .footer .tag {
  position: absolute;
  border-radius: 2px;
  box-shadow: 0 0 1px 6px #eee;
  top: -10px;
  left: 5px;
  background-color: #eee;
}

.recommend  .wrapper .footer .wcl {
  position: relative;
  width: 200px;
  display: flex;
  text-align: center;
  top: -10px;
  left: 150px;
}

.recommend  .wrapper .footer .wcl span {
  flex: 1;
  /* margin-left: 50px; */
  color: #b7b7b7;
}

.recommend  .wrapper .footer .wcl .watch::before {
  content: "";
  position: absolute;
  display: block;
  background: url("~assets/img/home/homeRecommend/footerwcl/watch.svg");
  width: 16px;
  height: 16px;
  left: 5px;
}
.recommend  .wrapper .footer .wcl .comment::before {
  content: "";
  position: absolute;
  display: block;
  background: url("~assets/img/home/homeRecommend/footerwcl/comment.svg");
  width: 16px;
  height: 16px;
  left: 70px;
}
.recommend  .wrapper .footer .wcl .like::before {
  content: " ";
  position: absolute;
  display: block;
  background: url("~assets/img/home/homeRecommend/footerwcl/like.svg");
  width: 16px;
  height: 16px;
  left: 140px;
}

</style>