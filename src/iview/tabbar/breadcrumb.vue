<!--
 * new page-breadcrumb.vue
 * @author: chenxiangyu
 * @since: 2023-08-15
 * breadcrumb.vue
-->
<template>
  <div class="breadcrumbContainer">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <!-- <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="item.path"
        >{{ item.meta.title }}</el-breadcrumb-item
      >
    </el-breadcrumb> -->
      <template v-if="!crumbItems">
        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
          <component :is="item.meta.icon" style="width: 15px"></component>
          {{ item.meta.title }}</el-breadcrumb-item
        >
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { valid } from "mockjs";
let $route = useRoute();
// console.log($route.matched);
const crumbItems = computed(() => {
  return $route.matched.some((val) => {
    if (val.name === "layout" || val.name === "home") {
      return val;
    }
  });
});
// console.log("crumbItem :>> ", crumbItems);
</script>

<style scoped>
.breadcrumbContainer {
  margin-left: 10px;
}
</style>
