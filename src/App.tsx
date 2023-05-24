import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const routes = [
	{path: '/', element: <HomePage />},
	{path: '/about', element: <AboutPage />},

];

const router = createBrowserRouter(routes);

function Page() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />}></Route>
			<Route path='/about' element={<AboutPage />}></Route>
		</Routes>
	);
}

export default function App() {
	return (
		<RouterProvider router={router} />
	);

	// <div>
	// 	<Header />
	// 	<main>
	// 		<Routes>
	// 			<Route path='/' element={<HomePage />} />
	// 			<Route path='/about' element={<AboutPage />} />
	// 		</Routes>
	// 	</main>
	// 	<Footer />
	// </div>
}
