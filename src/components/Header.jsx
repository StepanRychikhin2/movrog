import { Outlet, Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Movie">Movie</Link>
					</li>

				</ul>
			</nav>

			<Outlet />
		</>
	)
}

export default Header