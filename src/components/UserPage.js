import React, { useState, useEffect } from "react";
//import "../styles/UserPage.css";

const UserPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsFromDatabase()
      .then((comments) => setComments(comments))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des commentaires:",
          error,
        ),
      );
  }, []);

  const fetchCommentsFromDatabase = async () => {
    const response = await fetch("https://votre-api.com/comments");
    if (!response.ok) {
      throw new Error("Échec de la récupération des commentaires");
    }
    const data = await response.json();
    return data;
  };

  return (
    <div class="drawer">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/*Page content here*/}
        <label htmlFor="my-drawer-4" class="drawer-button btn">
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu">
          {/*Sidebar content here*/}
          <li>
            <a href="#">Sidebar Item 1</a>
          </li>
          <li>
            <a href="#">Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
