import { GET_TOKEN } from "@/utils/token";
import axios from "axios";
import { ElMessage } from "element-plus";
import { GET_TOKEN } from "@/utils/token";
// 创建 axios 实例
let Axios = axios.create({
  // 请求头
  // import.meta.env获取环境变量
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 延时
  timeout: 5000,
});

// 请求拦截
Axios.interceptors.request.use(
  (config) => {
    // config配置对象,header请求头,经常给服务器携带公共参数
    if (GET_TOKEN()) {
      config.headers.token = GET_TOKEN();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
Axios.interceptors.response.use(
  (res) => {
    // 成功的返回
    console.log(" 这是成功的返回 :>> ", res.data);
    if (res.data.code === 200) {
      // console.log(11111)
      return res.data;
    } else {
      // ElMessage({
      //   message: res.data.data.message,
      //   type: "warning",
      // });
      // console.log(2222);
      return Promise.reject(new Error(res.data.data.message));
    }
  },
  (error) => {
    // 失败的返回
    console.log(" 这是失败的返回error :>> ", error);

    let msg: string = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        msg = "token过期";
        break;
      case 403:
        msg = "无权访问";
        break;
      case 404:
        msg = "请求地址错误";
        break;
      case 5004:
        msg = "服务器出现问题";
        break;
      default:
        msg = "网络问题";
    }
    ElMessage({
      message: msg,
      type: "warning",
    });
    return Promise.reject(error);
  }
);

export default Axios;
