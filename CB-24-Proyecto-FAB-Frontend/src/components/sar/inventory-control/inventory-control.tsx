import { useState } from "react";
import LayoutSar from "../layout-sar/layout-sar";
import "./inventory-control.css";

export default function InventoryControl() {
  const [activeTab, setActiveTab] = useState<string>('activos');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const inventoryData = [
    { tipo: 'Silla de madera', cantidad: 2 },
    { tipo: 'Silla de metal', cantidad: 9 },
    { tipo: 'Catre de metal', cantidad: 9 }
  ];

  return (
    <LayoutSar>
      <div className="inventory-container">
        <h2 className="inventory-title">INVENTARIO</h2>
        <div className="inventory-controls-container">
          <div className="inventory-tab-buttons">
            <button className={`inventory-category-button ${activeTab === 'activos' ? 'active' : ''}`} 
              onClick={() => handleTabClick('activos')}>Activos fijos
            </button>
            <button className={`inventory-category-button ${activeTab === 'insumos' ? 'active' : ''}`} 
              onClick={() => handleTabClick('insumos')}
            >
              Insumos
            </button>
          </div>
          <select className="inventory-type-select">
            <option value="todos">Tipo</option>
            <option value="sillas">Sillas</option>
            <option value="catres">Catres</option>
          </select>
        </div>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>TIPO</th>
              <th>CANTIDAD</th>
              <th>DETALLE</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.tipo}</td>
                <td>{item.cantidad}</td>
                <td><button className="inventory-btn-options"><i className="fas fa-eye"></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="inventory-button-group">
          <button className="inventory-action-button">Donaciones</button>
          <button className="inventory-action-button">Devoluciones</button>
          <button className="inventory-action-button">Entregas</button>
        </div>
      </div>
    </LayoutSar>
  );
}