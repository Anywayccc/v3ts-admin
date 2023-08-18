// 登录接口需要携带的参数
export interface loginData {
  username: string;
  password: string;
}

// type dataInfo = {
//   token: string;
// };
interface dataInfo {
  token: string;
  message: string;
}
// 登录接口返回的参数
export interface loginResponse {
  code: number;
  data: dataInfo;
}

export interface checkUser {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
// 获取用户信息
export interface userInfoResponse {
  code: number;
  data: checkUser;
}
