import Layout from "@/page/index/";
export default [
  {
    name: "工作台",
    component: Layout,
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "首页",
        meta: {
          i18n: "home",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/home/index"),
      },
    ],
  },
];
