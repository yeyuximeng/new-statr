import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const skill = {
  state: {
    name: 'skill-name',
  },
  mutations: {
    SET_NAME(state, playLoad) {
      Vue.set(state, 'name', playLoad);
    },
  },
  actions: {

  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    skill,
  }
})
