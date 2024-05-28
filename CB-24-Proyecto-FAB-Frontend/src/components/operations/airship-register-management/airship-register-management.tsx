import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import './airship-register-management.css';

export default function AirshipRegisterManagement() {
    return (
        <div className="airship-register-management-container">
            {/* Botón de regreso */}
                <div>
                    <h1>
                        <Link to={"/menu-principal/menu-operaciones/gestion-aereonave"}><IoIosArrowBack className="goback-arrow" /></Link>GESTIÓN AEREONAVES
                        <span className="small-text"> &gt; Registrar AereoNave</span>
                    </h1>
                </div>
                
                <div className="aeronave-container">
                    
                    <div className="aeronave-content">
                        <div className="info-section">
                            <div className="label-input-container">
                                <label className="label-section"><strong>Matrícula:</strong></label>
                                <input type="text" />
                            </div>
                            
                            <div className="label-input-container">
                                <label className="label-section"><strong>Modelo:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Fabricante:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Peso Definido(Kg):</strong></label>
                                <input type="text" />
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Serial:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Versión:</strong></label>
                                <input type="text" />
                            </div>
                            <div className="register-airshit-label-input-container">
                                <br />
                                <label className="label-section"><strong>Fecha de Fabricación:</strong></label>
                                <input type="date" />
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Capacidad De Combustible:</strong></label>
                                <input type="text" />
                            </div>
                            
                            
                            <div className="register-airshit-estado-label-input-container">
                                <br />
                                <label className="label-section"><strong>Estado:</strong></label>
                                <select>
                                    <option value="disponible">Whisky</option>
                                    <option value="noDisponible">Papa</option>
                                </select>
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Origen de AeroNave:</strong></label>
                                <input type="text" />
                            </div>
                            

                        </div>
                        <br />
                        <div>
                            <button className="register-button">Registrar AereoNave</button>
                        </div>
                        
                    </div>
                </div>
                
                <div className="airship-user-info-container">
                    <span className="username">USER76234</span>
                    <button className="forma">
                        <CiMenuKebab fontSize={24} />
                    </button>
                    <div className="airship-register-management-logo">
                        <img width={200} height={150}  src="/FAB.png" alt="FAB" />
                    </div>
                </div>
        </div>
    );
}
