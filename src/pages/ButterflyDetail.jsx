import './ButterflyDetail.css'
import { useParams, useNavigate, useLocation } from "react-router-dom";//añadido por luisa
import { useState, useEffect } from 'react';
import { getOneButterfly } from '../services/ButterflyServices';
import Button from '../components/Button';



const ButterflyDetail = () => {

  const { id } = useParams();//añadido por luisa
  const location = useLocation();
  console.log("ID de Params", id);


  const [butterfly, setButterfly] = useState(null);
  const [loading, setLoading]= useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const DetailButterfly = async () => {
      try {
        setLoading(true);

        const bfDetail = await getOneButterfly(id);
        setButterfly(bfDetail);
        console.log("La mariposa es:", bfDetail);
      }
      catch (error) {
        console.error("error:", error);
      } 
      finally {
        setLoading(false);
      }
    };
    if(id){
    DetailButterfly();
    }
  }, [id, location.key]);
  if(loading){
    return <p>Cargando mariposa...</p>
  }

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
            <p><strong>Población:</strong> <br></br>{butterfly.population}</p><br></br>
            <p><strong>Familia</strong></p>
            <p>{butterfly.family}</p><br></br>
            <p><strong>Comportamiento</strong></p>
            <p>{butterfly.behavior}</p><br></br>
            <p><strong>Description</strong></p>
            <p>{butterfly.description}</p><br></br>
            <p><strong>Plantas Hospederas</strong></p>
            <p>{butterfly.hostPlants}</p><br></br>
            <p><strong>Fuente de Néctar</strong></p>
            <p>{butterfly.nectarSources}</p> <br></br>
            <Button type="button" title="go back" action={() => navigate("/butterflylist")}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButterflyDetail;
