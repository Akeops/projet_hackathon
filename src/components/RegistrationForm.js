import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: formData.nickname,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText,
          );
        }
        return response.text();
      })
      .then((text) => {
        try {
          return JSON.parse(text);
        } catch (err) {
          throw new Error(
            "Failed to parse JSON because the server didn't return JSON: " +
              text,
          );
        }
      })
      .then((data) => {
        console.log("Success:", data);
        setSuccessMessage(
          "Inscription réussie! Vous pouvez maintenant vous connecter.",
        );
        setFormData({ name: "", email: "", password: "" }); // Réinitialiser les champs du formulaire
      })
      .catch((error) => {
        console.error("Error:", error);
        // Afficher un message d'erreur ici
      });
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div>
          <h2 className="form-element">Inscrivez-vous</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="name">Nom</label>
            <div>
              <input
                id="name"
                name="nickname"
                type="text"
                autoComplete="name"
                required
                onChange={handleChange}
                value={formData.nickname}
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
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>

          <div className="form-element">
            <label htmlFor="password">Mot de passe</label>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>

          <div className="button-container">
            <button type="submit">Inscription</button>
          </div>
        </form>
        {successMessage && (
          <p className="form-element success">{successMessage}</p>
        )}
        <p className="form-element">Déjà membre?</p>
        <Link to="/connection" className="form-insc">
          Connectez-vous
        </Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
