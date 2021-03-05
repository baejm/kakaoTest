<template>
  <div>
    <form @submit.prevent="submitForm">
      랜덤 {{ first }} x 랜덤 {{ second }}
      <br />
      결과 <input type="text" v-model="value" ref="th" />
      <br />
      <button type="submit">확인</button>
      <h1>{{ result }}</h1>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: Math.ceil(Math.random() * 9),
      second: Math.floor(Math.random() * 9) + 1,
      result: "",
      value: ""
    };
  },
  methods: {
    submitForm() {
      if (this.first * this.second === parseInt(this.value)) {
        this.result = "딩동댕";
        this.$refs.th.focus();
        this.first = Math.ceil(Math.random() * 9);
        this.second = Math.floor(Math.random() * 9) + 1;
        this.value = "";
      } else {
        this.result = "땡";
        this.$refs.th.focus();
        this.value = "";
      }
    }
  }
};
</script>

<style></style>
