import Vue from "vue";
import Vuex from "vuex";
import { getAuthFromCookie, getUserFromCookie } from "@/utils/cookies";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || ""
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    }
  },
  mutations: {
    setUser(state, User) {
      state.username = User.user.username;
      state.token = User.token;
    },
    clearUser(state) {
      state.username = "";
      state.token = "";
    }
  }
});
