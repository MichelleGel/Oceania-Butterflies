import React, { useState, useRef } from "react";
import "./FormCreate.css";
const FormCreate = () => {
    const [formData, setFormData] = useState({
        id: "",
        commonName: "",
        scientificName: "",
        family: "",
        region: "",
        specificLocation: "",
        habitat: "",
        wingspan: "",
        description: "",
        conservationStatus: "",
        threatLevel: "",
        population: "",
        flightSeason: [],
        hostPlants: [],
        nectarSources: [],
        behavior: "",
        coordinates: {
            "latitude": "",
            "longitude": ""
        },
        colorPrimary: "",
        tags: [],
        publicId: "",
        imageFile: null
    });
    const fileInputRef = useRef(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        //Si es un campo dentro de coordinadas
        if (name.startsWith("coordinates.")) {
            const field = name.split(".")[1];
            setFormData((prevData) => ({
                ...prevData,
                coordinates: {
                    ...prevData.coordinates,
                    [field]: value,
                },
            }));
        } else {
            //Convierte los campos específicos en arrays
            const arrayFields = ["flightSeason", "hostPlants", "nectarSources", "tags"];
            const isArrayField = arrayFields.includes(name);

            setFormData((prevData) => ({
                ...prevData,
                //.split convierte en array lo que se mete entre comas, y .trim es para quitar los espacios extra
                [name]: isArrayField ? value.split(",").map(v => v.trim()) : value,
            }));
        }
    };
    //Aquí se define qué pasa cuando se envía el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); //Para que no se recarge la página
        console.log("Datos enviados", formData)//Imprime los datos del formulario para ver que se están enviando
    }
    const handleImageChange = (e) => {
        const value = e.target.value;
        setFormData((prev) => ({
            ...prev,
            publicId: value,
            imageFile: null,
        }));
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation(); //Para que se propague y abra la imagen
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            setFormData((prev) => ({
                ...prev,
                imageFile: file,
                publicId: "",
            }));
        }
    };
    const handleClick = () => {
        fileInputRef.current.click();
    };
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setFormData((prev) => ({
                ...prev,
                imageFile: file,
                publicId: "",
            }));
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre común:
                <input
                    type="text"
                    name="commonName"
                    value={formData.commonName}
                    onChange={handleChange}
                /><br></br>
            </label>
            <label>
                Nombre científico:
                <input
                    type="text"
                    name="scientificName"
                    value={formData.scientificName}
                    onChange={handleChange}
                /><br></br>
            </label>
            <label>
                Familia:
                <input
                    type="text"
                    name="family"
                    value={formData.family}
                    onChange={handleChange}
                /><br></br>
            </label>
            <label>
                Region:
                <input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Localización específica:
                <input
                    type="text"
                    name="specificLocation"
                    value={formData.specificLocation}
                    onChange={handleChange}
                /><br></br>
            </label>
            <label>
                Hábitat:
                <input
                    type="text"
                    name="habitat"
                    value={formData.habitat}
                    onChange={handleChange}
                /><br></br>
            </label>
            <label>
                Envergadura de las alas (cm):
                <input
                    type="text"
                    name="wingspan"
                    value={formData.wingspan}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Descripción:
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                /><br></br>
            </label>
            <label>
                Estado de conservación:
                <input
                    type="text"
                    name="conservationStatus"
                    value={formData.conservationStatus}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Nivel de amenaza:
                <input
                    type="text"
                    name="threatLevel"
                    value={formData.threatLevel}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Población:
                <input
                    type="text"
                    name="population"
                    value={formData.population}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Temporada de vuelo:
                <input
                    type="text"
                    name="flightSeason"
                    value={formData.flightSeason}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Plantas anfitrionas:
                <input
                    type="text"
                    name="hostPlants"
                    value={formData.hostPlants}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Fuentes de néctar:
                <input
                    type="text"
                    name="nectarSources"
                    value={formData.nectarSources}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Comportamiento:
                <input
                    type="text"
                    name="behavior"
                    value={formData.behavior}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Latitud:
                <input
                    type="text"
                    name="coordinates.latitude"
                    value={formData.coordinates.latitude}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Longitud:
                <input
                    type="text"
                    name="coordinates.longitude"
                    value={formData.coordinates.longitude}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Color:
                <input
                    type="text"
                    name="colorPrimary"
                    value={formData.colorPrimary}
                    onChange={handleChange}
                />
            </label><br></br>
            <label>
                Etiquetas:
                <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                />
            </label><br></br>
            <label className="image-field">
                Imagen (URL, arrastra o selecciona):

                <input
                    type="text"
                    placeholder="Pega una URL de imagen"
                    value={formData.publicId}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            publicId: e.target.value,
                            imageFile: null,
                        }))
                    }
                    className="image-url-input"
                />

                <div
                    className="drop-area"
                    onDrop={(e) => {
                        e.preventDefault();
                        const file = e.dataTransfer.files[0];
                        if (file && file.type.startsWith("image/")) {
                            setFormData((prev) => ({
                                ...prev,
                                imageFile: file,
                                publicId: "",
                            }));
                        }
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => fileInputRef.current.click()}
                >
                    {formData.imageFile || formData.publicId ? (
                        <img
                            src={
                                formData.imageFile
                                    ? URL.createObjectURL(formData.imageFile)
                                    : formData.publicId
                            }
                            alt="Vista previa"
                            className="image-preview"
                        />
                    ) : (
                        <span>Arrastra una imagen aquí o haz clic</span>
                    )}
                </div>

                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file && file.type.startsWith("image/")) {
                            setFormData((prev) => ({
                                ...prev,
                                imageFile: file,
                                publicId: "",
                            }));
                        }
                    }}
                />
            </label>

            <button type="submit">Guardar mariposa</button>
        </form>
    )
}

export default FormCreate;
