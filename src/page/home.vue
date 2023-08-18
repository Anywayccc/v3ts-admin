<!--
 * new page-home.vue
 * @author: chenxiangyu
 * @since: 2023-07-13
 * home.vue
-->
<template>
  <el-card class="box-card">
    <div class="title">
      <el-avatar :size="80" :src="store.userInfo.avatar" />
      <div class="container">
        <div class="name">
          {{ "Hi，" + store.userInfo.username + getHi() + "！" }}
        </div>
        <div class="cont">XXX 后台管理系统</div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { useStore } from "@/store/modules/use";
const store = useStore();
let hours = new Date().getHours();
const getHi = () => {
  if (hours <= 8) {
    return "早上好";
  } else if (hours <= 10) {
    return "上午好";
  } else if (hours <= 12) {
    return "中午好";
  } else if (hours <= 19) {
    return "下午好";
  } else {
    return "晚上好";
  }
};
</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  .container {
    margin-left: 10px;
    .name {
      font-size: 30px;
      margin-bottom: 15px;
    }
  }
}
</style>
