//Vamos a crear el componente SearchBar que permitirá buscar mariposas y filtrar dependiendo las opciones que queramos.
const SearchBar = ({ onSearchChange, onRegionChange }) => { 
    //Recibirá por ahora dos props: 
    //onSearchChange se usará cuando alguien escriba en la barra de búsqueda.
   // onRegionChange se usará cuando alguien haga clic en un botón de región.
  return (
    <div>
      <input //Barra de búsqueda normal
        type="text" 
        placeholder="Buscar mariposas..."
        onChange={(e) => onSearchChange(e.target.value)} // onChange: Va detectar el cambio, se activa automáticamente (es una propiedad del input). e.target.value = recoge el valor de lo que se está escribiendo en el input.
      />
      <button onClick={() => onRegionChange('Todas')}>Todas</button>
      <button onClick={() => onRegionChange('Australia')}>Australia</button>
      <button onClick={() => onRegionChange('Nueva Zelanda')}>Nueva Zelanda</button>
      <button onClick={() => onRegionChange('Islas del Pacífico')}>Islas del Pacífico</button>
    </div>
  );
};

export default SearchBar;