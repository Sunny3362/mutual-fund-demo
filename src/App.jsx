import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routes/router.jsx';

export default function App() {
	return (
		<Suspense fallback={<div>Loading…</div>}>
			<RouterProvider router={appRouter} />
		</Suspense>
	);
}


