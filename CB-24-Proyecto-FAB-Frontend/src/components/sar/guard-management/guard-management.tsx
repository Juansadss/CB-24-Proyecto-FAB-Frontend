import { CiSquarePlus } from "react-icons/ci";
import LayoutSar from "../layout-sar/layout-sar"
import "./guard-management.css"
import { IoEllipsisVerticalCircle } from "react-icons/io5";
import CreateGuardModal from "../create-guard-modal/create-guard-modal";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import '../search-bar-styles.css'

const options = [
  { value: 'opcion1', label: 'Opción 1' },
  { value: 'opcion2', label: 'Opción 2' },
  { value: 'opcion3', label: 'Opción 3' },
];

export default function GuardManagement() {
  const [modalOpen, setModalOpen] = useState(false);

  const data = [
    { turno: 'Mañana', ci: '123456', comnre: 'Juan Perez', estado: 'Activo' },
    { turno: 'Tarde', ci: '789012', comnre: 'Maria Lopez', estado: 'Inactivo' },
  ];

  return (
    <LayoutSar>
      <div className="guard-container">
        <h2 className="guard-title">GUARDIA</h2>
        <div className="guard-header">
          <button className="icon-button" onClick={() => setModalOpen(true)}><CiSquarePlus /></button>
          <form action="" className="search-bar">
            <DropdownInputSearch options={options} />
            <div className="search-bar-item">
              <input type="date"  placeholder="Buscar..." className="search-input" />
              <button className="search-button" >
                <FaMagnifyingGlass />
              </button>
            </div>
            <div className="search-bar-item">
              <input type="text" placeholder="Buscar..." className="search-input" />
              <button className="search-button">
                <FaMagnifyingGlass />
              </button>
            </div>
          </form> 
        </div>
        <table className="guard-table">
          <thead>
            <tr>
              <th style={{ width: '40%' }}>Turno</th>
              <th style={{ width: '15%' }}>CI</th>
              <th style={{ width: '25%' }}>Nombre</th>
              <th style={{ width: '15%' }}>Estado</th>
              <th style={{ width: '5%' }}>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.turno}</td>
                <td>{item.ci}</td>
                <td>{item.comnre}</td>
                <td>{item.estado}</td>
                <td>
                  <button className="guard options-button"><IoEllipsisVerticalCircle /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateGuardModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </LayoutSar>
  );
}