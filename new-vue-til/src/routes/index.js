import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/99",
      component: () => import("@/views/99Page"),
      meta: {
        auth: true
      }
    },
    {
      path: "/subway",
      component: () => import("@/views/subway"),
      meta: {
        auth: true
      }
    },
    {
      path: "/ending",
      component: () => import("@/views/ending"),
      meta: {
        auth: true
      }
    },
    {
      path: "/baseball",
      component: () => import("@/views/baseball"),
      meta: {
        auth: true
      }
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage")
    },
    {
      path: "/signup",
      component: () => import("@/views/SignupPage")
    },
    {
      path: "/main",
      component: () => import("@/views/MainPage"),
      meta: {
        auth: true
      }
    },
    {
      path: "/add",
      component: () => import("@/views/CreatePost"),
      meta: {
        auth: true
      }
    },
    {
      path: "/edit/:id",
      component: () => import("@/views/EditPost"),
      meta: {
        auth: true
      }
    },
    {
      path: "*",
      component: () => import("@/views/PagenotFound")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    next("/");
    return;
  }
  next();
});

export default router;
