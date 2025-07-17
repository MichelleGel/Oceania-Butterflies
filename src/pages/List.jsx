import ButterflyCard from "../components/ButterflyCard"; //Importamos el componente ButterflyCard y que contiene las tarjetas. 
import "./list.css"; //Importamos el CSS que le da estilo a esta página en particular
import ButterflyData from '/server/butterfly.json' //Importamos nuestra base de datos. 

const List=()=> {
    return (
        <>
            <h1> Mariposas de Oceanía </h1>
            <div className="butterfly-list-container">
                {ButterflyData.butterfly.map((butterfly) => ( //Accedemos a la base de datos y la recorremos mediante el map. Cada elemento que recorre se llamará butterfly (está en el paréntesis de la función)
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