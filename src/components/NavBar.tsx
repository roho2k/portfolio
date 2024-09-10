import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className='border-b border-slate-400 pl-[calc(100vw-100%)]'>
			<div className='flex text-space-blue-300 max-w-7xl mx-auto py-6 font-semibold'>
				<Link to='/'>
					<h2 className='font-bold text-3xl'>Rodney Ho</h2>
				</Link>

				<div className='flex flex-auto justify-end items-center'>
					{/* <p>Works</p>
					<p>Blogs</p>
					<p>Experience</p> */}
				</div>
			</div>
		</nav>
	);
}
