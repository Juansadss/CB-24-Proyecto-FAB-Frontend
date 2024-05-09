import './Performance.css';
import '../main-menu/main-menu.css';
import '../../index.css';
import FAB from '../../../public/FAB.png';
import { LuUpload } from 'react-icons/lu';
import OperationsLayout from './OperationsLayout';
import performanceImage from './Images/performance.jpg';

const performance: React.FC = () => {
    return (
        <div className='performance-container'>
            <form action="" method="post">
                <div className='flex main-container'>
                    <div className='left-side-from'>
                                <div className='aircraft-select form-group'>
                                    <span>Aeronave</span>
                                    <select>
                                        
                                    </select>
                                </div>
                                <div className='performance-img-upload'>
                                    <img src={performanceImage} alt="" />
                                    <button className='btn btn-dark-blue'><LuUpload></LuUpload></button>
                                </div>
                                <div className='details'>
                                    <div className='details-input flex'>
                                        <div className='form-group'>
                                            <span>Temperatura</span>
                                            <input type="number" name="temperature" id="temperature" />
                                        </div>
                                        <div className='form-group'>
                                            <span>Altitud</span>
                                            <input type="number" name="altitude" id="altitude" />
                                        </div>
                                    </div>
                                    <div className='details-weight'>
                                        <span className='text-dark'><b>Peso Total : </b>000KG</span>
                                        <span className='text-dark'><b>HOGE : </b>0000KG</span>
                                        <span className='text-dark'><b>Peso Disponible : </b> 0000KG</span>
                                    </div>

                                </div>
                    </div>
                    <div className='right-side-from'>
                                <div className='flex tripulation-check'>
                                    <span>Tripulacion alterna</span>
                                    <input type="checkbox" name="alternateTripulation" id="alternateTripulation" />
                                </div>
                                <div className='form-container'>
                                    <span className='text-dark'>
                                        <b>PESO KG</b>
                                    </span>
                                    <div className='form-inputs-performance from-group'>
                                        <div className='form-group'>
                                            <span className='text-dark'><b>Aeronave</b></span>
                                            <input type="number" name="aircraft" id="aircraft" placeholder='Kg' />
                                        </div>    
                                        <div className='form-group'>
                                            <span className='text-dark'><b>Piloto/Copiloto</b></span>
                                            <input type="number" name="pilotCopilot" id="pilotCopilot" placeholder='Kg' />
                                        </div>  
                                        <div className='form-group'>
                                            <span className='text-dark'><b>Tripulante Extra</b></span>
                                            <input type="number" name="extraCrew" id="extraCrew" placeholder='Kg' />
                                        </div>  
                                        <div className='form-group'>
                                            <span className='text-dark'><b>Tecnico</b></span>
                                            <input type="number" name="technical" id="technical" placeholder='Kg' />
                                        </div>  
                                        <div className='form-group'>
                                            <span className='text-dark'><b>Pasajeros</b></span>
                                            <input type="number" name="passangers" id="passangers" placeholder='Kg' />
                                        </div>  
                                        <div className='form-group'>
                                            <span className='text-dark'><b>Combustible</b></span>
                                            <input type="number" name="aircraftFuel" id="aircraftFuel" placeholder='Kg' />
                                        </div>  
                                        <div className='form-group'>
                                            <span className='text-dark'><b>Suministros</b></span>
                                            <input type="number" name="supplys" id="supplys" placeholder='Kg' />
                                        </div>  
                                        <div className='form-group'>
                                            <span className='text-dark'><b>Equipaje</b></span>
                                            <input type="number" name="luggage" id="luggage" placeholder='Kg' />
                                        </div>  
                                    </div>
                                </div>
                    </div>
                </div>
                <div className='footer'>
                    <button className='btn btn-dark-blue btn-submit-performance' type='submit'>Registar calculo</button>
                    <hr />
                    <div className='container-img-footer'>
                        <img className='fabLogo' src={FAB} alt="" />
                    </div>
                </div>
            </form>
        </div>
    );
}
export default function PerformanceForm() {
    return(
        <OperationsLayout childComponent={performance} message='Tabla de performance'></OperationsLayout>
    )
};