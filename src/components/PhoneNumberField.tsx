import { useState } from 'react';

export default function PhoneNumberField() {
	// to parse input for a phone number we need a regex that looks at the input
	// then we need to replace all input that is not a number with an empty string
	// we also need to check the cleaned string for its length
	// if its greater than x length we need to add parenthesis, space, hyphen,

	const [phoneNumber, setPhoneNumber] = useState('');
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formattedPhoneNumber = formatPhoneNumber(e.target.value);
		setPhoneNumber(formattedPhoneNumber);
	};

	const formatPhoneNumber = (input: string) => {
		const text = input;
		const previousText = phoneNumber;
		const maxPhoneNumberLength = 10;

		if (!text) {
			return text;
		}

		const deleting = previousText && previousText.length > text.length;
		if (deleting) {
			return text;
		}

		const cleanedText = text.replace(/\D/g, '');

		if (cleanedText.length >= maxPhoneNumberLength) {
			return (
				'(' +
				cleanedText.slice(0, 3) +
				')' +
				cleanedText.slice(3, 6) +
				'-' +
				cleanedText.slice(6, maxPhoneNumberLength)
			);
		}

		if (
			cleanedText.length >= 6 &&
			cleanedText.length < maxPhoneNumberLength
		) {
			return (
				'(' +
				cleanedText.slice(0, 3) +
				')' +
				cleanedText.slice(3, 6) +
				'-' +
				cleanedText.slice(6)
			);
		}

		if (cleanedText.length >= 3 && cleanedText.length < 6) {
			return '(' + cleanedText.slice(0, 3) + ')' + cleanedText.slice(3);
		}

		return cleanedText;
	};

	return (
		<div>
			<h1>Phone Number</h1>
			<input
				type='text'
				onChange={handleInputChange}
				value={phoneNumber}
			/>
		</div>
	);
}
