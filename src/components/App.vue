<template>
  <div class="wrapper">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return { text: "Webpack" };
  },
};
</script>

<style lang="scss">
h1 {
  color: green;
}
</style>
