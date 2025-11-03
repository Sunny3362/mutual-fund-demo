import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../store/slices/authSlice.js';

export default function Login() {
	const { register, handleSubmit, formState: { isSubmitting } } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/dashboard';

	async function onSubmit(values) {
		// Mock login for scaffold; replace with API call
		const mockUser = { id: 'u1', name: values.email };
		const mockToken = 'demo-token';
		const mockRole = values.role;
		dispatch(loginSuccess({ user: mockUser, token: mockToken, role: mockRole }));
		navigate(from, { replace: true });
	}

	return (
		<div className="card" style={{ maxWidth: 420, margin: '48px auto' }}>
			<h2 style={{ marginTop: 0 }}>Sign in</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="email">Email</label>
				<input id="email" type="email" placeholder="you@example.com" {...register('email', { required: true })} />
				<label htmlFor="password">Password</label>
				<input id="password" type="password" placeholder="••••••••" {...register('password', { required: true })} />
				<label htmlFor="role">Role</label>
				<select id="role" {...register('role', { required: true })}>
					<option value="Investor">Investor</option>
					<option value="Financial Advisor">Financial Advisor</option>
					<option value="Data Analyst">Data Analyst</option>
					<option value="Admin">Admin</option>
				</select>

				<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
					<button type="submit" disabled={isSubmitting}>Sign in</button>
				</div>
			</form>
		</div>
	);
}


