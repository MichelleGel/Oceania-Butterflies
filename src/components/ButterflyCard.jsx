import "./ButterflyCard.css";
import Button from "./Button";
import { getOneButterfly, deleteButterfly, updateButterfly} from '../services/ButterflyServices';

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

  /* Se agregan las funciones de cada botón 
  const editButterfly = () => {
    console.log("Llamando a función Editar mariposa");
  };

  const seeButterflySheet = () => {
    console.log("Llamando a función Ver ficha de mariposa");
  };

  const deleteButterfly = () => {
    console.log("Llamando a función Eliminar mariposa");
  };*/

  // Construimos la URL completa de la imagen en Cloudinary
  const imageUrl = `${CLOUDINARY_URL_BASE}/${TRANSFORMATIONS}/${butterfly.publicId}.png`;

  // Esto es lo que el componente mostrará en pantalla (es JSX, parece HTML).
  return (
    <div className="card">
      <img src={imageUrl} alt={`Imagen de ${butterfly.commonName}`} />
      <h2 className="card-title">{butterfly.commonName}</h2>
      <h3 className="card-subtitle">{butterfly.scientificName}</h3>
      <p className="card-description">{butterfly.description}</p>
      <Button tooltip="Actualizar Información Mariposa" title="Editar" action={()=> updateButterfly(butterfly.id)}></Button>
      <Button tooltip="Cargar información de la mariposa" title="Ver Ficha" action={()=>getOneButterfly(butterfly.id)}></Button>
      <Button tooltip="Eliminar esta Mariposa" title="Eliminar" action={()=>deleteButterfly(butterfly.id)}></Button>
    </div>
  );
};

// Esta línea permite que otros archivos usen nuestro componente.
export default ButterflyCard;