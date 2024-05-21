import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { LiaHistorySolid } from "react-icons/lia";
import { useState } from "react";
import './maintenance-alerts.css'

export default function MaintenanceAlerts() {

    const [isAlertRead, setIsAlertRead] = useState(false);
    const markAlertAsRead = () => {
        setIsAlertRead(true);
    };

    return <>
        <div className="maintenance-alerts-container">
            <header>
                <span>
                    <Link className="back-icon" to={"/menu-principal/mantenimiento"}>
                        <IoIosArrowBack fontSize={32} />
                    </Link>
                    MANTENIMIENTO - Alertas
                </span>
                <Link className="history-button" to={"/menu-principal/mantenimiento/alertas/historial-alertas"}>
                    <LiaHistorySolid fontSize={28} />Historial
                </Link>
            </header>
            <main>
                <div className="alerts-table">
                    <table>
                        <thead>
                            <th>FECHA / HORA</th>
                            <th>MENSAJE</th>
                            <th>CONFIRMACIÓN DE LECTURA</th>
                        </thead>
                        <tr>
                            <td colSpan={3}><hr /></td>
                        </tr>
                        <tr className="alert-row">
                            <td className="date-column">02/03/24 10:30 AM</td>
                            <td className="message-column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus rerum sequi ab qui dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui similique nihil ullam modi aspernatur?</td>
                            <td className="read-column">
                                {!isAlertRead && (
                                    <button onClick={markAlertAsRead} className="mark-as-read-button">Marcar como Leído</button>
                                )}
                            </td>
                        </tr>
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
                <img src="/FAB.png" width={150} height={100} />
            </footer>
        </div>
    </>
}