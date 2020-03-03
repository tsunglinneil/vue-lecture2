import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        messageStateCustom: '',
        messageState: ''
    },
    mutations: {
        updateMessageStateCustom: (state, payload) => {
            state.messageStateCustom = payload;
        },
        updateMessageState: (state, payload) => {
            state.messageState = payload;
        }
    }
})