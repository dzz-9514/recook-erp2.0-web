<!-- 银行卡 -->
<template>
  <div class="bank">
    <div class="top">
      <el-image style="width:150px;height:48px" src="https://akustatic.oss-cn-hangzhou.aliyuncs.com/smartClearing/logo-w.png"></el-image>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { reactive,ref } from 'vue'
</script>
<style scoped lang='scss'>
.top{
  background-color: #2B2F3A;
  height: 80px;
  width: 100%;
  padding-top: 16px;
  padding-left: 82px;
}
.bank{
  background: #F8F8F8;
  min-height: 100vh;
}
</style>
<style>
.pl-200 {
  padding-left: 200px;
}
.pr-200 {
  padding-right: 200px;
}
</style>