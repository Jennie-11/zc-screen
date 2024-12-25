import Vue from "vue";
import VueRouter from "vue-router";
import pages from "./page";
import views from "./views";
Vue.use(VueRouter);

const createRouter = () =>
  new VueRouter({
    routes: [...pages, ...views],
  });

const router = createRouter();

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);

  return originalPush.call(this, location).catch((err) => err);
};

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
export default router;
