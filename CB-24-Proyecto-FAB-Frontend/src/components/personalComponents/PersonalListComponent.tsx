import { AiOutlineTool } from "react-icons/ai";
import { TbManualGearbox } from "react-icons/tb";
import { MdOutlineWarehouse } from "react-icons/md";
import { LuCross } from "react-icons/lu";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import "../main-menu/main-menu/main-menu.css";
import "./Personal-List.css";

interface Personal {
  id: number;
  name: string;
  ci: string;
  grade: string;
  option: string;
}

interface Option {
  value: string;
  label: string;
}

export default function PersonalListComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const personal: Personal[] = [
    {
      id: 1,
      name: "Juan Perez",
      ci: "XXXXX",
      grade: "1er año",
      option: "4547",
    },
    {
      id: 2,
      name: "Alberto Gomez",
      ci: "XXXX",
      grade: "2do año",
      option: "4547",
    },
  ];

  const filteredAiships = personal.filter((personals) =>
    personals.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const options: Option[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  return (
    <>
      <div className="main-menu-container">
        <div className="main-menu-options">
          <Link className="card" to={"/"}>
            <TbManualGearbox />
            <span>Operaciones</span>
          </Link>
          <Link className="card" to={"/"}>
            <AiOutlineTool />
            <span>Mantenimiento</span>
          </Link>
          <Link className="card" to={"/"}>
            <MdOutlineWarehouse />
            <span>Almacenes</span>
          </Link>
          <Link className="card" to={"/"}>
            <LuCross />
            <span>SAR FAB</span>
          </Link>
        </div>
      </div>

      <div className="personal-container">
        <div className="title-container">
          <h1>
            <Link to={"/menu-principal"}>
              <IoIosArrowBack className="goback-arrow" />
            </Link>
            <span className="title-text">LISTA DE PERSONAL</span>
          </h1>
        </div>

        <div className="search-add-container ">
          <button className="add-button">
            <FaPlus className="add-button-icon" />
          </button>
          <input
            type="text"
            name="buscador"
            id=""
            className="search-box2"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">Buscar</button>
          <select
            value={selectedOption || ""}
            onChange={handleChange}
            className="select-box">
            <option value="">Seleccionar</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>NOMBRE COMPLETO</th>
              <th>CI</th>
              <th>GRADO</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredAiships.map((personals) => (
              <tr key={personals.id}>
                <td>{personals.name}</td>
                <td>{personals.ci}</td>
                <td>{personals.grade}</td>
                <td>
                  <Link to={""} className="round-button">
                    ⁝
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button className="additional-button">Ver Reclutamiento</button>
          <button className="additional-button">Ver voluntarios de baja</button>
        </div>
      </div>
    </>
  );
}
