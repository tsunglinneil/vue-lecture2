<template>
  <ul class="nav nav-tabs">
    <!-- Use tag -->
    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>
    <!-- Default -->
    <router-link to="/employee" tag="li" active-class="active">
      <a>Employee</a>
    </router-link>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
