import { Link } from "react-router-dom";

export default function Header() {

	return (
		<header className=" navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Rick and Morty
				</Link>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

					<form className="form-inline my-2 my-lg-0">
						<ul className="navbar-nav mr-auto">
						<li className="nav-item">
								<Link className="nav-link" to="/episodes">
									Episodes
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/locations">
									Locations
								</Link>
							</li>
						</ul>
					</form>
				</nav>
			</div>
		</header>
	)
}