const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = defineConfig({
  // //路径前缀
  publicPath: "/zc-screen",
  // publicPath: "/link",
  assetsDir: "assets",
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      scss: {
        additionalData: '@import "@/styles/global.scss";',
      },
    },
  },
  devServer: {
    client: {
      overlay: false,
    },
    hot: true, // 开启热更新
    port: 1888,
    open: true, // 自动打开
    proxy: {
      "/api": {
        // target: "http://10.0.48.7",
        // target: "https://hrdev.trio-gz.com/api", //映射
        target: "http://192.168.100.94:18888/api", //94测试环境
        ws: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
});
