<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {}
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  line-height: 44px;
  height: 44px;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(100, 100, 100, 0.1);
  font-size: 16px;
  font-weight: bold;
  background-color: rgb(60, 60, 60);
  z-index: 99;
}

.left,
.right,
.center {
  /* background-color: aquamarine; */
  font-size: 16px;
  width: 80px;
  margin: 0 10px 0;
}
</style>