<!--
 * new page-index.vue
 * @author: chenxiangyu
 * @since: 2023-08-06
 * index.vue
-->
<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <div :class="['layout-menu', useSetting().isCollapse ? 'collapse' : '']">
      <!-- log 区域 -->
      <log></log>
      <!-- <el-scrollbar class="scrollbar">
              <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
                  {{ item }}
              </p>
          </el-scrollbar> -->
      <!-- 菜单列表 -->
      <el-menu
        background-color="#001529"
        active-text-color="#ffd04b"
        class="el-menu-vertical-demo"
        text-color="#fff"
        :router="true"
        :default-active="$router.path"
        :collapse="useSetting().isCollapse"
        :collapse-transition="false"
      >
        <Menu :menuList="menuList"></Menu>
      </el-menu>
    </div>
    <!-- 右侧内容 -->
    <div
      :class="[
        'layout-container',
        useSetting().isCollapse ? 'containerCollapse' : '',
      ]"
    >
      <!-- 面包屑 -->
      <div class="layout-container-breadcrumb">
        <tabBar @onRefresh="onRefresh"></tabBar>
      </div>
      <!-- 内容区域 -->
      <div class="layout-container-iview">
        <router-view v-if="flag"></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// log
import log from "./log/index.vue";
// 菜单
import Menu from "./menu/index.vue";
// 面包屑
import tabBar from "./tabbar/index.vue";
import { useRoute } from "vue-router";
import { watch, nextTick, ref } from "vue";
// 获取菜单
import { useStore } from "@/store/modules/use";
import { useSetting } from "@/store/modules/setting";
let store = useStore();
let menuList = store.menuList;
// 获取当前路由
let $router = useRoute();
const isRefresh = ref(false);
// 刷新
const onRefresh = (val) => {
  // console.log("val :>> ", isRefresh.value, val.value);
  isRefresh.value = val.value;
  nextTick(() => {});
};
// 控制当前组件是否销毁重建
const flag = ref(true);
watch(isRefresh, (newValue, oldValue) => {
  flag.value = false;
  nextTick(() => {
    flag.value = true;
  });
});
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  // overflow: auto;
  //   background-color: pink;
  .layout-menu {
    width: $layout-menu-width;
    background-color: $layout-menu-backgroundcolor;
    height: 100%;
    color: white;
    overflow: auto;

    // .layout-menu-item-isCollapse {
    //   width: calc($layout-menu-width - 30px);
    // }
    // .scrollbar {
    //   height: calc(100vh - $layout-container-breadcrumb-height);
    //   .scrollbar-demo-item {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     height: 50px;
    //     margin: 10px;
    //     text-align: center;
    //     border-radius: 4px;
    //     background: var(--el-color-primary-light-9);
    //     color: var(--el-color-primary);
    //   }
    // }
  }
  .collapse {
    width: $layout-menu-collapse-width;
  }
  .layout-container {
    display: flex;
    flex-wrap: wrap;
    // background-color: brown;
    width: calc(100% - $layout-menu-width);

    .layout-container-breadcrumb {
      width: 100%;
      height: $layout-container-breadcrumb-height;
      line-height: $layout-container-breadcrumb-height;
      // background-color: green;
      // border-bottom: solid 1px #b6afaf;
    }
    .layout-container-iview {
      width: 100%;
      height: calc(100% - $layout-container-breadcrumb-height);
      margin: 10px;
      // background-color: orange;
      overflow: auto;
    }
  }
  .containerCollapse {
    width: calc(100% - $layout-menu-collapse-width);
  }
  ::v-deep .el-menu {
    border-right: none !important;
  }
}
</style>
<style scoped></style>
