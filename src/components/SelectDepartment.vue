<template>
  <select id="department" class="form-control" @change="changeItem($event)">
    <option
      v-for="(item, index) in options"
      :key="item.name"
      :value="index"
    >{{ item.name }} | {{ index }}</option>
  </select>
</template>

<script>
export default {
  props: ["options", "value"],
  methods: {
    changeItem(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped>
</style>