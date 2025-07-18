// src/components/MapComponent.jsx

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet

// Arreglo para un bug común con los iconos por defecto en React-Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const CLOUD_NAME = "da3higfux";
const CLOUDINARY_URL_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
const imageUrl = `${CLOUDINARY_URL_BASE}/${TRANSFORMATIONS}/${butterfly.publicId}.png`;
let defIcon = {butterflies.map(
    (butterfly) => (
        <ButterflyCard
        icon2 = {butterfly.imageUrl}
        />

    )
)}

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;


const MapComponent = ({ butterflies }) => {
  // Este componente recibirá la lista de mariposas a mostrar
  return (
    <MapContainer 
      center={[-25.2744, 133.7751]} 
      zoom={4} 
      style={{ height: '500px', width: '100%' }}
    >
      {/* MapContainer es el contenedor principal del mapa. Lo centramos en Australia con un zoom inicial. */}
      {/* Es crucial darle una altura (height) para que sea visible. */}
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* TileLayer es la capa visual del mapa. Usamos OpenStreetMap, que es gratis y no necesita clave. */}

      {/* Recorremos la lista de mariposas y creamos un Marcador para cada una */}
      {butterflies.map(butterfly => (
        <Marker 
          key={butterfly.id} 
          position={[butterfly.coordinates.latitude, butterfly.coordinates.longitude]}
        >
          {/* El Popup es la ventana que aparece al hacer clic en un marcador */}
          <Popup>
            <strong>{butterfly.commonName}</strong><br />
            <em>{butterfly.scientificName}</em>
            <em>{butterfly.imageUrl}</em>
            
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;