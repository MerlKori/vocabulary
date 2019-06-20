import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modulesList = {

};

export const modules = (function createList () {
	const list = {};
	for (const name in modulesList) {
		list[name] = {
			name,
			types: modulesList[name].types
		};
	}
	return list;
}());

export default new Vuex.Store({
	modules: modulesList
});
