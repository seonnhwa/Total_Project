import Vue from 'vue'
import Vuex from 'vuex'
import Drink from './models/drink'
import Search from './models/search'
import Vote from './models/vote'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    Drink,
    Search,
    Vote
  }
})
