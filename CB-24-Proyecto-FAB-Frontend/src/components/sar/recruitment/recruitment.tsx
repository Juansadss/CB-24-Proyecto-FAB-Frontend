import React, { useState } from 'react';
import './recruitment.css';
import LayoutSar from '../layout-sar/layout-sar';

const RecruitmentForm = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        ci: '',
        fechaNacimiento: '',
        correo: '',
        optarLibretaMilitar: false,
        carnetIdentidad: null,
        certificadoNacimiento: null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : null
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <LayoutSar>
            <div className="recruitment-form-container">
            <form className="recruitment-form" onSubmit={handleSubmit}>
                <h3>FORMULARIO DE RECLUTAMIENTO</h3>
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
                        <label>CI:</label>
                        <input type="text" name="ci" onChange={handleChange} value={formData.ci} />
                    </div>
                    <div className="form-group">
                        <label>Fecha de nacimiento:</label>
                        <input type="date" name="fechaNacimiento" onChange={handleChange} value={formData.fechaNacimiento} />
                    </div>
                </div>
                <div className="form-group-row">
                    <div className="form-group">
                        <label>Correo electrónico:</label>
                        <input type="email" name="correo" onChange={handleChange} value={formData.correo} />
                    </div>
                </div>
                <div className="form-group">
                    <label>
                        <input type="checkbox" name="optarLibretaMilitar" onChange={handleChange} checked={formData.optarLibretaMilitar} />
                        Optar por libreta militar
                    </label>
                </div>
                <div className="form-group-row">
                    <div className="form-group">
                        <label>Fotocopia de carnet de identidad</label>
                        <input type="file" name="carnetIdentidad" onChange={handleFileChange} />
                    </div>
                    <div className="form-group">
                        <label>Certificado de nacimiento</label>
                        <input type="file" name="certificadoNacimiento" onChange={handleFileChange} />
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </LayoutSar>
        
    );
};

export default RecruitmentForm;
