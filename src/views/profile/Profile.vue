<template>
  <div class="profile">
    <div class="headPic"></div>
    <div class="profileInfo">
      <img class="head" src="~assets/img/profile/01.png" alt="头像and个人页入口" />
      <h2>username</h2>
      <h3>uid:</h3>
      <p class="level"><span>原神 Lv3</span></p>
      <div class="ffl">
        <span class="fans">fans</span>
        <span class="follow">follow</span>
        <span class="liked">liked</span>
      </div>
    </div>
    <div class="menuList">
      <ul>
        <router-link :to="{ path: 'collect' }"><li>收藏</li></router-link>
        <router-link :to="{ path: 'contact' }"><li>浏览历史</li></router-link>
        <router-link :to="{ path: 'history' }"><li>联系客服</li></router-link>
        <router-link :to="{ path: 'setting' }"><li>设置</li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  methods: {
    // toCollect() {
    //   this.$router.push('/profile/collect')
    // }
  }
};
</script>

<style scoped>
.profile .headPic {
  width: 100%;
  height: 200px;
  background: url('~assets/img/profile/headPic.jpg') 50%;
  background-size: 100%;
}

/* .profile .profileInfo {
  
} */

.profile .profileInfo .head {
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
  margin-top: -30px;
  margin-left: 25px;
}

.profile .profileInfo h2 {
  margin-top: 10px;
  margin-left: 20px;
}

.profile .profileInfo h3 {
  margin-left: 20px;
  margin-top: 5px;
}

.profile .profileInfo .level {
  display: block;
  margin-top: 15px;
  margin-left: 20px;
  font-size: 14px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  width: 70px;
  border: 1px solid black;
  border-radius: 5px;
  padding-bottom: 15px;
}

/* .profile .profileInfo .level span {
} */

.profile .profileInfo .ffl {
  margin-top: 15px;
  border-top: 1px solid #eee;
  border-bottom: 6px solid #eee;
}

.profile .profileInfo .ffl span {
  display: inline-block;
  margin: 20px 20px 20px;
}

.profile .profileInfo .fans::before {
  content: "99 ";
  font-weight: bolder;
  font-size: 20px;
}
.profile .profileInfo .follow::before {
  content: "88 ";
  font-weight: bolder;
  font-size: 20px;
}
.profile .profileInfo .liked::before {
  content: "77 ";
  font-weight: bolder;
  font-size: 20px;
}

.profile .menuList {
  margin-top: 20px;
  font-size: 16px;
}

.profile .menuList ul {
  list-style-type: none;
}

.profile .menuList li {
  margin-top: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.profile .menuList li:nth-child(1) {
  margin-left: 20px;
  margin-right: 20px;
}
.profile .menuList li:nth-child(2) {
  margin-left: 20px;
  margin-right: 20px;
}
.profile .menuList li:nth-child(3) {
  margin-left: 20px;
  margin-right: 20px;
}
.profile .menuList li:nth-child(4) {
  text-indent: 20px;
  border-bottom: 6px solid #eee;
}

</style>