import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./pilot-register.css";

export default function RegisterPilotForm() {
  return <>
    <div className="register-pilot-container">
        <div>
            <h1>
                <Link to={"/menu-principal/menu-operaciones/gestion-pilotos"}><IoIosArrowBack className="register-pilot-goback-arrow" /></Link><b>GESTIÓN PILOTOS</b>
                <span className="small-text"> &gt; Registrar Piloto</span>
            </h1>
        </div>

      {/* Pilot Registration Form */}
      <div className="register-pilot-form-container">
                    
                    <div className="register-pilot-content">
                        <div className="register-pilot-info-section">
                            <div className="register-pilot-label-input-container">
                                <label className="label-section"><strong>Nombres:</strong></label>
                                <input type="text" />
                            </div>
                            
                            <div className="register-pilot-label-input-container">
                                <label className="label-section"><strong>Apellido Paterno:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="register-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>CI:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="register-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Grado:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="register-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Peso:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="register-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Altura:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="register-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Género:</strong></label>
                                <select>
                                    <option value="hombre">Hombre</option>
                                    <option value="mujer">Mujer</option>
                                </select>
                            </div>
                            <div className="register-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Grupo Sanguineo:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="register-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Fecha de Nacimiento:</strong></label>
                                <input type="date" />
                            </div>
                            <div className="register-pilot-label-input-container">
                                <br />
                                <label className="label-section"><strong>Telefono:</strong></label>
                                <input type="text" />
                            </div>
                            

                        </div>
                        <br />
                        <div>
                            <button className="register-pilot-button">Registrar Piloto</button>
                        </div>
                        
                    </div>
                </div>
      <div>
            <img width={190} height={115} src="/FAB.png"></img>
        </div>
    </div>
  </>
}

