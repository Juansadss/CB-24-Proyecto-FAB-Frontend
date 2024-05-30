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

    const handleBackClick = () => {
        // Logic for going back
        console.log('Back button clicked');
    };

    return (
        <LayoutSar>
            <div className="returnslist-container">
                <div className="returnslist-header">
                    <button onClick={handleBackClick}>&lt;</button>
                    <span className="main-title">INVENTARIO</span>
                    <span className="sub-title"> &gt; Devoluciones</span>
                </div>
                <div className="returnslist-content">
                    <form className="returnslist-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Institución</label>
                                <select name="institucion" onChange={handleChange} value={formData.institucion}>
                                    <option value="Alcaldia">Alcaldía de Cochabamba</option>
                                    <option value="FuerzaAerea">Fuerza Aérea</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Fecha de Donación</label>
                                <input type="date" name="fechaInicio" onChange={handleChange} value={formData.fechaInicio} />
                            </div>
                            <div className="form-group">
                                <label>Fecha de Devolución</label>
                                <input type="date" name="fechaFin" onChange={handleChange} value={formData.fechaFin} />
                            </div>
                            <button type="button" className="icon-button">+</button>
                        </div>
                    </form>
                    <table className="returnslist-table">
                        <thead>
                            <tr>
                                <th>INSTITUCIÓN</th>
                                <th>FECHA DE DONACIÓN</th>
                                <th>FECHA DE DEVOLUCIÓN</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alcaldía de Cochabamba</td>
                                <td>dd/mm/aaaa</td>
                                <td>dd/mm/aaaa</td>
                                <td><button className="icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>Fuerza Aérea</td>
                                <td>dd/mm/aaaa</td>
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
