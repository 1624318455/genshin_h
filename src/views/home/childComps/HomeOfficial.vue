<template>
  <div class="official">
    <div class="information">
      <img src="~assets/img/home/homeOfficial/information.svg" alt="图片">
      <span class="text">官方资讯</span>
      <span class="all">全部></span>
    </div>
    <div v-for="item in officials" :key="item.url" class="official-item">
      <div>
        <p>{{ item.title }}</p>
        <p>
          <span>{{ item.activity }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeOfficial",
  props: {
    officials: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.official {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  padding: 15px 0 30px;
  border-bottom: 6px solid #eee;
}

.official .information {
  width: 340px;
}

.official .information .text{
  text-align: left;
  font-size: 18px;
  font-weight: bolder;
}

.official .information .all {
  display: inline-block;
  font-size: 12px;
  margin-left: 214px;
}

.official-item div {
  margin-top: 10px;
  width: 340px;
  background-color: #eee;
  border-radius: 6px;
}

.official-item div p {
  font-size: 14px;
  font-weight: bolder;
  height: 22px;
  line-height: 22px;
}

.official-item div p span {
  text-align: left;
  font-size: 14px;
  background-color: burlywood;
}
</style>