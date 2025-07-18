import { useState } from "react";
import ButterflyCard from "../components/ButterflyCard"; //Importamos el componente ButterflyCard y que contiene las tarjetas.
import "./list.css"; //Importamos el CSS que le da estilo a esta página en particular
import ButterflyData from "/server/butterfly.json"; //Importamos nuestra base de datos.
import SearchBar from "../components/SearchBar"; //Importamos el componente de SearchBar
import Map from "../components/Map"; // 👈 1. IMPORTA TU NUEVO COMPONENTE

const List = () => {
  const [searchTerm, setSearchTerm] = useState(""); //Con el useState vamos a guardar el texto de busqueda, lo inicializamos vacio.
  const [selectedRegion, setSelectedRegion] = useState("Todas"); //Este es para la Region lo iniciamos en Todas para que se vean todas desde el inicio.
  const [selectedThreat, setSelectedThreat] = useState("Todas");

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedRegion("Todas");
    setSelectedThreat("Todas");
  };
  // Lógica de filtrado.
  //filteredButterflies va a guardar la lista de las mariposas dependiendo la filtración.
  const filteredButterflies = ButterflyData.butterfly.filter((butterfly) => {
    //filter() Es una función de JavaScript que crea una nueva lista solo con los elementos que cumplen una condición.
    // Filtro por región
    const regionMatch =
      selectedRegion === "Todas" || butterfly.region === selectedRegion;

    // Filtro por texto de búsqueda (insensible a mayúsculas)
    const searchMatch = butterfly.commonName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const threatMatch =
      selectedThreat === "Todas" || butterfly.threatLevel === selectedThreat;

    return regionMatch && searchMatch && threatMatch;
  });
  return (
    <>
      <div className="listPage">
        <h1> Mariposas de Oceanía </h1>
        <SearchBar
          onSearchChange={setSearchTerm} // Pasa la función para actualizar el término de búsqueda
          onRegionChange={setSelectedRegion} // Pasa la función para actualizar la región
          onThreatChange={setSelectedThreat}
          onClearAll={handleClearFilters}
        />
        <div style={{ margin: "20px 0" }}>
          <Map butterflies={filteredButterflies} />
        </div>

        <div className="butterfly-list-container">
          {filteredButterflies.map(
            (
              butterfly //Accedemos a la base de datos y la recorremos mediante el map. Cada elemento que recorre se llamará butterfly (está en el paréntesis de la función)
            ) => (
              <ButterflyCard //Llamamos al componente donde se encuentran las tarjetas.
                key={butterfly.id} // Identifica al elemento, escogemos id porque es único para cada mariposa.
                butterfly={butterfly}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default List;
