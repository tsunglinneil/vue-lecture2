<template>
  <div>
    <p>Employee Detail Page: {{ id }}</p>
    <router-link
      :to="{ name: 'editEmployee' }"
      tag="button"
      class="btn btn-info"
    >
      Edit
    </router-link>
  </div>
</template>

<script>
// props type check: https://vuejs.org/v2/guide/components-props.html#Type-Checks

export default {
  // 透過props向component傳遞route(路由)參數
  props: {
    id: {
      type: String,
      default: "0",
    },
  },
};
</script>

<style scoped></style>
