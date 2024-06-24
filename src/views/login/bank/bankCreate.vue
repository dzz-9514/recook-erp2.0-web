<!-- 注册基本信息 -->
<template>
  <div class="pl-200 pr-200 pt-30">
    <span class="fs-20">银行卡添加</span>
    <div class="bg-fff mt-30 br-10 formBox scroll-container pl-40 pt-24 pb-60">
      <div class="dp-f jc-c ai-c">
        <img
          src="https://akustatic.oss-cn-hangzhou.aliyuncs.com/smartClearing/line-l.png"
        />
        <span class="ml-12 mr-12 c-1890FF">银行卡信息</span>
        <img
          src="https://akustatic.oss-cn-hangzhou.aliyuncs.com/smartClearing/line-r.png"
        />
      </div>
      <el-form
        :model="bankForm"
        class="pr-40"
        label-position="top"
        ref="bankRef"
        :rules="rules"
      >
        <el-form-item label="开户行名称：" prop="userName">
          <el-input v-model="bankForm.userName" placeholder="开户行名称" />
        </el-form-item>
        <el-form-item label="银行卡号：" prop="address">
          <el-input v-model="bankForm.address" placeholder="银行卡号" />
          <div class="c-1890FF">*注：请确保信息填写正确，银行卡将用于提</div>
        </el-form-item>
      </el-form>
      <div class="dp-f fd-c ai-c mt-50">
        <akbutton width="1000" height="48" @bClick="next(bankRef)"
          >确定</akbutton
        >
        <div class="ta-c c-1890FF mt-20"><a @click="toHome">返回首页</a></div>
      </div>
    </div>
    <el-dialog
      v-model="confirmPop"
      title="确认信息"
      width="400px"
      destroy-on-close
    >
      <el-form label-position="right" label-width="100">
        <el-form-item label="开户行名称:">
          <el-input :disabled="true" v-model="bankForm.userName" />
        </el-form-item>
        <el-form-item label="银行卡号:">
          <el-input :disabled="true" v-model="bankForm.address" />
        </el-form-item>
      </el-form>
      <div class="c-1890FF">*注：请确保信息填写正确，银行卡将用于提</div>
      <template #footer>
        <span class="dialog-footer dp-f jc-c">
          <el-button @click="confirmPop = false">取消</el-button>
          <el-button type="primary" @click="createBankHandl">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { checkMobile } from "@/utils/validator";
const router = useRouter();
const route = useRoute();
//获取下一步页面返回的IDs
let bankForm = reactive({
  userName: "",
  address: "",
});
let confirmPop = ref(false);
let bankRef = ref(null);
const rules = {
  userName: [
    { required: true, trigger: "change", message: "请输入开户行名称" },
  ],
  address: [{ required: true, trigger: "change", message: "请输入银行卡号" }],
};
const next = async (formRef) => {
  await formRef.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      confirmPop.value = true;
    } else {
      console.log("error submit!", fields);
    }
  });
};
const toHome = () => {
  router.replace({ path: "/" });
};
const createBankHandl =()=>{
  //调用添加接口
  router.replace({ name: "bankInfo" });
}
</script>
<style scoped lang="scss">
.formBox {
  height: calc(100vh - 280px);
}
.c-1890FF {
  color: #1890ff;
}
::v-deep .el-form-item__label {
  font-weight: bold;
}
.pb-60 {
  padding-bottom: 60px;
}
::v-deep .el-dialog{
  border-radius: 20px;
  .el-dialog__title{
    color: #000;
    font-size: 18px;
  }
}
</style>
