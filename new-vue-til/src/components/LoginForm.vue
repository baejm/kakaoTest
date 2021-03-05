<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">username</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">password</label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import { saveAuthToCookie, saveUserToCookie } from "@/utils/cookies";
import { login } from "@/api";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password
        };
        const { data } = await login(userData);
        this.$store.commit("setUser", data);
        saveAuthToCookie(this.$store.state.token);
        saveUserToCookie(this.$store.state.username);
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
