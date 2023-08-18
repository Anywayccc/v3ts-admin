import { defineStore } from "pinia";
import { settingStore } from "./type";
export const useSetting = defineStore("useSetting", {
  state: (): settingStore => {
    return {
      isCollapse: false, // 是否折叠
    };
  },
  actions: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
});
