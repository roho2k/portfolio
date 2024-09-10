import { Outlet } from 'react-router-dom';

export default function Component() {
	return (
		<div className='flex justify-center items-center w-screen'>
			<Outlet />
		</div>
	);
}
