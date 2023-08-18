import svgIcon from "./svgIcon/index.vue";
import copy from "./svgIcon copy/index.vue";
import type { App, Component } from "vue";
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const allGlobals: Component = { copy, svgIcon };
// const allGlobals = [copy, svgIcon];
console.log("object.key(allGlobals) :>> ", Object.keys(allGlobals));
// 对外暴露自定义插件
export default {
  install(app: App) {
    Object.keys(allGlobals).forEach((item) => {
      // 注册所有的全局组建
      app.component(item, allGlobals[item]);
    });
    //  全局注册 element-puls图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
