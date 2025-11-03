import { useSelector } from 'react-redux';

export default function Dashboard() {
	const role = useSelector((s) => s.auth.role) || 'Guest';

	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<h2 style={{ marginTop: 0 }}>Welcome, {role}</h2>
					<p>Use the navigation to explore funds, compare options, and manage your portfolio.</p>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<h3 style={{ marginTop: 0 }}>Quick Links</h3>
					<ul>
						<li>Explore funds</li>
						<li>Compare funds</li>
						<li>View portfolio</li>
					</ul>
				</div>
			</div>
		</div>
	);
}


