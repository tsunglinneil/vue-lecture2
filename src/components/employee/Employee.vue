<template>
  <div>
    <h1>Employee Page</h1>
    <button @click="backHome" class="btn btn-primary">Home Page</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import { backMixins } from "../../backMixin";

export default {
  mixins: [backMixins]
};
</script>

<style lang="scss"></style>
