import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

// bg space-bright 300
// bg-content bg-slate-800
// border border-space-border-200
// text text-slate-400

export default function Layout() {
	return (
		<div className=''>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
