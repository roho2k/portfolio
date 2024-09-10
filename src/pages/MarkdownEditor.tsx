import { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

export default function MarkdownEditor() {
	const [textareaInput, setTextAreaInput] = useState('');

	const handleTextAreaOnChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setTextAreaInput(e.target.value);
	};

	return (
		<div className='flex flex-auto'>
			<textarea
				className='flex-auto max-w-[50%] p-5 border'
				value={textareaInput}
				onChange={handleTextAreaOnChange}
			/>
			<div className='prose flex-auto max-w-[50%] p-5 border'>
				<MarkdownRenderer content={textareaInput} />
			</div>
		</div>
	);
}
