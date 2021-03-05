<template>
  <div>
    <ul>
      <fetch-post
        v-for="item in listItems"
        :key="item._id"
        :item="item"
        @refresh="getData"
      ></fetch-post>
    </ul>
    <router-link to="/add"> 작성</router-link>
  </div>
</template>

<script>
import { fetchPosts } from "@/api/posts";
import FetchPost from "@/components/FetchPost.vue";

export default {
  components: { FetchPost },
  data() {
    return {
      listItems: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const { data } = await fetchPosts();
        this.listItems = data.posts;
        console.log(this.listItems);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
