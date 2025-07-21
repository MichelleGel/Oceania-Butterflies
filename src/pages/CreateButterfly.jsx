import FormButterfly from "../components/FormButterfly";

const FormCreate = () => {
  const handleCreate = (data) => {
    console.log("Mariposa creada:", data);
    // Aquí puedes enviar los datos a tu API o backend
  };

  return <FormButterfly onSubmit={handleCreate} mode="create" />;
};

export default FormCreate;