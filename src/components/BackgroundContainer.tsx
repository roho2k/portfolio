import classNames from 'classnames';

export interface BackgroundContainerInterface {
	children: React.ReactNode;
}

export default function BackgroundContainer({
	children,
}: BackgroundContainerInterface) {
	return (
		<div
			className={classNames(
				['p-8'],
				['max-w-[80ch] w-full mx-auto lg:p-12 bg-slate-50']
			)}
		>
			{children}
		</div>
	);
}
