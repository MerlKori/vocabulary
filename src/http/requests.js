function request (url, options) {
	return new Promise((resolve, reject) => {
		fetch(url, options)
			.then(response => {
				if (response.status === 401) location.reload(); // eslint-disable-line
				if (response.status === 200) return response.json();
				if (response.status !== 200 && response.status !== 401) reject(response);
			})
			.then(data => resolve(data))
			.catch(err => reject(err));
	});
}

function post (url, options) {
	const reqOptions = {method: 'POST', ...options};
	return new Promise((resolve, reject) => {
		request(url, reqOptions)
			.then(response => resolve(response))
			.catch(err => reject(err));
	});
}

function put (url, options) {
	const reqOptions = {method: 'PUT', ...options};
	return new Promise((resolve, reject) => {
		request(url, reqOptions)
			.then(response => resolve(response))
			.catch(err => reject(err));
	});
}

function get (url, options = {}) {
	const reqOptions = {method: 'GET', ...options};
	return new Promise((resolve, reject) => {
		request(url, reqOptions)
			.then(response => resolve(response))
			.catch(err => reject(err));
	});
}

function remove (url, options) {
	const reqOptions = {method: 'DELETE', ...options};
	return new Promise((resolve, reject) => {
		request(url, reqOptions)
			.then(response => resolve(response))
			.catch(err => reject(err));
	});
}

export default {
	post,
	put,
	get,
	remove
};
