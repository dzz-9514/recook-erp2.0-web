<!-- 认证中 -->
<template>
  <div class="pl-200 pr-200 pt-30" >
    <div class="dp-f ai-c fd-c bg-fff w100 formBox scroll-container">
      <el-image
        fit="contain"
        class="w-266 h-200 mt-50"
        src="https://akustatic.oss-cn-hangzhou.aliyuncs.com/smartClearing/bank.png"
      />
      <p class="c-34C952">银行卡信息</p>
      <info />
      <akbutton class="mt-60" width="334" height="48" @bClick="toHome"
        >返回首页</akbutton
      >
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import info from './components/info.vue'
const router = useRouter();
const route = useRoute();
const toHome=()=>{
  router.replace({
    path: "/",
  });
}
</script>
<style scoped lang="scss">
.formBox {
  height: calc(100vh - 140px);
  min-height: 600px;
}
.mt-60{
  margin-top: 60px;
}
</style>
