export default function Resources() {
	const items = [
		{ title: 'Understanding Mutual Funds', type: 'Article' },
		{ title: 'Risk vs Reward Webinar', type: 'Webinar' },
		{ title: 'NAV and Expense Ratios Explained', type: 'Video' },
	];

	return (
		<div>
			<h2 style={{ marginTop: 0 }}>Educational Resources</h2>
			<div className="row" style={{ marginTop: 16 }}>
				{items.map((r) => (
					<div className="col" key={r.title}>
						<div className="card">
							<h3 style={{ marginTop: 0 }}>{r.title}</h3>
							<p style={{ color: 'var(--color-muted)' }}>{r.type}</p>
							<button>Open</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}


