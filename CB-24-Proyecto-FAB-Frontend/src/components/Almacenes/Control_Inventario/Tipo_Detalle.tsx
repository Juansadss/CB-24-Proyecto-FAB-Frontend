import React, { useState } from 'react';
import { FaSearch, FaEye } from 'react-icons/fa'; // Se eliminó FaArrowLeft
import SlideBar from '../CompTools/SlideBar';
import { useNavigate } from 'react-router-dom'; 
import "../../Almacenes/Styles/Tipo_Detalle.css";

const Tipo_Detalle = () => {
  const [compSelected, setCompSelected] = useState('');
  const navigate = useNavigate(); 

  // Datos de la tabla
  const inventoryData = [
    { partNumber: '1243256', quantity: 10, expirationDate: 'DD/MM/AAAA' },
    { partNumber: '43565654', quantity: 5, expirationDate: 'DD/MM/AAAA' },
    { partNumber: '1243256', quantity: 8, expirationDate: 'DD/MM/AAAA' },
    { partNumber: '43565654', quantity: 6, expirationDate: 'DD/MM/AAAA' }
  ];

  // Busqueda
  const filteredData = inventoryData.filter(item => 
    item.partNumber.includes(compSelected)
  );

  return (
    <div className="inventory-container">
      <div className="headerh2">
        <h2>INVENTARIO &gt; otros &gt; Aceite de turbina</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar..."
            value={compSelected}
            onChange={e => setCompSelected(e.target.value)}
          />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>NRO DE PARTE</th>
            <th>CANTIDAD</th>
            <th>FECHA VENCIMIENTO</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.partNumber}</td>
              <td>{item.quantity}</td>
              <td>{item.expirationDate}</td>
              <td>
                <button>
                  <FaEye />
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
function Tipo_DetalleExport() {
    return (
      <SlideBar ContentComp={Tipo_Detalle} menuItem='Inventario'>
      </SlideBar>
    );
}

export default Tipo_DetalleExport;
