export function formatDateTime(dateTimeStr: string) {
	const LocaleDateStringOptions: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	};

	const dateTime = new Date(dateTimeStr).toLocaleDateString(
		'en-us',
		LocaleDateStringOptions
	);

	return dateTime;
}

export function createSlug(name: string) {
	return name.toLowerCase().replaceAll(' ', '-');
}

export function formatPhoneNumber(input: string, prevInput: string) {
	const text = input;
	const maxPhoneNumberLength = 10;

	if (!text) {
		return text;
	}

	const deleting = prevInput && prevInput.length > text.length;
	if (deleting) {
		return text;
	}

	const cleanedText = text.replace(/\D/g, '');

	if (cleanedText.length >= maxPhoneNumberLength) {
		return (
			'(' +
			cleanedText.slice(0, 3) +
			') ' +
			cleanedText.slice(3, 6) +
			'-' +
			cleanedText.slice(6, maxPhoneNumberLength)
		);
	}

	if (cleanedText.length >= 6 && cleanedText.length < maxPhoneNumberLength) {
		return (
			'(' +
			cleanedText.slice(0, 3) +
			') ' +
			cleanedText.slice(3, 6) +
			'-' +
			cleanedText.slice(6)
		);
	}

	if (cleanedText.length >= 3 && cleanedText.length < 6) {
		return '(' + cleanedText.slice(0, 3) + ') ' + cleanedText.slice(3);
	}

	return cleanedText;
}
