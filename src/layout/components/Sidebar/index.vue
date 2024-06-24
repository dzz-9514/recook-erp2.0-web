<script setup lang="ts">
import { useRoute,useRouter } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import companyLogo from "@/assets/img/company-logo.gif";

import { useSettingsStore } from "@/store/modules/settings";
import { usePermissionStore } from "@/store/modules/permission";
import { useAppStore } from "@/store/modules/app";
import { storeToRefs } from "pinia";
import variables from "@/styles/variables.module.scss";
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();
const appStore = useAppStore();
const currRoute = useRoute();
const router = useRouter();
const { sidebarLogo } = storeToRefs(settingsStore);
const toPath=(path:string)=>{
  router.push('/')
}
</script>

<template>
  <div :class="{ 'has-logo': sidebarLogo }">
    <div :class="{'logo':appStore.sidebar.opened}" class="logo-container" @click.stop="toPath('/')" style="text-align: center;">
      <el-image style="height:40px" fit="scale-down" :src="companyLogo" />
    </div>
    <el-scrollbar>
      <el-menu :default-active="currRoute.path" :collapse="!appStore.sidebar.opened"
        text-color="#666" active-text-color="#DB001A" :unique-opened="false" :collapse-transition="false"
        mode="vertical">
        <!-- <sidebar-item v-for="route in permissionStore.routes" :key="route.path" :item="route" :base-path="route.path"
          :is-collapse="!appStore.sidebar.opened" /> -->
        <sidebar-item v-for="route in permissionStore.leftMenuList" :key="route.path" :item="route" :base-path="route.path"
          :is-collapse="!appStore.sidebar.opened" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.logo-container{
  &:hover{
    background-color: #515a6e;
  }
}
</style>