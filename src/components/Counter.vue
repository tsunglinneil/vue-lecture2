<template>
  <div>
    Current Counter: {{ currentCounter }}
    <hr />
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="incrementCounter">
      Increment By mapMutaions
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
    // 透過mapMutations進行操作
    ...mapMutations(["incrementCounter"]),
  },
};
</script>

<style lang="scss"></style>
