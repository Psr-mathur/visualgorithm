import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="container-fluid px-4 bg-light position-sticky">
			<nav className="navbar navbar-expand-lg navbar-light ">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img
							src="/src/assets/logo1n.png"
							alt=""
							width="200"
							height="60"
							className=" object-fit-cover"
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#"
								>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Algorithms
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<Link
											className="dropdown-item"
											to="/selectionsort"
										>
											Selection Sort
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to="/bubblesort"
										>
											Bubble Sort
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to="/mergesort"
										>
											Merge Sort
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
