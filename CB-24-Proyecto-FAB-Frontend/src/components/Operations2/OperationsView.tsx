import './aircraftRequirements.css';
import '../main-menu/main-menu.css';
import '../../index.css';
import './OperationsView.css';
import OperationsLayout from './OperationsLayout';
import { AiFillEdit } from "react-icons/ai";
import { FaSuitcase } from "react-icons/fa";
import { Link } from "react-router-dom";
const operationsList: React.FC = () => {
    return (
        <div className="OperationContainer">
            <div className='newOperationSection'>
                <div className='btnNewOperation'>
                    <Link to={'/Operaciones/FlightRequest'}>
                        <AiFillEdit className='new_icon' />
                    </Link>
                    
                </div>
                <div className='ActiveOperations'>
                    <h1>
                        10
                    </h1>
                </div>

            </div>
            <table className="operations-table">
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>----</th>
                </tr>
                <tr className="operation_register">
                    <td>Operación Aurora</td>
                    <td>Esta es la operación 1</td>
                    <td>En Curso</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='green'></FaSuitcase>
                        </a>
                    </td>
                </tr>
                <tr className="operation_register">
                    <td>Operación Nebulosa</td>
                    <td>Esta es la operación 2</td>
                    <td>Acabada</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='black'></FaSuitcase>
                        </a>
                    </td>
                </tr>
                <tr className="operation_register">
                    <td>Operación Centauro</td>
                    <td>Esta es la operación 3</td>
                    <td>En Curso</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='green'></FaSuitcase>
                        </a>
                    </td>
                </tr>
                <tr className="operation_register">
                    <td>Operación Pegaso</td>
                    <td>Esta es la operación 4</td>
                    <td>Acabada</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='black'></FaSuitcase>
                        </a>
                    </td>
                </tr>
                <tr className="operation_register">
                    <td>Operación Fénix</td>
                    <td>Esta es la operación 5</td>
                    <td>En Curso</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='green'></FaSuitcase>
                        </a>
                    </td>
                </tr>
                <tr className="operation_register">
                    <td>Operación Quasar</td>
                    <td>Esta es la operación 6</td>
                    <td>Acabada</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='black'></FaSuitcase>
                        </a>
                    </td>
                </tr>
                <tr className="operation_register">
                    <td>Operación Horizonte</td>
                    <td>Esta es la operación 7</td>
                    <td>En Curso</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='green'></FaSuitcase>
                        </a>
                    </td>
                </tr>
                <tr className="operation_register">
                    <td>Operación Estelar</td>
                    <td>Esta es la operación 8</td>
                    <td>Acabada</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='black'></FaSuitcase>
                        </a>
                    </td>
                </tr>
                <tr className="operation_register">
                    <td>Operación Titán</td>
                    <td>Esta es la operación 9</td>
                    <td>En Curso</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='green'></FaSuitcase>
                        </a>
                    </td>
                </tr>
                <tr className="operation_register">
                    <td>Operación Galáctica</td>
                    <td>Esta es la operación 10</td>
                    <td>Acabada</td>
                    <td>
                        <a href="#">
                            <FaSuitcase color='black'></FaSuitcase>
                        </a>
                    </td>
                </tr>

            </table>
            
        </div>
    );
}
export default function operationsListView() {
    return(
         <OperationsLayout childComponent={operationsList} message='Operaciones De Vuelo'></OperationsLayout>
    )
}