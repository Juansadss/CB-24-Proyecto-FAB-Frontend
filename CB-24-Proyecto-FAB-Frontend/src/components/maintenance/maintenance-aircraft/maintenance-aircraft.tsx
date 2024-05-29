import React, { useState, useRef } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import { TbChecklist } from "react-icons/tb";
import { FaRegClipboard } from "react-icons/fa";
import './maintenance-aircraft.css'


function MaintenanceAircraft() {
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
    <div className="maintenance-aircraft-container">
      <header>
        <Link to={"./.."} className="back-link">
          <GoArrowLeft color='black' size={32} />
        </Link>
        <h2>MANTENIMIENTO - Aeronaves</h2>
      </header>
      <main>
        <span>
          <Link to={"./#"} className='new-aircraft-button'>
            <CiSquarePlus color="#171A4A" size={40} />
            Registrar Aeronave
          </Link>
        </span>
        <table>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Modelo</th>
              <th>Horas de Vuelo</th>
              <th>Margen</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'FAB-004', model: 'EC-145', hours: '9000h 30m', margin: '100h', status: 'P' },
              { id: 'FAB-754', model: 'AS350-B3', hours: '500h', margin: '50h', status: 'W' },
              { id: 'FAB-755', model: 'AS350-B3', hours: '600h', margin: '60h', status: 'W' },
              { id: 'FAB-767', model: 'R-66', hours: '700h', margin: '70h', status: 'W' },
              { id: 'FAB-768', model: 'R-66', hours: '800h', margin: '80h', status: 'P' },
            ].map((aircraft, index) => (
              <tr key={aircraft.id}>
                <td>{aircraft.id}</td>
                <td>{aircraft.model}</td>
                <td>{aircraft.hours}</td>
                <td>{aircraft.margin}</td>
                <td>{aircraft.status}</td>
                <td>
                  <button onClick={(e) => handleButtonClick(e, index)}>
                    <CiMenuKebab size={24} />
                  </button>
                  {menuVisible && activeRow === index && (
                    <div ref={menuRef} className="floating-menu" style={{ top: menuPosition.top, left: menuPosition.left }}>
                      <ul>
                        <li><TbChecklist size={32} />Control de componentes</li>
                        <li><FaRegClipboard size={28} />Inspecciones</li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
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

export default MaintenanceAircraft
