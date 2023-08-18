<!--
 * new page-index.vue
 * @author: chenxiangyu
 * @since: 2023-08-09
 * index.vue
-->
<template>
  <div class="container">
    <!-- 数据展示的区域 -->
    <div class="box" ref="box">
      <div class="top">我是祖国的</div>
      <div class="bottom">老花骨朵</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const box = ref(null);
// 初始值--设计稿的长宽
const width = 1920;
const height = 1080;

// 根据浏览器大小计算缩放比例
const getScale = () => {
  const ww = window.innerWidth / width;
  const hh = window.innerHeight / height;
  // 当宽度小于高度的比例,缩放比例按宽度的缩放来计算
  // 当宽度大于高度的比例,缩放比例按照高度的缩放来计算
  return ww < hh ? ww : hh;
  // return window.innerWidth/
};

/* 浏览器监听 resize 事件 */
const resize = () => {
  if (box.value) {
    box.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
  }
};
onMounted(() => {
  // 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
  if (box.value) {
    box.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
    box.value.style.width = `${width}px`;
    box.value.style.height = `${height}px`;
  }
  window.addEventListener("resize", resize);
});
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
}
.box {
  position: fixed;
  width: 100%;
  height: 100%;
  // width: 100vw;
  // height: 100vh;
  transform-origin: top left; //将在对元素进行变换的时候，围绕哪个点进行变化设置为左上角的坐标为(0,0)的点。默认情况，变换的原点在元素的中心点，即是元素X轴和Y轴的50%处
  left: 50%;
  top: 50%;
  background-color: greenyellow;
  // position: absolute;
}
.top {
  width: 300px;
  height: 300px;
  background-color: pink;
  margin: 50px;
}
.bottom {
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: skyblue;
  margin: 50px;
}
</style>
