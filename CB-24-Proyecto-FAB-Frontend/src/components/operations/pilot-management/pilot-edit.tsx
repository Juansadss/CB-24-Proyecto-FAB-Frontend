import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./pilot-edit.css";
import { CiMenuKebab } from "react-icons/ci";

export default function EditPilotForm() {
    const [formData, setFormData] = useState({
        names: "Hugo Fernando",
        lastName: "Perez",
        ci: "P001",
        grade: "Sargento Segundo",
        weight: "78",
        height: "175",
        gender: "hombre",
        bloodType: "O+",
        birthDate: "1990-01-01",
        cellphone: "12345678",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


  return <>
    <div className="edit-pilot-container">
        <div>
            <h1>
                <Link to={"/menu-principal/menu-operaciones/gestion-pilotos"}><IoIosArrowBack className="edit-pilot-goback-arrow" /></Link><b>GESTIÓN PILOTOS</b>
                <span className="small-text"> &gt; Modificar Piloto</span>
            </h1>
        </div>

      {/* Pilot Edition Form */}
      <div className="edit-pilot-form-container">
                    
                    <div className="edit-pilot-content">
                        <div className="edit-pilot-info-section">
                            <div className="edit-pilot-label-input-container">
                                <label className="label-section"><strong>Nombres:</strong></label>
                                <input type="text" name="names" value={formData.names} onChange={handleChange}/>
                            </div>
                            
                            <div className="edit-pilot-label-input-container">
                                <label className="label-section"><strong>Apellido Paterno:</strong></label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
                            </div>
                            <div className="edit-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>CI:</strong></label>
                                <input type="text" name="ci" value={formData.ci} onChange={handleChange}/>
                            </div>
                            <div className="edit-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Grado:</strong></label>
                                <input type="text" name="grade" value={formData.grade} onChange={handleChange}/>
                            </div>
                            <div className="edit-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Peso:</strong></label>
                                <input type="text" name="weight" value={formData.weight} onChange={handleChange}/>
                            </div>
                            <div className="edit-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Altura:</strong></label>
                                <input type="text" name="height" value={formData.height} onChange={handleChange}/>
                            </div>
                            <div className="edit-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Género:</strong></label>
                                <select name="gender" value={formData.gender} onChange={handleChange}>
                                    <option value="hombre">Hombre</option>
                                    <option value="mujer">Mujer</option>
                                </select>
                            </div>
                            <div className="edit-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Grupo Sanguineo:</strong></label>
                                <input type="text" name="bloodType" value={formData.bloodType} onChange={handleChange}/>
                            </div>
                            <div className="edit-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Fecha de Nacimiento:</strong></label>
                                <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange}/>
                            </div>
                            <div className="edit-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Telefono:</strong></label>
                                <input type="text" name="cellphone" value={formData.cellphone} onChange={handleChange}/>
                            </div>
                            

                        </div>
                        <br />
                        <div>
                            <button className="edit-pilot-button">Modificar Piloto</button>
                        </div>
                        
                    </div>
                </div>
                <div className="pilot-user-info-container">
                    <span className="username">USER76234</span>
                    <button className="forma">
                        <CiMenuKebab fontSize={24} />
                    </button>
                    <div className="edit-pilot-logo">
                        <img width={200} height={150}  src="/FAB.png" alt="FAB" />
                </div>
            </div>
    </div>
  </>
}

