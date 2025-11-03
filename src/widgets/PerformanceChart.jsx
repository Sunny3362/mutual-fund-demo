import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function PerformanceChart({ data }) {
	const labels = data.map((d) => d.t);
	const values = data.map((d) => d.v);
	return (
		<Line
			data={{
				labels,
				datasets: [
					{
						label: 'NAV',
						data: values,
						borderColor: '#5cc8ff',
						backgroundColor: 'rgba(92, 200, 255, 0.2)',
						tension: 0.3,
						pointRadius: 0,
					},
				],
			}}
			options={{
				responsive: true,
				plugins: { legend: { display: false } },
				scales: {
					x: { grid: { color: 'rgba(255,255,255,0.06)' } },
					y: { grid: { color: 'rgba(255,255,255,0.06)' } },
				},
			}}
		/>
	);
}


