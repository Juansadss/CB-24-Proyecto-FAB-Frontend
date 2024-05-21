import React, { useState } from 'react';
import './returnslist.css';
import LayoutSar from '../layout-sar/layout-sar';

const ReturnsList = () => {
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
            <div className="returnslist-container">
                <h3>INVENTARIO &gt; Devoluciones</h3>
                <div className="returnslist-content">
                    <form className="returnslist-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">
                            <button type="button" className="icon-button">+</button>
                            <div className="form-group">
                                <select name="institucion" onChange={handleChange} value={formData.institucion}>
                                    <option value="">Institución</option>
                                    <option value="Alcaldia">Alcaldía de Cochabamba</option>
                                    <option value="FuerzaAerea">Fuerza Aérea</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="date" name="fechaInicio" onChange={handleChange} value={formData.fechaInicio} />
                            </div>
                            <div className="form-group">
                                <input type="date" name="fechaFin" onChange={handleChange} value={formData.fechaFin} />
                            </div>
                        </div>
                    </form>
                    <table className="returnslist-table">
                        <thead>
                            <tr>
                                <th>INSTITUCIÓN</th>
                                <th>FECHA</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alcaldía de Cochabamba</td>
                                <td>dd/mm/aaaa</td>
                                <td><button className="icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>Fuerza Aérea</td>
                                <td>dd/mm/aaaa</td>
                                <td><button className="icon-button">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default ReturnsList;
