import axios from './indexApi';

export const login = (credentials) =>
  axios.post('/auth/login', credentials);

export const register = (userData) => {
  axios.post('/auth/register', userData);
};

export const logout = () => axios.post('/auth/logout');

export const getCurrentUser = () => axios.get('/auth/me');
