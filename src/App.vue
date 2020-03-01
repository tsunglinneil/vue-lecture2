<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Mixins - List1</h1>
        <p>{{text}}</p>
        <input v-model="filterStore" />
        <ul>
          <li v-for="store in filteredStores" :key="store">{{ store }}</li>
        </ul>
      </div>
      <hr />
      <store-list></store-list>
    </div>
  </div>
</template>

<script>
import StoreList from "./StoreList.vue";

export default {
  data() {
    return {
      text: "Vue Lecture-2",
      stores: ["KENUKE", "Eslite", "Uniqlo"],
      filterStore: ""
    };
  },
  computed: {
    filteredStores() {
      return this.stores.filter(element => {
        return element.toLowerCase().match(this.filterStore.toLowerCase());
      });
    }
  },
  components: {
    StoreList
  },
  created() {
    console.log('')
  }
};
</script>

<style>
</style>
