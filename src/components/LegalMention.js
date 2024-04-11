import '../styles/LegalMention.css';

const LegalMention = () => {
  return (
    <div className="legal-mentions">
      <h1>Mentions Légales</h1>
      <h2>Identification de l'éditeur du site</h2>
      <p>Nom de la société : </p>
      <p>Adresse : </p>
      <p>Téléphone : 01 23 45 67 89</p>
      <p>Email : </p>

      <h2>Hébergement</h2>
      <p>Ce site est hébergé par </p>
      <p>Adresse : </p>
      <p>Téléphone : </p>

      <h2>Propriété intellectuelle</h2>
      <p>Le contenu de ce site, incluant les textes, images et graphiques, appartient à XYZ. Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site, sans l’autorisation de XYZ est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et/ou le Code civil.</p>
    </div>
  );
};

export default LegalMention;