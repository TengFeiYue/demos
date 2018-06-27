import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
	showFooter: true
};
const getters = {
	isShow(state) {
		return state.showFooter
	}
};
const mutations = {
	show(state) {
		state.showFooter = true;
	},
	hide(state) {
		state.showFooter = false;
	}
};
const actions = {
	hideFooter(context) {
		context.commit('hide');
	},
	showFooter(context) {
		context.commit('show');
	}
};
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});