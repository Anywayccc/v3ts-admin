import { checkUser } from "./../../api/type";
// 定义一个 use 仓库
import { defineStore } from "pinia";
// 引入登录 获取用户信息接口
import { Login, UserInfo } from "@/api/user";
// 引入本地存储工具
import {
  SET_TOKEN,
  GET_TOKEN,
  SET_USERINFO,
  GET_USERINFO,
} from "@/utils/token";
// 引入路由
import routerOther from "@/router/otherRouter";
import dynamicRouter from "@/router/router";
// 引入类型
import type { loginData, loginResponse } from "@/api/type";
import type { userStore } from "./type";
export const useStore = defineStore("useStore", {
  state: (): userStore => {
    return {
      // token: localStorage.getItem("TOKEN"),
      token: GET_TOKEN(), // token
      menuList: [...routerOther, ...dynamicRouter], //用户菜单
      userInfo: JSON.parse(GET_USERINFO() || "0"),
    };
  },
  actions: {
    async getToken(data: loginData) {
      let res: loginResponse = await Login(data);
      // console.log(dynamicRouter, "00000000");
      if (res.code === 200) {
        this.token = res.data.token;
        SET_TOKEN(res.data.token as string);
        // localStorage.setItem("TOKEN", res.data.token);
        return "ok";
      } else {
        return Promise.reject(new Error(res.data.message));
      }
    },
    async getUserInfo() {
      console.log("11111 :>> ");
      let res = await UserInfo();
      // console.log(JSON.stringify(res.data.checkUser), "9999");
      if (res.code === 200) {
        SET_USERINFO(JSON.stringify(res.data.checkUser));
        return "ok";
      } else {
        return Promise.reject(new Error(res.data.message));
      }
    },
  },
});
