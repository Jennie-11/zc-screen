/**
 * 全局配置文件
 */
export default {
  title: "MES系统",
  key: "ls-four", //配置主键,目前用于存储
  clientId: "saber", // 客户端id
  clientSecret: "saber_secret", // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  tokenTime: 3000,
  tokenHeader: "Blade-Auth",
  //http的status默认放行列表
  statusWhiteList: [420, 421],
  //配置首页不可关闭
  isFirstPage: false,
  firstPage: {
    value: "/home",
  },
  // 语言列表
  languageList: [
    {
      label: "中文",
      value: "zh",
    },
    {
      label: "EN",
      value: "en",
    },
  ],
};
