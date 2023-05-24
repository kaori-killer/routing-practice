// Routes.tsx의 routes가 라우팅 정보를 들고 있고 컴포넌트, layout도 가지고 있기 때문에
// 이것에 대한 테스트를 한다.

import {render, screen} from '@testing-library/react';
import {RouterProvider, createMemoryRouter} from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('App', () => {
	// 중복되는 부분은 테스트 헬퍼를 만들어서 처리한다.
	function renderRouter(path: string) {
		// 메모리 라우터를 잡아줬던 것과 유사하게 다음과 같이 작성한다.
		const router = createMemoryRouter(routes, {
			initialEntries: [path],
		});

		render((
			<RouterProvider router={router} />
		));
	}

	context('when the current path is "/"', () => {
		it('renders the home page', () => {
			renderRouter('/');
			screen.getByText(/Welcome/);
		});
	});

	context('when the current path is "/about"', () => {
		it('renders the about page', () => {
			renderRouter('/about');
			screen.getByText(/This is test/);
		});
	});
});
