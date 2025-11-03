export default function Portfolio() {
	const holdings = [
		{ fund: 'Alpha Growth Fund', units: 120, nav: 123.45 },
		{ fund: 'Beta Balanced Fund', units: 200, nav: 87.32 },
	];
	const total = holdings.reduce((sum, h) => sum + h.units * h.nav, 0);

	return (
		<div className="card">
			<h2 style={{ marginTop: 0 }}>My Portfolio</h2>
			<table style={{ width: '100%', borderCollapse: 'collapse' }}>
				<thead>
					<tr>
						<th style={{ textAlign: 'left', padding: 8 }}>Fund</th>
						<th style={{ textAlign: 'right', padding: 8 }}>Units</th>
						<th style={{ textAlign: 'right', padding: 8 }}>NAV</th>
						<th style={{ textAlign: 'right', padding: 8 }}>Value</th>
					</tr>
				</thead>
				<tbody>
					{holdings.map((h) => (
						<tr key={h.fund}>
							<td style={{ padding: 8, borderTop: '1px solid var(--color-border)' }}>{h.fund}</td>
							<td style={{ padding: 8, textAlign: 'right', borderTop: '1px solid var(--color-border)' }}>{h.units}</td>
							<td style={{ padding: 8, textAlign: 'right', borderTop: '1px solid var(--color-border)' }}>${h.nav.toFixed(2)}</td>
							<td style={{ padding: 8, textAlign: 'right', borderTop: '1px solid var(--color-border)' }}>${(h.units * h.nav).toFixed(2)}</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="3" style={{ padding: 8, textAlign: 'right' }}>Total</td>
						<td style={{ padding: 8, textAlign: 'right' }}>${total.toFixed(2)}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}


