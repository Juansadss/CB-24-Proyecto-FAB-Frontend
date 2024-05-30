import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineTool } from "react-icons/ai";
import { TbManualGearbox } from "react-icons/tb";
import { MdOutlineWarehouse } from "react-icons/md";
import { LuCross } from "react-icons/lu";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./Recruiment-List.css";
import LayoutSar from "../layout-sar/layout-sar";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";

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

export default function PersonalListComponent() {
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

  const filteredRecruiments = recruiment.filter((recruiments) =>
    recruiments.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const options: Option[] = [
    { value: "apple", label: "Reclutamiento 1 " },
    { value: "banana", label: "Reclutamiento 2" },
    { value: "orange", label: "Reclutamiento 3" },
  ];

  return (
    <>
      <LayoutSar>
        <div className="recruiment-container2">
          {/* Title */}
          <div className="title-container">
            <h1>
              <Link to={"/menu-principal"}>
                <IoIosArrowBack className="goback-arrow" />
              </Link>
              <span className="title-text">LISTA DE PERSONAL</span>
            </h1>
          </div>
          {/* Search Box and Add Button */}
          <div className="search-add-container">
            <div className="button-add">
              <button className="add-button">
                <FaPlus className="add-button-icon" />
              </button>
            </div>
            <div className="input-search">
              <div className="sar-search-bar-item">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="sar-search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="sar-search-button">
                  <FaMagnifyingGlass />
                </button>
              </div>
            </div>
            <DropdownInputSearch options={options} />
          </div>
          {/* Pilot Table */}
          <table>
            <thead>
              <tr>
                <th>NOMBRE COMPLETO</th>
                <th>CI</th>
                <th>GRADO</th>
                <th>DETALLES</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecruiments.map((recruiments) => (
                <tr key={recruiments.id}>
                  <td>{recruiments.name}</td>
                  <td>{recruiments.ci}</td>
                  <td>{recruiments.stage}</td>
                  <td>
                    <Link to={""} className="round-button">
                      ⁝
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="buttons">
            <button className="see-button">Ver Reclutamiento</button>
            <button className="see-button2">Ver voluntarios baja</button>
          </div>
        </div>
      </LayoutSar>
    </>
  );
}
