import classNames from 'classnames';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Mask from './Mask';

export interface NavBarMobileInterface {
	className?: string;
}

export default function NavBarMobile({ className }: NavBarMobileInterface) {
	const [isOpen, setOpen] = useState(false);
	return (
		<nav
			className={classNames(
				className,
				'sticky top-0 bg-white pl-[calc(100vw-100%)] shadow-[0_4px_4px_-4px_rgba(0,0,0,0.3)] z-10'
			)}
		>
			<div className='flex text-space-blue-300 max-w-7xl mx-auto p-6 font-semibold items-center'>
				<Link to='/'>
					<h2 className='font-bold text-3xl hover:text-violet-300'>
						Rodney Ho
					</h2>
				</Link>

				<div className='flex flex-auto justify-end'>
					<Hamburger
						toggled={isOpen}
						toggle={setOpen}
						size={24}
					/>
				</div>
			</div>
			<div
				className={classNames(
					{ hidden: !isOpen },
					'fixed w-full bg-white border-t-2'
				)}
			>
				<Link to='/'>
					<div className='flex justify-center items-center py-4'>
						Blog
					</div>
				</Link>
				<Link to='/about'>
					<div className='flex justify-center items-center py-4'>
						About
					</div>
				</Link>
			</div>

			<Mask isOpen={isOpen} />
		</nav>
	);
}
