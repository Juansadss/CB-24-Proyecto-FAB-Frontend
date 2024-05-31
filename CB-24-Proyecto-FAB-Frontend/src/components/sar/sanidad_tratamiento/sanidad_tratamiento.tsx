import { useState } from 'react';
import './sanidad_tratamiento.css';
import LayoutSar from '../layout-sar/layout-sar';
import DatePicker from 'react-datepicker';
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { CiSquarePlus } from 'react-icons/ci';

const options = [
    { value: 'opcion1', label: 'Opción 1' },
    { value: 'opcion2', label: 'Opción 2' },
    { value: 'opcion3', label: 'Opción 3' },
];
const SanidadTratamiento = () => {
    const [, setModalOpen] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [isDatePickerOpen, setisDatePickerOpen] = useState<boolean>(false);


    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
        console.log('Fecha seleccionada:', date);
    };

    return (
        <LayoutSar>
            <div className="sanidad_tratamiento-container">
                <h3>SANIDAD </h3>
                <div className="sanidad_tratamiento-content">
                    <div className="guard-header">
                        <button className="icon-button" onClick={() => setModalOpen(true)}><CiSquarePlus /></button>
                        <form action="" className="sar-search-bar">
                            <DropdownInputSearch options={options} />
                            <div className="sar-search-bar-item">
                                <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handleDateChange} onClickOutside={() => setisDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisDatePickerOpen(true)} open={isDatePickerOpen} />
                                <button className="sar-search-button" type="button" onClick={() => setisDatePickerOpen(!isDatePickerOpen)}>
                                    <FaCalendarAlt />
                                </button>
                            </div>
                            <div className="sar-search-bar-item">
                                <input type="text" placeholder="Buscar..." className="sar-search-input" />
                                <button className="sar-search-button">
                                    <FaMagnifyingGlass />
                                </button>
                            </div>
                        </form>
                    </div>
                    <table className="sanidad_tratamiento-table">
                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>NOMBRE PACIENTE</th>
                                <th>DIÁGNOSTICO</th>
                                <th>TRATAMIENTO</th>
                                <th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td>XXXXXXXXXXXX</td>
                                <td><button className="sanidad_tratamiento-icon-button">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default SanidadTratamiento;
