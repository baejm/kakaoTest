import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import router from "@/routes";

Vue.config.productionTip = false;

// window.Kakao.init("b769fdca65b8a9ca2763c18e8cf41d65");

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
