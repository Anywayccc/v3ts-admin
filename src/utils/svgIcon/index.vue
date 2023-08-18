<!--
 * new page-svgIcon.vue
 * @author: chenxiangyu
 * @since: 2023-06-28
 * svgIcon.vue
-->
<template>
  <svg :style="{ width, height }">
    <use :xlink:href="'#icon-' + iconName" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
// defineProps<{
//   iconName?: string;
//   color?: string;
//   with?: string;
//   height?: string;
// }>();

// 有没有发现上面用TS写的不可以写默认值，怎么解决呢
// 用withDefaults：第一个参数是defineProps， 第二个参数是一个对象 对象里面的属性是父组件传值的属性，直接给属性赋值
withDefaults(
  defineProps<{
    iconName?: string;
    color?: string;
    width?: string;
    height?: string;
  }>(),
  {
    width: 16,
    height: 16,
  }
);

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
