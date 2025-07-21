import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./FormButterfly.css";
import TagsInput from "./TagsInput/TagsInput.jsx";
import "../components/TagsInput/TagsInput.css";


const FormButterfly = ({ initialData = {}, onSubmit, mode = "create" }) => {
    const fileInputRef = useRef(null);
    const [imageInputType, setImageInputType] = useState("url"); // Controla si se usa URL o subida de imagen

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: initialData,
    });

    // Registrar "tags"
    useEffect(() => {
        register("tags");
    }, [register]);

    const tagsValue = watch("tags") || [];


    //función que se ejecuta al eviar el forulario
    const handleFormSubmit = (data) => {
        console.log("Datos enviados:", data);
        onSubmit?.(data);
    };
    //aneja la selección manual de un archivo
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setValue("imageFile", file);
            setValue("publicId", "");
        }
    };
    //maneja el arrastrar la imagen
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            setValue("imageFile", file);
            setValue("publicId", "");
        }
    };
    //imagen actual 
    const currentImage = watch("imageFile")
        ? URL.createObjectURL(watch("imageFile"))
        : watch("publicId");

    return (
        <div className="form-container">
            <div className="form-card">
                <h1>{mode === "edit" ? "Editar Mariposa" : "Agregar nueva Mariposa"}</h1>
                <h2>{mode === "edit" ? "Modifica la información existente" : "Documenta un nuevo avistamiento"}</h2>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="form-grid">
                        <label className="image-field">
                            Fotografía:
                            <div className="image-toggle-buttons">
                                <button
                                    type="button"
                                    className={imageInputType === "file" ? "active" : ""}
                                    onClick={() => setImageInputType("file")}
                                >
                                    📸 Subir imagen
                                </button>
                                <button
                                    type="button"
                                    className={imageInputType === "url" ? "active" : ""}
                                    onClick={() => setImageInputType("url")}
                                >
                                    🔗 URL
                                </button>
                            </div>
                            <div className="image-input-container">
                                {imageInputType === "url" && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Pega una URL de imagen"
                                            {...register("publicId")}
                                            onChange={(e) => {
                                                setValue("publicId", e.target.value);
                                                setValue("imageFile", null);
                                            }}
                                            className="image-url-input"
                                        />
                                    </>
                                )}

                                {imageInputType === "file" && (
                                    <>
                                        <div
                                            className="drop-area green-border"
                                            onDrop={handleDrop}
                                            onDragOver={(e) => e.preventDefault()}
                                            onClick={() => fileInputRef.current.click()}
                                        >
                                            {currentImage ? (
                                                <img src={currentImage} alt="Vista previa" className="image-preview" />
                                            ) : (
                                                <span>📸<br />Arrastra una imagen aquí o haz clic</span>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInputRef}
                                            style={{ display: "none" }}
                                            onChange={handleFileSelect}
                                        />
                                    </>
                                )}
                            </div>
                        </label>

                        <label>
                            <span className="required-label">Nombre común:</span>
                            <input type="text" {...register("commonName", { required: true })} />
                        </label>

                        <label>
                            <span className="required-label">Nombre científico:</span>
                            <input type="text" {...register("scientificName", { required: true })} />
                        </label>

                        <label>
                            Familia:
                            <input type="text" {...register("family", { required: true })} />
                        </label>

                        <label>
                            <span className="required-label">Región:</span>
                            <select type="text" {...register("region", { required: true })}>
                                <option value="">Selecciona una región</option>
                                <option value="Australia">Australia</option>
                                <option value="Nueva Zelanda">Nueva Zelanda</option>
                                <option value="Islas del Pacífico">Islas del Pacífico</option>
                            </select>
                        </label>
                        <label>
                            Localización específica:
                            <input type="text" {...register("specificLocation")} />
                        </label>

                        <label>
                            Hábitat:
                            <input type="text" {...register("habitat")} />
                        </label>

                        <label>
                            Envergadura (cm):
                            <input type="text" {...register("wingspan")} />
                        </label>

                        <label>
                            Descripción:
                            <input type="text" {...register("description")} />
                        </label>

                        <label>
                            Estado de conservación:
                            <input type="text" {...register("conservationStatus")} />
                        </label>

                        <label>
                            <span className="required-label">Nivel de amenaza:</span>
                            <select {...register("threatLevel", { required: true })}>
                                <option value="">Selecciona nivel de amenaza</option>
                                <option value="vulnerable">Vulnerable</option>
                                <option value="preocupación menor">Preocupación menor</option>
                                <option value="en peligro crítico">En peligro crítico</option>
                            </select>
                        </label>

                        <label>
                            Población:
                            <input type="text" {...register("population")} />
                        </label>

                        <label>
                            Temporada de vuelo:
                            <input type="text" {...register("flightSeason")} />
                        </label>

                        <label>
                            Plantas anfitrionas:
                            <input type="text" {...register("hostPlants")} />
                        </label>

                        <label>
                            Fuentes de néctar:
                            <input type="text" {...register("nectarSources")} />
                        </label>

                        <label>
                            Comportamiento:
                            <input type="text" {...register("behavior")} />
                        </label>

                        <label>
                            Latitud:
                            <input type="text" {...register("coordinates.latitude")} />
                        </label>

                        <label>
                            Longitud:
                            <input type="text" {...register("coordinates.longitude")} />
                        </label>

                        <label>
                            Color principal:
                            <input type="text" {...register("colorPrimary")} />
                        </label>

                        <label>
                            Etiquetas:
                            <TagsInput
                                value={tagsValue}
                                onChange={(newTags) => setValue("tags", newTags, { shouldValidate: true, shouldDirty: true })}
                            />

                        </label>
                    </div>

                    <button type="submit">
                        {mode === "edit" ? "Actualizar mariposa" : "Guardar mariposa"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormButterfly;
