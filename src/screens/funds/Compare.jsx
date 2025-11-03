const rows = [
	{ name: 'Alpha Growth Fund', expense: 0.85, ytd: 12.4, risk: 'High' },
	{ name: 'Beta Balanced Fund', expense: 0.62, ytd: 7.1, risk: 'Moderate' },
	{ name: 'Gamma Income Fund', expense: 0.40, ytd: 4.3, risk: 'Low' },
];

export default function Compare() {
	return (
		<div className="card">
			<h2 style={{ marginTop: 0 }}>Compare Funds</h2>
			<div style={{ overflowX: 'auto' }}>
				<table style={{ width: '100%', borderCollapse: 'collapse' }}>
					<thead>
						<tr>
							<th style={{ textAlign: 'left', padding: 8 }}>Fund</th>
							<th style={{ textAlign: 'right', padding: 8 }}>Expense</th>
							<th style={{ textAlign: 'right', padding: 8 }}>YTD</th>
							<th style={{ textAlign: 'left', padding: 8 }}>Risk</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((r) => (
							<tr key={r.name}>
								<td style={{ padding: 8, borderTop: '1px solid var(--color-border)' }}>{r.name}</td>
								<td style={{ padding: 8, textAlign: 'right', borderTop: '1px solid var(--color-border)' }}>{r.expense}%</td>
								<td style={{ padding: 8, textAlign: 'right', borderTop: '1px solid var(--color-border)' }}>{r.ytd}%</td>
								<td style={{ padding: 8, borderTop: '1px solid var(--color-border)' }}>{r.risk}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}


