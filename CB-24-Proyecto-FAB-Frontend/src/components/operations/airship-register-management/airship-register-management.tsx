import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import './airship-register-management.css';

export default function AirshipEditManagement() {
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
                                <label className="label-section"><strong>Tipo</strong></label>
                                <input type="text" />
                            </div>
                            
                            <div className="label-input-container">
                                <label className="label-section"><strong>Matrícula</strong></label>
                                <input type="text" />
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Tipo AereoNave</strong></label>
                                <input type="text" />
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Peso Definido</strong></label>
                                <input type="text" />
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Serial</strong></label>
                                <input type="text" />
                            </div>
                            <div className="label-input-container">
                                <br />
                                <label className="label-section"><strong>Version</strong></label>
                                <input type="text" />
                            </div>
                            

                        </div>
                        <br />
                        <div>
                            <button className="register-button">Registrar AereoNave</button>
                        </div>
                        
                    </div>
                </div>
                
                <div>
                    <span className="username">USER76234</span>
                    <button className="forma">
                        <CiMenuKebab fontSize={24} />
                    </button>
                    <div className="airship-register-management-logo">
                        <img src="/FAB.png" width={120} height={110} />
                    </div>
                </div>
        </div>
    );
}
