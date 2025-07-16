import React, { useState } from "react";
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
        recordsCount: "",
        coordinates: {
        "latitude": "",
        "longitude": ""
        },
        imageUrl: "",
        colorPrimary: "",
        tags: []
    });
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

        setFormData((prevData) =>  ({
           ...prevData,
           //.split convierte en array lo que se mete entre comas, y .trim es para quitar los espacios extra
           [name]: isArrayField ? value.split(",").map(v => v.trim()) : value, 
        }));
      }
    };
    return (
        <form>
            <label>
                Nombre común:
                <input 
                type="text"
                name="commonName"
                value={formData.commonName}
                onChange={handleChange}
                />
            </label>
            <label>
                Nombre científico:
                <input
                type="text"
                name="scientificName"
                value={formData.scientificName}
                onChange={handleChange}
                />
            </label>
            <label>
                Familia:
                <input
                type="text"
                name="family"
                value={formData.family}
                onChange={handleChange}
                />
            </label>
            <label>
                Region:
                <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                />
            </label>
            <label>
                Localización específica:
                <input
                type="text"
                name="specificLocation"
                value={formData.specificLocation}
                onChange={handleChange}
                />
            </label>
            <label>
                Hábitat:
                <input
                type="text"
                name="habitat"
                value={formData.habitat}
                onChange={handleChange}
                />
            </label>
            <label>
                Envergadura de las alas:
                <input
                type="text"
                name="wingspan"
                value={formData.wingspan}
                onChange={handleChange}
                />
            </label>
            <label>
                Descripción:
                <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                />
            </label>
            <label>
                Estado de conservación:
                <input
                type="text"
                name="conservationStatus"
                value={formData.conservationStatus}
                onChange={handleChange}
                />
            </label>
            <label>
                Nivel de amenaza:
                <input
                type="text"
                name="threatLevel"
                value={formData.threatLevel}
                onChange={handleChange}
                />
            </label>
            <label>
                Población:
                <input
                type="text"
                name="population"
                value={formData.population}
                onChange={handleChange}
                />
            </label>
            <label>
                Temporada de vuelo:
                <input
                type="text"
                name="flightSeason"
                value={formData.flightSeason}
                onChange={handleChange}
                />
            </label>
            <label>
                Plantas anfitrionas:
                <input
                type="text"
                name="hostPlants"
                value={formData.hostPlants}
                onChange={handleChange}
                />
            </label>
            <label>
                Fuentes de néctar:
                <input
                type="text"
                name="nectarSources"
                value={formData.nectarSources}
                onChange={handleChange}
                />
            </label>
            <label>
                Comportamiento:
                <input
                type="text"
                name="behavior"
                value={formData.behavior}
                onChange={handleChange}
                />
            </label>
            <label>
                Total de especímenes:
                <input
                type="text"
                name="recordsCount"
                value={formData.recordsCount}
                onChange={handleChange}
                />
            </label>
            <label>
                Latitud:
                <input
                type="text"
                name="coordinates.latitude"
                value={formData.coordinates.latitude}
                onChange={handleChange}
                />
            </label>
            <label>
                Longitud:
                <input
                type="text"
                name="coordinates.longitude"
                value={formData.coordinates.longitude}
                onChange={handleChange}
                />
            </label>
            <label>
                Imagen:
                <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                />
            </label>
            <label>
                Color:
                <input
                type="text"
                name="colorPrimary"
                value={formData.colorPrimary}
                onChange={handleChange}
                />
            </label>
            <label>
                Etiquetas:
                <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                />
            </label>
        </form>
    )}

export default FormCreate;
