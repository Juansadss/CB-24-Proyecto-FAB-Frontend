import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import './airship-edit-management.css';

export default function AirshipEditManagement() {
    return (
        <div className="airship-edit-management-container">
            {/* Botón de regreso */}
                <div>
                    <h1>
                        <Link to={"/menu-principal/menu-operaciones/gestion-aereonave"}><IoIosArrowBack className="goback-arrow" /></Link>GESTIÓN AEREONAVES
                        <span className="small-text"> &gt; Editar AereoNave</span>
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
                            <button className="edit-button">Editar AereoNave</button>
                        </div>
                        
                    </div>
                </div>
                
                <div className="airship-edit-user-info-container">
                    <span className="username">USER76234</span>
                    <button className="forma">
                        <CiMenuKebab fontSize={24} />
                    </button>
                    <div className="airship-edit-management-logo">
                        <img width={200} height={150}  src="/FAB.png" alt="FAB" />
                    </div>
                </div>
        </div>
    );
}