
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineTool } from "react-icons/ai";
import { TbManualGearbox } from "react-icons/tb";
import { MdOutlineWarehouse } from "react-icons/md";
import { LuCross } from "react-icons/lu";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../main-menu/main-menu/main-menu.css";
import "./Recruiment-List.css";

interface Recruiment {
  id: number;
  name: string;
  ci: string;
  stage: string;
  option: string;
}

interface Option {
  value: string;
  label: string;
}

export default function RecruimentListComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const recruiment: Recruiment[] = [
    {
      id: 1,
      name: "Juan Perez",
      ci: "XXXXX",
      stage: "etapa 1",
      option: "4547",
    },
    {
      id: 2,
      name: "Alberto Gomez",
      ci: "XXXX",
      stage: "etapa 2",
      option: "4547",
    },
  ];

  const filteredAiships = recruiment.filter((recruiments) =>
    recruiments.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="recruiment-container">
        {/* Title */}
        <div className="title-container">
          <h1>
            <Link to={"/menu-principal"}>
              <IoIosArrowBack className="goback-arrow" />
            </Link>
            <span className="title-text">LISTA DE RECLUTAMIENTO</span>
          </h1>
        </div>

        {/* Search Box and Add Button */}
        <div className="search-add-container ">
          
          <input
            type="text"
            name="buscador"
            id=""
            className="search-box"
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

        {/* Pilot Table */}
        <table>
          <thead>
            <tr>
              <th>NOMBRE COMPLETO</th>
              <th>CI</th>
              <th>ETAPA</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredAiships.map((recruiments) => (
              <tr key={recruiments.id}>
                <td>{recruiments.name}</td>
                <td>{recruiments.ci}</td>
                <td>{recruiments.stage}</td>
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
          <button className="additional-button">Ver Formulario</button>
         
        </div>

      </div>
    </>
  );
}
