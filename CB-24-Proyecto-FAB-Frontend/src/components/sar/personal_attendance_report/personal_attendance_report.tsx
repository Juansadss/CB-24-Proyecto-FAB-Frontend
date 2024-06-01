import { useState } from 'react';
import './personal_attendance_report.css';
import LayoutSar from '../layout-sar/layout-sar';
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { FaAngleLeft, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

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

const PersonalAttendanceReport = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [isDatePickerOpen, setisDatePickerOpen] = useState<boolean>(false);


    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
        console.log('Fecha seleccionada:', date);
    };


    return (
        <LayoutSar>
            <div className="personalAttendanceReport-container">
                <h3> <FaAngleLeft /> PERSONAL &gt; Reporte personal &gt; Asistencia &gt; Jose Fernando </h3>
                <div className="personalAttendanceReport-content">
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
                    <table className="personalAttendanceReport-table">
                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10/10/24</td>
                                <td>Presente</td>
                            </tr>
                            <tr>
                                <td>09/10/24</td>
                                <td>Presente</td>
                            </tr>
                            <tr>
                                <td>08/10/24</td>
                                <td>Falto</td>
                            </tr>
                            <tr>
                                <td>07/10/24</td>
                                <td>Permiso</td>
                            </tr>
                            <tr>
                                <td>06/10/24</td>
                                <td>Presente</td>
                            </tr>
                            <tr>
                                <td>05/10/34</td>
                                <td>Presente</td>
                            </tr>
                            <tr>
                                <td>04/10/24</td>
                                <td>Falto</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default PersonalAttendanceReport;
