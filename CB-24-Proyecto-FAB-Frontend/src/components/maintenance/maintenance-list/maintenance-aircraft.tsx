
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import './maintenance-aircraft.css';

export default function MaintenanceWorkOrderList() {
    return (
        <>
            <div className="maintenance-aeronave-base">
                <div className="maintenance-aeronave-main">
                    <Link to={"/menu-principal/mantenimiento"}>
                        <GoArrowLeft color='black' size={30}/>
                    </Link>
                    <div className="maintenance-aeronave-header-principal">
                        <h1>Lista Ordenes de Trabajo</h1>
                    </div>
                    <div className="maintenance-aeronave-container-1">
                        <div className="maintenance-aeronave-header">
                        <Link to={"/menu-principal/mantenimiento/mantenimiento-aeronaves"}>
                        <CiCirclePlus color="#171A4A" size={40}/>
                        </Link>
                        
                        </div>
                        <div className="maintenance-aeronave-content">
                            <table className="maintenance-table-style">
                                <thead>
                                    <tr>
                                        <th>MATRICULA</th>
                                        <th>TIPO</th>
                                        <th>DESCRIPCION</th>
                                        <th>FECHA</th>
                                        <th>INSPECTOR ASIGNADO</th>
                                        <th>TAREAS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Matrícula 1</td>
                                        <td>Tipo 1</td>
                                        <td>Descripción 1</td>
                                        <td>Fecha 1</td>
                                        <td>Inspector 1</td>
                                        <td><button>
                                            <CiMenuKebab fontSize={24} />
                                        </button></td>
                                    </tr>
                                    <tr>
                                        <td>Matrícula 2</td>
                                        <td>Tipo 2</td>
                                        <td>Descripción 2</td>
                                        <td>Fecha 2</td>
                                        <td>Inspector 2</td>
                                        <td><button>
                                            <CiMenuKebab fontSize={24} />
                                        </button></td>
                                    </tr>
                                    {/* Aquí puedes agregar más filas según sea necesario */}
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div className="maintenance-footer">
                        USER76234
                                <button>
                                    <CiMenuKebab fontSize={24} />
                                </button>
                        
                                <img src="/FAB.png" width={120} height={110} className="maintenance-footer-image" />
                    </div>
                
                </div>
                
                    
                
            </div>
        </>
    );
}
