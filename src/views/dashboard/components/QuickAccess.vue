<!--快捷入口-->
<template>
  <div class="w100 mt-10">
    <div class="box w100 pt-20 pb-20 mt-20" v-for="(el, ind) in box" :key="ind">
      <div class="dp-f ai-c fs-18 pl-15">
        <el-image class="w-18 h-16" :src="el.icon"></el-image>
        <span class="fw-b fs-18 ml-10">{{ el.title }}</span>
      </div>
      <div class="w100 dp-f jc-sa">
        <div class="w-74 ta-c cu-p" v-for="(v, i) in el.list" :key="v.name + i" @click="toLink(v)">
          <el-image fit="cover" :src="v.image"></el-image>
          <p class="name">{{ v.name }}</p>
          <p v-if="v.state" class="state mt-12 c-8c8c8c">未完成</p>
          <el-image
            v-else
            class="mt-12 w-18 h-18"
            src="https://akustatic.oss-cn-hangzhou.aliyuncs.com/apply-program/success-blue.png"
          ></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const box = [
  {
    icon: "https://akustatic.oss-cn-hangzhou.aliyuncs.com/apply-program/acc.png",
    title: "账户管理",
    list: [
      {
        image:
          "https://akustatic.oss-cn-hangzhou.aliyuncs.com/apply-program/acc-1.png",
        name: "账户支付密码",
        state: 0,
      },
      {
        image:
          "https://akustatic.oss-cn-hangzhou.aliyuncs.com/apply-program/acc-2.png",
        name: "角色列表",
        state: 1,
      },
      {
        image:
          "https://akustatic.oss-cn-hangzhou.aliyuncs.com/apply-program/acc-3.png",
        name: "员工管理",
        state: 1,
      },
      {
        image:
          "https://akustatic.oss-cn-hangzhou.aliyuncs.com/apply-program/acc-4.png",
        name: "流程人员配置",
        state: 1,
      },
    ],
  },
  {
    icon: "https://akustatic.oss-cn-hangzhou.aliyuncs.com/apply-program/pro.png",
    title: "账户管理",
    list: [
      {
        image:
          "https://akustatic.oss-cn-hangzhou.aliyuncs.com/apply-program/pro-1.png",
        name: "项目配置",
        state: 0,
      },
      {
        image:
          "https://akustatic.oss-cn-hangzhou.aliyuncs.com/apply-program/pro-2.png",
        name: "工作站点管理",
        state: 1,
      },
    ],
  },
];
const toLink =(e)=>{
  console.log('toLink')
}
</script>
<style scoped lang="scss">
.box {
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  width: 100%;
}
.name {
  white-space: pre;
  display: flex;
  justify-content: center;
}
.c-8c8c8c {
  color: #8c8c8c;
}
</style>
