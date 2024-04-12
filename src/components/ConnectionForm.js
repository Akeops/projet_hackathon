import React from "react";
import "../styles/UserComponent.css";
import { Link } from "react-router-dom";

const ConnectionForm = () => {
	return (
		<div className="container">
			<div className="form-wrapper">
				<div>
					<h2 className="form-element">Connectez-vous</h2>
				</div>
				<form action="#" method="POST">
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
								<a href="#">Mot de Passe oublié?</a>
							</div>
						</div>
						<div>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
							/>
						</div>
					</div>

					<div className="button-container">
						<button type="submit">Connexion</button>
					</div>
				</form>

				<p className="form-element">Vous n'êtes pas encore membre?</p>
				<Link to="/inscription" className="form-insc">
					Inscrivez-vous
				</Link>
			</div>
		</div>
	);
};

export default ConnectionForm;
