<!--
 * new page-svgIcon.vue
 * @author: chenxiangyu
 * @since: 2023-06-28
 * svgIcon.vue
-->
<template>
  <svg>
    <use :xlink:href="'#icon-' + iconName"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  iconName?: string;
  color?: string;
  with?: string;
  height?: string;
}>();
// defineProps({
//   // svg矢量图的名称
//   iconName: {
//     type: "string",
//   },
//   // svg矢量图的颜色
//   color: {
//     type: "string",
//     default: "",
//   },
//   // svg矢量图的宽高
//   with: {
//     type: "string",
//     default: "",
//   },
//   height: {
//     type: "string",
//     default: "",
//   },
// });
</script>

<style scoped></style>
