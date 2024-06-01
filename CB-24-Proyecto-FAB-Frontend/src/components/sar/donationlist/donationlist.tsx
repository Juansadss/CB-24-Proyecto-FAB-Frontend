import { useState } from 'react';
import './donationlist.css';
import LayoutSar from '../layout-sar/layout-sar';
import '../search-bar-styles.css'
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import DatePicker from 'react-datepicker';
import { FaAngleLeft, FaCalendarAlt } from "react-icons/fa";
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
                <h2 className="donationlist-header">
                    <button onClick={handleBackClick}><FaAngleLeft /></button>
                    <b>INVENTARIO &gt; </b> <span> Donaciones</span> 
                </h2>              
                <div>
                    <div className="donationsList-actions">
                        <button className="icon-button-list-donation"><CiSquarePlus /></button>
                        <form action="" className="sar-search-bar">
                            <div>
                                <b>Institución</b>
                                <DropdownInputSearch label='Seleccione una institucion' options={options} />
                            </div>   
                            <div className="donationsList-colunm">
                                <b>Fecha inicial:</b>
                                <div className="sar-search-bar-item">
                                <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handleDateChange} onClickOutside={() => setisDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisDatePickerOpen(true)} open={isDatePickerOpen} />
                                    <button className="sar-search-button" type="button" onClick={() => setisDatePickerOpen(!isDatePickerOpen)}>
                                        <FaCalendarAlt />
                                    </button>
                                </div>
                            </div> 
                            <div>
                                <b>Fecha final</b>
                                <div className="sar-search-bar-item">
                                    <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handleDateChange} onClickOutside={() => setisDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisDatePickerOpen(true)} open={isDatePickerOpen} />
                                    <button className="sar-search-button" type="button" onClick={() => setisDatePickerOpen(!isDatePickerOpen)}>
                                        <FaCalendarAlt />
                                    </button>
                                </div>
                            </div>      
                        </form> 
                    </div>
                    <table className="donationlist-table">
                        <thead>
                            <tr>
                                <th>INSTITUCIÓN</th>
                                <th>FECHA DE DONACIÓN</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alcaldía de Cochabamba</td>
                                <td>dd/mm/aaaa</td>
                                <td><button className="icon-button-donation-list">👁</button></td>
                            </tr>
                            <tr>
                                <td>Fuerza Aérea</td>
                                <td>dd/mm/aaaa</td>
                                <td><button className="icon-button-donation-list">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};


