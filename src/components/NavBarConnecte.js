import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBarConnecte.css";
import UserPage from "./UserPage";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
	const toggleButtonRef = useRef(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setIsMenuOpen(false);
				setIsProfileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleProfileMenu = () => {
		setIsProfileMenuOpen(!isProfileMenuOpen);
	};

	return (
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
						<div className="dropdown-menu" ref={dropdownRef}>
							<div className="dropDownTop">
								<div className="divLink">
									<p>Profil</p>
								</div>
								<Link
									to="/annuaire"
									className="elementDropDown"
									onClick={toggleMenu} // Ferme le menu lorsque l'utilisateur clique sur un lien
								>
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
						<p>Vos Favoris</p>
					</div>
				</div>
				<div className="navSec2">
					{/* Bouton pour ouvrir le menu du profil */}
					<div className="divLink" onClick={toggleProfileMenu}>
						<img
							src="../images/icon-profil.png"
							alt="profil"
							className="img-menu"
						/>
					</div>
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
