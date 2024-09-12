import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// bg space-bright 300
// bg-content bg-slate-800
// border border-space-border-200
// text text-slate-400

export default function Layout() {
	return (
		<div className='flex flex-col min-h-screen'>
			<NavBar />

			<main className='flex flex-auto bg-slate-100'>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
