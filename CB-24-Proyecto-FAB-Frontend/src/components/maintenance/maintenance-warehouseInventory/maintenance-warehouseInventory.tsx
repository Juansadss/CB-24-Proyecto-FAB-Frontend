import { useState } from 'react';
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
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
      <header>
        <Link to={"./.."} className="back-link">
          <GoArrowLeft color='black' size={32} />
        </Link>
        <h2>Mantenimiento - Inventario de Almacenes</h2>
      </header>
      <div className='maintenance-warehouseInventory-filterContainer'>
        <p>Aeronave: </p>
        <select
          value={selectedAircraft}
          onChange={(e) => setSelectedAircraft(e.target.value)}
        >
          <option value="JetSam">JetSam</option>
        </select>
        <p>Categoria de Repuesto: </p>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Fungibles">Fungibles</option>
          <option value="Componentes">Componentes</option>
        </select>
        <button onClick={clearFilter}>
          Limpiar Filtro
        </button>
      </div>
      <div className="table-container">
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
            <tr>
              <td>TAIL GEARBOX</td>
              <td>4639003013</td>
              <td>Tail Gearbox</td>
              <td>5</td>
              <td>Unidad</td>
            </tr>
          </tbody>
        </table>
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

export default MaintenanceWarehouseInventory;
