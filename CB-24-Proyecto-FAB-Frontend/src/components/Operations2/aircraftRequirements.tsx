import './aircraftRequirements.css';
import '../main-menu/main-menu.css';
import '../../index.css';
export default function AircraftRequirementsForm() {
    return(
        <div className="aircraft-from-container">
            
            <form action="" method="post">
                <div className='form-container-requirements'>
                    <div className='side-form'>
                        <div className='form-group'><b><span className='text-dark'>Matricula</span></b><input type="text" id='aircraftTuition' name='aircraftTuition' /></div>
                        <div className='form-group'><b><span className='text-dark'>Fecha de Vuelo</span></b><input type="datetime-local" id='flightDate' name='flightDate' /></div>
                        <div className='form-group'><b><span className='text-dark'>Hora en plataforma</span></b><input type="time" id='timeInPlatform' name='timeInPlatform'/></div>
                        <div className='form-group'><b><span className='text-dark'>Hora despegue</span></b><input type="time" id='timeOfTakeOff' name='timeOfTakeOff' /></div>
                        <div className='form-group'><b><span className='text-dark'>Tecnicos Asginados</span></b> <select name="technicals" id="technicals"></select></div>
                    </div>
                    <div className='side-form'>
                    <div className='form-group'><b><span className='text-dark'>Tipo de mision</span></b><select name="missionType" id="missionType"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Horas requeridas</span></b><input placeholder='Horas' type="number" id='hoursRequire' name='hoursRequire' /></div>
                        <div className='form-group'><b><span className='text-dark'>Cantidad de combustible</span></b><input placeholder='Kg' type="number" id='fuelQuantity' name='fuelQuantity'/></div>
                        <div className='form-group'><b><span className='text-dark'>Equipo de mision</span></b><select name="teamEquitment" id="teamEquitment"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Recargue de combustible</span></b> <input placeholder='Kg' type='number' name="fuelRecharge" id="fuelRecharge"></input></div>
                    </div>
                </div>
                <button className='btn btn-dark-blue btn-submit-requeriments' type='submit'>Registar Requerimientos</button>
            </form>
            
        </div> 
    )
}
