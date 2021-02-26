<template>
  <div class="dynamic">
    <d-nav-bar>
      <span slot="left">关注</span>
      <span slot="right">发现</span>
    </d-nav-bar>
    <div class="left">
      <v-touch v-on:swipeleft="swiperleft" class="wrapper">
        <dynamic-recommend :recommends="recommends"></dynamic-recommend>
      </v-touch>
      <!-- <v-touch v-on:swiperight="swiperright">发现</v-touch> -->
    </div>
  </div>
</template>

<script>
import DynamicRecommend from './childComps/dynamicRecommend/DynamicRecommend'

// 子组件
import DNavBar from "./childComps/dNavBar/DNavBar";

export default {
  name: "Dynamic",
  data() {
    return {
      recommends: [
        {
          id: '001',
          head: require("assets/img/home/homeRecommend/genshin/paimeng.jpg"),
          username: "飞翔的丘丘人",
          date: "02-09",
          title: "迪卢克",
          text:
            "璃月港的瑞锦发明了一种新型的「棋戏」，叫做「机关棋谭」，她想趁着海灯节期间了解一下大家对「机关棋谭」的态度……",
          image: [
            require("assets/img/home/homeRecommend/genshin/01.png"),
            require("assets/img/home/homeRecommend/genshin/02.png"),
          ],
          tag: "同人绘画",
          watch: 999,
          comment: 888,
          like: 777,
        },
        {
          id: '002',
          head: require("assets/img/home/homeRecommend/genshin/paimeng.jpg"),
          username: "飞翔的丘丘人",
          date: "02-09",
          title: "琴",
          text:
            "璃月港的瑞锦发明了一种新型的「棋戏」，叫做「机关棋谭」，她想趁着海灯节期间了解一下大家对「机关棋谭」的态度……",
          image: [
            require("assets/img/home/homeRecommend/genshin/02.png"),
            require("assets/img/home/homeRecommend/genshin/03.png"),
          ],
          tag: "同人绘画",
          watch: 999,
          comment: 888,
          like: 777,
        },
        {
          id: '003',
          head: require("assets/img/home/homeRecommend/genshin/paimeng.jpg"),
          username: "飞翔的丘丘人",
          date: "02-09",
          title: "雷泽",
          text:
            "璃月港的瑞锦发明了一种新型的「棋戏」，叫做「机关棋谭」，她想趁着海灯节期间了解一下大家对「机关棋谭」的态度……",
          image: [
            require("assets/img/home/homeRecommend/genshin/03.png"),
            require("assets/img/home/homeRecommend/genshin/04.png"),
          ],
          tag: "同人绘画",
          watch: 999,
          comment: 888,
          like: 777,
        },
        {
          id: '004',
          head: require("assets/img/home/homeRecommend/genshin/paimeng.jpg"),
          username: "飞翔的丘丘人",
          date: "02-09",
          title: "芭芭拉",
          text:
            "璃月港的瑞锦发明了一种新型的「棋戏」，叫做「机关棋谭」，她想趁着海灯节期间了解一下大家对「机关棋谭」的态度……",
          image: [
            require("assets/img/home/homeRecommend/genshin/04.png"),
            require("assets/img/home/homeRecommend/genshin/05.png"),
          ],
          tag: "同人绘画",
          watch: 999,
          comment: 888,
          like: 777,
        },
        {
          id: '005',
          head: require("assets/img/home/homeRecommend/genshin/paimeng.jpg"),
          username: "飞翔的丘丘人",
          date: "02-09",
          title: "温迪",
          text:
            "璃月港的瑞锦发明了一种新型的「棋戏」，叫做「机关棋谭」，她想趁着海灯节期间了解一下大家对「机关棋谭」的态度……",
          image: [
            require("assets/img/home/homeRecommend/genshin/05.png"),
            require("assets/img/home/homeRecommend/genshin/06.png"),
          ],
          tag: "同人绘画",
          watch: 999,
          comment: 888,
          like: 777,
        }
      ]
    };
  },
  components: {
    DynamicRecommend,
    DNavBar
  },
  methods: {
    swiperleft() {
      console.info(111);
      this.$router.push({ path: "/b" });
    },
    swiperright() {
      this.$router.push({ path: "/a" });
      console.info(2222);
    },
  },
};
</script>

<style scoped>
.dynamic {
  width: 375px;
}

.nav-bar {
  background: #eee;
}

.left {
  position: relative;
  top: 44px;
}

.left .wrapper {
  touch-action: pan-y !important
}
</style>