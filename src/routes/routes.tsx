import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import BlogPost from '../components/BlogPost';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/blog/:blogTitle',
				element: <BlogPost />,
			},
		],
	},
]);

export default router;
