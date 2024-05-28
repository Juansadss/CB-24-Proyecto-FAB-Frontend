import React, { useState } from 'react';
import './operations_list.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaAngleLeft } from 'react-icons/fa6';

const OperationsList = () => {
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
            <div className="operations_list-container">

                <h3> <FaAngleLeft /> LISTA DE OPERACIONES </h3>
                <div className="operations_list-content">
                    <form className="operations_list-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">
                            <button type="button" >+</button>
                            <div className="form-group">
                                <label><b>Tipo Operaciones</b></label>
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

                        </div>
                    </form>
                    <table className="operations_list-table">
                        <thead>
                            <tr>
                                <th>TIPO OPERATIVO</th>
                                <th>FECHA</th>
                                <th>LUGAR</th>
                                <th>ESTADO</th>
                                <th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rescate</td>
                                <td>20-06-24</td>
                                <td>Tiquipaya</td>
                                <td>En proceso</td>
                                <td><button className="operations_list-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>Seguridad Médica</td>
                                <td>12-09-24</td>
                                <td>Tiquipaya</td>
                                <td>Finalizado</td>
                                <td><button className="operations_list-icon-button">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default OperationsList;
