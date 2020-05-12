<template>
  <!--拖拽功能测试组件-->
  <div class="drag">
    <div class="drag_box" v-dialogDrag></div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'drag',
  data() {
    return {}
  }
}
</script>
<style scoped>
.drag {
  width: 100%;
  height: 500px;
  background-color: #fff;
}
.drag_box {
  width: 150px;
  height: 90px;
  border: 1px solid #666;
  background-color: #ccc;
  /* 使用定位，脱离文档流 */
  position: relative;
  top: 100px;
  left: 100px;
  /* 鼠标移入变成拖拽手势 */
  z-index: 3000;
}
</style>