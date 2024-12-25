import { setStore, getStore } from "@/utils/store";
import { loginByUsername, refreshToken } from "@/api/user/user";
import { validatenull } from "@/utils/validate";
import { Message } from "element-ui";
import md5 from "js-md5";
const user = {
  state: {
    userInfo: getStore({ name: "userInfo" }),
    token: getStore({ name: "token" }),
    refreshToken: getStore({ name: "refreshToken" }),
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      setStore({ name: "token", content: state.token });
    },
    SET_REFRESH_TOKEN: (state, refreshToken) => {
      state.refreshToken = refreshToken;
      setStore({ name: "refreshToken", content: state.refreshToken });
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({ name: "userInfo", content: state.userInfo });
    },
  },
  actions: {
    //根据用户名登录
    LoginByUsername({ dispatch, commit }, userInfo) {
      console.log(dispatch);
      return new Promise((resolve, reject) => {
        loginByUsername(
          userInfo.tenantId,
          userInfo.deptId,
          userInfo.roleId,
          userInfo.username,
          md5(userInfo.password),
          userInfo.type,
          userInfo.key,
          userInfo.code
        )
          .then(async (res) => {
            const data = res.data;
            if (data.error_description) {
              Message({
                message: data.error_description,
                type: "error",
              });
            } else {
              commit("SET_TOKEN", data.access_token);
              commit("SET_REFRESH_TOKEN", data.refresh_token);
              commit("SET_USER_INFO", data);
              resolve();
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    //刷新token
    RefreshToken({ state, commit }, userInfo) {
      window.console.log("handle refresh token");
      return new Promise((resolve, reject) => {
        refreshToken(
          state.refreshToken,
          state.tenantId,
          !validatenull(userInfo) ? userInfo.deptId : state.userInfo.dept_id,
          !validatenull(userInfo) ? userInfo.roleId : state.userInfo.role_id
        )
          .then((res) => {
            const data = res.data;
            commit("SET_TOKEN", data.access_token);
            commit("SET_REFRESH_TOKEN", data.refresh_token);
            commit("SET_USER_INFO", data);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    //注销session
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", "");
        commit("SET_USER_INFO", "");
        commit("SET_REFRESH_TOKEN", "");
        resolve();
      });
    },
  },
};
export default user;
