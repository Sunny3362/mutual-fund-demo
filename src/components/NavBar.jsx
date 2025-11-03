import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from './Logo.jsx';
import ThemeToggle from './ThemeToggle.jsx';

export default function NavBar() {
	const role = useSelector((s) => s.auth.role);
	const isAuthed = useSelector((s) => s.auth.isAuthenticated);

	return (
		<header className="app-header">
			<nav className="navbar container" aria-label="Main">
				<a href="#content" className="sr-only">Skip to content</a>
				<Logo />
				<div style={{ display: 'flex', gap: 12, marginLeft: 16 }}>
					<NavLink to="/dashboard">Home</NavLink>
					<NavLink to="/funds">Explore</NavLink>
					<NavLink to="/funds/compare">Compare</NavLink>
					{isAuthed && <NavLink to="/portfolio">Portfolio</NavLink>}
					<NavLink to="/resources">Resources</NavLink>
					{role === 'Admin' && <NavLink to="/admin">Admin</NavLink>}
					{role === 'Financial Advisor' && <NavLink to="/advisor">Advisor</NavLink>}
					{role === 'Data Analyst' && <NavLink to="/analyst">Analyst</NavLink>}
				</div>
				<div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
					<ThemeToggle />
					{!isAuthed && <NavLink to="/login">Login</NavLink>}
				</div>
			</nav>
		</header>
	);
}


