import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    currentCounter: function(state) {
      console.log(state);
      return state.counter;
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
