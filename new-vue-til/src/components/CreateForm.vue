<template>
  <form @submit.prevent="submitForm">
    <h1>새글</h1>
    <div>
      <label for="title">title</label>
      <input type="text" id="title" v-model="title" />
    </div>
    <div>
      <label for="contents">contents</label>
      <input type="text" id="contents" v-model="contents" />
    </div>
    <button type="submit">등록하기</button>
  </form>
</template>

<script>
import { CreatePost } from "@/api/posts";
export default {
  data() {
    return {
      title: "",
      contents: ""
    };
  },
  methods: {
    async submitForm() {
      try {
        const data = {
          title: this.title,
          contents: this.contents
        };
        await CreatePost(data);
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
