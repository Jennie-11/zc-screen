// 引入加载样式文件
import loadingTempalte from "./loading.vue";

// 定义插件对象
function loading() {
  return loading;
}
// Vue的install方法，用于定义vue插件
loading.install = (Vue) => {
  // 使用Vue构造器，创建加载“子类”
  const Loading = Vue.extend(loadingTempalte);
  // 实例化
  const $vm = new Loading();
  // el官方注解：
  // 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。
  // 在实例挂载之后，元素可以用 vm.$el 访问。
  // 如果在实例化时存在这个选项，实例将立即进入编译过程，否则，需要显式调用 vm.$mount() 手动开启编译
  // 提供的元素只能作为挂载点。所有的挂载元素会被 Vue 生成的 DOM 替换。因此不推荐挂载 root 实例到 <html> 或者 <body> 上。
  // 挂载到元素上;$el访问元素并插入到body中
  document.body.appendChild($vm.$mount().$el);
  // Vue原型上添加显示方法，以便全局调用
  Vue.prototype.$load = {
    // 显示
    show() {
      $vm.show = true;
    },
    // 关闭
    close() {
      $vm.show = false;
    },
  };
};

export default loading;
