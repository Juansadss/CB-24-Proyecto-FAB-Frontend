import { Link } from "react-router-dom"
import { CiCirclePlus } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import './maintenance-new-work-order.css';


export default function MaintenanceNewWorkOrder() {

    return <>
        <div className="maintenance-aeronave-base">

            <div className="maintenance-aeronave-main">
                <Link to={"/menu-principal/mantenimiento/ordenes-trabajo"}>
                    <GoArrowLeft color='black' size={30} />
                </Link>
                <div className="maintenance-aeronave-header-principal">
                    <h1>PROGRAMAR MANTENIMIENTO</h1>
                </div>


                <div className="maintenance-aeronave-container">
                    <div className="maintenance-aeronave-header">
                        <h1>AERONAVE</h1>
                    </div>
                    <div className="maintenance-aeronave-content">
                        <div className="maintenance-info-section">
                            <label className="maintenance-label-section">Tipo:</label>
                            <select>
                                {/* Opciones del tipo */}
                            </select>

                            <label className="maintenance-label-section">Matricula:</label>
                            <input type="text" className="maintenance-input-text" />

                        </div>

                        <div className="maintenance-info-section">
                            <label><strong>Descripción:</strong></label>

                        </div>
                        <div>
                            <textarea className="maintenance-text-area" rows={4}></textarea>
                        </div>
                        <div className="maintenance-info-section">
                            <label className="maintenance-label-section2"><strong>Inspector asignado:</strong></label>

                            <select className="maintenance-select">
                                {/* Opciones de inspectores */}
                            </select>


                            <label className="maintenance-label-section"><strong>Fecha:</strong></label>

                            <input type="date" className="maintenance-input-date" />


                        </div>

                        <div className="maintenance-info-section">
                            <h2 className="maintenance-label-header">Tareas Asignadas</h2>
                            <label className="maintenance-label-section">Tarea:</label>
                            <select className="maintenance-select">
                                {/* Opciones de tareas */}
                            </select>
                            <CiCirclePlus color="#171A4A" size={20} />
                        </div>
                        <div className="maintenance-info-section">

                            <table className="maintenance-table-style">
                                <thead>
                                    <tr className="maintenance-headers-table">
                                        <th>ATA</th>
                                        <th>Nombre</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="maintenance-content-table">
                                        <td>ATA1</td>
                                        <td>Nombre</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <button className="maintenance-register-button">Registrar Trabajo</button>
                    </div>




                </div>
                <div>
                    USER76234
                    <button>
                        <CiMenuKebab fontSize={24} />
                    </button>

                    <img src="/FAB.png" width={120} height={110} className="maintenance-footer-image" />
                </div>
            </div>
        </div>
    </>
}