<!--
 * new page-404.vue
 * @author: chenxiangyu
 * @since: 2023-07-13
 * 404.vue
-->
<template>
  <div class="container">
    <div class="notFound">
      <!-- <svgIcon :iconName="'404'" :width="240" :height="240"> </svgIcon> -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.notFound {
  width: 450px;
  height: 450px;
  background: url("@/assets/images/error_images/404.png") no-repeat;
  background-size: cover;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
