import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { LiaHistorySolid } from "react-icons/lia";
import './Inspection.css';

export default function InsertInspection() {
    return (
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
                <div className="form-inspection">
                    
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
