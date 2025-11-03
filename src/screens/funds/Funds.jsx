import { Link } from 'react-router-dom';

const mockFunds = [
	{ id: 'f1', name: 'Alpha Growth Fund', category: 'Equity', ytd: 12.4 },
	{ id: 'f2', name: 'Beta Balanced Fund', category: 'Hybrid', ytd: 7.1 },
	{ id: 'f3', name: 'Gamma Income Fund', category: 'Debt', ytd: 4.3 },
];

export default function Funds() {
	return (
		<div>
			<div className="row" style={{ alignItems: 'center' }}>
				<h2 style={{ margin: 0, flex: 1 }}>Explore Mutual Funds</h2>
				<Link to="/funds/compare"><button>Compare Funds</button></Link>
			</div>
			<div className="row" style={{ marginTop: 16 }}>
				{mockFunds.map((f) => (
					<div className="col" key={f.id}>
						<div className="card">
							<h3 style={{ marginTop: 0 }}>{f.name}</h3>
							<p style={{ color: 'var(--color-muted)' }}>{f.category}</p>
							<p>YTD: {f.ytd}%</p>
							<Link to={`/funds/${f.id}`}>View details</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}


