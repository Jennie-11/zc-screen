import { getCommonEnum } from "@/api/base/base.js";
export const enumFetchApi = {
  install(Vue) {
    // 定义一个获取枚举数据的函数，并返回一个 Promise
    async function fetchEnum(url, codes) {
      if (!Array.isArray(codes)) return false;
      try {
        const res = await getCommonEnum(url, codes);
        let list = res.data.data;
        if (!list.length) return [];
        let result = {};
        list.forEach((item) => {
          result[item.key] = item.list;
        });
        return result;
      } catch (error) {
        // 如果请求失败，抛出错误
        throw new Error(error);
      }
    }

    // 将 fetchEnum 函数添加到 Vue.prototype 中
    Vue.prototype.$fetchEnumApi = fetchEnum;
  },
};
