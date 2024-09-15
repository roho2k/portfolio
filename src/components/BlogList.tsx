import { useEffect, useState } from 'react';
import { BlogPostInterface } from './BlogPost';
import BlogPostPreview from './BlogPostPreview';
import { formatDateTime } from '../utils/helperFunctions';
import Pagination from './Pagination';
import { useSearchParams } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import { API_BASE_URL } from '../api/fetchConfig';

export interface BlogListInterface {
	data: BlogPostInterface[];
	currentPage: string;
	totalPages: string;
	totalItems: string;
}

const defaultBlogs: BlogListInterface = {
	data: [],
	currentPage: '',
	totalPages: '',
	totalItems: '',
};

export default function BlogList() {
	const [error, setError] = useState<Error | null>(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const [blogs, setBlogs] = useState<BlogListInterface>(defaultBlogs);
	const page = searchParams.get('page') || 1;

	const { data: blogPosts, totalPages, currentPage } = blogs;
	blogPosts.sort((a, b) => b.id - a.id);

	const fetchBlogPosts = async (page: string | number) => {
		try {
			const response = await fetch(
				`${API_BASE_URL}/blogs/?page=${page}&limt=10`
			);

			if (response.status === 404) {
				throw new Error('A 404 error occurred when fetching blogs.');
			}
			const data: BlogListInterface = await response.json();
			setBlogs(data);
		} catch (error) {
			if (error instanceof Error) {
				setError(error);
				console.log(error);
				return;
			}

			setError({
				name: 'Unknown Error',
				message: 'An unknown error has occurred when fetching blogs.',
			});
		}
	};

	const handlePagination = (pageNumber: number) => {
		setSearchParams({ page: pageNumber.toString() });
	};

	const handleOnClick = () => {
		setError(null);
	};

	useEffect(() => {
		fetchBlogPosts(page);
	}, [page]);

	if (error) {
		return (
			<ErrorComponent
				error={error}
				onClick={handleOnClick}
			/>
		);
	}

	return (
		<div className='flex flex-col h-full'>
			<div className='flex-auto'>
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

			<div className='flex justify-center'>
				<Pagination
					handlePagination={handlePagination}
					totalPages={parseInt(totalPages)}
					currentPage={parseInt(currentPage)}
				/>
			</div>
		</div>
	);
}
