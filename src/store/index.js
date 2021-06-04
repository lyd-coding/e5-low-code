import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "light",
  },
  mutations: {
    CHANGE_THEME: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
  },
  actions: {
    changeTheme({ commit }) {
      commit("CHANGE_THEME");
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
