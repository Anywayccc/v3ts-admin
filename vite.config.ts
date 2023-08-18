import { defineConfig, UserConfigExport, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 引入svg
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// mock
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 项目中使用svg图标存放地址是src/assets/icons
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 使用方式是icon-name
        symbolId: "icon-[dir]-[name]",
      }),
      // 开发环境启用插件mock
      viteMockServe({
        mockPath: "mock",
        enable: true,
        // enable: command === "serve",
        // localEnabled: command === "serve", //保证开发阶段可以使用mock
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // 配置全局变量文件
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
};
