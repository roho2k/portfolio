import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';
import { formatDateTime } from '../utils/helperFunctions';
import BlogPostBanner from './BlogPostBanner';
import { API_BASE_URL } from '../api/fetchConfig';
import Disqus from './Disqus';
import classNames from 'classnames';
import BackgroundContainer from './BackgroundContainer';

export interface BlogPostInterface {
	id: number;
	title: string;
	author: string;
	content: string;
	content_preview: string;
	created_at: string;
	blog_image_url: string;
}

export default function BlogPost() {
	const { blogTitle } = useParams();
	const [blogPost, setBlogPost] = useState<BlogPostInterface>();

	const fetchBlogPost = async () => {
		const titleUrl = '/' + blogTitle?.replaceAll('-', ' ');
		const response = await fetch(`${API_BASE_URL}/blogs${titleUrl}`);
		const data: BlogPostInterface = await response.json();

		setBlogPost(data);
	};

	useEffect(() => {
		fetchBlogPost();
	}, []);

	// features to add: views, time to read, author, date, default image banner
	if (!blogPost) {
		return <></>;
	}

	return (
		<BackgroundContainer>
			<div>
				{/* once i have a summary of who i am, i can add hover link */}
				<span className='text-violet-300 font-semibold'>
					{blogPost?.author}
				</span>

				<span className='text-slate-400 text-sm'>
					{' '}
					published on{' '}
					{blogPost?.created_at
						? formatDateTime(blogPost.created_at)
						: ''}
				</span>
			</div>
			<h1 className='text-4xl font-bold mb-8'>{blogPost?.title}</h1>
			<BlogPostBanner
				src={blogPost?.blog_image_url ? blogPost.blog_image_url : ''}
				alt='blog-post-featured-image'
			/>
			<div className={classNames(['flex justify-center mt-6 mb-12'])}>
				<div className='prose max-w-full'>
					<MarkdownRenderer
						content={blogPost ? blogPost.content : ''}
					/>
				</div>
			</div>

			<div>
				<Disqus
					url={window.location.origin + window.location.pathname}
					identifier={blogPost.id.toString()}
					title={blogTitle}
				/>
			</div>
		</BackgroundContainer>
	);
}
