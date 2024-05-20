import React, { useState } from 'react';
import './sanitation.css';
import LayoutSar from '../layout-sar/layout-sar';

const SanitationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fecha: '',
        paciente: '',
        diagnostico: '',
        tratamiento: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <LayoutSar>
            <div className="sanitation-form-container">
                <h3>SANIDAD &gt; Crear Tratamiento</h3> {/* Mueve el encabezado aquí */}
                <form className="sanitation-form" onSubmit={handleSubmit}>
                    <h2>DATOS PERSONALES</h2>
                    <div className="form-group">
                        <label>Fecha</label>
                        <input type="date" name="fecha" onChange={handleChange} value={formData.fecha} />
                    </div>
                    <div className="form-group">
                        <label>Paciente:</label>
                        <select name="paciente" onChange={handleChange} value={formData.paciente}>
                            <option value="">Seleccione...</option>
                            <option value="Paciente 1">Paciente 1</option>
                            <option value="Paciente 2">Paciente 2</option>
                            <option value="Paciente 3">Paciente 3</option>
                        </select>
                    </div>
                    <h2>DATOS MEDICOS</h2>
                    <div className="form-group">
                        <label>Diagnostico:</label>
                        <input type="text" name="diagnostico" onChange={handleChange} value={formData.diagnostico} />
                    </div>
                    <div className="form-group">
                        <label>Tratamiento:</label>
                        <input type="text" name="tratamiento" onChange={handleChange} value={formData.tratamiento} />
                    </div>
                    <div className="form-group-buttons">
                        <button type="submit" className="registrar-button">Registrar</button>
                    </div>
                </form>
            </div>
        </LayoutSar>
    );
};

export default SanitationForm;
