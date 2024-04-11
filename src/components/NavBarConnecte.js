import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/NavBarConnecte.css";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			<Router>
				<nav className="nav">
					<div className="navSec1">
						<div>
							<div className="divLink" onClick={toggleMenu}>
								<img
									src="./images/menu.png"
									alt="menu"
									className="img-menu"
								/>
							</div>
							{isMenuOpen && (
								<div className="dropdown-menu">
									<div className="dropDownTop">
										<div className="divLink">
											<p>Profil</p>
										</div>
										<Link
											to="/annuaire"
											className="elementDropDown">
											Toilettes de Paris
										</Link>
									</div>

									<div className="dropDownBottom">
										<div className="divLink elementDropDown">
											<p>Nous contacter</p>
										</div>
										<div className="divLink elementDropDown">
											Aides
										</div>
										<div className="elementDropDown">
											Mentions Légales
										</div>
									</div>
								</div>
							)}
						</div>

						<div className="group">
							<svg
								className="icon"
								aria-hidden="true"
								viewBox="0 0 24 24">
								<g>
									<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
								</g>
							</svg>
							<input
								placeholder="Search"
								type="search"
								className="input"></input>
						</div>

						<div>
							<h1>Pause Parisienne</h1>
							{/* <a href="#" >   
                <img src="./images/logo.png" alt="Logo" className="img-logo"/>
            </a> */}
						</div>
					</div>

					<div className="navSec2">
						<div className="navSec2-1">
							<div className="divLink btn">
								<button>Vos Favoris</button>
							</div>
						</div>
						<div>
							<div className="divLink">
								<img
									src="./images/icon-profil.png"
									alt="profil"
									className="img-profil"
								/>
							</div>
						</div>
					</div>
				</nav>
			</Router>
		</div>
	);
};

export default NavBar;
