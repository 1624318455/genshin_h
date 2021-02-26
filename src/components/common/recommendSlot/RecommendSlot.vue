<template>
  <div id="recommend-slot">
    <slot></slot>
      
    </div>
</template>

<script>
export default {
  name: "RecommendSlot"
}
</script>

<style scoped>
#recommend-slot {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 290px;
  /* top: 0px; */
  /* background-color: #f6f6f6; */
}


</style>