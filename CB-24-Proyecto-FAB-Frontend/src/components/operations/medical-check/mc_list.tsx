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
                                <tr>
                                    <td>Cap. Av</td>
                                    <td>XXXXXXXXX</td>
                                    <td>C.A</td>
                                    <td>P.A</td>
                                    <td>10-10-23</td>
                                    <td></td>
                                    <td>
                                        <p>
                                            <Link className="mc-edit" to={'/menu-principal/menu-operaciones/mc-editar'}><FaEdit/></Link>
                                        </p>
                                        <p>
                                            <button className="mc-delete" onClick={() => handleDeleteClick(1)}><MdDelete /></button>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cap. Av</td>
                                    <td>XXXXXXXXX</td>
                                    <td>C.A</td>
                                    <td>P.A</td>
                                    <td>05-10-23</td>
                                    <td></td>
                                    <td>
                                        <p>
                                            <Link className="mc-edit" to={'/menu-principal/menu-operaciones/mc-editar'}><FaEdit/></Link>
                                        </p>
                                        <p>
                                            <button className="mc-delete" onClick={() => handleDeleteClick(1)}><MdDelete /></button>
                                        </p>
                                    </td>
                                </tr>
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