import { useEffect, useState } from 'react';
import { BlogPostInterface } from './BlogPost';
import BlogPostPreview from './BlogPostPreview';

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
				const LocaleDateStringOptions: Intl.DateTimeFormatOptions = {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				};
				blogPost.created_at = new Date(
					blogPost.created_at
				).toLocaleDateString('en-us', LocaleDateStringOptions);

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
