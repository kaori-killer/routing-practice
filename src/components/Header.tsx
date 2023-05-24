import {Link, useNavigate} from 'react-router-dom';

export default function Header() {
	const naviage = useNavigate();

	const handleClickLogout = () => {
		naviage('/');
	};

	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<button type='button' onClick={handleClickLogout}>Log out</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
