import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { useUserStoreHook } from '@/store/modules/user';
import {useAppStore} from '@/store/modules/app'
import zhCn from '@/lang/package/zh-cn'
import en from '@/lang/package/en'
function getLanguage(str:any) {
  const appStore = useAppStore()
  //js横杠转驼峰
  let language = appStore.language.replace(/[-_\s]+(.)?/g, (match, group1) => group1 ? group1.toUpperCase() : '');
  switch(language){
    case 'zhCn':
      return zhCn[str]
    case 'en':
      return en[str]
  }
}
// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // baseURL: 'https://akumpapi.oa00.com',
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' }
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userStore = useUserStoreHook();
    if (userStore.token) {
      config.headers.Authorization = userStore.token;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    
    const { code, msg } = response.data;
    if (code === 1) {
      return response.data;
    }
    // 响应数据为二进制流处理(Excel导出)
    if (response.data instanceof ArrayBuffer) {
      return response;
    }
    if(code === 0){
      ElMessage.error(getLanguage('error'));
    }else{
      ElMessage.error(getLanguage('warning'));
    }
    return Promise.reject(new Error(msg));
  },
  (error: any) => {
    const { code,msg } = error.response.data;
    if (error.response.msg) {
      // token 过期,重新登录
      if (code === 'A0230') {
        ElMessageBox.confirm('当前页面已失效，请重新登录', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          localStorage.clear();
          window.location.href = '/';
        });
      } else {
        ElMessage.error(getLanguage('warning'));
      }
    }
    return Promise.reject(msg);
  }
);

// 导出 axios 实例
export default service;
