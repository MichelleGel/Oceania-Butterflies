import FormButterfly from "../components/FormButterfly";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneButterfly, updateButterfly } from "../services/ButterflyServices";
import Swal from "sweetalert2";


const EditButterfly = ()=>{
  const { id } = useParams();
  const navigate = useNavigate();
  const [butterfly, setButterfly] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await getOneButterfly(id);
        console.log("Datos recibidos de la API", data)
        setButterfly(data);
      } catch (error) {
        Swal.fire("Error", "No se pudo cargar la mariposa");
        console.error("Error al obtener la mariposa", error)
        throw error;
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (updatedData) => {
    try {
      await updateButterfly(id, updatedData);
      Swal.fire("Éxito", "Mariposa actualizada");
      navigate("/")// volver a la lista o pagina donde se dio al editar
    } catch (error) {
      Swal.fire("Error", "No se pudo actualizar");
      throw error;
      
    }
  };
    return (
      <>
      {butterfly ? (
        <FormButterfly
        initialData={butterfly}
        mode="edit"
        onSubmit={handleSubmit}
        onCancel={()=>navigate("/")}/>
      ) : ( <p>Cargando...</p>
      )}
      </>
  );
}; 

export default EditButterfly;


/*const EditButterfly = ({ butterflyData }) => {
  const handleUpdate = (data) => {
    console.log("Mariposa actualizada:", data);
    // Aquí puedes actualizar los datos en el backend
  };

  return (
    <FormButterfly
      initialData={butterflyData}
      onSubmit={handleUpdate}
      mode="edit"
    />
  );
};*/

