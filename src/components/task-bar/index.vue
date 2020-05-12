<template >
  <div class="task-bar fixed-bottom">
    <!-- 开始菜单 -->
    <div class="start-menu">

    </div>
    <!-- 任务栏 -->
  </div>
</template>

<script>
export default {
  name: 'task-bar',

  data() {
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.task-bar {
  width: 100%;
  height: 34px;
  background-image: url("~@/assets/images/taskbar.png");
}
</style>
