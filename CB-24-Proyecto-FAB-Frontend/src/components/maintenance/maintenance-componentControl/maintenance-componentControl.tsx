import { useState } from "react";
import { Link } from "react-router-dom"
import { CiSquarePlus } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import './maintenance-componentControl.css'

function MaintenanceComponentControl() {
  const [selectedType, setSelectedType] = useState<string>('Aeronave');
  const [selectedServiceTime, setSelectedServiceTime] = useState<string>('OTL');

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const handleServiceTimeClick = (serviceTime: string) => {
    setSelectedServiceTime(serviceTime);
  };

  return (
    <div className="maintenance-componentControl-container">
      <header>
        <Link to={"./.."} className="back-link">
          <GoArrowLeft color='black' size={32} />
        </Link>
        <h2>MANTENIMIENTO - Control de Componentes</h2>
      </header>
      <span className='component-section'>
        <div className='new-component-option'>
          <Link to={"./#"} className='new-component-button'>
            <CiSquarePlus color="#171A4A" size={40} />
            Registrar Componente
          </Link>
        </div>
        <div className='filter-option'>
          Tipo de Componente:
          <span>
            <button
              onClick={() => handleTypeClick('Aeronave')}
              className={`filter-button ${selectedType === 'Aeronave' ? 'selected-filter' : ''}`}
            >
              Aeronave
            </button>
            <button
              onClick={() => handleTypeClick('Motor')}
              className={`filter-button ${selectedType === 'Motor' ? 'selected-filter' : ''}`}
            >
              Motor
            </button>
          </span>
        </div>
        <div className='filter-option'>
          Tiempo de Servicio:
          <span>
            <button
              onClick={() => handleServiceTimeClick('OTL')}
              className={`filter-button ${selectedServiceTime === 'OTL' ? 'selected-filter' : ''}`}
            >
              OTL
            </button>
            <button
              onClick={() => handleServiceTimeClick('TBO')}
              className={`filter-button ${selectedServiceTime === 'TBO' ? 'selected-filter' : ''}`}
            >
              TBO
            </button>
            <button
              onClick={() => handleServiceTimeClick('SLL')}
              className={`filter-button ${selectedServiceTime === 'SLL' ? 'selected-filter' : ''}`}
            >
              SLL
            </button>
          </span>
        </div>
      </span>
      <div className="maintenance-componentControl-table-container">
        <table>
          <thead>
            <tr>
              <th>Componente</th>
              <th>Nro Parte</th>
              <th>Aeronave</th>
              <th>Fecha Instalación</th>
              <th>Límite</th>
              <th>Margen</th>
              <th>Req.</th>
              <th>Restante</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Battery Fit</td>
              <td>N/A</td>
              <td>FAB-004</td>
              <td>01-05-2024</td>
              <td>3200 FH</td>
              <td>100 FH</td>
              <td>3200 FH</td>
              <td><span className="maintenance-componentControl-res">1200 fh</span></td>
            </tr>
            <tr>
              <td>Portable Fire Extinguisher</td>
              <td>HAL1-74-00</td>
              <td>FAB-004</td>
              <td>03-05-2024</td>
              <td>3200 FH</td>
              <td>0</td>
              <td>800 FH</td>
              <td><span className="maintenance-componentControl-res">770 fh</span></td>
            </tr>
            <tr>
              <td>INSTRUMENT COOLING BLOWER MOTOR</td>
              <td>JBS276-1</td>
              <td>FAB-004</td>
              <td>05-05-2024</td>
              <td>72 M</td>
              <td>15 FH</td>
              <td>05-07-30</td>
              <td><span className="maintenance-componentControl-res">900 fh</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
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

export default MaintenanceComponentControl
