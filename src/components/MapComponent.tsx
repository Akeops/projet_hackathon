import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapComponent: React.FC = () => {
  return (
    <MapContainer
      center={[48.8566, 2.3522]} 
      zoom={12}
      style={{ height: '600px', width: '100%' }} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;