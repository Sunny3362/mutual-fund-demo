import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ChatWidget from '../components/ChatWidget.jsx';

export default function RootLayout() {
	return (
		<div>
			<NavBar />
			<div className="container app-shell" id="content" style={{ paddingTop: 24 }}>
				<Sidebar />
				<main>
					<Outlet />
				</main>
			</div>
			<ChatWidget />
		</div>
	);
}


