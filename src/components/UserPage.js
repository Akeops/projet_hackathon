import React, { useState, useEffect } from 'react';

const UserPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchCommentsFromDatabase()
            .then(comments => setComments(comments))
            .catch(error => console.error('Erreur lors de la récupération des commentaires:', error));
    }, []);

    const fetchCommentsFromDatabase = async () => {
        const response = await fetch('https://votre-api.com/comments');
        const data = await response.json();
        return data;
    };

    return (
        <div className="Profil">
            <h1>Votre Profil</h1>
            <h3>Vos commentaires</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <p>{comment.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;
