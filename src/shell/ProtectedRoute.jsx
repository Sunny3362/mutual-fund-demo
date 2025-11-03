import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ roles, anyRole = false, children }) {
	const isAuthenticated = useSelector((s) => s.auth.isAuthenticated);
	const role = useSelector((s) => s.auth.role);
	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to="/login" replace state={{ from: location }} />;
	}

	if (roles && roles.length > 0) {
		if (anyRole) return children;
		if (!roles.includes(role)) {
			return <Navigate to="/dashboard" replace />;
		}
	}

	return children;
}


