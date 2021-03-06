import Vue from "vue";
import VuexPersistence from "vuex-persist";
import mutations from "./mutations";
import Vuex from "vuex";
import actions from "./action";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: null,
    user: [],
    reconnect: false,
    activeRoom: null,
    rooms: [],
    users: [],
    messages: [],
    userTyping: null
  },
  mutations,
  actions,
  getters: {
    hasError: state => (state.error ? true : false)
  },
  plugins: [vuexLocal.plugin],
  strict: debug
});
