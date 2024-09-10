import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import BlogPost from '../components/BlogPost';
import MarkdownEditor from '../pages/MarkdownEditor';
import Component from '../pages/Component';
import PhoneNumberField from '../components/PhoneNumberField';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
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
