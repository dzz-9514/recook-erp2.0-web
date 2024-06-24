<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useAppStore } from "@/store/modules/app";
import { useTagsViewStore } from "@/store/modules/tagsView";
import { useUserStore } from "@/store/modules/user";
import SvgIcon from '@/components/SvgIcon/index.vue'
import {User} from '@element-plus/icons-vue'
import menuTop from './Sidebar/menuTop.vue'
const appStore = useAppStore();
const tagsViewStore = useTagsViewStore();
const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const { device } = storeToRefs(appStore); // 设备类型：desktop-宽屏设备 || mobile-窄屏设备

/**
 * 左侧菜单栏显示/隐藏
 */
function toggleSideBar() {
  appStore.toggleSidebar(true);
}

/**
 * vueUse 全屏
 */
const { isFullscreen, toggle } = useFullscreen();

/**
 * 注销
 */
function logout() {
  ElMessageBox.confirm("确定注销并退出系统吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    userStore
      .logout()
      .then(() => {
        tagsViewStore.delAllViews();
      })
      .then(() => {
        router.push(`/login?redirect=${route.fullPath}`);
      });
  });
}
</script>

<template>
  <!-- 顶部导航栏 -->
  <div class="navbar">
    <!-- 左侧面包屑 -->
    <div class="dp-f ai-c">
      <!-- 导航伸缩按钮 -->
      <hamburger :is-active="appStore.sidebar.opened" @toggle-click="toggleSideBar" />
      <!-- 导航面包屑 -->
      <!-- <breadcrumb /> -->
      
    </div>
    <menuTop/>
    <!-- 右侧导航设置 -->
    <div class="flex">
      <!-- 导航栏设置(窄屏隐藏)-->
      <div v-if="device !== 'mobile'" class="setting-container">
        <!--全屏 -->
        <div class="setting-item" @click="toggle">
          <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
        </div>
        <!-- 布局大小 -->
        <el-tooltip content="布局大小" effect="dark" placement="bottom">
          <size-select class="setting-item" />
        </el-tooltip>
        <!--语言选择-->
        <lang-select class="setting-item" />
      </div>

      <!-- 用户头像 -->
      <!-- <div class="logout" @click="logout">
        <el-image src="https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/out.png"></el-image>
        退出登录
      </div> -->
      <el-dropdown trigger="hover">
        <div class="avatar-container">
          <div class="round">
            <el-icon size="20"><User /></el-icon>
          </div>
          <!-- <img src="https://akustatic.oss-cn-hangzhou.aliyuncs.com/smartClearing/user.png" /> -->
          {{userStore.username}}
          <i-ep-caret-bottom class="w-20 h-20" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>{{ $t("navbar.dashboard") }}</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="logout">
              {{ $t("navbar.logout") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #323639;
  box-shadow: 0 0 1px #0003;
  padding-left:22px ;
  padding-right: 50px;
  color: #fff;
  .logout {
    width: 104px;
    height: 35px;
    border-radius: 20px 20px 20px 20px;
    opacity: 1;
    border: 1px solid #db001a;
    color: #db001a;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    .el-image{
      margin-right: 10px;
      width: 19px;
      height: 19px;
    }
  }
  .setting-container {
    display: none;
    align-items: center;

    .setting-item {
      display: inline-block;
      width: 30px;
      height: 50px;
      line-height: 50px;
      color: #5a5e66;
      text-align: center;
      cursor: pointer;

      &:hover {
        background: rgb(249 250 251 / 100%);
      }
    }
  }

  .avatar-container {
    display: flex;
    align-items: center;
    justify-items: center;
    margin: 0 5px;
    cursor: pointer;
    color: #fff;
    img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
  }
}
.round{
  border-radius: 50%;
  border:1px #fff solid;
  width: 30px;
  height:30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
</style>
