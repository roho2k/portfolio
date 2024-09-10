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

	const handleInputChangePartOne = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const input = e.target.value;
		const isDeleting = phoneNumber && phoneNumber.length > input.length;
		if (isDeleting) {
			setPhoneNumber(input);
			return;
		}

		const parsedInput = input.replace(/\D/g, '');
		const maxLength = 10;

		let formattedPhoneNumber = parsedInput;
		if (parsedInput.length >= maxLength) {
			formattedPhoneNumber =
				'(' +
				parsedInput.slice(0, 3) +
				') ' +
				parsedInput.slice(3, 6) +
				'-' +
				parsedInput.slice(6, maxLength);
		} else if (parsedInput.length >= 6 && parsedInput.length < maxLength) {
			formattedPhoneNumber =
				'(' +
				parsedInput.slice(0, 3) +
				') ' +
				parsedInput.slice(3, 6) +
				'-' +
				parsedInput.slice(6);
		} else if (parsedInput.length >= 3 && parsedInput.length < 6) {
			formattedPhoneNumber =
				'(' + parsedInput.slice(0, 3) + ') ' + parsedInput.slice(3);
		}
		setPhoneNumber(formattedPhoneNumber);
		return;
	};

	return (
		<div className='flex flex-col items-center p-48 rounded-lg border-2'>
			<h1 className='text-4xl font-bold'>Phone Number</h1>
			<input
				className='border-2 rounded w-60 text-xl font-semibold text-center'
				type='text'
				onChange={handleInputChangePartOne}
				value={phoneNumber}
			/>
		</div>
	);
}
