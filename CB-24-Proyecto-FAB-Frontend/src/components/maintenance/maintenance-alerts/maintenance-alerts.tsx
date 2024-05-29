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
                    <Link className="back-icon" to={"./.."}>
                        <IoIosArrowBack fontSize={32} />
                    </Link>
                    MANTENIMIENTO - Alertas
                </span>
                <Link className="history-button" to={"/menu-principal/mantenimiento/alertas/historial-alertas"}>
                    <LiaHistorySolid fontSize={28} />Ver Historial
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
                        <tr className="alert-row">
                            <td className="date-column">02/03/24 10:30 AM</td>
                            <td className="message-column">
                                Se entró al periodo de margen de la aeronave <b>[ EC-145 ]</b> con matrícula <b>[ FAB-004 ]</b>, se recomienda programar un mantenimiento lo más antes posible
                            </td>
                            <td className="read-column">
                                {isAlertRead ? (
                                    <span>Registrado como Leído</span>
                                ) : (
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