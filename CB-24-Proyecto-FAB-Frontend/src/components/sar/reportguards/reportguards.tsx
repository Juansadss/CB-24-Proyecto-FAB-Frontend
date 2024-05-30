import React, { useState } from 'react';
import './reportguards.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaMagnifyingGlass } from "react-icons/fa6";
import '../search-bar-styles.css'

const ReportGuards = () => {
    const [formData, setFormData] = useState({
        fecha: '',
        turno: '',
        estado: ''
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
        console.log('Back button clicked');
    };

    return (
        <LayoutSar>
            <div className="reportguards-container">
                <div className="reportguards-header">
                    <button onClick={handleBackClick}>&lt;</button>
                    <span className="main-title">Personal</span>
                    <span className="sub-title"> &gt; Reporte personal &gt; Guardias &gt; Jose Fernando</span>
                </div>
                <div className="reportguards-content">
                    <form className="reportguards-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label htmlFor="fecha">Fecha de Turno:</label>
                                <input type="date" name="fecha" id="fecha" onChange={handleChange} value={formData.fecha} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="turno">Horario de Turno:</label>
                                <select name="turno" id="turno" onChange={handleChange} value={formData.turno}>
                                    <option value="">Turno</option>
                                    <option value="Manana">Mañana</option>
                                    <option value="Tarde">Tarde</option>
                                    <option value="Noche">Noche</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="estado">Estado:</label>
                                <select name="estado" id="estado" onChange={handleChange} value={formData.estado}>
                                    <option value="">Estado</option>
                                    <option value="Completada">Completada</option>
                                    <option value="Falto">Falto</option>
                                </select>
                            </div>
                            <div className="sar-search-bar-item">
                                <input type="text" placeholder="Buscar..." className="sar-search-input" />
                                <button className="sar-search-button">
                                <FaMagnifyingGlass />
                                </button>
                            </div>
                        </div>
                    </form>
                    <table className="reportguards-table">
                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>TURNO</th>
                                <th>ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10/10/2024</td>
                                <td>Mañana</td>
                                <td>Completada</td>
                            </tr>
                            <tr>
                                <td>5/10/2024</td>
                                <td>Tarde</td>
                                <td>Completada</td>
                            </tr>
                            <tr>
                                <td>20/9/2024</td>
                                <td>Noche</td>
                                <td>Falto</td>
                            </tr>
                            <tr>
                                <td>15/9/2024</td>
                                <td>Tarde</td>
                                <td>Completada</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default ReportGuards;
