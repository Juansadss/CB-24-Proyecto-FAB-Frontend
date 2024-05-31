import { useState } from "react";
import LayoutSar from "../layout-sar/layout-sar";
import "./inventory-control.css";
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';

interface Option {
  value: string;
  label: string;
}

export default function InventoryControl() {
  const [activeTab, setActiveTab] = useState<string>('activos');
  const [selectedTipo, setSelectedTipo] = useState<Option | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const inventoryData = [
    { tipo: 'Silla de madera', cantidad: 2 },
    { tipo: 'Silla de metal', cantidad: 9 },
    { tipo: 'Catre de metal', cantidad: 9 }
  ];
  const tipoOptions: Option[] = [
    { value: 'Tipos', label: 'Sillas' },
    { value: 'Tipos', label: 'Catres' }
  ];
  const handleTipoSelect = (option: Option) => {
    setSelectedTipo(option);
  };
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
          <div className="inventory-control-controls-container">
          <DropdownInputSearch label='Seleccione tipo de activos' options={tipoOptions} onOptionSelect={handleTipoSelect} />
          </div>
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