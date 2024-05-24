import { Link } from 'react-router-dom';
import { CiCirclePlus } from 'react-icons/ci';
import { GoArrowLeft } from 'react-icons/go';
import { CiMenuKebab } from 'react-icons/ci';
import './maintenance-new-work-order.css';

export default function MaintenanceNewWorkOrder() {
  return (
    <div className="maintenance-aircraft-container">
      <div className="maintenance-aircraft-header">
        <Link to="/menu-principal/mantenimiento/ordenes-trabajo" className="back-link">
          <GoArrowLeft color="black" size={30} />
          <h2>PROGRAMAR MANTENIMIENTO-Orden de Trabajo</h2>
        </Link>
      </div>

      <div className="maintenance-aircraft-content">
      <h3>Aeronave</h3>
        <div className="maintenance-aircraft-info-section">
          <label className="maintenance-label-section">Tipo:</label>
          <select className="maintenance-select">
            {/* Opciones del tipo */}
          </select>

          <label className="maintenance-label-section">Matricula:</label>
          <input type="text" className="maintenance-input-text" />
        </div>

        <div className="maintenance-aircraft-info-section">
          <label><strong>Descripción:</strong></label>
        </div>
        <div>
          <textarea className="maintenance-text-area" rows={4}></textarea>
        </div>
        <div className="maintenance-aircraft-info-section">
        <label className="maintenance-label-section2"><strong>Inspector asignado:</strong></label>
        <div> 
            <select className="maintenance-select">
            
            </select>
            <label className="maintenance-label-section"><strong>Fecha:</strong></label>
            <input type="date" className="maintenance-input-date" />
        </div>
        </div>
        <h3>Tareas Asignadas</h3>
        <div className="maintenance-aircraft-info-section">
          
          <label className="maintenance-label-section">Tarea:</label>
          <select className="maintenance-select">
            {/* Opciones de tareas */}
          </select>
          <CiCirclePlus color="#171A4A" size={25} className='maintenance-aircraft-icon'/>
        </div>

        <div className="maintenance-aircraft-info-section">
          <table>
            <thead>
              <tr>
                <th>ATA</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ATA1</td>
                <td>Nombre</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="maintenance-register-button">Registrar Trabajo</button>
      </div>

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
  );
}
