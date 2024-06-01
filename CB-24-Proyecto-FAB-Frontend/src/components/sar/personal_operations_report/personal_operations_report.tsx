import { useState } from 'react';
import './personal_operations_report.css';
import LayoutSar from '../layout-sar/layout-sar';
import DatePicker from 'react-datepicker';

import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { FaAngleLeft, FaCalendarAlt } from 'react-icons/fa';

const tipo = [
    { value: 'opcion1', label: 'Opción 1' },
    { value: 'opcion2', label: 'Opción 2' },
    { value: 'opcion3', label: 'Opción 3' },
];
const estado = [
    { value: 'opcion1', label: 'Opción 1' },
    { value: 'opcion2', label: 'Opción 2' },
    { value: 'opcion3', label: 'Opción 3' },
];

const PersonalOperationsReport = () => {
    
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [isDatePickerOpen, setisDatePickerOpen] = useState<boolean>(false);


    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
        console.log('Fecha seleccionada:', date);
    };
    return (
        <LayoutSar>
            <div className="personalOperationsReport-container">
                <h3> <FaAngleLeft /> PERSONAL &gt; Reporte personal &gt; Operaciones &gt; Jose Fernando </h3>
                <div className="personalOperationsReport-content">
                    <div className="guard-header">
                        <form action="" className="sar-search-bar">
                            <DropdownInputSearch options={tipo} />
                            <div className="sar-search-bar-item">
                                <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handleDateChange} onClickOutside={() => setisDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisDatePickerOpen(true)} open={isDatePickerOpen} />
                                <button className="sar-search-button" type="button" onClick={() => setisDatePickerOpen(!isDatePickerOpen)}>
                                    <FaCalendarAlt />
                                </button>
                            </div>
                            <DropdownInputSearch options={estado} />
                        </form>
                    </div>
                    <table className="personalOperationsReport-table">
                        <thead>
                            <tr>
                                <th>TIPO</th>
                                <th>FECHA</th>
                                <th>LOCALIDAD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Curso 1</td>
                                <td>20/06/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 2</td>
                                <td>10/06/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 3</td>
                                <td>30/05/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 4 </td>
                                <td>25//05/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 5</td>
                                <td>27/04/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Curso 6</td>
                                <td>04/02/24</td>
                                <td>Cochabamba</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default PersonalOperationsReport;
