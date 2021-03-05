<template>
  <div>
    <form @submit.prevent="submitForm">
      제시어 : <br />
      {{ word }} <br />
      <input type="text" v-model="value" />
    </form>
    <h1>{{ result }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: "진",
      result: "",
      value: ""
    };
  },
  methods: {
    submitForm() {
      if (this.word[this.word.length - 1] === this.value[0]) {
        this.result = "딩동";
        this.word = this.value;
        this.value = "";
      } else {
        this.result = "땡";
        this.value = "";
      }
    }
  }
};
</script>

<style></style>
