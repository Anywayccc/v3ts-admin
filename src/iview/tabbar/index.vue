<!--
 * new page-index.vue
 * @author: chenxiangyu
 * @since: 2023-08-11
 * index.vue
-->
<template>
  <div class="container">
    <!-- 左边 菜单折叠按钮/面包屑-->
    <div class="left-bar">
      <!-- 折叠按钮 -->
      <el-button
        :icon="settingStore.isCollapse ? Expand : Fold"
        circle
        @click="changeCollapse"
      ></el-button>
      <!-- 面包屑 -->
      <breadcrumb></breadcrumb>
    </div>
    <!-- 右边 全屏/设置/用户头像 -->
    <div class="right-bar">
      <!-- 全屏 -->
      <el-button :icon="FullScreen" circle @click="handleFullScreen" />
      <!-- 刷新 -->
      <el-button :icon="Refresh" circle @click="handleRefresh" />
      <!-- 设置 -->
      <el-button :icon="Setting" circle @click="handleSetting" />
      <!-- 头像 -->
      <el-avatar :size="32" :src="useStore2.userInfo.avatar" />
      <!-- 退出登录按钮 -->
      <el-dropdown>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import breadcrumb from "./breadcrumb.vue";
import {
  FullScreen,
  Fold,
  Expand,
  Refresh,
  Setting,
  ArrowDown,
} from "@element-plus/icons-vue";
import { ref, defineExpose } from "vue";
import { useRouter, useRoute } from "vue-router";
// 获取设置的 store
import { useSetting } from "@/store/modules/setting";
// 获取 user 的 sore
import { useStore } from "@/store/modules/use";
const settingStore = useSetting();
const useStore2 = useStore();

// 子传值给父
// const emit = defineEmits("changeCollapse", isCollapse);
const changeCollapse = () => {
  //   isCollapse.value = !isCollapse.value;
  //   emit("changeCollapse", isCollapse);
  settingStore.changeCollapse();
};
// 全屏
const handleFullScreen = () => {
  // 使用 document.fullscreenElement 来判断当前页面是否是全屏  No:false/Yes:true
  // console.log("2222", document.fullscreenElement);
  let full = document.fullscreenElement;
  if (!full) {
    // 进入全屏
    document.documentElement.requestFullscreen();
  } else {
    // 退出全屏
    document.exitFullscreen();
  }
};
// 刷新
let refresh = ref(false);
const $emit = defineEmits(["onRefresh"]);
const handleRefresh = () => {
  //   console.log(";Refresh");
  refresh.value = !refresh.value;
  $emit("onRefresh", refresh);
};
// 像父组件暴露 refresh属性
// defineExpose({ refresh });
// 设置
const handleSetting = () => {
  console.log("setting");
};
let $router = useRouter();
let route = useRoute();
// 退出登录
const logOut = () => {
  console.log("退出登录 :>> ", route.path);
  //  query: { redirect: route.path } 用于传递退出登录之前所在的路由信息 , 便于再次登录直接进入上次退出前的页面
  $router.push({ path: "/login", query: { redirect: route.path } });
  localStorage.removeItem("TOKEN");
};
{
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 10px;
  .left-bar {
    display: flex;
    align-items: center;
  }
}
.el-dropdown {
  vertical-align: middle;
}
.el-icon--right {
  cursor: pointer;
}
.el-avatar {
  vertical-align: middle;
  margin: 0 10px;
}
</style>
