<!-- 返回信息 -->
<template>
  <div class="mt-30 w-940 bg-F8F8F8">
    <el-row class="pt-44 pb-24">
      <el-col :span="24" class="mb-20">
        <div class="ta-c">
          <div class="c-8c8c">开户行名称</div>
          <div>{{userStore.bank}}</div>
        </div>
      </el-col>
      <el-col :span="24" class="mb-20">
        <div class="ta-c">
          <div class="c-8c8c">银行卡号</div>
          <div>{{userStore.bank_account}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useUserStore } from "@/store/modules/user";
const userStore = useUserStore();
</script>
<style scoped lang="scss">
.w-940{
  width: 940px;
}
.c-8c8c{
  color: #8c8c8c;
}
.bg-F8F8F8{
  background-color: #F8F8F8;
}
</style>
