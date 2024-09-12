import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Blogs from '../pages/Blogs';
import BlogPost from '../components/BlogPost';
import MarkdownEditor from '../pages/MarkdownEditor';
import Component from '../pages/Component';
import PhoneNumberField from '../components/PhoneNumberField';
import About from '../pages/About';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Blogs />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/markdown-editor',
				element: <MarkdownEditor />,
			},
			{
				path: '/blog/:blogTitle',
				element: <BlogPost />,
			},
			{
				path: '/component',
				element: <Component />,
				children: [
					{
						path: '/component/phone-number-field',
						element: <PhoneNumberField />,
					},
				],
			},
		],
	},
]);

export default router;
