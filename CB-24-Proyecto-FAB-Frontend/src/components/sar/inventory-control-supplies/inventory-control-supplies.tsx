import { useState } from "react";
import LayoutSar from "../layout-sar/layout-sar";
import "./inventory-control-supplies.css";

export default function InventoryControl() {
  const [activeTab, setActiveTab] = useState<string>('activos');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const inventoryData = [
    { tipo: 'Casco de plastico', cantidad: 15, almacen: 15},
    { tipo: 'Pala', cantidad: 19, almacen: 7},
    { tipo: 'Carretilla', cantidad: 19,almacen: 5}
  ];

  return (
    <LayoutSar>
      <div className="inventory-container">
        <h2 className="inventory-supplies-title">INVENTARIO</h2>
        <div className="inventory-supplies-controls-container">
          <div className="inventory-supplies-tab-buttons">
            <button className={`inventory-supplies-category-buttons ${activeTab === 'activos' ? 'active' : ''}`} 
              onClick={() => handleTabClick('activos')}>Activos fijos
            </button>
            <button className={`inventory-supplies-category-buttons ${activeTab === 'insumos' ? 'active' : ''}`} 
              onClick={() => handleTabClick('insumos')}
            >
              Insumos
            </button>
          </div>
          <select className="inventory-supplies-type-select">
            <option value="todos">Tipo de inventario</option>
            <option value="Casco">Casco</option>
            <option value="Pala">Pala</option>
            <option value="Carretilla">Carretilla</option>
          </select>
        </div>
        <table className="inventory-supplies-table">
          <thead>
            <tr>
              <th>TIPO</th>
              <th>TOTAL</th>
              <th>EN ALMACEN</th>
              <th>DETALLE</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.tipo}</td>
                <td>{item.cantidad}</td>
                <td>{item.almacen}</td>
                <td><button className="inventory-supplies-btn-options"><i className="fas fa-eye"></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="inventory-supplies-button-group">
          <button className="inventory-supplies-action-button">Donaciones</button>
          <button className="inventory-supplies-action-button">Devoluciones</button>
          <button className="inventory-supplies-action-button">Salidas</button>
        </div>
      </div>
    </LayoutSar>
  );
}