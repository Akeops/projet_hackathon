import React from 'react';

//ca a changer quand on connectera a la bdd
interface ToiletProps {
    address: string;
    isHandicappedAccessible: boolean;
    rating: number;
  }
  

const ToiletCard: React.FC<ToiletProps> = ({ address, isHandicappedAccessible, rating }) => {
  return (
    <div className="card">
      <h2 className="card-title">Toilette</h2>
      <p className="card-info"><strong>Adresse:</strong> {address}</p>
      <p className="card-info"><strong>Accès handicapé:</strong> {isHandicappedAccessible ? 'Oui' : 'Non'}</p>
      <p className="card-info"><strong>Note:</strong> {rating} / 10</p>
    </div>
  );
};

export default ToiletCard;
