import { useState } from 'react';
import ButterflyCard from "../components/ButterflyCard"; //Importamos el componente ButterflyCard y que contiene las tarjetas. 
import "./list.css"; //Importamos el CSS que le da estilo a esta página en particular
import ButterflyData from '/server/butterfly.json' //Importamos nuestra base de datos. 
import SearchBar from "../components/SearchBar";

const List=()=> {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Todas');
  // Lógica de filtrado
  const filteredButterflies = ButterflyData.butterfly.filter(butterfly => {
    // Filtro por región
    const regionMatch = selectedRegion === 'Todas' || butterfly.region === selectedRegion;
    
    // Filtro por texto de búsqueda (insensible a mayúsculas)
    const searchMatch = butterfly.commonName.toLowerCase().includes(searchTerm.toLowerCase());
    
    return regionMatch && searchMatch;
  });      
    return (
        <>
            <h1> Mariposas de Oceanía </h1>
            <SearchBar 
                onSearchChange={setSearchTerm} // Pasa la función para actualizar el término de búsqueda
                onRegionChange={setSelectedRegion} // Pasa la función para actualizar la región
            />
            <div className="butterfly-list-container">
                {filteredButterflies.map((butterfly) => ( //Accedemos a la base de datos y la recorremos mediante el map. Cada elemento que recorre se llamará butterfly (está en el paréntesis de la función)
                    <ButterflyCard //Llamamos al componente donde se encuentran las tarjetas.
                    key = {butterfly.id} // Identifica al elemento, escogemos id porque es único para cada mariposa. 
                    butterfly={butterfly}
                    />
                )
                )}
            </div>
        </>
    ) 
}

export default List