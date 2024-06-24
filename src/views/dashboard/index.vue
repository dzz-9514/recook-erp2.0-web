<script setup lang="ts">
import cardW from "@/components/pageTemp/cardBox.vue";
import { formatStamp } from "@/utils/timeTool";
defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Dashboard",
  inheritAttrs: false,
});
import {useRouter} from 'vue-router'
import { useUserStore } from "@/store/modules/user";
import { useTransition, TransitionPresets } from "@vueuse/core";
import { } from "@/api/home/index.ts";
const router = useRouter()
const userStore = useUserStore();
const getChartData = (data: any = {}) => {
  
};
// getChartData();
</script>

<template>
  <div class="dashboard-container">
    <!-- 快速审批 -->
    <cardW ></cardW>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  position: relative;
  padding: 10px;
  overflow: auto;
}
</style>
