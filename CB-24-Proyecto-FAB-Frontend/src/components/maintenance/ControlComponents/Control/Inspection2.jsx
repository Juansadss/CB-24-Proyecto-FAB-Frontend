import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Inspection2.css"; // Importa el archivo CSS

const Inspection2 = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div>
      <div className="header">
        <div className="title title-left">
          <h4><strong>MANTENIMIENTO - Sección Inspección </strong><br /><strong>62-11 MAIN ROTOR BLADE</strong></h4>
        </div>
        <div className="title title-center">
          <h4><strong>ALS 04-20-00 Airworthiness Time Limits</strong> - <br /><strong>Inspections - INSP. "5101"</strong></h4>
        </div>
        <div className="title title-right">
          <h4><strong>ALS BK117 C2</strong> <br /><strong>ATA 62 - MAIN ROTOR SYSTEM</strong></h4>
        </div>
      </div>

      {/* Aquí mostramos la información del usuario */}
      {user && (
        <div className="user-info">
          <h2>Detalles del Usuario</h2>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Descripción:</strong> {user.descripcion}</p>
          {/* Agrega más campos según los datos disponibles en 'user' */}
        </div>
      )}

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Task Number <br /> Description/ <br /> Remarks</th>
              <th>DOCUMENTATION</th>
              <th>INTERVAL</th>
              <th>MARGIN</th>
              <th>INITIAL</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }, (_, index) => (
              <tr key={index}>
                <td>Task {index + 8}</td>
                <td>ABC{index + 8}</td>
                <td>Check</td>
                <td>{8 + index} days</td>
                <td>{index % 2 === 0 ? 'Completed' : 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="second-table-container">
        <table className="second-table">
          <thead>
            <tr>
              <th>MECHANIC</th>
              <th>DATE</th>
              <th>INSPECTOR</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 3 }, (_, index) => (
              <tr key={index}>
                <td>John Doe {index + 1}</td>
                <td>{`2024-05-${3 + index}`}</td>
                <td>Jane Smith</td>
                <td>{`2024-05-${3 + index}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inspection2;
