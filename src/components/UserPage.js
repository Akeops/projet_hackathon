import React, { useState, useEffect } from "react";
import "../styles/UserPage.css";

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
    const data = await response.json();
    return data;
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 bg-base-200 text-base-content">
          <li>
            <a href="#">Sidebar Item 1</a>
          </li>
          <li>
            <a href="#">Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    // <div className="Profil">
    //     <h1>Votre Profil</h1>
    //     <h3>Vos commentaires</h3>
    //     <ul>
    //         {comments.map((comment, index) => (
    //             <li key={index}>
    //                 <p>{comment.text}</p>
    //             </li>
    //         ))}
    //     </ul>
    // </div>
  );
};

export default UserPage;
