import React, { useState } from 'react';
import './sanidad_tratamiento.css';
import LayoutSar from '../layout-sar/layout-sar';

const SanidadTratamiento = () => {
    const [formData, setFormData] = useState({
        institucion: '',
        fechaInicio: '',
        fechaFin: ''
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
            <div className="sanidad_tratamiento-container">
                <h3>SANIDAD </h3>
                <div className="sanidad_tratamiento-content">
                    <form className="sanidad_tratamiento-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">

                            <div className="form-group">
                                <label><b>Tipo Operativo</b></label>
                                <select name="institucion" onChange={handleChange} value={formData.institucion}>
                                    <option value="">Tipo operativo</option>
                                    <option value="Rescate">Rescate</option>
                                    <option value="Medica">Seguridad médica</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label><b>Buscar</b></label>
                                <input type="text" name="cantidad" placeholder='Buscar...' onChange={handleChange} />
                            </div>
                            <button className='sanidad_tratamiento-btnAgregar' type="button">Agregar</button>
                        </div>
                    </form>
                    <table className="sanidad_tratamiento-table">
                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>NOMBRE PACIENTE</th>
                                <th>DIÁGNOSTICO</th>
                                <th>TRATAMIENTO</th>
                                <th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default SanidadTratamiento;
