import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className='sticky top-0 bg-white pl-[calc(100vw-100%)] shadow-[0_4px_4px_-4px_rgba(0,0,0,0.3)]'>
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
