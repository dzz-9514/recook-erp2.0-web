<template>
  <div class="menu">
    <div class="dp-f w100 pt-10 ">
      <template v-for="(i,v) in permissionStore.routes" :key="v">
        <div v-if="!hasOneShowing(i)" class="w-100 dp-f ai-c cu-p pl-10 menu-item"  @click.stop="menuLeftChange(i)">
          <svg-icon v-if="i.meta&&i.meta.icon" :icon-class="i.meta.icon"></svg-icon>
          <span v-if="i.meta&&i.meta.title">{{i.meta.title}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { usePermissionStore } from "@/store/modules/permission";
const permissionStore = usePermissionStore();
const hasOneShowing = (route)=>{
  if(!route.meta||route.meta?.hidden){
    return true;
  }else{
    return false;
  }
}
let menuTopArr = ref([
  {
    title: '订单管理',
    icon: 'menuOrder',
    id: 1,
  },
  {
    title: '资料中心',
    icon: 'menuDataCenter',
    id: 2,
  },
  {
    title: '单证管理',
    icon: 'menuDocument',
    id: 3,
  },
  {
    title: '财务管理',
    icon: 'menuFinance',
    id: 4,
  },
  {
    title: '系统管理',
    icon: 'menuSystem',
    id: 5,
  },
  {
    title: '3D锅具',
    icon: 'menu3D',
    id: 6,
  },
  {
    title: '报表管理',
    icon: 'menuReport',
    id: 7,
  },
])
const menuLeftChange = (i) => {
  permissionStore.getLeftMenuList(i)
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 10px;
  font-size: 15px;
}
.menu-item {
  &:hover {
    color: #fff;
    background: #666;
    border-radius: 5px;
    font-size: 16px;
  }
}
</style>