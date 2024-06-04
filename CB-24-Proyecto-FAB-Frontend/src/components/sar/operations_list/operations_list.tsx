import './operations_list.css';
import LayoutSar from '../layout-sar/layout-sar';
import DatePicker from "react-datepicker";
import { CiSquarePlus } from 'react-icons/ci';
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const options = [
    { value: 'Rescate', label: 'Rescate' },
    { value: 'Seguridad Médica', label: 'Seguridad Médica' },   
];

const OperationsList = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());   

    const handlestartDateChange = (date: Date | null) => {
        setStartDate(date);
        console.log("Fecha seleccionada:", date);
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
        console.log("Fecha seleccionada:", date);
    };

    const [isStartDatePickerOpen, setisStartDatePickerOpen] = useState<boolean>(false);
    const [isEndDatePickerOpen, setisEndDatePickerOpen] = useState<boolean>(false);

    const goTo = useNavigate()

    return (
        <LayoutSar selectedOption='Operaciones'>
            <div className="operations_list-container">
                <h2 className="operations_list-header">
                    <b>LISTA DE OPERACIONES</b>
                </h2>
                <div className="operations_list-content">
                    <div className="operations_list-actions">
                        <button className="operations_list-add" onClick={() => goTo('/sar/operaciones/crear')}><CiSquarePlus /></button>
                        <form action="" className="sar-search-bar">
                            <div>
                                <b>Tipo</b>
                                <DropdownInputSearch options={options} />
                            </div>   
                            <div>
                                <b>Fecha inicial:</b>
                                <div className="sar-search-bar-item">
                                <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handlestartDateChange} onClickOutside={() => setisStartDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisStartDatePickerOpen(true)} open={isStartDatePickerOpen} />
                                    <button className="sar-search-button" type="button" onClick={() => setisStartDatePickerOpen(!isStartDatePickerOpen)}>
                                        <FaCalendarAlt />
                                    </button>
                                </div>
                            </div> 
                            <div>
                                <b>Fecha final</b>
                                <div className="sar-search-bar-item">
                                    <DatePicker selected={endDate} dateFormat="dd/MM/yyyy" onChange={handleEndDateChange} onClickOutside={() => setisEndDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisEndDatePickerOpen(true)} open={isEndDatePickerOpen} />
                                    <button className="sar-search-button" type="button" onClick={() => setisEndDatePickerOpen(!isEndDatePickerOpen)}>
                                        <FaCalendarAlt />
                                    </button>
                                </div>
                            </div>                         
                        </form>  
                    </div>
                    <table className="operations_list-table">
                        <thead>
                            <tr>
                                <th>TIPO OPERATIVO</th>
                                <th>FECHA</th>
                                <th>LUGAR</th>
                                <th>ESTADO</th>
                                <th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rescate</td>
                                <td>20-06-24</td>
                                <td>Tiquipaya</td>
                                <td>En proceso</td>
                                <td><button className="operations_list-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>Seguridad Médica</td>
                                <td>12-09-24</td>
                                <td>Tiquipaya</td>
                                <td>Finalizado</td>
                                <td><button className="operations_list-icon-button">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default OperationsList;
