<template>
  <div>
    <p>Get Current Counter By Store: {{ currentCounterByStore }}</p>
    <p>
      Get Current Counter By Store Getters: {{ currentCounterByStoreGetters }}
    </p>
    <p>Get Current Counter By mapGetters: {{ currentCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // 從vue instance 中 $store物件取得central store的state
    currentCounterByStore() {
      return this.$store.state.counter;
    },
    // 從vue instance 中 $store物件取得central store的getters
    currentCounterByStoreGetters() {
      return this.$store.getters.currentCounter;
    },
    // 從vuex提供mapGetters helper function 協助更簡潔的取得central store的getters
    ...mapGetters(["currentCounter"]),
  },
};
</script>

<style lang="scss"></style>
