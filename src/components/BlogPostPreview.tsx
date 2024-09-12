import { Link } from 'react-router-dom';
import { BlogPostInterface } from './BlogPost';
import { createSlug } from '../utils/helperFunctions';
import BlogPostBanner from './BlogPostBanner';

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
	const slug = createSlug(title);
	const blogPostUrl = `/blog/${slug}`;

	return (
		<div className='flex flex-col justify-center'>
			{/* should be a link to actual post with slight enlarge and unlarge */}
			{/* image shouldnt drag */}

			<Link to={blogPostUrl}>
				<BlogPostBanner
					className='transition duration-200 hover:scale-105 cursor-pointer'
					src={blog_image_url}
					alt='featured-image'
				/>
			</Link>

			<div className='mt-6'>
				{/* should be a link to actual post with highlight */}
				<Link to={blogPostUrl}>
					<h1 className='font-bold text-3xl hover:opacity-65 mb-3'>
						{title}
					</h1>
				</Link>

				<div className='mb-1'>
					{/* once i have a summary of who i am, i can add hover link */}
					<span className='text-violet-300 font-semibold text-lg'>
						{author}
					</span>

					<span className='text-slate-400 text-sm'>
						{' '}
						published on {created_at}
					</span>
				</div>
				<div className='mb-1'>{content_preview}</div>
				{/* should be a link to actual post with highlight */}
				<Link to={blogPostUrl}>
					<span className='text-violet-300 hover:text-violet-600 hover:underline text-sm font-semibold'>
						Read More...
					</span>
				</Link>
			</div>
		</div>
	);
}
