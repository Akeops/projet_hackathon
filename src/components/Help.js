import "../styles/Help.css";

const Help = () => {
  return (
    <div className="help-page">
      <h1>Page d'Aide</h1>
      <section>
        <h2>FAQ - Questions Fréquemment Posées</h2>
        <article>
          <h3>Comment trouver la toilette publique la plus proche ?</h3>
          <p>Utilisez la fonction de recherche sur notre page d'accueil en entrant votre position actuelle pour trouver la liste des toilettes publiques les plus proches.</p>
        </article>
        <article>
          <h3>Est-ce que l'utilisation des toilettes est gratuite ?</h3>
          <p>La plupart des toilettes publiques répertoriées sur notre site sont gratuites, mais certaines peuvent demander un petit frais d'entretien.</p>
        </article>
      </section>
      <section>
        <h2>Conseils d'Utilisation</h2>
        <p>Veuillez respecter les installations et les garder propres pour les prochains utilisateurs. En cas de problème ou de manque de propreté, veuillez utiliser les fonctionnalités de signalement disponibles sur notre site.</p>
      </section>
      <section>
        <h2>Contactez-Nous</h2>
        <p>Pour toute question ou retour d'information, n'hésitez pas à nous contacter via email à contact@toilettespubliques.com.</p>
      </section>
    </div>
  );
};

export default Help;
