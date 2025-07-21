import './ButterflyDetail.css'
const ButterflyDetail = () => {
  return (
    <>
      <div className="detailWindow">
        <div className="detailHeader">
          <h1>{butterfly.commonName}</h1>
          <h3>{butterfly.scientificName}</h3>
        </div>
        <div className="detailList">
            <p><strong>Ubicación</strong></p>
            <p>{butterfly.region}, {butterfly.specificLocation}</p><br></br>
            <p><strong>Tamaño</strong></p>
            <p>{butterfly.wingspan}{butterfly.wingspanUnit}</p><br></br>
            <p><strong>Temporada de Vuelo</strong></p>
            <p>{butterfly.flightSeason}</p><br></br>            
            <p><strong>Estado de Conservación</strong></p>
            <p>{butterfly.threatLevel}</p>
            <p>Población: {butterfly.population}</p><br></br>
            <p><strong>Familia</strong></p>
            <p>{butterfly.family}</p><br></br>
            <p><strong>Comportamiento</strong></p>
            <p>{butterfly.behavior}</p><br></br>
            <p><strong>Description</strong></p>
            <p>{butterfly.description}</p><br></br>
            <p><strong>Plantas Hospederas</strong></p>
            <p>{butterfly.hostPlants}</p><br></br>
            <p><strong>Fuente de Néctar</strong></p>
            <p>{butterfly.nectarSources}</p>                                            
        </div>
      </div>
    </>
  );
};

export default ButterflyDetail;
