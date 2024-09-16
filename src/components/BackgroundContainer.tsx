export interface BackgroundContainerInterface {
	children: React.ReactNode;
}

export default function BackgroundContainer({
	children,
}: BackgroundContainerInterface) {
	return (
		<div className='max-w-[80ch] w-full mx-auto p-12 bg-slate-50'>
			{children}
		</div>
	);
}
