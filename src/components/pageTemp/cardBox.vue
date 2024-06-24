<!-- 白色模块 -->
<template>
  <div class="white-box">
    <el-card class="w-full">
      <div class="dp-f w100 jc-sb">
        <div class="dp-f fs-20 ai-c fw-b" v-if="title">
          <div class="line-b"></div>
          <div>{{ title }}</div>
          <slot name="title"></slot>
        </div>
        <slot name="right"></slot>
      </div>
      <slot name="content"></slot>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
<style scoped lang="scss">
.el-card {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0;
}
.line-b {
  width: 3px;
  height: 16px;
  background: #1890ff;
  border-radius: 4px;
  margin-right: 8px;
}
.w-full {
  ::v-deep.el-card__body {
    padding: 10px;
  }
}
</style>
