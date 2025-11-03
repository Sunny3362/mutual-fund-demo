export default function Admin() {
	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<h2 style={{ marginTop: 0 }}>Admin Dashboard</h2>
					<ul>
						<li>Manage users, roles, and permissions</li>
						<li>Update platform content (funds, articles, FAQs)</li>
						<li>Monitor user activity and metrics</li>
					</ul>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<h3 style={{ marginTop: 0 }}>Quick Actions</h3>
					<button>Invite User</button>
					<button style={{ marginLeft: 8 }}>Sync Funds</button>
				</div>
			</div>
		</div>
	);
}


