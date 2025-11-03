import { createSlice } from '@reduxjs/toolkit';

const tokenKey = 'mf_token';
const roleKey = 'mf_role';

const initialState = {
	user: null,
	role: localStorage.getItem(roleKey) || null,
	token: localStorage.getItem(tokenKey) || null,
	isAuthenticated: Boolean(localStorage.getItem(tokenKey)),
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess(state, action) {
			const { user, token, role } = action.payload;
			state.user = user;
			state.role = role;
			state.token = token;
			state.isAuthenticated = true;
			localStorage.setItem(tokenKey, token);
			localStorage.setItem(roleKey, role);
		},
		logout(state) {
			state.user = null;
			state.role = null;
			state.token = null;
			state.isAuthenticated = false;
			localStorage.removeItem(tokenKey);
			localStorage.removeItem(roleKey);
		},
	},
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;


