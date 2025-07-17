import "./ButterflyCard.css";
// --- CONFIGURACIÓN DE CLOUDINARY ---
// ¡IMPORTANTE! Reemplaza 'tu-cloud-name-aqui' con tu Cloud Name real.
const CLOUD_NAME = "da3higfux";
const CLOUDINARY_URL_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// Estas son las transformaciones que le pedimos a Cloudinary.
// w_400 = ancho 400px, f_auto = formato automático, q_auto = calidad automática.
const TRANSFORMATIONS =
  "e_background_removal,w_250,h_250,c_pad,b_transparent,f_auto,q_auto";

// --- DEFINICIÓN DEL COMPONENTE ---
// Este es nuestro componente. Recibe un objeto "butterfly" con todos los datos.
const ButterflyCard = ({ butterfly }) => {
  // Construimos la URL completa de la imagen en Cloudinary
  const imageUrl = `${CLOUDINARY_URL_BASE}/${TRANSFORMATIONS}/${butterfly.publicId}.png`;

  // Esto es lo que el componente mostrará en pantalla (es JSX, parece HTML).
  return (
    <div className="card">
      <img src={imageUrl} alt={`Imagen de ${butterfly.commonName}`} />
      <h2 className="card-title">{butterfly.commonName}</h2>
      <h3 className="card-subtitle">{butterfly.scientificName}</h3>
      <p className="card-description">{butterfly.description}</p>
    </div>
  );
};

// Esta línea permite que otros archivos usen nuestro componente.
export default ButterflyCard;