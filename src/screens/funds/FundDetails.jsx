import { useParams } from 'react-router-dom';
import PerformanceChart from '../../widgets/PerformanceChart.jsx';

export default function FundDetails() {
	const { id } = useParams();
	// Mock data for scaffold
	const fund = { id, name: 'Sample Fund', category: 'Equity', expense: 0.85, risk: 'Moderate', nav: 123.45 };
	const history = [
		{ t: 'Jan', v: 100 },
		{ t: 'Feb', v: 98 },
		{ t: 'Mar', v: 102 },
		{ t: 'Apr', v: 108 },
		{ t: 'May', v: 111 },
		{ t: 'Jun', v: 123 },
	];

	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<h2 style={{ marginTop: 0 }}>{fund.name}</h2>
					<p style={{ color: 'var(--color-muted)' }}>{fund.category}</p>
					<ul>
						<li>Expense ratio: {fund.expense}%</li>
						<li>Risk: {fund.risk}</li>
						<li>NAV: ${fund.nav}</li>
					</ul>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<h3 style={{ marginTop: 0 }}>Performance</h3>
					<PerformanceChart data={history} />
				</div>
			</div>
		</div>
	);
}


