<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters</h1>
                <p>{{ text | toUppercase | toLowercase | showLength}}</p>
                <hr>
                <input v-model="filterStore">
                <ul>
                    <li v-for="store in stores" :key="store">{{ store }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Vue Lecture-2',
                stores: ['KENUKE', 'Eslite', 'Uniqlo'],
                filterStore: ''
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            },
            toLowercase(value) {
                return value.toLowerCase();
            },
            showLength(value) {
                return value.length;
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
