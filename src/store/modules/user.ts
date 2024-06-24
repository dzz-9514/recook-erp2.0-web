import { defineStore } from "pinia";

import { loginApi, logoutApi } from "@/api/auth";
import { getUserInfo } from "@/api/user";
import { resetRouter ,nextRouter }  from "@/router";
import { store } from "@/store";

import { LoginData } from "@/api/auth/types";
import { UserInfo } from "@/api/user/types";

import { useStorage } from "@vueuse/core";
export const useUserStore = defineStore("user", () => {
  // state
  const userId = useStorage("userId", "");
  const token = useStorage("token", "");
  const username = useStorage("username", "");
  const bank = useStorage("bank", "");
  const bank_account = useStorage("bank_account", "");
  const avatar = ref("");
  const roles = ref<Array<string>>([]); // 用户角色编码集合 → 判断路由权限
  const perms = ref<Array<string>>([]); // 用户权限编码集合 → 判断按钮权限

  /**
   * 登录调用
   *
   * @param {LoginData}
   * @returns
   */
  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      localStorage.setItem('token','token.value')
      return
      loginApi(loginData)
        .then((response:any) => {
          if(response.code == 200){
            token.value = response.data.token; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
            localStorage.setItem('token',token.value)
            getInfo()
            resolve();
          }
        })
        .catch((error) => {
          console.log('error',error)
          reject(error);
        });
    });
  }

  // 获取信息(用户昵称、头像、角色集合、权限集合)
  function getInfo() {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then(({ data }) => {
          userId.value = data.id
          username.value = data.username
          bank.value = data.bank
          bank_account.value = data.bank_account
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // 注销
  function logout() {
    return new Promise<void>((resolve, reject) => {
      // logoutApi()
      //   .then(() => {
          resetRouter();
          resetToken();
          location.reload(); // 清空路由
          resolve();
        // })
        // .catch((error) => {
        //   reject(error);
        // });
    });
  }

  // 重置
  function resetToken() {
    token.value = "";
    username.value = "";
    bank.value = "";
    avatar.value = "";
    roles.value = [];
    perms.value = [];
  }
  return {
    token,
    username,
    avatar,
    bank,
    bank_account,
    roles,
    perms,
    login,
    getInfo,
    logout,
    resetToken,
    /**
     * 当前登录用户ID
     */
    userId,
  };
});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}
