import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./pilot-management.css"

export default function PilotManagement() {
    const pilots = [
        { id: 1, ci: "P001", name: "Hugo Fernando", lastname: "Perez", birthdate: "1990-01-01", total_hours: "549", weight: "78", grade: "Sargento Segundo" },
        { id: 2, ci: "P002", name: "Rodrigo", lastname: "Arnez", birthdate: "1992-05-15", total_hours: "949", weight: "68", grade: "Subteniente" },
        { id: 3, ci: "P003", name: "David", lastname: "Peredo", birthdate: "1985-11-30", total_hours: "649", weight: "89", grade: "Capitan" },
        // Add more pilot objects as needed
      ];

    return <>
        <div className="pilot-management-container">
            {/* Title */}
            <h1>Pilot Management</h1>
            
            {/* Add New Pilot Button */}
            <button>Add New Pilot<FaUser fontSize={20} /></button>
            
            {/* Pilot Table */}
            <table>
                <thead>
                <tr>
                    <th>CI</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Fecha Nacimiento</th>
                    <th>Horas Totales</th>
                    <th>Peso</th>
                    <th>Grado</th>
                    <th>Editar/Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {pilots.map((pilot) => (
                    <tr key={pilot.id}>
                    <td>{pilot.ci}</td>
                    <td>{pilot.name}</td>
                    <td>{pilot.lastname}</td>
                    <td>{pilot.birthdate}</td>
                    <td>{pilot.total_hours}</td>
                    <td>{pilot.weight}</td>
                    <td>{pilot.grade}</td>
                    <td>
                        <Link to={"*"}><FaEdit /></Link>
                        <Link to={"*"}><MdDelete /></Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div>
                <img width={190} height={115} src="/FAB.png"></img>
            </div>
        </div>
    </>
}
