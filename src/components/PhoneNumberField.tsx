import { useState } from 'react';
import { formatPhoneNumber } from '../utils/helperFunctions';

export default function PhoneNumberField() {
	const [phoneNumber, setPhoneNumber] = useState('');
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formattedPhoneNumber = formatPhoneNumber(
			e.target.value,
			phoneNumber
		);
		setPhoneNumber(formattedPhoneNumber);
	};

	return (
		<div className='flex flex-col items-center p-48 rounded-lg border-2'>
			<h1 className='text-4xl font-bold'>Phone Number</h1>
			<input
				className='border-2 rounded w-60 text-xl font-semibold text-center'
				type='text'
				onChange={handleInputChange}
				value={phoneNumber}
			/>
		</div>
	);
}
