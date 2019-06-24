import resources from './resources';
import createApiModule from './template';

const api = (function createAPI () {
	const list = {};
	for (const key in resources) {
		list[key] = createApiModule(resources[key]);
	}
	return list;
}());

export default api;
