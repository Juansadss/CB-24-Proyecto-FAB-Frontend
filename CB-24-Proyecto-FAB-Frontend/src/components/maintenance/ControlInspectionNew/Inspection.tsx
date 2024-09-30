import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";

import { AiOutlinePlus } from "react-icons/ai"; // Importa el nuevo ícono
import './Inspection.css';

export default function Inspection() {
    return (
        <div className="maintenance-alerts-container">
            <header>
                <span>
                    <Link className="back-icon" to={"/menu-principal/mantenimiento"}>
                        <IoIosArrowBack fontSize={32} />
                    </Link>
                    MANTENIMIENTO - Alertas
                </span>
                <Link className="history-button" to={"/InsertInspection"}>
                <AiOutlinePlus fontSize={28} />Insetar inspección
                </Link>
            </header>
            <main>
                <div className="alerts-table">
                    <table>
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>REFERENCIA</th>
                                <th>FRECUENCIA</th>
                                <th>ULTIMA INSPECCIÓN</th>
                                <th>PRÓXIMA INSPECCIÓN</th>
                                <th>MARGEN</th>
                                <th>ESTADO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="alert-row">
                                <td className="message-column">NombreInspeccion</td>
                                <td className="message-column">Documento de referencia</td>
                                <td className="message-column">Tiempo de cada inspección</td>
                                <td className="date-column">02/03/24 10:30 AM</td>
                                <td className="date-column">02/03/24 10:30 AM</td>
                                <td className="message-column">Tiempo de aproximación para la alerta</td>
                                <td className="message-column">Programado/Próximo/Retrasado</td>
                                <td className="message-column">Ver/Editar/Borrar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <footer>
                <span>
                    USER76234
                    <button>
                        <CiMenuKebab fontSize={24} />
                    </button>
                </span>
                <img src="/FAB.png" width={150} height={100} alt="FAB logo" />
            </footer>
        </div>
    );
}
