<template>
  <li>
    <p>
      {{ item.title }}
    </p>
    <span>
      {{ item.contents }}
    </span>
    <p>
      <a href="javascript:;" @click="deleteItem">삭제</a>|
      <a href="javascript:;" @click="edit">수정</a>
    </p>
  </li>
</template>

<script>
import { DeletePost } from "@/api/posts";
export default {
  props: {
    item: {
      type: Object,
      requierd: true
    }
  },
  methods: {
    async deleteItem() {
      try {
        await DeletePost(this.item._id);
        this.$emit("refresh");
      } catch (error) {
        console.log(error);
      }
    },
    edit() {
      this.$router.push(`/edit/${this.item._id}`);
    }
  }
};
</script>

<style></style>
