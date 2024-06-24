<!-- 表格页布局 -->
<template>
  <div class="mainPage">
    <el-card class="head-card" shadow="never">
      <div class="left">
        <breadcrumb />
      </div>
      <div class="right" v-if="slotNames.includes('headRight')">
        <slot name="headRight"></slot>
      </div>
    </el-card>
    <div class="pos-r" v-if="slotNames.includes('sreach')">
      <el-card class="sreach-card" shadow="never">
        <slot name="sreach"></slot>
        <div class="btns ml-10">
          <akbutton icon="sreach" height="40" @bClick="handleSreach"
            >搜索</akbutton
          >
          <akbutton icon="reset" height="40" @bClick="handleReset" cssType="2">重置</akbutton>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineEmits ,useSlots} from "vue";
const emits = defineEmits(["sreach","reset"]);
const handleSreach = () => {
  emits("sreach");
};
const handleReset = () => {
  emits("reset");
};
// 获取插槽内容
let slots = useSlots()
//获取有用到的插槽
let slotNames= Object.keys(slots)

</script>
<style scoped lang="scss">
.mainPage {
  width: 100%;
  margin-bottom: 20px;
  .head-card {
    ::v-deep .el-card__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
  }
  .sreach-card {
    margin-top: 20px;
    ::v-deep .el-card__body {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 0;
    }
    .btns {
      display: flex;
      margin-bottom: 20px;
    }
    ::v-deep .el-input {
      width: 210px;
      margin-right: 20px;
      height: 40px;
      margin-bottom: 20px;
    }
  }
}
</style>
