import React, { useState } from 'react';
import './donationlist.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaMagnifyingGlass } from "react-icons/fa6";
import '../search-bar-styles.css'
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from "react-icons/fa";
import 'react-datepicker/dist/react-datepicker.css';
import { CiSquarePlus } from "react-icons/ci";


    const options = [
        { value: 'opcion1', label: 'Alcaldía de Cochabamba' },
        { value: 'opcion2', label: 'Fuerza Aérea' },
      ];

    const handleBackClick = () => {
        console.log('Back button clicked');
    };
export default function DonationList() {
        const [startDate, setStartDate] = useState<Date | null>(new Date());
        const [isDatePickerOpen, setisDatePickerOpen] = useState<boolean>(false);
      
        const handleDateChange = (date: Date | null) => {
          setStartDate(date);
          console.log('Fecha seleccionada:', date);
        };
      

    return (
        <LayoutSar>
            <div className="donationlist-container">
                <div className="donationlist-header">
                    <button className="icon-button" onClick={handleBackClick}>&lt;</button>
                    <span className="main-title">INVENTARIO</span>
                    <span className="sub-title"> &gt; Donaciones</span>
                </div>
                
                <div className="donationlist-content">
                    <form className="donationlist-form">
                    <div className="form-group-row">
                            <div className="donationlist-header">
                                    <button ><CiSquarePlus /></button>
                            </div>
                            <div className="form-group">
                                <label>Institución</label>
                                <DropdownInputSearch options={options} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="donation-date">Fecha de Donacion:</label>
                                <div className="sar-search-bar-item">
                                    <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handleDateChange} onClickOutside={() => setisDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisDatePickerOpen(true)} open={isDatePickerOpen} />
                                    <button className="sar-search-button" type="button" onClick={() => setisDatePickerOpen(!isDatePickerOpen)}>
                                        <FaCalendarAlt />
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="return-date">Fecha de Devolución</label>
                                <div className="sar-search-bar-item">
                                    <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handleDateChange} onClickOutside={() => setisDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisDatePickerOpen(true)} open={isDatePickerOpen} />
                                    <button className="sar-search-button" type="button" onClick={() => setisDatePickerOpen(!isDatePickerOpen)}>
                                        <FaCalendarAlt />
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="search">Buscador:</label>
                                <div className="sar-search-bar-item">
                                    <input type="text" placeholder="Buscar..." className="sar-search-input" />
                                    <button className="sar-search-button">
                                        <FaMagnifyingGlass />
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                    <table className="donationlist-table">
                        <thead>
                            <tr>
                                <th>INSTITUCIÓN</th>
                                <th>FECHA DE DONACIÓN</th>
                                <th>FECHA DE DEVOLUCIÓN</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alcaldía de Cochabamba</td>
                                <td>dd/mm/aaaa</td>
                                <td>dd/mm/aaaa</td>
                                <td><button className="icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>Fuerza Aérea</td>
                                <td>dd/mm/aaaa</td>
                                <td>dd/mm/aaaa</td>
                                <td><button className="icon-button">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};


