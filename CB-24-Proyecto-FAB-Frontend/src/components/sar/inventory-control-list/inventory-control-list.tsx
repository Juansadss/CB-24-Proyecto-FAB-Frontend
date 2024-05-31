import { useState } from "react";
import LayoutSar from "../layout-sar/layout-sar";
import "./inventory-control-list.css";
import '../search-bar-styles.css';
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { FaSearch } from 'react-icons/fa';

interface Option {
  value: string;
  label: string;
}

export default function InventoryControlList() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedEstado, setSelectedEstado] = useState<Option | null>(null);
  const [selectedDonacion, setSelectedDonacion] = useState<Option | null>(null);

  const estadoOptions: Option[] = [
    { value: 'Regular', label: 'Regular' },
    { value: 'Bueno', label: 'Bueno' },
    { value: 'Mal', label: 'Mal estado' }
  ];

  const donacionOptions: Option[] = [
    { value: 'Donacion', label: 'Alcaldía' }
  ];

  const handleEstadoSelect = (option: Option) => {
    setSelectedEstado(option);
    console.log('Selected estado:', option);
  };

  const handleDonacionSelect = (option: Option) => {
    setSelectedDonacion(option);
    console.log('Selected donación:', option);
  };

  const inventoryData = [
    { descripcion: 'Silla color madera corriente color café', estado: 'R', codigo: 'XXXXXXX', area: 'XXXXX' },
    { descripcion: 'Silla color madera corriente color negro', estado: 'M', codigo: 'XXXXXXX', area: 'XXXXX' }
  ];

  return (
    <LayoutSar>
      <div className="inventory-list-container">
        <h2 className="inventory-list-title"><b>INVENTARIO &gt;</b> Activos fijos <b>&gt;</b> silla de madera</h2>
        <div className="inventory-list-controls-container">
          <div className="sar-search-bar">
            <div className="sar-search-bar-item">
              <input
                type="text"
                className="sar-search-input"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="sar-search-button">
                <FaSearch />
              </button>
            </div>
          </div>
            <DropdownInputSearch label='Seleccione un estado' options={estadoOptions} onOptionSelect={handleEstadoSelect} />
            <DropdownInputSearch label='Seleccione tipo de donacion' options={donacionOptions} onOptionSelect={handleDonacionSelect} />
        </div>
        <table className="inventory-list-table">
          <thead>
            <tr>
              <th>DESCRIPCIÓN</th>
              <th>ESTADO</th>
              <th>CÓDIGO</th>
              <th>ÁREA</th>
              <th>DETALLE</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.descripcion}</td>
                <td>{item.estado}</td>
                <td>{item.codigo}</td>
                <td>{item.area}</td>
                <td><button className="inventory-list-btn-options"><i className="fas fa-eye"></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutSar>
  );
}