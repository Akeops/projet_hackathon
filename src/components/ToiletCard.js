import "../styles/ToiletCard.css";

const ToiletCard = ({ type, address, borough, hours, disableAcs, babyAccess }) => {
  return (
    <div className="card">
      <h2 className="card-title"><strong></strong> {type}</h2>
      <p className="card-info"><strong>Adresse:</strong> {address}{borough}</p>
      <p className="card-info"><strong>Horaires d'ouverture:</strong>{hours}</p>
      <p className="card-info"><strong>Accès handicapé:</strong> {disableAcs ? 'Oui' : 'Non'}</p>
      <p className="card-info"><strong>Accès bébé:</strong> {babyAccess ? 'oui' : 'Non'}</p>
    </div>
  );
};

export default ToiletCard;
