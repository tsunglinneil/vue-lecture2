<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Mixins - List2</h1>
                <input v-model="filterStore">
                <ul>
                    <li v-for="store in filteredStores" :key="store">{{ store }}</li>
                </ul>
            </div>
            <button @click="stores.push('Test Item')">Add Test Item</button>
        </div>
    </div>
</template>

<script>
    // import mixins

    export default {
        // use mixins array
        data() {
            return {
                stores: ['KENUKE', 'Eslite', 'Uniqlo'],
                filterStore: ''
            }
        },
        computed: {
            filteredStores() {
                return this.stores.filter((element) => {
                    return element.toLowerCase().match(this.filterStore.toLowerCase());
                });
            }
        }
    }
</script>

<style>
</style>
