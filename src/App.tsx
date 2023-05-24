import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const pages: Record<string, React.FC> = {
	'/': HomePage,
	'/about': AboutPage,
};

export default function App() {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
