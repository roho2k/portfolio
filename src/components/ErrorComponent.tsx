import { useNavigate } from 'react-router-dom';

export interface ErrorComponentInterface {
	error: Error;
	onClick: () => void;
}

export default function ErrorComponent({
	error,
	onClick,
}: ErrorComponentInterface) {
	const navigate = useNavigate();
	const handleOnClick = () => {
		onClick();
		navigate(-1);
	};

	return (
		<div>
			<h1 className='font-bold text-3xl mb-6'>
				Opps! It seems like an error has occurred.
			</h1>
			<p className='text-lg mb-3'>Error message: {error.message}</p>
			<button
				className='text-violet-400 underline'
				onClick={handleOnClick}
			>
				Go Back
			</button>
		</div>
	);
}
