import {mutations} from '@/store/index';
import storeTypes from '@/store/types';
import http from './http/index';
import API from '@/api/index';

const s = storeTypes.state;
const m = storeTypes.mutations;

console.log({
	API,
	mutations,
	storeTypes,
	http
});

mutations[m.SET_DATA_AT_INITIALIZATION]({
	data: [1, 3],
	entity: s.DICTONARY
});


const initList = [
	{
		request: API.dictonary.getAll,
		entity: s.DICTONARY
	},
	{
		request: API.tags.getAll,
		entity: s.TAGS
	}
];

function initData () {
	initList.forEach(i => {
		http.get(i.request)
			.then(data => {
				mutations[m.SET_DATA_AT_INITIALIZATION]({
					data: data.result,
					entity: i.entity
				});
			});
	});
}

export default initData;
