import React, { useState } from 'react';
import './personal_operations_report.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaAngleLeft } from 'react-icons/fa6';

const PersonalOperationsReport = () => {
    const [formData, setFormData] = useState({
        tipo: '',
        fechaInicio: '',
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

    return (
        <LayoutSar>
            <div className="personalOperationsReport-container">
                <h3> <FaAngleLeft /> PERSONAL &gt; Reporte personal &gt; Operaciones &gt; Jose Fernando </h3>
                <div className="personalOperationsReport-content">
                    <form className="personalOperationsReport-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label><b>Tipo</b></label>
                                <select name="tipo" onChange={handleChange} value={formData.tipo}>
                                    <option value="">Tipo</option>
                                    <option value="curso 1">Curso 1</option>
                                    <option value="curso 2">Curso 2</option>
                                    <option value="curso 3">Curso 3</option>
                                    <option value="curso 4">Curso 4</option>
                                    <option value="curso 5">Curso 5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label><b>Buscar</b></label>
                                <input type="text" name="cantidad" placeholder='Buscar...' onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label><b>Estado</b></label>
                                <select name="estado" onChange={handleChange} value={formData.estado}>
                                    <option value="">Estado</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Retirado">Retirado</option>
                                </select>
                            </div>


                        </div>
                    </form>
                    <table className="personalOperationsReport-table">
                        <thead>
                            <tr>
                                <th>TIPO</th>
                                <th>FECHA</th>
                                <th>LOCALIDAD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Curso 1</td>
                                <td>20/06/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 2</td>
                                <td>10/06/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 3</td>
                                <td>30/05/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 4 </td>
                                <td>25//05/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 5</td>
                                <td>27/04/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 6</td>
                                <td>04/02/24</td>
                                <td>Cochabamba</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default PersonalOperationsReport;
