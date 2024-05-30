import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineTool } from "react-icons/ai";
import { TbManualGearbox } from "react-icons/tb";
import { MdOutlineWarehouse } from "react-icons/md";
import { LuCross } from "react-icons/lu";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./Donation-List.css";
import LayoutSar from "../layout-sar/layout-sar";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";


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

export default function DonationListComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const recruiment: Recruiment[] = [
    {
      id: 1,
      name: "Juan Perez",
      ci: "dd/mm/aaaa",
      stage: "SI",
      option: "4547",
    },
    {
      id: 2,
      name: "Marco Lopez",
      ci: "dd/mm/aaaa",
      stage: "NO",
      option: "4547",
    },
    {
      id: 2,
      name: "Juan Perez",
      ci: "dd/mm/aaaa",
      stage: "INCOMPLETO",
      option: "4547",
    },
  ];

  const filteredAiships = recruiment.filter((recruiments) =>
    recruiments.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const options: Option[] = [
    { value: "apple", label: "Reclutamiento 1 " },
    { value: "banana", label: "Reclutamiento 2" },
    { value: "orange", label: "Reclutamiento 3" },
  ];
  interface Item {
    tipo: string;
    area: string;
    descripcion: string;
    codigo: string;
    estado: string;
  }
  const [items, setItems] = useState<Item[]>([]);
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    console.log("Fecha seleccionada:", date);
  };
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isDatePickerOpen, setisDatePickerOpen] = useState<boolean>(false);
  const deleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };
  return (
    <>
      <LayoutSar>
        <div className="recruiment-container">
          {/* Title */}
          <div className="title-container">
            <h1>
              <Link to={"/menu-principal"}>
                <IoIosArrowBack className="goback-arrow" />
              </Link>
              <span className="title-text">Inventario <p className="text">&gt; Lista de salidas</p></span>
            </h1>
          </div>
          {/* Search Box and Add Button */}

          <div className="search-add-container ">
            <div className="button-add">
              <button className="add-button">
                <FaPlus className="add-button-icon" />
              </button>
            </div>
            <div className="space">
              <div className="sar-search-bar-item">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="sar-search-input"
                />
                <button className="sar-search-button">
                  <FaMagnifyingGlass />
                </button>
              </div>
            </div>

            <div className="sar-search-bar-item">
              <DatePicker
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                onChange={handleDateChange}
                onClickOutside={() => setisDatePickerOpen(false)}
                className="sar-search-input"
                placeholderText="Seleccionar fecha"
                onInputClick={() => setisDatePickerOpen(true)}
                open={isDatePickerOpen}
              />
              <button
                className="sar-search-button"
                type="button"
                onClick={() => setisDatePickerOpen(!isDatePickerOpen)}
              >
                <FaCalendarAlt />
              </button>
            </div>
            <div className="sar-search-bar-item">
              <DatePicker
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                onChange={handleDateChange}
                onClickOutside={() => setisDatePickerOpen(false)}
                className="sar-search-input"
                placeholderText="Seleccionar fecha"
                onInputClick={() => setisDatePickerOpen(true)}
                open={isDatePickerOpen}
              />
              <button
                className="sar-search-button"
                type="button"
                onClick={() => setisDatePickerOpen(!isDatePickerOpen)}
              >
                <FaCalendarAlt />
              </button>
            </div>
          </div>
          {/* Pilot Table */}
          <table>
            <thead>
              <tr>
                <th>RESPONSABLE</th>
                <th>FECHA</th>
                <th>DEVOLUCIÓN</th>
                <th>DETALLES</th>
              </tr>
            </thead>
            <tbody>
              {filteredAiships.map((recruiments) => (
                <tr key={recruiments.id}>
                  <td>{recruiments.name}</td>
                  <td>{recruiments.ci}</td>
                  <td>{recruiments.stage}</td>
                  <td>
                  <button
                      className="delete-button"
                      onClick={() => deleteItem(index)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
      </LayoutSar>
    </>
  );
}
