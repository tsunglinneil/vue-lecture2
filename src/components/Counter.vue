<template>
  <div>
    Current Counter: {{ currentCounter }}
    <hr />
    <button class="btn btn-primary" @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  computed: {
    currentCounter() {
      return this.$store.getters.currentCounter;
    },
  },
  methods: {
    // 透過vue instance 中的 store 進行commit
    increment() {
      this.$store.commit("incrementCounter");
    },
  },
};
</script>

<style lang="scss"></style>
