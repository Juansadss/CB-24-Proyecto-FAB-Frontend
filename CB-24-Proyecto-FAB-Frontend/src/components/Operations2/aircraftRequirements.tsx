import './aircraftRequirements.css';
import '../main-menu/main-menu.css';
import '../../index.css';
import OperationsLayout from './OperationsLayout';
import { Link } from "react-router-dom";
const requirementsForm: React.FC = () => {
    return (
        <div className="aircraft-from-container">
            <form action="" method="post">
                <div className='form-container-requirements'>
                    <div className='side-form'>
                        <div className='form-group'><b><span className='text-dark'>Matrícula</span></b><input type="text" id='aircraftTuition' name='aircraftTuition' /></div>
                        <div className='form-group'><b><span className='text-dark'>Fecha de Vuelo</span></b><input type="datetime-local" id='flightDate' name='flightDate' /></div>
                        <div className='form-group'><b><span className='text-dark'>Hora en plataforma</span></b><input type="time" id='timeInPlatform' name='timeInPlatform'/></div>
                        <div className='form-group'><b><span className='text-dark'>Hora despegue</span></b><input type="time" id='timeOfTakeOff' name='timeOfTakeOff' /></div>
                        <div className='form-group'><b><span className='text-dark'>Técnicos Asginados</span></b> <select name="technicals" id="technicals"></select></div>
                    </div>
                    <div className='side-form'>
                    <div className='form-group'><b><span className='text-dark'>Tipo de misión</span></b><select name="missionType" id="missionType"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Horas requeridas</span></b><input placeholder='Horas' type="number" id='hoursRequire' name='hoursRequire' /></div>
                        <div className='form-group'><b><span className='text-dark'>Cantidad de combustible (KG)</span></b><input placeholder='Kg' type="number" id='fuelQuantity' name='fuelQuantity'/></div>
                        <div className='form-group'><b><span className='text-dark'>Equipo de misión</span></b><select name="teamEquitment" id="teamEquitment"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Recargue de combustible (KG)</span></b> <input placeholder='Kg' type='number' name="fuelRecharge" id="fuelRecharge"></input></div>
                    </div>
                </div>
                
                
            </form>
            <Link to={'/Operaciones/OperationsView'} className='arb-link'>
                    <button className='btn btn-dark-blue btn-submit-requeriments'>Registar Requerimientos</button>
            </Link>
        </div>
    );
}
export default function AircraftRequirementsForm() {
    return(
         <OperationsLayout childComponent={requirementsForm} message='Requerimientos de aronave'></OperationsLayout>
    )
}
