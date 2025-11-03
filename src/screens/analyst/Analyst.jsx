export default function Analyst() {
	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<h2 style={{ marginTop: 0 }}>Analyst Console</h2>
					<ul>
						<li>Analyze investment trends</li>
						<li>Update fund performance data</li>
						<li>Generate platform and behavior reports</li>
					</ul>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<h3 style={{ marginTop: 0 }}>Data Actions</h3>
					<button>Import NAV</button>
					<button style={{ marginLeft: 8 }}>Run Report</button>
				</div>
			</div>
		</div>
	);
}


