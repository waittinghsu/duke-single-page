import axios from 'axios';

// Simulated data
const data = {
	users: [
		{ id: 1, name: 'John Doe', email: 'john@example.com' },
		{ id: 2, name: 'Jane Doe', email: 'jane@example.com' }
	],
	posts: [
		{ id: 1, title: 'Hello World', content: 'This is a test post.' },
		{ id: 2, title: 'Vue 3 is great', content: 'Vue 3 is now officially released!' }
	]
};

// Create an axios instance
const service = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 50000,
	headers: { "Content-Type": "application/json;charset=utf-8" },
});

// Add a request interceptor
service.interceptors.request.use(config => {
	// You can modify the request configuration here if needed
	return config;
}, error => {
	return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(response => {
	// Simulate different API endpoints based on the URL
	const { code, msg, url } = response.config;
	if (url.includes('/users')) {
		response.data = data.users;
	} else if (url.includes('/posts')) {
		response.data = data.posts;
	} else if (url.match(/\/user\/\d+/)) {
		const userId = parseInt(url.split('/').pop());
		response.data = data.users.find(user => user.id === userId);
	}

	return response;
}, error => {
	return Promise.reject(error);
});

export default service;
