<template>
  <div>
    <h1 v-html="time"></h1>
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      time: new Date(),
    };
  },
  components: {},
};
</script>

<style>
</style>