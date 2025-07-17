const SearchBar = ({ onSearchChange, onRegionChange }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Buscar mariposas..."
        onChange={(e) => onSearchChange(e.target.value)} // Avisa al padre cuando se escribe
      />
      <button onClick={() => onRegionChange('Todas')}>Todas</button>
      <button onClick={() => onRegionChange('Australia')}>Australia</button>
      <button onClick={() => onRegionChange('Nueva Zelanda')}>Nueva Zelanda</button>
      <button onClick={() => onRegionChange('Islas del Pacífico')}>Islas del Pacífico</button>
    </div>
  );
};

export default SearchBar;