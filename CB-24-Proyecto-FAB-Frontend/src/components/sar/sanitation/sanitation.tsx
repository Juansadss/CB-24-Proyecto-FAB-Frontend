import React, { useState } from 'react';
import './sanitation.css';
import LayoutSar from '../layout-sar/layout-sar';
import { useNavigate } from 'react-router-dom';

const SanitationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fecha: '',
        paciente: '',
        diagnostico: '',
        tratamiento: ''
    });

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
                <form className="sanitation-form" onSubmit={handleSubmit}>
                    <div className="sanitation-header">
                        <button onClick={handleBackClick}>&lt;</button>
                        <span className="main-title">SANIDAD</span>
                        <span className="sub-title">&gt; Crear Tratamiento</span>
                    </div>
                    <h2>DATOS PERSONALES</h2>
                    <div className="form-group">
                        <label>Fecha de Diagnóstico:</label>
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
                    <h2>DATOS MÉDICOS</h2>
                    <div className="form-group">
                        <label>Diagnóstico:</label>
                        <textarea name="diagnostico" onChange={handleChange} value={formData.diagnostico} />
                    </div>
                    <div className="form-group">
                        <label>Tratamiento:</label>
                        <textarea name="tratamiento" onChange={handleChange} value={formData.tratamiento} />
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
