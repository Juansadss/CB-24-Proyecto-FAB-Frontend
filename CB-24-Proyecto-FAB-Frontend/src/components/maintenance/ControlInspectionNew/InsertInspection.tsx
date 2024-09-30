import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
{/*import { CiMenuKebab } from "react-icons/ci";*/}

import './Inspection.css';

export default function InsertInspection() {
    return (
        <div className="maintenance-alerts-container">
            
            <header>
                <span>
                    <Link className="back-icon" to={"/App"}>
                        <IoIosArrowBack fontSize={32} />
                    </Link>
                    MANTENIMIENTO - Insertar Inspeccion
                </span>
                
            </header>
            <main>
                <div className="form-inspection">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inspectionType">Tipo de Inspección:</label>
                            <input 
                                type="text" 
                                id="inspectionType" 
                                name="inspectionType" 
                                placeholder="Ingrese el tipo de inspección" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inspectionReference">Referencia:</label>
                            <input 
                                type="text" 
                                id="inspectionReference" 
                                name="inspectionReference" 
                                placeholder="Referencia" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inspectionFrecuence">Frecuencia:</label>
                            <input 
                                type="text" 
                                id="inspectionFrecuence" 
                                name="inspectionFrecuence" 
                                placeholder="Frecuencia" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastInspection">Ultima Inspección:</label>
                            <input 
                                type="date" 
                                id="lastInspection" 
                                name="lastInspection" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nextInspection">Proxima Inspección:</label>
                            <input 
                                type="date" 
                                id="nextInspection" 
                                name="nextInspection" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inspectionState">Estado de la Inspección:</label>
                            <select id="inspectionState" name="inspectionState" required>
                                <option value="" disabled selected>Seleccione el estado de la inspección</option>
                                <option value="routine">Programado</option>
                                <option value="special">Proximo </option>
                                <option value="emergency">Retrasado</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inspectionMargen">Margen:</label>
                            <input 
                                type="text" 
                                id="inspectionMargen" 
                                name="inspectionMargen" 
                                placeholder="margen" 
                                required 
                            />
                        </div>

                        <button type="submit" className="form-button">Guardar Inspección</button>
                    </form>
                </div>
            </main>
            <footer>
                {/*<span>
                    USER76234
                    <button>
                        <CiMenuKebab fontSize={24} />
                    </button>
                </span>*/}
                {/*<img src="/FAB.png" width={150} height={100} alt="FAB logo" />*/}
            </footer>
        </div>
    );
}
