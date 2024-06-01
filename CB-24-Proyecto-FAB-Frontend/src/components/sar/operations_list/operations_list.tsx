import { useState } from 'react';
import './operations_list.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaAngleLeft, FaMagnifyingGlass } from 'react-icons/fa6';
import { CiSquarePlus } from 'react-icons/ci';
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';


const options = [
    { value: 'Rescate', label: 'Rescate' },
    { value: 'Seguridad Médica', label: 'Seguridad Médica' },
    
  ];

const OperationsList = () => {

    const [, setModalOpen] = useState(false);

    return (
        <LayoutSar>
            <div className="operations_list-container">

                <h3> <FaAngleLeft /> LISTA DE OPERACIONES </h3>
                <div className="operations_list-content">
                    <div className="guard-header">
                        <button className="icon-button" onClick={() => setModalOpen(true)}><CiSquarePlus /></button>
                        <form action="" className="sar-search-bar">
                            <DropdownInputSearch options={options} />
                            
                            <div className="sar-search-bar-item">
                                <input type="text" placeholder="Buscar..." className="sar-search-input" />
                                <button className="sar-search-button">
                                    <FaMagnifyingGlass />
                                </button>
                            </div>
                        </form>
                    </div>
                    <table className="operations_list-table">
                        <thead>
                            <tr>
                                <th>TIPO OPERATIVO</th>
                                <th>FECHA</th>
                                <th>LUGAR</th>
                                <th>ESTADO</th>
                                <th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rescate</td>
                                <td>20-06-24</td>
                                <td>Tiquipaya</td>
                                <td>En proceso</td>
                                <td><button className="operations_list-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>Seguridad Médica</td>
                                <td>12-09-24</td>
                                <td>Tiquipaya</td>
                                <td>Finalizado</td>
                                <td><button className="operations_list-icon-button">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default OperationsList;
