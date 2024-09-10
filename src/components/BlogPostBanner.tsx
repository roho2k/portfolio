import classNames from 'classnames';

export interface BlogPostBannerInterface {
	className?: string;
	src: string;
	alt: string;
}

export default function BlogPostBanner({
	className = '',
	src,
	alt,
}: BlogPostBannerInterface) {
	if (!src) {
		return <></>;
	}

	return (
		<img
			className={classNames(className, 'h-52 w-full object-cover')}
			src={src}
			alt={alt}
		/>
	);
}
