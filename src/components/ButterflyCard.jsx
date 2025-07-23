import "./ButterflyCard.css";
import Button from "./Button";
import { getOneButterfly, deleteButterfly, updateButterfly } from '../services/ButterflyServices';
import Swal from 'sweetalert2';
import { useState } from 'react';
import FormButterfly from "./FormButterfly";
//import { set } from "react-hook-form";
import { useNavigate } from "react-router-dom";


// --- CONFIGURACIÓN DE CLOUDINARY ---
// ¡IMPORTANTE! Reemplaza 'tu-cloud-name-aqui' con tu Cloud Name real.
import { useNavigate } from "react-router-dom";//Añadido por luisa
const CLOUD_NAME = "da3higfux";
const CLOUDINARY_URL_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// Estas son las transformaciones que le pedimos a Cloudinary.
// w_400 = ancho 400px, f_auto = formato automático, q_auto = calidad automática.
const TRANSFORMATIONS =
  "e_background_removal,w_250,h_250,c_pad,b_transparent,f_auto,q_auto";

// --- DEFINICIÓN DEL COMPONENTE ---
// Este es nuestro componente. Recibe un objeto "butterfly" con todos los datos.
const ButterflyCard = ({ butterfly }) => {
const navigate = useNavigate();

  // Construimos la URL completa de la imagen en Cloudinary
  const imageUrl = `${CLOUDINARY_URL_BASE}/${TRANSFORMATIONS}/${butterfly.publicId}.png`;

//estado para controlar si se esta editando
const [isEditing, setIsEditing] = useState(false);

  // Esto es lo que el componente mostrará en pantalla (es JSX, parece HTML).
  return (
    <div className="card">
      <img src={imageUrl} alt={`Imagen de ${butterfly.commonName}`} />
      <h2 className="card-title">{butterfly.commonName}</h2>
      <h3 className="card-subtitle">{butterfly.scientificName}</h3>
      <p className="card-description">{butterfly.description}</p>

      <Button tooltip="Cargar información de la mariposa" title="Ver Ficha" action={() => getOneButterfly(butterfly.id)} />
      <Button
        tooltip="Actualizar Información Mariposa"
        title="Editar"
        action={async () => navigate(`/editbutterfly:${butterfly.id}`)}//aqui debo meter el formulario de edición
        //updateButterfly(butterfly.id)}
      />

      <Button
        tooltip="Eliminar esta Mariposa"
        title="Eliminar"
        action={async () => {
          const confirmation = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará la mariposa.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#e63946',
            cancelButtonColor: '#7d8388ff',
          });
          if (confirmation.isConfirmed) {
            await deleteButterfly(butterfly.id);
            Swal.fire('La mariposa fue eliminada correctamente.');
            window.location.reload();
          }
        }}
      />

      {isEditing && (
  <FormButterfly
    initialData={butterfly}
    mode="edit"
    onSubmit={async (updatedData) => {
      try {
        await updateButterfly(butterfly.id, updatedData);
        Swal.fire('Mariposa actualizada correctamente.');
        setIsEditing(false);
        //window.location.reload(); // o actualiza el estado del padre si estás usando lifting state up
      } catch (error) {
        Swal.fire('Error al actualizar la mariposa', error.message, 'error');
      }
    }}
    onCancel={()=>setIsEditing(false)}//se pasa la funcion para cancelar en caso de no querer editar.
  />
)}

    </div>
  );
};




// Esta línea permite que otros archivos usen nuestro componente.
export default ButterflyCard;