import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NavBarMobile from '../components/NavBarMobile';

export default function Layout() {
	return (
		<div className='flex flex-col min-h-screen'>
			<NavBar className='hidden lg:block' />
			<NavBarMobile className='lg:hidden' />

			<main className='flex flex-auto bg-slate-100'>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
