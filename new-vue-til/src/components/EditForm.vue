<template>
  <form @submit.prevent="submitForm">
    <h1>수정</h1>
    <div>
      <label for="title">title</label>
      <input type="text" id="title" v-model="title" />
    </div>
    <div>
      <label for="contents">contents</label>
      <input type="text" id="contents" v-model="contents" />
    </div>
    <button type="submit">수정하기</button>
  </form>
</template>

<script>
import { fetchPost, EditPost } from "@/api/posts";
export default {
  data() {
    return {
      title: "",
      contents: ""
    };
  },
  async created() {
    const { data } = await fetchPost(this.$route.params.id);
    console.log(data);
    this.title = data.title;
    this.contents = data.contents;
  },
  methods: {
    async submitForm() {
      const data = {
        title: this.title,
        contents: this.contents
      };
      const response = await EditPost(this.$route.params.id, data);
      console.log(response);
      this.$router.push("/main");
    }
  }
};
</script>

<style></style>
