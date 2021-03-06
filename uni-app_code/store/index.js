import Vue from "vue"
import Vuex from 'vuex'
import state from './state'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})

export default store
