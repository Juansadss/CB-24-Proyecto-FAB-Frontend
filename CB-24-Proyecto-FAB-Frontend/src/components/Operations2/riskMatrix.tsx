import './riskMatrix.css';
import '../main-menu/main-menu.css';
import '../../index.css';
import OperationsLayout from './OperationsLayout';
import { Link } from "react-router-dom";
import React from 'react';
interface OptionProps {
    title: string;
}
interface Risk {
    risk_Result: number;
    color_class: string;
    message: string;
}
const Option: React.FC<OptionProps> = ({title}) => {
    return (
        <div className='options-container'>
                    <span className='text-dark title-option'>{title}</span>
                    <div className='options-subcontainer'>
                        <div>
                            <div>
                                <span className='text-dark subtitle-option'>Horas de vuelo en sistema</span>
                                <div className='flex buttom-container'>
                                    <button className='btn btn-dark-blue option-buttom' >&gt; 100 horas</button>
                                    <button className='btn btn-dark-blue option-buttom' >&lt; 100 horas</button>
                                    <button className='btn btn-dark-blue option-buttom' >&lt; 50 horas</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className='text-dark subtitle-option'>Horas de vuelo totales</span>
                                <div className='flex buttom-container'>
                                    <button className='btn btn-dark-blue option-buttom' >&gt; 1000</button>
                                    <button className='btn btn-dark-blue option-buttom' >&gt; 750</button>
                                    <button className='btn btn-dark-blue option-buttom' >&gt; 500</button>
                                    <button className='btn btn-dark-blue option-buttom' >&lt; 500</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
const OptionRest: React.FC<OptionProps> = ({title}) => {
    return (
        <div className='option-rest-container'>
            <span className='text-dark subtitle-option'>{title}</span>
                            <div className=''>
                                <div>
                                    <div>
                                        <span className='text-dark subtitle-option'>Horas de vuelo en sistema</span>
                                        <div className='flex buttom-container'>
                                            <button className='btn btn-dark-blue option-buttom' >&gt; 100 horas</button>
                                            <button className='btn btn-dark-blue option-buttom' >&lt; 100 horas</button>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='text-dark subtitle-option'>Horas de vuelo totales</span>
                                        <div className='flex buttom-container'>
                                            <button className='btn btn-dark-blue option-buttom' >&gt; 1000</button>
                                            <button className='btn btn-dark-blue option-buttom' >&gt; 750</button>
                                            <button className='btn btn-dark-blue option-buttom' >&gt; 500</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    );
}
const ResultAlert: React.FC<Risk> = ({ risk_Result, color_class,message}) => {
    return (
        <div className={color_class}>
            <span className='risk-result'>{risk_Result}</span>
            <span className='risk-result'>{message}</span>
        </div>
    );
}
const form: React.FC = () => {
    return (
        <div className="aircraft-from-container">
            
            <form action="" method="post">
                <div className='form-container-matrix'>
                    <div className='side-form'>
                        <div className='form-group'><b><span className='text-dark'>Tipo de aeronave</span></b><select name="aircraftType" id="aircraftType"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Tipo de mision</span></b><select name="misionType" id="misionType"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Altitud</span></b><select name="altitude" id="altitude"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Situacion hostil</span></b><select name="hostilSituation" id="hostilSituation"></select></div>
                    </div>
                    <div className='side-form'>
                        <div className='form-group'><b><span className='text-dark'>Condiciones</span></b><select name="conditions" id="conditions"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Factores Geograficos</span></b><select name="geographicalFactors" id="geographicalFactors"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Meteorologia</span></b><select name="meteorology" id="meteorology"></select></div>
                        <div className='form-group'><b><span className='text-dark'>Pro Eficiencia</span></b><select name="efficiency" id="efficiency"></select></div>
                    </div>
                    
                </div>
                <div className='options-container'>
                    <span className='text-dark title-option'>Planeamiento</span>
                    <div className='options-subcontainer'>
                        <div>
                            <div>
                                <span className='text-dark subtitle-option'>Informacion</span>
                                <div className='flex buttom-container'>
                                    <button className='btn btn-dark-blue option-buttom' >Modificacion de ruta</button>
                                    <button className='btn btn-dark-blue option-buttom' >implicita</button>
                                    <button className='btn btn-dark-blue option-buttom' >Especifica</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className='text-dark subtitle-option'>Tiempo</span>
                                <div className='flex buttom-container'>
                                    <button className='btn btn-dark-blue option-buttom' >Optima(&gt;18hrs)</button>
                                    <button className='btn btn-dark-blue option-buttom' >Adecuada(6-18hrs)</button>
                                    <button className='btn btn-dark-blue option-buttom' >Mínima(&lt;6hrs)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Option title='AC'></Option>
                <Option title='CA'></Option>
                <Option title='TEC'></Option>
                <div className='options-container'>
                    <span className='text-dark title-option'>Descanso tripulacion(AC/CA/TEC)</span>
                    <div className='flex options-subcontainer'>
                        <div>
                            <OptionRest title='AC'></OptionRest>
                            <OptionRest title='TEC'></OptionRest>
                        </div>
                        <div>
                            <hr className='vertical-line' />
                        </div>
                        <div>
                        <OptionRest title='CA'></OptionRest>
                        </div>
                    </div>
                </div>
                <div className='options-container'>
                    <div className='options-subcontainer'>
                        <span className='text-dark title-option'>Consideraciones NVG/Noche</span>
                        <hr />
                        <div className='flex nvg-container'>
                            <div className='form-group op-nvg'><b><span className='text-dark'>AC NVG/Noche</span></b><select name="ACNvgNight" id="conditions"></select></div>
                            <div className='form-group op-nvg'><b><span className='text-dark'>CA NVG/Noche</span></b><select name="CANvgNight" id="conditions"></select></div>
                            <div className='form-group op-nvg'><b><span className='text-dark'>TEC. NVG/Noche</span></b><select name="TECNvgNight" id="conditions"></select></div>
                        </div>
                        <div className='moon-op-container'>
                            <span className='text-dark title-option'>Angulo de la luna :</span>
                            <div className='flex form-group moon-angle-container'>
                                <button className='btn btn-dark-blue option-buttom' >&gt;30</button>
                                <button className='btn btn-dark-blue option-buttom' >&lt;30</button>
                            </div>
                            <span className='text-dark title-option'>Porcentaje de iluminacion :</span>
                            <div className='flex form-group moon-angle-container'>
                                <button className='btn btn-dark-blue option-buttom' >100 - 75</button>
                                <button className='btn btn-dark-blue option-buttom' >75 - 50</button>
                                <button className='btn btn-dark-blue option-buttom' >49 - 24</button>
                                <button className='btn btn-dark-blue option-buttom' >&lt;23</button>
                            </div>
                        </div>   
                    </div>
                    
                </div>
                <div className='risk-result-container'>
                    <h1 className='ResultTitle'>Resultado</h1>
                    <ResultAlert color_class='medium-risk-alert' message='Riesgo medio' risk_Result={25}></ResultAlert>
                </div>
                    <Link to={'/Operaciones/performance'} className='mr-link'>
                        <button className='btn btn-dark-blue btn-submit-requeriments' type='submit'>Registar Matriz de riesgo</button>
                    </Link>
            </form>
            
        </div>
    );
}
export default function RiskMatrixForm() {
    return(
         <OperationsLayout childComponent={form} message='Matriz de riesgo'></OperationsLayout>
    )
}
