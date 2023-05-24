// 테스트 때문에 파일 분리

import Layout from './components/Layout';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

const routes = [
	{
		element: <Layout />,
		children: [
			{path: '/', element: <HomePage />},
			{path: '/about', element: <AboutPage />},
		],
	},
];

export default routes;
