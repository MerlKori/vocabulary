import httpList from './requests';
// import Data from '@/store/modules/data/index';

function requestDecorator (fn) {
	return request => {
		// const token = Data.state[Data.types.state.USER_TOKEN];
		// const headers = new Headers();
		// headers.append('Authorization', `Bearer ${token}`);

		const options = {...request.options};
		return fn.call(null, request.url, options);
	};
}

const http = Object.keys(httpList).reduce((list, key) => {
	list[key] = requestDecorator(httpList[key]);
	return list;
}, {});

export default http;
