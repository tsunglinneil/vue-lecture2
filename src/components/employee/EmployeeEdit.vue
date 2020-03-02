<template>
  <div>
    <!-- 
      透過$route向Component傳遞參數，會造成高耦合情形，官方建議使用props
    -->
    <p>Employee Edit Page: {{ $route.params.id }}</p>
    <router-link :to="{ name: 'listEmployee' }" class="btn btn-success">
      List Page
    </router-link>
  </div>
</template>

<script>
import { backMixins } from "../../backMixin";

export default {
  mixins: [backMixins],
};
</script>

<style lang="scss"></style>
