<template>
  <div>
    Current Counter: {{ currentCounter }}
    <hr />
    <button class="btn btn-primary" @click="syncIncrement">
      Mutations Sync Increment
    </button>
    <button class="btn btn-primary" @click="asyncIncrement">
      Actions Async Increment By Dispatch
    </button>
    <button class="btn btn-primary" @click="asynIncrementCounter">
      Actions Async Increment By mapActions
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    currentCounter() {
      return this.$store.getters.currentCounter;
    },
  },
  methods: {
    // Mutations Sync commit 更新狀態
    syncIncrement() {
      this.$store.commit("incrementCounter");
    },
    // Actions Async dispatch 觸發actions function
    // actions function 透過context commit Mutations 更新狀態
    asyncIncrement() {
      this.$store.dispatch("asynIncrementCounter");
    },
    // 透過mapAction直接使用actions
    ...mapActions(["asynIncrementCounter"]),
  },
};
</script>

<style lang="scss"></style>
