import React, { useState } from 'react';
import './reportguards.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaMagnifyingGlass } from "react-icons/fa6";
import '../search-bar-styles.css'
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from "react-icons/fa";
import 'react-datepicker/dist/react-datepicker.css';

    const options = [
        { value: 'opcion1', label: 'Manaña' },
        { value: 'opcion2', label: 'Tarde' },
        { value: 'opcion3', label: 'Noche' },
      ];

      const options2 = [
        { value: 'opcion1', label: 'Completada' },
        { value: 'opcion2', label: 'Falta' },
      ];

    const handleBackClick = () => {
        console.log('Back button clicked');
    };

export default function ReportGuards() {
        const [startDate, setStartDate] = useState<Date | null>(new Date());
        const [isDatePickerOpen, setisDatePickerOpen] = useState<boolean>(false);
      
      
        const handleDateChange = (date: Date | null) => {
          setStartDate(date);
          console.log('Fecha seleccionada:', date);
        };

    return (
        <LayoutSar>
            <div className="reportguards-container">
                <div className="reportguards-header">
                    <button onClick={handleBackClick}>&lt;</button>
                    <span className="main-title">Personal</span>
                    <span className="sub-title"> &gt; Reporte personal &gt; Guardias &gt; Jose Fernando</span>
                </div>
                <div className="reportguards-content">
                    <form className="reportguards-form" >
                        <div className="form-group-row">
                            <div className="form-group">
                                <label htmlFor="turno">Fecha de Turno:</label>
                                <div className="sar-search-bar-item">
                                    <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handleDateChange} onClickOutside={() => setisDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisDatePickerOpen(true)} open={isDatePickerOpen} />
                                    <button className="sar-search-button" type="button" onClick={() => setisDatePickerOpen(!isDatePickerOpen)}>
                                        <FaCalendarAlt />
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="turno">Horario de Turno:</label>
                                <DropdownInputSearch options={options} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="estado">Estado:</label>
                                <DropdownInputSearch options={options2} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="estado">Buscador:</label>
                                <div className="sar-search-bar-item">
                                    <input type="text" placeholder="Buscar..." className="sar-search-input" />
                                    <button className="sar-search-button">
                                        <FaMagnifyingGlass />
                                    </button>
                                </div>
                            </div>
                        </div> 
                    </form>
                    <table className="reportguards-table">
                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>TURNO</th>
                                <th>ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10/10/2024</td>
                                <td>Mañana</td>
                                <td>Completada</td>
                            </tr>
                            <tr>
                                <td>5/10/2024</td>
                                <td>Tarde</td>
                                <td>Completada</td>
                            </tr>
                            <tr>
                                <td>20/9/2024</td>
                                <td>Noche</td>
                                <td>Falto</td>
                            </tr>
                            <tr>
                                <td>15/9/2024</td>
                                <td>Tarde</td>
                                <td>Completada</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

