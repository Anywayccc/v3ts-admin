import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import App from "./App.vue";
// 导入svg文件
import "virtual:svg-icons-register";
// 引入自定义组建
import globalComponents from "@/utils/index";
//引入样式
import "@/styles/index.scss";
// 引入axios
// import axios from "axios";
// 引入路由
import router from "./router";

// 引入 pinia
import pinia from "@/store/index";

const app = createApp(App);
// console.log("globalComponents :>> ", globalComponents);

// 引用element-plus 国际化 zhCn 是中文
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(globalComponents);
app.use(router);
app.use(pinia);

app.mount("#app");
