<template>
  <div id="home">
    <nav-bar>
      <div slot="left" @click="toHome()"><span>酒馆</span></div>
      <div slot="center" @click="toIntroduction()"><span>攻略</span></div>
      <div slot="right" @click="toDoujin()"><span>同人图</span></div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-official :officials="officials"></home-official>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
// import Introduction from 'components/content/navbar/navbarItem/introduction'

// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeOfficial from "./childComps/HomeOfficial";
import HomeRecommend from "./childComps/HomeRecommend";
import RecommendFeature from "components/common/recommendSlot/RecommendFeature";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeOfficial,
    HomeRecommend,
    RecommendFeature,
  },
  data() {
    return {
      banners: [
        {
          title: "机关棋谭玩法说明",
          image:
            "https://upload-bbs.mihoyo.com/upload/2021/02/08/75276545/c48a365b36b524090c00dc4f28c37038_174735503566681884.jpg",
          link: "https://www.baidu.com/",
        },
        {
          title: "海灯节玩法说明",
          image:
            "https://upload-bbs.mihoyo.com/upload/2021/02/08/75276545/ffba3f069e095f1392d13be208c49af4_1281021408738101672.jpg",
          link: "https://www.baidu.com/",
        },
        {
          title: "烟火之邀",
          image:
            "https://upload-bbs.mihoyo.com/upload/2021/01/29/75276539/6b31fb8e0f3c28daeb46497181e82396_3299650758828039790.png",
          link: "https://www.baidu.com/",
        },
        {
          title: "机关棋谭挑战视频",
          image:
            "https://upload-bbs.mihoyo.com/upload/2021/02/09/75276550/3ad722b1402f4ad5e2f88723b4d84e99_5264715995147865700.jpg",
          link: "https://www.baidu.com/",
        },
      ],
      officials: [
        {
          title: "「机关棋谭」挑战视频征集活动",
          activity: "活动",
        },
        {
          title: "【征集活动】第一届提瓦特美食烹饪活动，开启！",
          activity: "活动",
        },
      ],
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
        },
        {
          id: '006',
          head: require("assets/img/home/homeRecommend/genshin/paimeng.jpg"),
          username: "飞翔的丘丘人",
          date: "02-09",
          title: "莫娜",
          text:
            "璃月港的瑞锦发明了一种新型的「棋戏」，叫做「机关棋谭」，她想趁着海灯节期间了解一下大家对「机关棋谭」的态度……",
          image: [
            require("assets/img/home/homeRecommend/genshin/06.png"),
            require("assets/img/home/homeRecommend/genshin/07.png"),
          ],
          tag: "同人绘画",
          watch: 999,
          comment: 888,
          like: 777,
        },
      ],
    };
  },
  created() {
    // this.getRecommends();
  },
  methods: {
    // async getRecommends() {
    //   const { data: res } = await this.$http.get("/jsondata/recommend.json");
    //   console.log(res);
    // //   this.recommends = res;
    // },
    toHome() {
      this.$router.push('/home')
    },
    toIntroduction() {
      this.$router.push('/introduction')
    },
    toDoujin() {
      this.$router.push('/doujin')
    },
  },
};
</script>

<style scoped>
span {
  color: #fff;
}
</style>