<template>
  <div class="wrapper">
    <h1>{{ text }}</h1>
    <h1>Web</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return { text: null };
  },
  created() {
    this.text = this.$store.getters.getText;
  },
};
</script>

<style lang="scss">
h1 {
  color: green;
}
</style>
