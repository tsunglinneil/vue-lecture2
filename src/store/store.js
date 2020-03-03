import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        currentCounter: state => {
            return state.counter;
        }
    },
    mutations: {
        incrementCounter: state => {
            state.counter++;
        }
    },
    actions: {
        asynIncrementCounter: context => {
            setTimeout(() => {
                context.commit('incrementCounter');
            }, 1000);
        }
    }
})