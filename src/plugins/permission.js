/**
 * 全站权限配置
 *
 */
// import { findByProperty } from "@/utils/util";
// import router from "@/router/";
// import { resetRouter } from "@/router/";
// import store from "@/store/";
// import { filterAsyncRouter } from "@/utils/router";
// import NProgress from "nprogress";
// import website from "@/config/website";
// import "nprogress/nprogress.css";
// NProgress.configure({ showSpinner: false });
// import { getStore } from "@/utils/store";
// router.beforeEach((to, from, next) => {
//   const meta = to.meta || {};
//   let token = getStore({ name: "token" });
//   if (token) {
//     if (!to.name) {
//       resetRouter();
//       let menuList = getStore({ name: "asyncRoute" }) || [];
//       let list = filterAsyncRouter(menuList, true) || [];
//       list.push({
//         path: "*",
//         redirect: "/404",
//         hidden: true,
//       });
//       list.forEach((item) => {
//         router.addRoute(item);
//       });

//       next({ ...to, replace: true });
//     } else if (to.path === "/login") {
//       next({ path: "/" });
//     } else {
//       const value = to.query.src || to.fullPath;
//       const label = to.query.name || to.name;
//       const i18n = to.query.i18n;
//       if (meta.isTab !== false) {
//         store.commit("ADD_TAG", {
//           label: label,
//           value: value,
//           params: to.params,
//           query: to.query,
//           meta: (() => {
//             if (!i18n) {
//               return meta;
//             }
//             return {
//               i18n: i18n,
//             };
//           })(),
//           group: [],
//         });
//       }
//       next();
//     }
//   } else {
//     if (meta.isAuth === false) {
//       next();
//     } else {
//       next("/login");
//     }
//   }
// });

// router.afterEach((to) => {
//   document.title = to.name + " - " + website.title;
//   let tem = "/" + to.fullPath.split("/")[1];
//   const item = findByProperty(store.state.user.allMenu, "path", tem);
//   if (item) store.commit("SET_ACTIVE_MENU", item.children);
//   NProgress.done();
// });
