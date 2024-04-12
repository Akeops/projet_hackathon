import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/UserComponent.css";

const ConnectionForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/users", {
        // Assurez-vous que l'URL est correcte pour POST
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error(
          "Échec de la connexion. Veuillez vérifier vos identifiants.",
        );
      }

      const data = await response.json();
      console.log("Login Success:", data);
      localStorage.setItem("token", data.token); // Stocker le token JWT ici
      if (data.userId) {
        localStorage.setItem("userId", data.userId); // Stocker l'ID de l'utilisateur si disponible
      }
      navigate("/home"); // Rediriger vers la page d'accueil après une connexion réussie
    } catch (error) {
      console.error("Error:", error);
      setError(error.message); // Affichage d'un message d'erreur sur l'interface utilisateur
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="form-element">Connectez-vous</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="email">Adresse Mail</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button type="submit">Connexion</button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="form-element">Vous n'êtes pas encore membre?</p>
        <Link to="/inscription" className="form-insc">
          Inscrivez-vous
        </Link>
      </div>
    </div>
  );
};

export default ConnectionForm;
