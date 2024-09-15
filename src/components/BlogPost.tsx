import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';
import { formatDateTime } from '../utils/helperFunctions';
import BlogPostBanner from './BlogPostBanner';
import { DiscussionEmbed } from 'disqus-react';

export interface BlogPostInterface {
	id: string;
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
		const titleUrl = blogTitle?.replaceAll('-', ' ');
		const response = await fetch(
			`https://www.rodneyho.com/api/blogs/${titleUrl}`
		);
		const data: BlogPostInterface = await response.json();

		setBlogPost(data);
	};

	useEffect(() => {
		console.log('abc');
		fetchBlogPost();
	}, []);

	// features to add: views, time to read, author, date, default image banner
	if (!blogPost) {
		return <></>;
	}

	return (
		<div className='mx-auto max-w-[80ch] w-full p-12 bg-slate-50'>
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
			<div className='flex justify-center w-full my-12 p-12'>
				<div className='prose'>
					<MarkdownRenderer
						content={blogPost ? blogPost.content : ''}
					/>
				</div>
			</div>

			<div>
				<DiscussionEmbed
					shortname='rodney-ho'
					config={{
						url: `http://localhost:5173/blog/${blogTitle}`,
						identifier: blogPost.id,
						title: blogTitle,
					}}
				/>
			</div>
		</div>
	);
}
