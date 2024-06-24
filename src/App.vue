<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import { useAppStore } from '@/store/modules/app';
const appStore = useAppStore();
//获取默认语言
// appStore.changeLanguage('zh-cn')
</script>

<template>
  <el-config-provider :locale="appStore.locale" :size="appStore.size">
    <router-view />
  </el-config-provider>
</template>
