import FormButterfly from "../components/FormButterfly";

const EditButterfly = ({ butterflyData }) => {
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
};

export default EditButterfly;