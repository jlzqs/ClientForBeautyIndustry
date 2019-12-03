import Vue from 'vue'
import Vuex from 'vuex'

import departmentState from './department';
import serviceItemState from './serviceItem';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    departmentState,
    serviceItemState,
  }
})
