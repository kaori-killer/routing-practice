import {
	createBrowserRouter, RouterProvider,
} from 'react-router-dom';

import routes from './routes';

// Routes를 이용하려면 다음과 같이 해서 router 객체로 만들 수 있다.
const router = createBrowserRouter(routes);

// RouterProvider를 이용해서 이 라우터를 쓰겠다고 내려준다.
export default function App() {
	return (
		<RouterProvider router={router} />
	);
}
