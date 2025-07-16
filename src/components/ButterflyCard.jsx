import './ButterflyCard.css';

const ButterflyCard = () => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src="https://ejemplo.com/imagen.png"
          alt="Imagen de la mariposa"
        />
      </div>
      <h2 className="card-title">Danaus plexippus</h2>
      <p className="card-subtitle">Mariposa monarca</p>
      <p className="card-description">
        Es quizás la más conocida de todas las mariposas de América del Norte.
        Desde el siglo XIX ha sido introducida en Nueva Zelanda y en Australia.
      </p>
      <div className="card-buttons">
        <button className="button edit">Editar</button>
        <button className="button view">Ver Ficha Completa</button>
        <button className="button delete">Eliminar</button>
      </div>
    </div>
  );
};

export default ButterflyCard;