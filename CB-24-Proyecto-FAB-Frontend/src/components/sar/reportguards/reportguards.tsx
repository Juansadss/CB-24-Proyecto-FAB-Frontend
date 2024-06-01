import { useState } from 'react';
import './reportguards.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaAngleLeft, FaCalendarAlt } from "react-icons/fa";
import '../search-bar-styles.css'
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiSquarePlus } from 'react-icons/ci';

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
                <h2 className="reportguards-header">
                    <button onClick={handleBackClick}><FaAngleLeft /></button>
                    <b>PERSONAL &gt; </b> <span>Reporte personal &gt; Guardias &gt; Jose Fernando</span>
                </h2>
                <div className="reportguards-content">
                    <div className="reportguards-actions">
                        <button className="icon-button-reportguards"><CiSquarePlus /></button>
                        <form action="" className="sar-search-bar">                             
                            <div>
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
                            <div>
                                <b>Turno</b>
                                <DropdownInputSearch label='Seleccione un turno' options={options} />
                            </div>  
                            <div>
                                <b>Estado</b>
                                <DropdownInputSearch label='Seleccione un estado' options={options2} />
                            </div>     
                        </form> 
                    </div>
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

