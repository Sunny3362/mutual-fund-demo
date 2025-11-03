export default function Advisor() {
	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<h2 style={{ marginTop: 0 }}>Advisor Workspace</h2>
					<ul>
						<li>Create and publish educational content</li>
						<li>Provide guidance to investors</li>
						<li>Assist with fund selection by risk/goal</li>
					</ul>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<h3 style={{ marginTop: 0 }}>New Content</h3>
					<button>New Article</button>
					<button style={{ marginLeft: 8 }}>New Webinar</button>
				</div>
			</div>
		</div>
	);
}


