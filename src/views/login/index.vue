<template>
  <div id="login_wrap">
    <Particles id="tsparticles" style="height:calc(100vh - 6px);width:100%"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="option" />
    <div class="login_wrap-main">
      <el-image class="logo" fit="scale-down" :src="companyLogo" />
      <div class="center">
        <h1 class="login-text" style="margin-top:5px">
          宁波沙马家居ERP管理门户
        </h1>
        <h4 style="color: #b6b8bb;text-align: center;margin-bottom:50px">NINGBO RE-COOK IMPORT& EXPORT CO.,LTD</h4>
        <el-form :model="loginData" ref="loginFormRef" :rules="loginRules" label-position="top">
          <el-form-item prop="username">
            <el-input autocomplete="new-password" :placeholder="$t('login.username')" v-model="loginData.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginData.password" class="flex-1" placeholder="密码" :type="passwordVisible === false ? 'password' : 'input'"
               name="password" @keyup="checkCapslock" @keyup.enter="handleLogin" />
            <span class="ml-2 show" @click="passwordVisible = !passwordVisible">
              <svg-icon :icon-class="passwordVisible === false ? 'eye' : 'eye-open'" class="text-white cursor-pointer" color="#000" />
            </span>
          </el-form-item>
          <!-- <el-form-item @click.stop="getCaptcha" label="验证码" prop="code">
          <el-input v-model="loginData.code" auto-complete="off" :placeholder="$t('login.verifyCode')" class="w-295" @keyup.enter="handleLogin"
            size="large" />
          <div class="captcha">
            <el-image :src="captchaBase64" @click="getCaptcha" class="w-140 h-[40px] cursor-pointer">
              <template #error>
                <div class="image-slot">
                  <i-ep-picture />
                </div>
              </template>
            </el-image>
          </div>
        </el-form-item> -->
        </el-form>
        <el-button type="primary" :icon="SwitchButton" @click="handleLogin()">登录</el-button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import {SwitchButton} from '@element-plus/icons-vue'
// 状态管理依赖
import { useUserStore } from "@/store/modules/user";
import autofit from "autofit.js";
import companyLogo from "@/assets/img/company-logo.gif";
// API依赖
import { LocationQuery, LocationQueryValue, useRoute } from "vue-router";
import { getCaptchaApi } from "@/api/auth";
import { LoginData } from "@/api/auth/types";
import type { UploadFile } from "element-plus";
import { option } from "@/utils/particles.js";
import { loadFull } from "tsparticles"
import { loadSlim } from "tsparticles-slim";
import type { Engine } from 'tsparticles-engine'
const userStore = useUserStore();
const route = useRoute();
const particlesInit = async (engine:Engine) => {
    await loadSlim(engine)
}
const particlesLoaded = async (container:any) => {
    console.log('Particles container loaded', container)
}
onMounted(() => {
  autofit.init(
    {
      dh: 929,
      dw: 1920,
      el: "#login_wrap",
      resize: true,
    },
    false
  );
  // getCaptcha();
});
onBeforeUnmount(() => {
  autofit.off();
});
/**
 * 图形码获取
 */
var key: any = function () {
  // 生成10-12位不等的字符串
  const time = new Date().getTime();
  return Math.random().toString(36).slice(2) + time; // 截取小数点后的字符串
};
const getCaptcha = () => {
  loginData.value.key = key();
  getCaptchaApi({ key: loginData.value.key }).then(({ data }) => {
    captchaBase64.value = data;
  });
};
/**
 * 按钮loading
 */
const loading = ref(false);
const text = ref("账号登录");
/**
 * 是否大写锁定
 */
const isCapslock = ref(false);
/**
 * 密码是否可见
 */
const passwordVisible = ref(false);
/**
 * 验证码图片Base64字符串
 */
const captchaBase64 = ref();
const developmentEnvironment = import.meta.env.MODE === "development";
/**
 * 登录表单引用
 */
const loginFormRef = ref(ElForm);
const loginData = ref<LoginData>({
  username: developmentEnvironment ? "aaa" : "",
  password: developmentEnvironment ? "123456" : "",
  key: "",
  code: "",
});

const loginRules = {
  username: [{ required: true, trigger: "change", message: "请输入账号" }],
  password: [
    { required: true, trigger: "change", validator: passwordValidator },
  ],
  // code: [{ required: false, trigger: "change", message: "请输入验证码" }],
};

/**
 * 密码校验器
 */
function passwordValidator(rule: any, value: any, callback: any) {
  if (value.length < 6) {
    callback(new Error("密码少于6位数"));
  } else {
    callback();
  }
}

/**
 * 检查输入大小写状态
 */
function checkCapslock(e: any) {
  const { key } = e;
  isCapslock.value = key && key.length === 1 && key >= "A" && key <= "Z";
}
/**
 * 登录
 */
function handleLogin() {
  loginFormRef.value.validate((valid: boolean) => {
    if (valid) {
      loading.value = true;
      userStore
        .login(loginData.value)
        .then(() => {
          const query: LocationQuery = route.query;
          const redirect = (query.redirect as LocationQueryValue) ?? "/";

          const otherQueryParams = Object.keys(query).reduce(
            (acc: any, cur: string) => {
              if (cur !== "redirect") {
                acc[cur] = query[cur];
              }
              return acc;
            },
            {}
          );
          router.push({ path: redirect, query: otherQueryParams });
        })
        .catch(() => {
          // 验证失败，重新生成验证码
          // getCaptcha();
        })
        .finally(() => {
          loading.value = false;
        });
    }
  });
}
</script>

<style lang="scss" scoped>
#login_wrap {
  position: relative;
  background-color: rgb(41, 52, 69);
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  .login_wrap-main {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -25%);
    text-align: center;
  }
  .logo {
    width: 200px;
  }
  .center {
    // width: 500px;
    background-size: 100% 100%;
    background: rgba(0, 0, 0, 0.3);
    padding: 36px;
    border: 1px solid #b7b7b7;
    border-radius: 4px;
    &:hover {
      box-shadow: 0 1px 12px rgb(220, 236, 252);
      border-color: #eee;
    }
    .login-text {
      color: #fff;
      font-size: 2.1rem;
      text-shadow: 1px 1px rgb(234, 233, 233);
      margin: 0;
      text-align: center;
    }
  }
}
.show {
  position: absolute;
  right: 10px;
}
</style>
