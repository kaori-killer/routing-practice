// 테스트에서도 routes 정보를 필요로 하기 떄문에 App 안에 넣지 않고 이렇게 따로 파일로 빼준다.

import Layout from './components/Layout';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

// 계층형으로 작성한다.
const routes = [
	{
		element: <Layout />,
		// 얘네들은 전부 다 Layout으로 그려진다.
		// 근데 Layout이 HomePage과 AboutPage를 인지하기 위해서
		// Layout.tsx에서 outlet을 사용하면 지원해준다.
		children: [
			{path: '/', element: <HomePage />},
			{path: '/about', element: <AboutPage />},
		],
	},
];

export default routes;
