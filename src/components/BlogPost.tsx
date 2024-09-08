import { useParams } from 'react-router-dom';

export interface BlogPostInterface {
	title: string;
	author: string;
	content: string;
	content_preview: string;
	created_at: string;
	blog_image_url: string;
}

export default function BlogPost() {
	const { blogTitle } = useParams();

	return <div>{blogTitle}</div>;
}
