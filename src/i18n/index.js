import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "./langs/zh";
import en from "./langs/en";
import ElementLocale from "element-ui/lib/locale";
import enLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";
import { getStore } from "@/utils/store";
ElementLocale.i18n((key, value) => i18n.t(key, value));
Vue.use(VueI18n); // 全局注册国际化包
const i18n = new VueI18n({
  locale: getStore({ name: "language" }) || "zh", //将语言标识存入localStorage
  messages: {
    // 中文语言包
    zh: {
      ...zh,
      ...zhLocale,
    },
    //英文语言包
    en: {
      ...en,
      ...enLocale,
    },
  },
  silentTranslationWarn: true, //解决vue-i18n黄色警告"value of key 'xxx' is not a s
  globalInjection: true, // 全局注入
  fallbackLocale: "zh", // 指定的locale没有找到对应的资源或当前语种不存在时，默认设置
});

export default i18n;
