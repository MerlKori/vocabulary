import Vue from 'vue';
import Vuex from 'vuex';
import types from './types';
import {UTILS_deepCopy} from '@/UTILS';

const s = types.state;
// const g = types.getters;
const m = types.mutations;
const a = types.actions;

Vue.use(Vuex);

const state = (function initState () {
	const temp = {};
	for (const name in s) {
		temp[s[name]] = [];
	}
	return temp;
}());

const mutations = {
	[m.SET_DATA] (state, {entity, data}) {
		state[entity] = data;
	},
	[m.SET_DATA_AT_INITIALIZATION] ({entity, data}) {
		state[entity] = data;
	}
};
mutations[m.SET_DATA_AT_INITIALIZATION] = mutations[m.SET_DATA_AT_INITIALIZATION].bind(state);

const actions = {
	[a.CREATE] ({commit, state}, {entity, element}) {
		const copyData = UTILS_deepCopy(state[entity]);
		copyData.push(element);
		commit(m.SET_DATA, {entity, data: copyData});
	},
	[a.EDIT] ({commit, state}, {entity, element}) {
		const copyData = UTILS_deepCopy(state[entity]);
		const idx = copyData.findIndex(i => i.id === element.id);
		if (idx === undefined) {
			console.log('element not found');
			return;
		}
		copyData[idx] = {...copyData[idx], ...element};
		commit(m.SET_DATA, {entity, data: copyData});
	},
	[a.REMOVE] ({commit, state}, {entity, ids}) {
		const data = state[entity].filter(i => !ids.includes(i.id));
		commit(m.SET_DATA, {entity, data});
	}
};


export default new Vuex.Store({
	state,
	mutations,
	actions
});
