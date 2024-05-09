import './aircraftRequirements.css';
import '../main-menu/main-menu.css';
import '../../index.css';
import './OperationsView.css';
import OperationsLayout from './OperationsLayout';
import { FaSuitcase } from "react-icons/fa";

const operationsList: React.FC = () => {
    return (
        <div className="OperationContainer">
            <div className='newOperationSection'>
                <div className='btnNewOperation'>
                    <a href="">
                        <h1 className='plus'>
                            +
                        </h1>
                        <h4>
                            Nueva Operacion
                        </h4>
                    </a>
                </div>
                <div className='ActiveOperations'>
                    <h1>
                        2
                    </h1>
                    <h4>
                        Operaciones Activas
                    </h4>
                </div>

            </div>
            <table className="operations-table">
                <tr>
                    <th>NOMBRE</th>
                    <th>DESCRIPCION</th>
                    <th>ESTADO</th>
                    <th>----</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Esta es la operacion 1</td>
                    <td>En Curso</td>
                    <td><a href="">
                        <FaSuitcase color='black'>

                        </FaSuitcase>
                        </a></td>
                </tr>
                <tr>
                    <td>Moctezuma Mamani</td>
                    <td>Esta es la operacion 2</td>
                    <td>En Curso</td>
                    <td><a href="">
                        <FaSuitcase color='black'>

                        </FaSuitcase>
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