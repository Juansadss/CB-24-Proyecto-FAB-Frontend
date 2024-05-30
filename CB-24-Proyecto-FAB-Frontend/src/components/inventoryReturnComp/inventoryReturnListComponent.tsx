
import { Link } from "react-router-dom";
import React, { useState, FormEvent } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import LayoutSar from "../layout-sar/layout-sar";

import "./Inventory-ListComponent.css";

export default function InventoryReturnListComponent() {
  interface Item {
    tipo: string;
    area: string;
    descripcion: string;
    codigo: string;
    estado: string;
  }
  interface Option {
    value: string;
    label: string;
  }
  interface Inventory {
    id: number;
    type: string;
    amount: number;
  }
  interface Table {
    id: number;
    type: string;
    details: string;
    code: number;
    area: string;
    state: string;
  }
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [formState, setFormState] = useState<Item>({
    tipo: "Silla de madera",
    area: "",
    descripcion: "",
    codigo: "",
    estado: "",
  });
  const [tipo, setTipo] = useState("");
  const [area, setArea] = useState("");

  const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipo(e.target.value);
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArea(e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setItems([...items, formState]);
    setFormState({
      tipo: "Silla de madera",
      area: "",
      descripcion: "",
      codigo: "",
      estado: "",
    });
  };

  const deleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };
  const options: Option[] = [
    { value: "apple", label: "Colegio" },
    { value: "banana", label: "Universidad" },
    { value: "orange", label: "Alcaldia" },
  ];
  const tableInventory: Inventory[] = [
    {
      id: 1,
      type: "Silla de Madera",
      amount: 2,
    },
    {
      id: 2,
      type: "Catre de metal",
      amount: 1,
    },
  ];
  const filteredInventory = tableInventory.filter((tableInventory) =>
    tableInventory.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const table: Table[] = [
    {
      id: 1,
      type: "",
      details: " ",
      code: 0,
      area: "",
      state: "",
    },
    {
      id: 2,
      type: "",
      details: " ",
      code: 0,
      area: "",
      state: "",
    },
  ];
  const filteredTable = table.filter((table) =>
    table.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <LayoutSar>
        <div className="App2">
          <div className="header">
            <div className="title-container">
              <h1>
                <Link to={"/menu-principal"}>
                  <IoIosArrowBack className="goback-arrow" />
                </Link>
                <span className="title-text">
                  INVENTARIO <p className="text">&gt; Devolución &gt; Activos fijos</p>
                </span>
              </h1>
            </div>
          </div>
          <div className="container">
            <h3>Institución:</h3>
            <div>
              <select
                value={selectedOption || ""}
                onChange={handleChange}
                className="input-select-tipo2"
              >
                <option value="">Seleccionar</option>
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <table className="table-inventory">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((tableInventory) => (
                  <tr key={tableInventory.id}>
                    <td>{tableInventory.type}</td>
                    <td>{tableInventory.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Detalles:</h3>
            <label className="label-grade" htmlFor="tipo">
              Tipo:
            </label>
            <label className="label-area" htmlFor="area">
              Código:
            </label>
            <div className="input-container3">
              <select
                className="input-select-tipo"
                id="department"
                value={tipo}
                onChange={handleTipoChange}
              >
                <option value="department1">Comida</option>
                <option value="department2">Material</option>
                <option value="department3">Equipamento</option>
              </select>

              <select
                className="input-select-area"
                id="department"
                value={area}
                onChange={handleAreaChange}
              >
                <option value="department1">001</option>
                <option value="department2">002</option>
                <option value="department3">003</option>
                <option value="department4">004</option>
                <option value="department5">005</option>
              </select>
            </div>
            <form onSubmit={handleSubmit}>
              

             
                <div className="button-agregar">
                  <button className="additional-button">Agregar</button>
                </div>
             
            </form>
          </div>
          <table className="table-2">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Detalles</th>
                <th>Código</th>
                <th>Área</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredTable.map((table, index) => (
                <tr key={table.id}>
                  <td>{table.type}</td>
                  <td>{table.details}</td>
                  <td>{table.code}</td>
                  <td>{table.area}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteItem(index)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="additional-button2">Registrar</button>
        </div>
      </LayoutSar>
    </>
  );
}
