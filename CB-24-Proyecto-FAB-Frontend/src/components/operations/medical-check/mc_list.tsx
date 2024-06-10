import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import ConfirmationModal from "../pilot-management/pilot-confirmation-delete";
import './mc_list.css'

export default function McList (){
    const [showModal, setShowModal] = useState(false);
    const [mcDelete, setMcToDelete] = useState<number | null>(null);

    const pilots = [
        { pilotID: 1, firstName: "Hugo Fernando", lastName: "Perez", middleName: "Oropeza", birthDate: "1990-08-25", gender: "H", militaryRank: "Teniente", nextCheck: "10-04-2024", observations: "Ninguna"},
        { pilotID: 2, firstName: "Rodrigo", lastName: "Arnez", middleName: "Ramirez", birthDate: "1992-05-15", gender: "H", militaryRank: "Subteniente", nextCheck: "03-02-2024",  observations: "Ninguna"},
        { pilotID: 3, firstName: "David", lastName: "Peredo", middleName: "Canedo", birthDate: "1985-11-30", gender: "H", militaryRank: "Capitán", nextCheck: "05-05-2024",  observations: "Ninguna"},
        // Add more pilot objects as needed
      ];

    const handleDeleteClick = (id: number) => {
        setMcToDelete(id);
        setShowModal(true);
      };

    const handleCloseModal = () => {
        setShowModal(false);
        setMcToDelete(null);
      };
    
      const handleConfirmDelete = () => {
        // Add your delete logic here
        console.log(`Deleted pilot with id: ${mcDelete}`);
        handleCloseModal();
      };

    return <>
        <div className="container-list">
            <div className='mc-container-list'>
                <div className="mc-header-action">
                    <a href="">
                        <Link className="mc-black" to={'/menu-principal/menu-operaciones'}><IoIosArrowBack size={30}/></Link>
                        <span>CHEQUEO MÉDICO</span>
                    </a>
                </div>
            
                <div className="mc-card-1-list">
                    <form action="">
                        <button type="submit" className="mc-btn-icon-list">
                            <Link className="mc-black" to={'/menu-principal/menu-operaciones/mc-registro'}><FaPlus/></Link>
                        </button>
                    </form>
                    <div className="mc-group-list">
                        <p>Buscar personal </p>
                        <input className="mc-left mc-textInput-list" type="text"/>
                        <button type="submit" className="mc-left mc-btn-icon-list">
                            <img width={20} src="/search.png" alt="Search" />
                        </button>
                    </div>
                    <div>
                        <table>
                            <thead className='mc-thead-list'>
                                <tr>
                                    <th>GRADO</th>
                                    <th>NOMBRES Y APELLIDOS</th>
                                    <th>EC-145</th>
                                    <th>AS350 B3</th>
                                    <th>PRÓXIMO CHEQUEO</th>
                                    <th>OBSERVACIONES</th>
                                    <th>Editar | Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                            {pilots.map((pilot) => (
                                <tr key={pilot.pilotID}>
                                <td>{pilot.militaryRank}</td>
                                <td>{pilot.firstName} {pilot.lastName} {pilot.middleName}</td>
                                <td>C.A</td>
                                <td>P.A</td>
                                <td>{pilot.nextCheck}</td>
                                <td>{pilot.observations}</td>
                                <td>
                                    <p>
                                        <Link className="mc-edit" to={'/menu-principal/menu-operaciones/mc-editar'}><FaEdit/></Link>
                                    </p>
                                    <p>
                                        <button className="mc-delete" onClick={() => handleDeleteClick(pilot.pilotID)}><MdDelete /></button>
                                    </p>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mc-user-info-container">
                    <span className="mc-username">USER76234</span>
                    <button className="mc-forma">
                        <CiMenuKebab fontSize={24} />
                    </button>
                    <div className="mc-management-logo">
                        <img width={200} height={150}  src="/FAB.png" alt="FAB" />
                    </div>
                </div>
            </div>
        </div>
        {/* Confirmation Modal */}
        <ConfirmationModal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        message="¿Está seguro de que desea eliminar este Chequeo médico?"
      />
    </>
}