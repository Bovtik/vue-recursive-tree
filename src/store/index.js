import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import popups from './modules/popups.js'
import posters from './modules/posters.js'

Vue.use(Vuex)





const store = new Vuex.Store({
	modules: {
		user,
		popups,
		posters
	},
	state: {

	},
	getters: {

	},
	mutations: {
	
	},
	actions: {
		
	},
})

export default store
