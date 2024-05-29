import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { LiaHelicopterSolid } from "react-icons/lia";
import { TbChecklist } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineInbox } from "react-icons/ai";
import { LuBookCopy } from "react-icons/lu";
import { CiMenuKebab } from "react-icons/ci";
import './maintenance-menu.css'

export default function MaintenanceMenu() {

    return <>
        <div className="maintenance-menu-container">
            <header>
                <Link className="back-icon" to={"./.."}>
                    <IoIosArrowBack fontSize={32} />
                </Link>
                MANTENIMIENTO
            </header>
            <main>
                <img src="/FAB.png" width={400} height={250} />
                <h1>Fuerza Aérea Boliviana</h1>
                <span>
                    <div className="menu-options main-options">
                        <Link className="option" to={"/menu-principal/mantenimiento/ordenes-trabajo"}>
                            <p>
                                <GoGear fontSize={52} />
                                <span>PROGRAMA DE<br />MANTENIMIENTO</span>
                            </p>
                        </Link>
                        <Link className="option" to={"/menu-principal/mantenimiento/aeronaves"}>
                            <p>
                                <LiaHelicopterSolid fontSize={64} />
                                <span>ESTADO DE<br />AERONAVES</span>
                            </p>
                        </Link>
                        <Link className="option" to={"/menu-principal/mantenimiento/control-componentes"}>
                            <p>
                                <TbChecklist fontSize={62} />
                                <span>CONTROL DE<br />COMPONENTES</span>
                            </p>
                        </Link>
                    </div>
                    <div className="menu-options">
                        <Link className="option" to={"/menu-principal/mantenimiento/alertas"}>
                            <p>
                                <FaRegBell fontSize={40} />
                                <span>ALERTAS</span>
                            </p>
                        </Link>
                        <Link className="option" to={"/menu-principal/mantenimiento/inventario-almacenes"}>
                            <p>
                                <AiOutlineInbox fontSize={48} />
                                <span>STOCK EN ALMACENES</span>
                            </p>
                        </Link>
                        <Link className="option" to={"/menu-principal/mantenimiento/manuales"}>
                            <p>
                                <LuBookCopy fontSize={48} />
                                <span>MANUALES</span>
                            </p>
                        </Link>
                    </div>
                </span>
            </main>
            <footer>
                <span>
                    USER76234
                    <button>
                        <CiMenuKebab fontSize={24} />
                    </button>
                </span>
            </footer>
        </div>
    </>
}