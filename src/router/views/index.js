import Layout from "@/page/index/";
export default [
  {
    path: "/home",
    redirect: "/home/4D5F",
  },
  {
    name: "工作台",
    component: Layout,
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home/:floor",
        name: "产品四部设备监控",
        meta: {
          i18n: "home",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/home/index"),
      },
    ],
  },
];
