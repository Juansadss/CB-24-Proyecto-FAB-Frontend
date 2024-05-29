import { Link } from 'react-router-dom';
import { CiCirclePlus } from 'react-icons/ci';
import { CiMenuKebab } from 'react-icons/ci';
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';
import './maintenance-new-work-order.css';

export default function MaintenanceNewWorkOrder() {
  const navigate = useNavigate();
  const [selectedTask, setSelectedTask] = useState<string>('');
  const [tasks, setTasks] = useState<{ ata: string; name: string }[]>([]);

  const handleRegisterClick = () => {
    navigate('./..');
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTask(e.target.value);
  };

  const handleAddTask = () => {
    if (selectedTask) {
      const newTask = { ata: 'ATA', name: selectedTask };
      setTasks([...tasks, newTask]);
      setSelectedTask('');
    }
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="maintenance-new-work-order-container">
      <header>
        <Link className="back-link" to={"./.."}>
          <IoIosArrowBack fontSize={32} />
        </Link>
        <h2>MANTENIMIENTO - Lista Ordenes de Trabajo - Nueva Orden de Trabajo</h2>
      </header>
      <main>
        <h3>Seleccione la Aeronave:</h3>
        <div className='aircraft-section'>
          <div>
            <label className="maintenance-label-section">Aeronave:</label>
            <select>
              <option value="" hidden>- Seleccione una Aeronave -</option>
              <option value="">FAB-004</option>
              <option value="">FAB-754</option>
              <option value="">FAB-755</option>
              <option value="">FAB-767</option>
              <option value="">FAB-768</option>
            </select>
          </div>
          <div>
            <label className="maintenance-label-section">Tipo de Trabajo:</label>
            <select>
              <option value="" hidden>- Seleccione una Opción -</option>
              <option value="">Mantenimiento</option>
              <option value="">Reparación</option>
              <option value="">Inspección</option>
            </select>
          </div>
        </div>

        <label><strong>Descripción:</strong></label>
        <div className='description-section'>
          <textarea rows={4}></textarea>
        </div>
        <div>
          <label className="maintenance-label-section2"><strong>Inspector asignado:</strong></label>
          <div className='inspector-section'>
            <select>
              <option value="" hidden>- Seleccione un Inspector -</option>
              <option value="">Juan Perez</option>
              <option value="">María Gómez</option>
              <option value="">Luis Martínez</option>
              <option value="">Ana Rodriguez</option>
            </select>
            <div className='date-section'>
              <label className="maintenance-label-section"><strong>Fecha:</strong></label>
              <input type="date" className="maintenance-input-date" />
            </div>
          </div>
        </div>
        <h3>Tareas Asignadas</h3>
        <div className="info-section">
          <label>Agregar Tarea:</label>
          <select value={selectedTask} onChange={handleTaskChange}>
            <option value="" hidden>- Seleccione una tarea -</option>
            <option value="tarea1">tarea1</option>
            <option value="tarea2">tarea2</option>
            <option value="tarea3">tarea3</option>
            <option value="tarea4">tarea4</option>
            <option value="tarea5">tarea5</option>
          </select>
          <button onClick={handleAddTask}>
            <CiCirclePlus color="#171A4A" size={32} className='task-icon' />
          </button>
        </div>
        <div className="tasks-table">
          <table>
            <thead>
              <tr>
                <th>ATA</th>
                <th colSpan={2}>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.ata}</td>
                  <td>{task.name}</td>
                  <td className='delete-icon'>
                    <button onClick={() => handleRemoveTask(index)}>
                      <IoTrashOutline size={28} color='red' className='task-icon' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={handleRegisterClick} className="maintenance-register-button">Registrar Trabajo</button>
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
  );
}
