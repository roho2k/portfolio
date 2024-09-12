import { useCallback, useState } from 'react';
import _ from 'lodash';
import MarkdownRenderer from '../components/MarkdownRenderer';

export default function MarkdownEditor() {
	const [textAreaInput, setTextAreaInput] = useState('');
	const [debouncedTextAreaInput, setDebounceTextAreaInput] = useState('');

	const debounceChangeHandler = useCallback(
		_.debounce((value: string) => {
			setDebounceTextAreaInput(value);
		}, 500),
		[]
	);

	const handleTextAreaOnChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const value = e.target.value;
		setTextAreaInput(value);
		debounceChangeHandler(value);
	};

	return (
		<div className='flex flex-auto'>
			<textarea
				className='flex-auto max-w-[50%] p-5 border'
				value={textAreaInput}
				onChange={handleTextAreaOnChange}
			/>
			<div className='prose flex-auto max-w-[50%] p-5 border'>
				<MarkdownRenderer content={debouncedTextAreaInput} />
			</div>
		</div>
	);
}
