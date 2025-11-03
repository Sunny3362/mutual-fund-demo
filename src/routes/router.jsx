import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from '../shell/RootLayout.jsx';
import ProtectedRoute from '../shell/ProtectedRoute.jsx';

const Login = lazy(() => import('../screens/auth/Login.jsx'));
const Dashboard = lazy(() => import('../screens/dashboard/Dashboard.jsx'));
const Funds = lazy(() => import('../screens/funds/Funds.jsx'));
const FundDetails = lazy(() => import('../screens/funds/FundDetails.jsx'));
const Compare = lazy(() => import('../screens/funds/Compare.jsx'));
const Portfolio = lazy(() => import('../screens/portfolio/Portfolio.jsx'));
const Resources = lazy(() => import('../screens/resources/Resources.jsx'));
const Admin = lazy(() => import('../screens/admin/Admin.jsx'));
const Advisor = lazy(() => import('../screens/advisor/Advisor.jsx'));
const Analyst = lazy(() => import('../screens/analyst/Analyst.jsx'));

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Navigate to="/dashboard" replace /> },
			{ path: 'login', element: <Login /> },
			{
				path: 'dashboard',
				element: (
					<ProtectedRoute anyRole>
						<Dashboard />
					</ProtectedRoute>
				),
			},
			{
				path: 'funds',
				children: [
					{ index: true, element: <Funds /> },
					{ path: ':id', element: <FundDetails /> },
					{ path: 'compare', element: <Compare /> },
				],
			},
			{ path: 'portfolio', element: (
				<ProtectedRoute roles={["Investor"]}>
					<Portfolio />
				</ProtectedRoute>
			)},
			{ path: 'resources', element: <Resources /> },
			{ path: 'admin', element: (
				<ProtectedRoute roles={["Admin"]}>
					<Admin />
				</ProtectedRoute>
			)},
			{ path: 'advisor', element: (
				<ProtectedRoute roles={["Financial Advisor"]}>
					<Advisor />
				</ProtectedRoute>
			)},
			{ path: 'analyst', element: (
				<ProtectedRoute roles={["Data Analyst"]}>
					<Analyst />
				</ProtectedRoute>
			)},
		],
	},
]);


