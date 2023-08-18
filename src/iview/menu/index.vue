<!--
 * new page-index.vue
 * @author: chenxiangyu
 * @since: 2023-08-07
 * index.vue
-->
<template>
  <!-- <div class="container"> -->
  <template v-for="(item, index) in menuLists" :key="index">
    <!-- 只有一个子路由 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item :index="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[index].meta.title }}</span>
        </template>
        <!-- <span>{{ item.meta.icon }}</span> -->
      </el-menu-item>
    </template>
    <!-- 没有子路由 -->
    <template v-else-if="item.children === undefined">
      <el-menu-item :index="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且大于一个 -->
    <template v-else>
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="(item, index) in item.children"
          :key="index"
          :index="item.path"
        >
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </template>
  <!-- </div> -->
</template>

<script setup lang="ts">
// 接收 menuList
const props = defineProps<{ menuList: [] }>();
// console.log("menList :>> ", menuList);
// 过滤掉不显示(meta.hidden=false)的路由
const menuLists = props.menuList.filter((val: any) => {
  if (val.meta.hidden) return val;
});
</script>

<style scoped>
::v-deep .el-popper.is-light {
  background-color: #001529 !important;
}
</style>
