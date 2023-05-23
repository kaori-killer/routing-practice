import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const pages: Record<string, React.FC> = {
	'/': HomePage,
	'/about': AboutPage,
};

export default function App() {
	const path = window.location.pathname;

	const Page = Reflect.get(pages, path) || HomePage;

	return (
		<div>
			<Header />
			<main>
				<Page />
			</main>
			<Footer />
		</div>
	);
}
