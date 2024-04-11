import React from "react";
import "../styles/UserComponent.css";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
	return (
		<div className="container">
			<div className="form-wrapper">
				<div>
					<h2 className="form-element">Inscrivez-vous</h2>
				</div>
				<form action="#" method="POST">
					<div className="form-element">
						<label htmlFor="name">Nom</label>
						<div>
							<input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								required
							/>
						</div>
					</div>

					<div className="form-element">
						<label htmlFor="email">Adresse Mail</label>
						<div>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>
						</div>
					</div>

					<div className="form-element">
						<div>
							<label htmlFor="password" className="form-element">
								Mot de passe
							</label>
							<div>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="new-password"
									required
								/>
							</div>
						</div>
					</div>

					<div className="button-container">
						<button type="submit">Inscription</button>
					</div>
				</form>

				<p className="form-element">Déjà membre?</p>
				<Link to="/connection" className="form-insc">
					Connectez-vous
				</Link>
			</div>
		</div>
	);
};

export default RegistrationForm;
