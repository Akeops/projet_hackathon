import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBarConnecte.css";
import React, { useState } from "react";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="nav">
			<div className="navSec1">
				<div>
					<a href="#" onClick={toggleMenu}>
						<img
							src="./images/menu.png"
							alt="menu"
							className="img-menu"
						/>
					</a>
					{isMenuOpen && (
						<div className="dropdown-menu">
							<div className="dropDownTop">
								<a href="#" className="elementDropDown">
									Profil
								</a>
								<a href="#" className="elementDropDown">
									Toilettes de Paris
								</a>
							</div>

							<div className="dropDownBottom">
								<a href="#" className="elementDropDown">
									Nous contacter
								</a>
								<a href="#" className="elementDropDown">
									Aides
								</a>
								<a href="#" className="elementDropDown">
									Mentions Légales
								</a>
							</div>
						</div>
					)}
				</div>

				<div class="group">
					<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
						<g>
							<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
						</g>
					</svg>
					<input
						placeholder="Search"
						type="search"
						class="input"></input>
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
					<a href="#" className="btn">
						<buton>Vos Favoris</buton>
					</a>
				</div>
				<div className="navSec2">
					{/* Bouton pour ouvrir le menu du profil */}
					<a href="#" onClick={toggleProfileMenu}>
						<img
							src="../images/icon-profil.png"
							alt="profil"
							className="img-menu"
						/>
					</a>
					{isProfileMenuOpen && (
						<div className="dropdown-menu-right" ref={dropdownRef}>
							{/* Éléments du menu du profil */}
							<UserPage />
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
