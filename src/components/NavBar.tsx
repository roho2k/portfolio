import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className='sticky top-0 bg-white pl-[calc(100vw-100%)] shadow-[0_4px_4px_-4px_rgba(0,0,0,0.3)]'>
			<div className='flex text-space-blue-300 max-w-7xl mx-auto py-6 font-semibold'>
				<Link to='/'>
					<h2 className='font-bold text-3xl hover:text-violet-300'>
						Rodney Ho
					</h2>
				</Link>

				<div className='flex flex-auto justify-end items-center'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							classNames(
								{
									'text-violet-500 mx-4': isActive,
								},
								'hover:text-violet-300 mx-4'
							)
						}
					>
						Blogs
					</NavLink>
					<NavLink
						to='/about'
						className={({ isActive }) =>
							classNames(
								{
									'text-violet-500 mx-4': isActive,
								},
								'hover:text-violet-300 mx-4'
							)
						}
					>
						About
					</NavLink>
				</div>
			</div>
		</nav>
	);
}
