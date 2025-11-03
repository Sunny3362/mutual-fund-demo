import axios from 'axios';
import { store } from '../store/index.js';

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
});

api.interceptors.request.use((config) => {
	const state = store.getState();
	const token = state.auth.token;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});


