import { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import './maintenance-warehouseInventory.css'

function MaintenanceWarehouseInventory() {
  const [selectedAircraft, setSelectedAircraft] = useState('JetSam');
  const [selectedCategory, setSelectedCategory] = useState('Fungibles');

  const clearFilter = () => {
    setSelectedAircraft('JetSam');
    setSelectedCategory('Fungibles');
  };

  return (
    <div className='maintenance-warehouseInventory-container'>
      <IoMdArrowRoundBack></IoMdArrowRoundBack>
      <h1>Inventario De Almacenes</h1>
      <div className='maintenance-warehouseInventory-filterContainer'>
        <p>Aeronave: </p>
        <select
          value={selectedAircraft}
          onChange={(e) => setSelectedAircraft(e.target.value)}
        >
          <option value="JetSam">JetSam</option>
          {/* Add other aircraft options here */}
        </select>
        <p>Categoria de Repuesto: </p>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Fungibles">Fungibles</option>
          <option value="Componentes">Componentes</option>
          {/* Add other category options here */}
        </select>
        <button onClick={clearFilter}>
          Limpiar Filtro
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>Número de Parte</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Medida</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default MaintenanceWarehouseInventory;
