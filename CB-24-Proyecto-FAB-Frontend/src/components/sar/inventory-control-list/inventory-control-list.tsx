import LayoutSar from "../layout-sar/layout-sar";
import "./inventory-control-list.css";
import { useState } from "react";

export default function InventoryControlList() {
  const [searchTerm, setSearchTerm] = useState('');

  const inventoryData = [
    { descripcion: 'Silla color madera corriente color cafe', estado: 'R', codigo: 'XXXXXXX', area: 'XXXXX'},
    { descripcion: 'Silla color madera corriente color negro', estado: 'M', codigo: 'XXXXXXX', area: 'XXXXX'}
  ];

  return (
    <LayoutSar>
      <div className="inventory-list-container">
        <h2 className="inventory-list-title">INVENTARIO &gt; Activos fijos &gt; silla de madera</h2>
        <div className="inventory-list-controls-container">
          <div className="inventory-list-search-container">
            <input
              type="text"
              className="inventory-list-search-input"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
          </div>
          <select className="inventory-list-type-select">
            <option value="todos">estado</option>
            <option value="Regular">Regular</option>
            <option value="Bueno">Bueno</option>
            <option value="Mal">Mal estado</option>
          </select>
          <select className="inventory-list-type-select">
            <option value="todos">Tipo de donaciones</option>
            <option value="Donacion">Alcaldia</option>
          </select>
        </div>
        <table className="inventory-list-table">
          <thead>
            <tr>
              <th>DESCRIPCION</th>
              <th>ESTADO</th>
              <th>CODIGO</th>
              <th>AREA</th>
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