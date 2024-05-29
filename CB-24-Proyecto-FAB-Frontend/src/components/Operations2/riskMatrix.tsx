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
                                <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="HorasVueloSistema" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> &gt; 100 horas</p>
                                        </div>
                                </label>
                                <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="HorasVueloSistema" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> &lt; 100 horas</p>
                                        </div>
                                </label>
                                <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="HorasVueloSistema" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> &lt; 50 horas</p>
                                        </div>
                                </label>
                                    {/* <button className='btn btn-dark-blue option-buttom' >&gt; 100 horas</button>
                                    <button className='btn btn-dark-blue option-buttom' >&lt; 100 horas</button>
                                    <button className='btn btn-dark-blue option-buttom' >&lt; 50 horas</button> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className='text-dark subtitle-option'>Horas de vuelo totales</span>
                                <div className='flex buttom-container'>
                                    <label className="form-check-label col-xl-4 studyLabel">
                                            <input type="radio" name="HorasVueloTotales" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                            <div className="ratio-title btnsCategories btnStudy btnSmall">
                                                <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                <p> &gt; 1000</p>
                                            </div>
                                    </label>
                                    <label className="form-check-label col-xl-4 studyLabel">
                                            <input type="radio" name="HorasVueloTotales" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                            <div className="ratio-title btnsCategories btnStudy btnSmall">
                                                <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                <p> &gt; 750</p>
                                            </div>
                                    </label>
                                    <label className="form-check-label col-xl-4 studyLabel">
                                            <input type="radio" name="HorasVueloTotales" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                            <div className="ratio-title btnsCategories btnStudy btnSmall">
                                                <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                <p> &gt; 500</p>
                                            </div>
                                    </label>
                                    <label className="form-check-label col-xl-4 studyLabel">
                                            <input type="radio" name="HorasVueloTotales" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                            <div className="ratio-title btnsCategories btnStudy btnSmall">
                                                <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                <p> &lt; 500</p>
                                            </div>
                                    </label>





                                    {/* <button className='btn btn-dark-blue option-buttom' >&gt; 1000</button>
                                    <button className='btn btn-dark-blue option-buttom' >&gt; 750</button>
                                    <button className='btn btn-dark-blue option-buttom' >&gt; 500</button>
                                    <button className='btn btn-dark-blue option-buttom' >&lt; 500</button> */}
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
                                            <label className="form-check-label col-xl-4 studyLabel">
                                                <input type="radio" name="HorasVueloSistemaAC" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                                <div className="ratio-title btnsCategories btnStudy btnSmall">
                                                    <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                    <p> &gt; 100 horas</p>
                                                </div>
                                            </label>
                                            <label className="form-check-label col-xl-4 studyLabel">
                                                <input type="radio" name="HorasVueloSistemaAC" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                                <div className="ratio-title btnsCategories btnStudy btnSmall">
                                                    <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                    <p> &lt; 100 horas</p>
                                                </div>
                                            </label>
                                            {/* <button className='btn btn-dark-blue option-buttom' >&gt; 100 horas</button>
                                            <button className='btn btn-dark-blue option-buttom' >&lt; 100 horas</button> */}
                                            
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='text-dark subtitle-option'>Horas de vuelo totales</span>
                                        <div className='flex buttom-container'>
                                            <label className="form-check-label col-xl-4 studyLabel">
                                                <input type="radio" name="HorasVueloTripulacion" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                                <div className="ratio-title btnsCategories btnStudy btnSmaller">
                                                    <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                    <p> &gt; 1000</p>
                                                </div>
                                            </label>
                                            <label className="form-check-label col-xl-4 studyLabel">
                                                <input type="radio" name="HorasVueloTripulacion" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                                <div className="ratio-title btnsCategories btnStudy btnSmaller">
                                                    <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                    <p> &gt; 750</p>
                                                </div>
                                            </label>
                                            <label className="form-check-label col-xl-4 studyLabel">
                                                <input type="radio" name="HorasVueloTripulacion" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                                <div className="ratio-title btnsCategories btnStudy btnSmaller">
                                                    <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                    <p> &gt; 500</p>
                                                </div>
                                            </label>
                                            {/* <button className='btn btn-dark-blue option-buttom' >&gt; 1000</button>
                                            <button className='btn btn-dark-blue option-buttom' >&gt; 750</button>
                                            <button className='btn btn-dark-blue option-buttom' >&gt; 500</button> */}
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
                                    <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="category" className="form-check-input inputStudy" id="inputStudy" value="Study"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> Modificacion De Ruta</p>
                                        </div>
                                    </label>
                                    <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="category" className="form-check-input inputStudy" id="inputStudy" value="Study"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> Implicita</p>
                                        </div>
                                    </label>
                                    <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="category" className="form-check-input inputStudy" id="inputStudy" value="Study"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p>Especifica</p>
                                        </div>
                                    </label>
                                    {/* <button className='btn btn-dark-blue option-buttom' >implicita</button>
                                    <button className='btn btn-dark-blue option-buttom' >Especifica</button> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className='text-dark subtitle-option'>Tiempo</span>
                                <div className='flex buttom-container'>
                                    <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="Tiempo" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> Optima(&gt;18hrs)</p>
                                        </div>
                                    </label>
                                    <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="Tiempo" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> Adecuada(6-18hrs)</p>
                                        </div>
                                    </label>
                                    <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="Tiempo" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> Mínima(&lt;6hrs)</p>
                                        </div>
                                    </label>
                                    {/* <button className='btn btn-dark-blue option-buttom' >Optima(&gt;18hrs)</button>
                                    <button className='btn btn-dark-blue option-buttom' >Adecuada(6-18hrs)</button>
                                    <button className='btn btn-dark-blue option-buttom' >Mínima(&lt;6hrs)</button> */}
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
                            
                                <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="AnguloLuna" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> &gt;30</p>
                                        </div>
                                </label>
                                <label className="form-check-label col-xl-4 studyLabel">
                                        <input type="radio" name="AnguloLuna" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                        <div className="ratio-title btnsCategories btnStudy">
                                            <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                            <p> &lt;30</p>
                                        </div>
                                </label>

                                {/* <button className='btn btn-dark-blue option-buttom' >&gt;30</button>
                                <button className='btn btn-dark-blue option-buttom' >&lt;30</button> */}
                            </div>
                            <span className='text-dark title-option'>Porcentaje de iluminacion :</span>
                            <div className='flex form-group moon-angle-container'>
                                <label className="form-check-label col-xl-4 studyLabel">
                                                <input type="radio" name="HorasVueloTripulacion" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                                <div className="ratio-title btnsCategories btnStudy btnSmaller">
                                                    <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                    <p> 100 - 75</p>
                                                </div>
                                </label>
                                <label className="form-check-label col-xl-4 studyLabel">
                                                <input type="radio" name="HorasVueloTripulacion" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                                <div className="ratio-title btnsCategories btnStudy btnSmaller">
                                                    <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                    <p> 75 - 50</p>
                                                </div>
                                </label>
                                <label className="form-check-label col-xl-4 studyLabel">
                                                <input type="radio" name="HorasVueloTripulacion" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                                <div className="ratio-title btnsCategories btnStudy btnSmaller">
                                                    <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                    <p> 49 - 24</p>
                                                </div>
                                </label>
                                <label className="form-check-label col-xl-4 studyLabel">
                                                <input type="radio" name="HorasVueloTripulacion" className="form-check-input inputStudy" id="inputStudy" value="Tiempo"></input>
                                                <div className="ratio-title btnsCategories btnStudy btnSmaller">
                                                    <img className="studyIcon" src="assets/icons8-book-reading-96.png" alt=""></img>
                                                    <p> &lt;23</p>
                                                </div>
                                </label>

                                {/* <button className='btn btn-dark-blue option-buttom' >100 - 75</button>
                                <button className='btn btn-dark-blue option-buttom' >75 - 50</button>
                                <button className='btn btn-dark-blue option-buttom' >49 - 24</button>
                                <button className='btn btn-dark-blue option-buttom' >&lt;23</button> */}
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
