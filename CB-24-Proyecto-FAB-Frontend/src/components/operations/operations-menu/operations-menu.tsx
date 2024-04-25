import "./operations-menu.css"
import { FaPlane } from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { Link } from "react-router-dom"
import { RiHealthBookLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

export default function OperationsMenu() {
    return(
        <div className="main-menu-container">
            <div>
                <h1>
                    <Link to={"/menu-principal"}><IoIosArrowBack className="goback-arrow" /></Link>MENU OPERACIONES
                </h1>
            </div>
            <div className="main-menu-options">
                <Link className="card" to={"/menu-principal/menu-operaciones/gestion-pilotos"}>
                    <GoCopilot />
                    <span>Gestion Pilotos</span>
                </Link>
                <Link className="card" to={"/"}>
                    <FaPlane />
                    <span>Gestion Aeronaves</span>
                </Link>
                <Link className="card" to={"/"}>
                    <RiHealthBookLine />
                    <span>Gestion Chequeos Medicos</span>
                </Link>
            </div>
        </div> 
    )
}