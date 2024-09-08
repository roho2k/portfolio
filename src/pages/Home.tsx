import { useEffect, useState } from 'react';
import BlogPreview from '../components/BlogPostPreview';
import PhoneNumberField from '../components/PhoneNumberField';
import BlogPost from '../components/BlogPost';
import BlogPosts from '../components/BlogPosts';

export interface ImgDataInterface {
	alt_description: string;
	urls: {
		full: string;
	};
}

export default function Home() {
	// i need to fetch list of blogposts
	// blogpost can be cached i think usememo would be good
	// then render list
	// figure out pagniation later
	// then for each blogpost do a link for readme that takes them to actual blogpost
	// maybe i should have a component that renders a list of blog posts
	// since it is not hte job of the home page to fetch data
	// const [isLoading, setIsLoading] = useState(false);
	// const [imgData, setImgData] = useState<ImgDataInterface>();

	// const fetchImage = async () => {
	// 	setIsLoading(true);
	// 	const data = await fetch('https://api.unsplash.com/photos/random', {
	// 		headers: {
	// 			Authorization: `Client-ID ${
	// 				import.meta.env.VITE_UNSPLASH_ACCESS_KEY
	// 			}`,
	// 		},
	// 	});

	// 	const imgObj = await data.json();
	// 	setImgData(imgObj);
	// 	setIsLoading(false);
	// };

	// useEffect(() => {
	// 	fetchImage();
	// }, []);

	return (
		<div className='text-space-blue-300 max-w-3xl mx-auto pt-6'>
			{/* <PhoneNumberField />
			<BlogPost /> */}
			{/* <BlogPreview
				featuredImage={!isLoading ? imgData?.urls.full : ''}
				altDescription={!isLoading ? imgData?.alt_description : ''}
				title='test'
				author='Rodney Ho'
				date='September 4th, 2024'
				textPreview='sadfsdf'
			/> */}
			<BlogPosts />
		</div>
	);
}
