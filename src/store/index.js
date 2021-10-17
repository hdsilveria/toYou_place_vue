import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import app from './app'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,

  },
  plugins: [new VuexPersistence().plugin]
})
