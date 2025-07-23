import './ButterflyDetail.css'
import butterfliesData from '../../server/butterfly.json'; //añadido por luisa, segun chat gpt esta ruta va a fallar
import { useParams } from "react-router-dom";//añadido por luisa
const ButterflyDetail = () => {
  const { id } = useParams();//añadido por luisa
  console.log("ID de Params", id);
  console.log("Datos JSON", butterfliesData);
  const butterfly = butterfliesData.butterfly.find(
    (b) => b.id.toString() === id
  );
  console.log("Mariposa encontrada", butterfly);

  if (!butterfly) {
    return <p>Mariposa no encontrada</p>;
  }//añadido por luisa
   const imageUrl = `https://res.cloudinary.com/da3higfux/image/upload/e_background_removal,w_400,h_400,c_pad,b_transparent,f_auto,q_auto/${butterfly.publicId}.png`;//añadido por luisa
  return (
    <>
      <div className="butterflyDetailWrapper">
      <div className="detailWindow">
        <div className="detailHeader">
          <h1>{butterfly.commonName}</h1>
          <h3>{butterfly.scientificName}</h3>
          <img src={imageUrl} alt={butterfly.commonName} className="butterflyImage" />
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
      </div>
    </>
  );
};

export default ButterflyDetail;
