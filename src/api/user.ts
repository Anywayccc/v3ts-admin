import Axios from "@/axios/axios";
import { loginData, loginResponse, userInfoResponse } from "./type";
// 定义接口
enum API {
  LOGIN = "/user/login",
  USER_INFO = "/user/info",
}

// 登录
export const Login = (data: loginData) => {
  return Axios.post<any, loginResponse>(API.LOGIN, data);
};

// 用户信息
export const UserInfo = () => {
  return Axios.get<any, userInfoResponse>(API.USER_INFO);
};
