import "../styles/UserPage.css";
import React, { useState } from "react";

const UserPage = (props) => {
  return (
    <div className="artboard phone-2">
      <h1>{props.nom}</h1>
      <p>{props.description}</p>
      {/* Vous pouvez ajouter autant de props que nécessaire */}
    </div>
  );
};

export default UserPage;
