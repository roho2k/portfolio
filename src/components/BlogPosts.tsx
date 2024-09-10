import { useEffect, useState } from 'react';
import { BlogPostInterface } from './BlogPost';
import BlogPostPreview from './BlogPostPreview';
import { formatDateTime } from '../utils/helperFunctions';

export default function BlogPosts() {
	const [blogPosts, setBlogPosts] = useState<BlogPostInterface[]>([]);

	const fetchBlogPosts = async () => {
		const response = await fetch('http://localhost:3000/api/blogs');
		const data: BlogPostInterface[] = await response.json();
		setBlogPosts(data);
	};

	useEffect(() => {
		fetchBlogPosts();
	}, []);

	return (
		<div>
			{blogPosts.map((blogPost, i) => {
				blogPost.created_at = formatDateTime(blogPost.created_at);

				return (
					<BlogPostPreview
						key={i}
						altDescription='blog-post-image'
						{...blogPost}
					/>
				);
			})}
		</div>
	);
}
