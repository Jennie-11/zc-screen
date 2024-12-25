import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./plugins";
Vue.use(router);
Vue.config.productionTip = false;
export default new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
