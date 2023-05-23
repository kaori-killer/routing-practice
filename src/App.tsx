import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
	const path = window.location.pathname;

	return (
		<div>
			<Header />
			<main>
				{path === '/' && <HomePage />}
				{path === '/about' && <AboutPage />}
			</main>
			<Footer />
		</div>
	);
}
