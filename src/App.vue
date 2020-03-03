<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>一般Case</h1>
        <div class="form-group">
          <label for="messageData">messageData</label>
          <input
            type="text"
            id="messageData"
            class="form-control"
            v-model="messageData"
          />
          <p>messageData: {{ messageData }}</p>
        </div>
        <hr />
        <h1>Vuex Special Case - Implement V-Model</h1>
        <div class="form-group">
          <label for="messageStateCustom">messageStateCustom</label>
          <input
            type="text"
            id="messageStateCustom"
            class="form-control"
            :value="messageStateCustom"
            @input="updateMessageStateCustom"
          />
          <p>messageStateCustom: {{ messageStateCustom }}</p>
        </div>
        <hr />
        <h1>Vuex Special Case - Use V-Model</h1>
        <div class="form-group">
          <label for="messageState">messageState</label>
          <input
            type="text"
            id="messageState"
            class="form-control"
            v-model="messageState"
          />
          <p>messageState: {{ messageState }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      messageData: "",
    };
  },
  methods: {
    updateMessageStateCustom(event) {
      this.$store.commit("updateMessageStateCustom", event.target.value);
    },
  },
  computed: {
    ...mapState({
      messageStateCustom: (state) => {
        return state.messageStateCustom;
      },
    }),
    messageState: {
      get() {
        return this.$store.state.messageState;
      },
      set(value) {
        this.$store.commit("updateMessageState", value);
      },
    },
  },
};
</script>

<style lang="scss"></style>
