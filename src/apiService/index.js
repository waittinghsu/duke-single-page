import request from '@/utils/http-request';

export const fetchUsers = () => {
	return request.get('/users');
};

export const fetchPosts = () => {
	return request.get('/posts');
};

export const fetchUserById = (id) => {
	return request.get(`/user/${id}`);
};
