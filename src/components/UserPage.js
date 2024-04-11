import "../styles/UserPage.css";
import React, { useState } from "react";

const UserPage = (props) => {
  return (
    <div className="artboard phone-2">
      <h1>{props.nom}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default UserPage;
