/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from "axios";
import store from "@/store/";
import router from "@/router/";
import { serialize } from "@/utils/util";
import { Message } from "element-ui";
import { getStore } from "@/utils/store";
import website from "@/config/website";
import { Base64 } from "js-base64";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { debounce } from "lodash-es";
import context from "../main";

let LoadingRequestCount = 0;
const showLoading = () => {
  if (LoadingRequestCount === 0) context.$load.show();
  LoadingRequestCount++;
};

const hideLoading = () => {
  LoadingRequestCount--;
  LoadingRequestCount = Math.max(LoadingRequestCount, 0);
  if (LoadingRequestCount === 0) toHideLoading();
};

var toHideLoading = debounce(() => {
  context.$load.close();
}, 100);

//默认超时
axios.defaults.timeout = 10000;

//返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500;
};

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

// NProgress 配置
NProgress.configure({
  showSpinner: false,
});

//http request拦截
axios.interceptors.request.use(
  (config) => {
    if (config.isShowLoading !== false) showLoading();
    NProgress.start();
    const authorization = config.authorization === false;
    if (!authorization) {
      let factId = getStore({ name: "factoryId" });
      config.headers["Authorization"] = `Basic ${Base64.encode(
        `${website.clientId}:${website.clientSecret}`
      )}`;
      config.headers["Factory-Id"] = factId || "0";
    }
    let token = getStore({ name: "token" });
    const meta = config.meta || {};
    const isToken = meta.isToken === false;
    if (token && !isToken) {
      config.headers[website.tokenHeader] = "bearer " + token;
    }
    if (config.text === true) {
      config.headers["Content-Type"] = "text/plain";
    }
    if (config.method === "post" && meta.isSerialize === true) {
      config.data = serialize(config.data);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//http response 拦截
axios.interceptors.response.use(
  (res) => {
    if (res.config.isShowLoading !== false) hideLoading();
    NProgress.done();
    const status = res.data.code || res.status;
    const statusWhiteList = website.statusWhiteList || [];
    const message = res.data.msg || res.data.error_description || "服务器异常";
    if (statusWhiteList.includes(status)) return Promise.reject(res);
    if (status == 401)
      store.dispatch("FedLogOut").then(() => router.push({ path: "/login" }));
    if (status != 200) {
      Message({
        message: message,
        type: "error",
        duration: 2000,
      });
      return Promise.reject(new Error(message));
    }
    return res;
  },
  (error) => {
    if (error.config.isShowLoading !== false) hideLoading();
    NProgress.done();
    console.log(error, "error");
    if (error.code == "ERR_NETWORK") {
      Message({
        message: "网络连接异常，请检查",
        type: "error",
        duration: 2000,
      });
      return Promise.reject(new Error(error.message));
    }
    if (error.message && error.message.includes("timeout")) {
      Message({
        message: "请求超时",
        type: "error",
        duration: 2000,
      });
      return Promise.reject(new Error(error.message));
    }

    const status = error.response.data.code || error.status;
    const statusWhiteList = website.statusWhiteList || [];
    const message =
      error.response.data.msg ||
      error.response.data.error_description ||
      "服务器异常";
    if (statusWhiteList.includes(status)) return Promise.reject(error.response);
    if (status == 401)
      store.dispatch("FedLogOut").then(() => router.push({ path: "/login" }));

    if (status != 200) {
      Message({
        message: message,
        type: "error",
        duration: 2000,
      });
    }

    return Promise.reject(new Error(error.response));
  }
);

export default axios;
