import Vue from 'vue';
import Vuex from 'vuex';

import state from './states';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  actions
});