import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import './maintenance-alerts-history.css'

export default function MaintenanceAlertsHistory() {

    return <>
        <div className="maintenance-alerts-history-container">
            <header>
                <span>
                    <Link className="back-icon" to={"/menu-principal/mantenimiento/alertas"}>
                        <IoIosArrowBack fontSize={32} />
                    </Link>
                    MANTENIMIENTO - Alertas - Historial
                </span>
            </header>
            <main>
                <div className="user-filters">
                    Filtrar por Usuario:
                    <select name="" id="">
                        <option value="" selected >Todos</option>
                        <option value="">USER92164</option>
                        <option value="">USER21325</option>
                    </select>
                </div>
                <div className="alerts-table">
                    <table>
                        <thead>
                            <th>FECHA / HORA DE ALERTA</th>
                            <th>MENSAJE</th>
                            <th>LEÍDO POR</th>
                            <th>FECHA / HORA DE LECTURA</th>
                        </thead>
                        <tr>
                            <td colSpan={4}><hr /></td>
                        </tr>
                        <tr className="alert-row">
                            <td className="date-column">02/03/24 10:30 AM</td>
                            <td className="message-column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus rerum sequi ab qui dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui similique nihil ullam modi aspernatur?</td>
                            <td className="user-column">USER92164</td>
                            <td className="date-read-column">02/03/24 11:00 AM</td>
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