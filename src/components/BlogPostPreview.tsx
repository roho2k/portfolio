import { Link } from 'react-router-dom';
import { BlogPostInterface } from './BlogPost';

export interface BlogPostPreviewInterface extends BlogPostInterface {
	altDescription: string;
}

export default function BlogPostPreview({
	blog_image_url,
	title,
	author = 'Rodney Ho',
	created_at,
	content_preview,
}: BlogPostPreviewInterface) {
	return (
		<div className='flex flex-col justify-center'>
			{/* should be a link to actual post with slight enlarge and unlarge */}
			{/* image shouldnt drag */}
			<div className=''>
				<img
					className='h-52 w-full object-cover'
					src={blog_image_url}
					alt='featured-image'
				/>
			</div>
			<div>
				{/* should be a link to actual post with highlight */}
				<h1 className='font-bold text-xl'>{title}</h1>
				<div>
					<span className='text-violet-400'>{author}</span>

					<span className='text-slate-400 text-sm'>
						{' '}
						published on {created_at}
					</span>
				</div>
				<div>{content_preview}</div>
				{/* should be a link to actual post with highlight */}
				<Link to={`/blog/${title.toLowerCase().replaceAll(' ', '-')}`}>
					Read More...
				</Link>
			</div>
		</div>
	);
}
