<template>
  <div>
    <router-link :to="logo" class="logo">로고</router-link>
    <template v-if="isLogining">
      <a href="javascript:;" @click="logout">로그아웃</a>
      <span> {{ isUser }}</span
      >님 어서오세요
      <router-link to="99">구구단</router-link>
      <router-link to="ending">끝말</router-link>
      <router-link to="baseball">야구</router-link>
      <router-link to="subway"> 지하철</router-link>
    </template>
    <template v-else>
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </template>
  </div>
</template>

<script>
import { deleteCookie } from "@/utils/cookies";
export default {
  computed: {
    isLogining() {
      return this.$store.getters.isLogin;
    },
    isUser() {
      return this.$store.state.username;
    },
    logo() {
      return this.$store.getters.isLogin ? "/main" : "/";
    }
  },
  methods: {
    logout() {
      this.$store.commit("clearUser");
      deleteCookie("user");
      deleteCookie("auth");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
$log: logo;
.#{logo} {
  margin: 0 90px;
}
</style>
