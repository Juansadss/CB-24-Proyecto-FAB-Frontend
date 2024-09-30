import React, { useState } from 'react';
import { FaSearch, FaEye, FaPlus } from 'react-icons/fa'; // Agregamos FaPlus
import SlideBar from '../CompTools/SlideBar';
import { useNavigate } from 'react-router-dom'; 
import "../../Almacenes/Styles/Orden_de_salida.css";

const Orden_De_Salida = () => {
  const [compSelected, setCompSelected] = useState('');
  const navigate = useNavigate(); 

  // Datos de la tabla
  const inventoryData = [
    { ordenDeTrabajo: 'Trabajo 1', Date: '17/09/2024' },
    { ordenDeTrabajo: 'Trabajo 2', Date: '20/08/2024' },
    { ordenDeTrabajo: 'Trabajo 3', Date: '07/08/2024' },
    { ordenDeTrabajo: 'Trabajo 4', Date: '04/07/2024' }
  ];

  const filteredData = inventoryData.filter(item => 
    item.ordenDeTrabajo.includes(compSelected)
  );

  //para redirigir solo es intento
  const handleaddClick = () => {
    navigate('/Registro_salida');
  }

  return (
    <div className="inventory-container">
      <div className="headerh3">
        <h2>ORDEN DE SALIDA</h2>
      </div>
        <div className="button-container">
        <button className="add-button" onClick={handleaddClick}>
          <FaPlus />
        </button>
      
        </div>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>ORDEN DE TRABAJO</th>
            <th>FECHA</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.ordenDeTrabajo}</td>
              <td>{item.Date}</td>
              <td>
                <button className="buttonEye">
                  <FaEye/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Esta función es para renderizar con el menú
function Orden_De_SalidaExport() {
    return (
      <SlideBar ContentComp={Orden_De_Salida} menuItem='Orden de salida'>
      </SlideBar>
    );
}

export default Orden_De_SalidaExport;
