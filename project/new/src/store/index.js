import { createStore } from "vuex";

export default createStore({
  state: {
    points: 0,
  },
  mutations: {
    updatePoints(state, payload) {
      state.points = state.points + payload;
    },
  },
  actions: {},
  modules: {},
});
