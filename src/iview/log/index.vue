<!--
 * new page-index.vue
 * @author: chenxiangyu
 * @since: 2023-08-06
 * index.vue
-->
<template>
  <div class="container">
    <svgIcon :iconName="setting.img_url" width="35" height="35" color="#fff">
    </svgIcon>
    <div class="title" v-if="!store.isCollapse">{{ setting.title }}</div>
  </div>
</template>

<script setup lang="ts">
import setting from "@/setting";
import { useSetting } from "@/store/modules/setting";
let store = useSetting();
</script>

<style scoped lang="scss">
.container {
  display: flex;
  //   justify-content: center;
  align-items: center;
  margin: 10px 0 10px 10px;
  // margin-top: 10px;
  // margin-bottom: 10px;
  // margin-left: 10px;
  .title {
    font-size: 20px;
    font-weight: bolder;
    padding-left: 10px;
  }
}
</style>
@/store/modules/setting
