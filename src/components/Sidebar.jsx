import { NavLink } from 'react-router-dom';

export default function Sidebar() {
	return (
		<aside className="sidebar" aria-label="Secondary">
			<nav>
				<h3 style={{ marginTop: 0, marginBottom: 8 }}>Shortcuts</h3>
				<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
					<li><NavLink to="/funds">All Funds</NavLink></li>
					<li><NavLink to="/funds/compare">Compare</NavLink></li>
					<li><NavLink to="/resources">Education</NavLink></li>
				</ul>
			</nav>
		</aside>
	);
}


