import type { RouteRecordRaw } from "vue-router";
import type { checkUser } from "@/api/type";
// use中 state 的类型
export interface userStore {
  token: string | number | null;
  menuList: RouteRecordRaw[];
  userInfo: checkUser | null;
}
// set 中的 state 的类型
export interface settingStore {
  isCollapse: boolean;
}
