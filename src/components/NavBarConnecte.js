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
								<Link to="/" className="elementDropDown">
									Accueil
								</Link>
								<Link
									to="/annuaire"
									className="elementDropDown"
									onClick={toggleMenu}>
									Toilettes de Paris
								</Link>
							</div>

							<div className="dropDownBottom">
								<Link
									to="/contact"
									className="divLink elementDropDown">
									Nous contacter
								</Link>
								<Link
									to="/aide"
									className="divLink elementDropDown">
									Aides
								</Link>
								<Link
									to="/mentionLegale"
									className="elementDropDown">
									Mentions Légales
								</Link>
							</div>
						</div>
					)}
				</div>

				<Link to="/" className="Titre-h1">
					Pause Parisienne
				</Link>
			</div>

			<div className="navSec2">
				<div className="navSec2-1">
					<div className=""></div>
				</div>
				<div className="navSec2">
					<div className="divLink" onClick={toggleProfileMenu}>
						<img
							src="../images/icon-profil.png"
							alt="profil"
							className="img-profil"
						/>
					</div>
					{isProfileMenuOpen && (
						<div className="dropdown-menu-right" ref={dropdownRef}>
							{/* Éléments du menu du profil */}
							<Link to="/inscription" className="elementDropDown">
								Inscription
							</Link>
							<Link to="/connection" className="elementDropDown">
								Connection
							</Link>
							<UserPage />
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
