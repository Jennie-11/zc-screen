export default [
  {
    path: "/login",
    name: "登录页",
    component: () =>
      import(/* webpackChunkName: "page" */ "@/page/login/index"),
    meta: {
      isAuth: false,
    },
  },
];
