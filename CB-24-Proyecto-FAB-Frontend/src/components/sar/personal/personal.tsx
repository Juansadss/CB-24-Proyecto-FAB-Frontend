import React, { useState } from 'react';
import './personal.css';
import LayoutSar from '../layout-sar/layout-sar';

const PersonalForm = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        grado: '',
        fechaNacimiento: '',
        departamento: '',
        ci: '',
        domicilio: '',
        telefono: '',
        celular: '',
        ocupacion: '',
        grupoSanguineo: '',
        religion: '',
        correo: '',
        alergias: '',
        senasParticulares: '',
        ultimoCurso: '',
        parentesco: '',
        direccion: '',
        telefonoEmergencia: '',
        celularEmergencia: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <LayoutSar>
            <div className="personal-form-container">
                <form className="personal-form" onSubmit={handleSubmit}>
                    <h3>PERSONAL &gt; Filiación personal</h3>
                    <h2>DATOS PERSONALES</h2>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Nombres:</label>
                            <input type="text" name="nombres" onChange={handleChange} value={formData.nombres} />
                        </div>
                        <div className="form-group">
                            <label>Apellidos:</label>
                            <input type="text" name="apellidos" onChange={handleChange} value={formData.apellidos} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Grado:</label>
                            <select name="grado" onChange={handleChange} value={formData.grado}>
                                <option value="">Seleccione...</option>
                                <option value="Grado 1">Grado 1</option>
                                <option value="Grado 2">Grado 2</option>
                                <option value="Grado 3">Grado 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Fecha de nacimiento:</label>
                            <input type="date" name="fechaNacimiento" onChange={handleChange} value={formData.fechaNacimiento} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Departamento:</label>
                            <select name="departamento" onChange={handleChange} value={formData.departamento}>
                                <option value="">Seleccione...</option>
                                <option value="Departamento 1">Departamento 1</option>
                                <option value="Departamento 2">Departamento 2</option>
                                <option value="Departamento 3">Departamento 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>C.I.:</label>
                            <input type="text" name="ci" onChange={handleChange} value={formData.ci} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Domicilio:</label>
                        <input type="text" name="domicilio" onChange={handleChange} value={formData.domicilio} />
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Teléfono:</label>
                            <input type="text" name="telefono" onChange={handleChange} value={formData.telefono} />
                        </div>
                        <div className="form-group">
                            <label>Celular:</label>
                            <input type="text" name="celular" onChange={handleChange} value={formData.celular} />
                        </div>
                        <div className="form-group">
                            <label>Ocupación:</label>
                            <input type="text" name="ocupacion" onChange={handleChange} value={formData.ocupacion} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Grupo Sanguíneo:</label>
                            <input type="text" name="grupoSanguineo" onChange={handleChange} value={formData.grupoSanguineo} />
                        </div>
                        <div className="form-group">
                            <label>Religión:</label>
                            <input type="text" name="religion" onChange={handleChange} value={formData.religion} />
                        </div>
                        <div className="form-group">
                            <label>Correo:</label>
                            <input type="email" name="correo" onChange={handleChange} value={formData.correo} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Alergias:</label>
                        <input type="text" name="alergias" onChange={handleChange} value={formData.alergias} />
                    </div>
                    <div className="form-group">
                        <label>Señas Particulares:</label>
                        <input type="text" name="senasParticulares" onChange={handleChange} value={formData.senasParticulares} />
                    </div>
                    <div className="form-group">
                        <label>Último curso aprobado:</label>
                        <input type="text" name="ultimoCurso" onChange={handleChange} value={formData.ultimoCurso} />
                    </div>
                    <h2>EN CASO DE EMERGENCIA</h2>
                    <div className="form-group">
                        <label>Llamar o avisar a:</label>
                        <input type="text" name="llamarAvisar" onChange={handleChange} />
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Parentesco:</label>
                            <input type="text" name="parentesco" onChange={handleChange} value={formData.parentesco} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Dirección:</label>
                        <input type="text" name="direccion" onChange={handleChange} value={formData.direccion} />
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Teléfono:</label>
                            <input type="text" name="telefonoEmergencia" onChange={handleChange} value={formData.telefonoEmergencia} />
                        </div>
                        <div className="form-group">
                            <label>Celular:</label>
                            <input type="text" name="celularEmergencia" onChange={handleChange} value={formData.celularEmergencia} />
                        </div>
                    </div>
                    <div className="form-group file-upload">
                        <label>Chequeo Médico:</label>
                        <input type="file" name="chequeoMedico" />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </LayoutSar>
    );
};

export default PersonalForm;
