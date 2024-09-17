import classNames from 'classnames';
import ReactDOM from 'react-dom';

export interface MaskInterface {
	isOpen?: boolean;
	setOpen: (status: boolean) => void;
}

export default function Mask({ isOpen, setOpen }: MaskInterface) {
	return ReactDOM.createPortal(
		<div
			className={classNames(
				{
					hidden: !isOpen,
				},
				'lg:hidden top-0 left-0 h-full w-full fixed backdrop-blur-sm z-10'
			)}
			onClick={() => {
				setOpen(!isOpen);
			}}
		></div>,
		document.getElementById('mask') as HTMLElement
	);
}
