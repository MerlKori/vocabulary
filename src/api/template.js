const addQueryParams = (url, params, key = 'id') => {
	const newUrl = new URL(url);
	params.forEach(p => newUrl.searchParams.append(key, p));
	return newUrl.href;
};

const toJson = data => JSON.stringify(data);

const createEndpointData = url => ({
	getAll: {url},
	create (body) {
		return {
			url,
			options: {
				body: toJson(body)
			}
		};
	},
	edit (body) {
		return {
			url,
			options: {
				body: toJson(body)
			}
		};
	},
	remove (params) {
		return {
			url: addQueryParams(url, params)
		};
	}
});

export default createEndpointData;
