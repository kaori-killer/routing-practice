import {render} from '@testing-library/react';

import App from './App';

test('App', () => {
	render(<App />);
});

// 테스트는 윈도우가 임의로는 있을 수 있는데 진짜로 있진 않음
// const path = window.location.pathname;를 추상화 할 바엔
// React Router 라는 도구를 사용하자.
