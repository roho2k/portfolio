import classNames from 'classnames';
import ReactDOM from 'react-dom';

export interface MaskInterface {
	isOpen?: boolean;
}

export default function Mask({ isOpen }: MaskInterface) {
	return ReactDOM.createPortal(
		<div
			className={classNames(
				{
					hidden: !isOpen,
				},
				'lg:hidden top-0 left-0 h-full w-full fixed backdrop-blur-sm z-10'
			)}
		></div>,
		document.getElementById('mask') as HTMLElement
	);
}
