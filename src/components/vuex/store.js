import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  apiUrl: 'http://localhost:9000/api/'
}

export default new Vuex.Store({
  state
})
