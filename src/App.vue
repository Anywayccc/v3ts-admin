<!--
 * new page-App.vue
 * @author: chenxiangyu
 * @since: 2023-06-20
 * App.vue
-->
<template>
  <div class="container">
    <router-view></router-view>
    <!-- <h3>我是app.vue</h3>
    <svgIcon iconName="home"></svgIcon> -->
  </div>
</template>

<script setup lang="ts">
// import hello from "@/components/svgIcon/index.vue";
// import axios from "./axios/axios";
// axios({
//   url: "/user/login",
//   method: "post",
//   data: {
//     username: "admin",
//     password: "111111",
//   },
// });
// import { onMounted } from "vue";
// import { Login } from "@/api/user";
// onMounted(() => {
//   Login({ username: "admin", password: "111111" });
// });
</script>

<style scoped lang="scss">
div {
  h3 {
    color: $color;
  }
}
</style>
