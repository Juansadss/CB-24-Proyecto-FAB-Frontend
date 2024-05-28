import React, { useState } from 'react';
import './personal_attendance_report.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaAngleLeft } from 'react-icons/fa6';

const PersonalAttendanceReport = () => {
    const [formData, setFormData] = useState({
        estado: '',
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
            <div className="personalAttendanceReport-container">
                <h3> <FaAngleLeft /> PERSONAL &gt; Reporte personal &gt; Asistencia &gt; Jose Fernando </h3>
                <div className="personalAttendanceReport-content">
                    <form className="personalAttendanceReport-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label><b>Fecha Inicio</b></label>
                                <input type="date" name="cantidad" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label><b>Fecha Final</b></label>
                                <input type="date" name="cantidad" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label><b>Estado</b></label>
                                <select name="estado" onChange={handleChange} value={formData.estado}>
                                    <option value="">Estado</option>
                                    <option value="Presente">Presente</option>
                                    <option value="Falto">Falto</option>
                                    <option value="Permiso">Permiso</option>
                                </select>
                            </div>

                        </div>
                    </form>
                    <table className="personalAttendanceReport-table">
                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10/10/24</td>
                                <td>Presente</td>
                            </tr>
                            <tr>
                                <td>09/10/24</td>
                                <td>Presente</td>
                            </tr>
                            <tr>
                                <td>08/10/24</td>
                                <td>Falto</td>
                            </tr>
                            <tr>
                                <td>07/10/24</td>
                                <td>Permiso</td>
                            </tr>
                            <tr>
                                <td>06/10/24</td>
                                <td>Presente</td>
                            </tr>
                            <tr>
                                <td>05/10/34</td>
                                <td>Presente</td>
                            </tr>
                            <tr>
                                <td>04/10/24</td>
                                <td>Falto</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default PersonalAttendanceReport;
