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
    <div>
      <label for="nickname">nickname</label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <button type="submit">회원가입</button>
  </form>
</template>

<script>
import { signup } from "@/api";
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    };
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        };
        await signup(userData);
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
