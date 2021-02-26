<template>
  <div class="recommend">
    芭芭拉冲鸭
  </div>
</template>

<script>
import RecommendSlot from './RecommendSlot'
import RecommendSlotItem from './RecommendSlotItem'

export default {
  name: 'RecommendFeature',
  components: {
    RecommendSlot,
    RecommendSlotItem
  },
  data() {
    return {
      feature: [],
    }
  },
  created() {
    // console.log('created')
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>