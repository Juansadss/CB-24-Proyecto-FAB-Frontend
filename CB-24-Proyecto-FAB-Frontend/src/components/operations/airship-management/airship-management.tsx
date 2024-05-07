import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import "./airship-management.css";

export default function AirshipManagement() {
    const aiships = [
        { id: 1, matricula: "FAB-754", aereonave: "AS 350", versation: "B3", serial: "4547", peso: "1361.0", estado: "W"},
        { id: 2, matricula: "FAB-754", aereonave: "AS 350", versation: "B3", serial: "4547", peso: "1361.0", estado: "P"},
        { id: 3, matricula: "FAB-754", aereonave: "AS 350", versation: "B3", serial: "4547", peso: "1361.0", estado: "W"},
        
    ];

    return <>
        <div className="airship-management-container">
            {/* Title */}
            <div>
                <h1>
                    <Link to={"/menu-principal/menu-operaciones"}><IoIosArrowBack className="goback-arrow" /></Link>GESTIÓN AEREONAVES
                </h1>
            </div>
            
            {/* Add New Pilot Button */}
            <div className="add-button-container">
                <button>
                    <Link to={"/menu-principal/menu-operaciones/gestion-aereonave/gestion-aereonave-registrar"}><FaPlus className="add-button-icon" /></Link>
                </button>
            </div>
            
            {/* Pilot Table */}
            <table>
                <thead>
                <tr>
                    <th>MATRICULA</th>
                    <th>AEREONAVE</th>
                    <th>VERSION</th>
                    <th>SERIAL NR</th>
                    <th>PESO DEFINIDO</th>
                    <th>ESTADO</th>
                    <th>EDIT | DELETE</th>
                </tr>
                </thead>
                <tbody>
                {aiships.map((airship) => (
                    <tr key={airship.id}>
                    <td>{airship.matricula}</td>
                    <td>{airship.aereonave}</td>
                    <td>{airship.versation}</td>
                    <td>{airship.serial}</td>
                    <td>{airship.peso} KG</td>
                    <td>{airship.estado}</td>
                    <td>
                        <Link to={""}><FaEdit className="edit-button"/></Link>   <br />
                        <Link to={""}><MdDelete className="delete-button"/></Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div>
                <span className="username">USER76234</span>
                <button className="forma">
                    <CiMenuKebab fontSize={24} />
                </button>
                <img width={190} height={115} src="/FAB.png" alt="FAB" />
            </div>
        </div>
    </>
}
