// 存储token
export const SET_TOKEN = (token: string) => {
  localStorage.setItem("TOKEN", token);
};

// 获取 localstorage 的 token
export const GET_TOKEN = () => {
  return localStorage.getItem("TOKEN");
};
// 存储用户信息
export const SET_USERINFO = (userInfo: string) => {
  return localStorage.setItem("userInfo", userInfo);
};
// 获取用户信息
export const GET_USERINFO = () => {
  return localStorage.getItem("userInfo");
};
