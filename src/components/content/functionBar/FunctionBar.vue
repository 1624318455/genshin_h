<template>
  <div class="function-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'functionBar'
}
</script>

<style scoped>
.function-bar {
  position: fixed;
  display: flex;
  justify-content: center;
  line-height: 44px;
  height: 88px;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(100, 100, 100, 0.1);
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  z-index: 99;
}

.function-bar img {
  position: relative;
  top: 7px;
  width: 35px;
  border-radius: 50%;  
}

.left,
.right,
.center {
  font-size: 16px;
  width: 50px;
  height: 50px;
  margin: 22px 35px 0;
  background: #2ba8fc;
  border-radius: 50%;
}
</style>