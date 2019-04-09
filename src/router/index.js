import Vue from "vue";
import Router from "vue-router";
import Home from "components/Home";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/", // 默认进入路由
      redirect: "/Home", //重定向
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
  ],
});

// 全局路由守卫

export default router;
