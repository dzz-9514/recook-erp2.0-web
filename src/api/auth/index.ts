import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { CaptchaResult, LoginData, LoginResult } from "./types";

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("password", data.password);
  formData.append("key", data.key );
  formData.append("code", data.code );
  return request({
    url: "/v1/pc/user/agencyLogin",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

/**
 * 注销API
 */
export function logoutApi() {
  return request({
    url: "/api/v1/auth/logout",
    method: "delete",
  });
}

/**
 * 获取验证码
 */
export function getCaptchaApi(data:any){
  return request({
    url: "/v1/pc/user/imageCode/get",
    method: "post",
    data
  });
}
