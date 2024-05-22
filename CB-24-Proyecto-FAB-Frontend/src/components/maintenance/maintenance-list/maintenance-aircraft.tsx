import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { CgMoreVerticalO } from "react-icons/cg";
import './maintenance-aircraft.css';

export default function MaintenanceWorkOrderList() {
    return (
        <div className="maintenance-aeronave-base">
            <div className="maintenance-aeronave-main">
                <Link to={"/menu-principal/mantenimiento"} className="back-link">
                    <GoArrowLeft color='black' size={30} />
                    <h1>MANTENIMIENTO-Aeronaves</h1>
                </Link>
                <div className="maintenance-aeronave-container-1">
                    <div className="maintenance-aeronave-header">
                        <Link to={"/menu-principal/mantenimiento/mantenimiento-aeronaves"}>
                            <CiSquarePlus color="#171A4A" size={40}/>
                        </Link>
                    </div>
                    <div className="maintenance-aeronave-content">
                        <table className="maintenance-table-style">
                            <thead className="maintenance-headers-table">
                                <tr>
                                    <th>MATRICULA</th>
                                    <th>TIPO</th>
                                    <th>DESCRIPCION</th>
                                    <th>FECHA</th>
                                    <th>INSPECTOR ASIGNADO</th>
                                    <th>TAREAS</th>
                                </tr>
                            </thead>
                            <tbody className="maintenance-content-table">
                                <tr>
                                    <td>Matrícula 1</td>
                                    <td>Tipo 1</td>
                                    <td>Descripción 1</td>
                                    <td>Fecha 1</td>
                                    <td>Inspector 1</td>
                                    <td>
                                        <button className="maintenance-button-style">
                                            <CgMoreVerticalO fontSize={24} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Matrícula 2</td>
                                    <td>Tipo 2</td>
                                    <td>Descripción 2</td>
                                    <td>Fecha 2</td>
                                    <td>Inspector 2</td>
                                    <td>
                                        <button className="maintenance-button-style">
                                            <CgMoreVerticalO fontSize={24} />
                                        </button>
                                    </td>
                                </tr>
                                {/* Aquí puedes agregar más filas según sea necesario */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="maintenance-footer">
                    <div className="maintenance-footer-left">
                        USER76234
                        <button>
                            <CgMoreVerticalO fontSize={24} />
                        </button>
                    </div>
                    <img src="/FAB.png" width={120} height={110}/>
                </div>
            </div>
        </div>
    );
}
