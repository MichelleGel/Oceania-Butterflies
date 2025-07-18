import "./Button.css";
import React, {useState} from "react";

const Button = ({ title, action, tooltip }) => {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleClick = async () => {
        //console.log("test" + title);
        if (!action) return;

        setLoading(true);
        setMessage('');

        try {
            const result = await action();//Ejecuta el metodo CRUD recibido como prop
            setMessage('Acción completada correctamente');
            console.log(result);
        } catch (error){
            setMessage('Error al realizar la acción');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <>
            <button title={tooltip} type="button" onClick={handleClick} disabled={loading}>
            {loading ? 'Cargando ...': title}
            </button>
            {message && <p>{message}</p>}
        </>
    )
}

export default Button