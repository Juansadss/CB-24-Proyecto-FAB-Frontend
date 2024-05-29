import React, { useState, useRef } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import { MdFormatListBulleted } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import './maintenance-ordersList.css'

function MaintenanceOrdersList() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (e: React.MouseEvent, rowIndex: number) => {
    e.preventDefault();
    setActiveRow(rowIndex);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setMenuPosition({
      top: rect.top + rect.height,
      left: rect.left,
    });
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setMenuVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="maintenance-orderslist-container">
      <header>
        <Link to={"./.."} className="back-link">
          <GoArrowLeft color='black' size={30} />
          <h2>MANTENIMIENTO - Lista de Ordenes de Trabajo</h2>
        </Link>
      </header>
      <span className='new-order-section'>
        <Link to={"./programar-orden-trabajo"} className='new-work-order-button'>
          <CiSquarePlus color="#171A4A" size={40} />
          Nueva Orden de Trabajo
        </Link>
      </span>
      <table>
        <thead>
          <tr>
            <th>Matrícula</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Inspector Designado</th>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 'FAB-004', type: 'Mantenimiento', description: 'Revisión de sistema de frenos', date: '2024-04-22', inspector: 'Juan Pérez' },
            { id: 'FAB-754', type: 'Reparación', description: 'Arreglar motor con fallo de encendido', date: '2024-04-23', inspector: 'María Gómez' },
            { id: 'FAB-755', type: 'Inspección', description: 'Verificación de luces y señales', date: '2024-04-24', inspector: 'Luis Martínez' },
            { id: 'FAB-767', type: 'Reparación', description: 'Reemplazo de neumáticos', date: '2024-04-25', inspector: 'Ana Rodríguez' }
          ].map((order, index) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.type}</td>
              <td>{order.description}</td>
              <td>{order.date}</td>
              <td>{order.inspector}</td>
              <td>
                <div>
                  <button onClick={(e) => handleButtonClick(e, index)}>
                    <CiMenuKebab size={24} />
                  </button>
                  {menuVisible && activeRow === index && (
                    <div ref={menuRef} className="floating-menu" style={{ top: menuPosition.top, left: menuPosition.left }}>
                      <ul>
                        <li><MdFormatListBulleted size={28} />Ver Tareas</li>
                        <li><FaRegCheckSquare size={40} />Marcar como Completada</li>
                        <li><MdOutlineEdit size={28} />Editar</li>
                        <li className='delete-option'><IoTrashOutline size={28} />Eliminar</li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
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
  )
}

export default MaintenanceOrdersList
