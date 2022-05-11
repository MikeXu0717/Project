<template>
  <a :title="title" style="margin:10px">
    <!-- this.$attrs:可以获取到父组件传递的未被接收的数据【props】 -->
    <!-- this.$listeners:可以获取到父组件传递的自定义事件 -->
    <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </a>
</template>

<script>
export default {
  name: "HintButton",
  props: ["title"]
};
</script>

<style scoped>
</style>