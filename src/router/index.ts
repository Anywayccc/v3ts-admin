import { createRouter, createWebHashHistory } from "vue-router";
import routerOther from "./otherRouter";
import dynamicRouter from "./router";

const allRouter = [...routerOther, ...dynamicRouter];
const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes: allRouter,
});
export default router;

/// 写法一
// router.beforeEach((to, from, next) => {
//   // to 即将进入的 from 准备离开的
//   // console.log(to, "to");
//   // console.log(from, "from");
//   // next();
//   let token = localStorage.getItem("TOKEN");
//   // console.log(token, "token");
//   // 如果不是去往登录页面/没有 token,则直接去往登录页页面
//   if (!token && to.name !== "login") {
//     console.log("没有 token");
//     next({ name: "login" });
//   } else {
//     console.log("有 token");

//     next();
//   }
// });
/// 写法二
router.beforeEach((to, from) => {
  let token = localStorage.getItem("TOKEN");
  if (!token && to.name !== "login") {
    // return "/login";

    return { path: "/login" };
  }
  return true;
  // next();
});
