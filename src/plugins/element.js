import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import i18n from "@/i18n";
Vue.use(ElementUI, {
  size: "default",
  i18n: (key, value) => i18n.t(key, value),
});
