import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";

// Corriger l'erreur avec les icônes Leaflet
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Minimap = () => {
  // Coordonnées pour centrer la carte
  const position = [48.8566, 2.3522]; // Exemple : Paris

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[395px] w-[343px] rounded-3xl shadow-xl"
    >
      {/* TileLayer pour afficher la carte de base */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marqueur pour la position centrale */}
      <Marker position={position}>
        <Tooltip permanent>Pizzeria Bella Luna</Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Minimap;
