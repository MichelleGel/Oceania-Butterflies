import FormButterfly from "../components/FormButterfly";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneButterfly, updateButterfly } from "../services/ButterflyServices";
import Swal from "sweetalert2";


const EditButterfly = ()=>{
  const { id } = useParams();
  const navigate = useNavigate();
  const [butterfly, setButterfly] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getOneButterfly(id);
        console.log("Datos recibidos de la API", data)
        setButterfly(data);
      } catch (error) {
        console.error("Error al obtener la mariposa", error);
        setError("No se pudo cargar la mariposa");
        Swal.fire("Error", "No se pudo cargar la mariposa");
    } finally{
      setLoading(false);
    }
  };
  if (id) {
    fetchData();
  }
  }, [id]);

  const handleSubmit = async (updatedData) => {
    try {
      console.log("Datos a actualizar:", updatedData);
      const result = await updateButterfly(id, updatedData);
      console.log("Resultado de la actualización:", result);

      Swal.fire("Éxito", "Mariposa actualizada");
      navigate("/")// volver a la lista o pagina donde se dio al editar
    } catch (error) {
      console.error("Error al actualizar:", error);
      Swal.fire("Error", "No se pudo actualizar");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Volver</button>
      </div>
    );
  }

    return (
      <>
      {butterfly ? (
        <FormButterfly
        initialData={butterfly}
        mode="edit"
        onSubmit={handleSubmit}
        onCancel={handleCancel}/>
      ) : ( 
        <div className="error">
          <p>No se encontró la mariposa</p>
          <button onClick={() => navigate("/")}>Volver</button>
        </div>
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

