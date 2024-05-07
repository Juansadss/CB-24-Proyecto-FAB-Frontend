import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./flightRequest_view.css";


export default function RequestRegister() {
    const [airgroup, setAirGroup] = useState("");
    const [date, setDate] = useState("");
    const [Type, setType] = useState("");
    const [airplaneType, setAirplaneType] = useState("");
    const [tuition, setTuition] = useState("");
    const [origin, setOrigin] = useState("");
    const [destiny, setDestiny] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const goTo = useNavigate();

    const handleCheckboxChange = (event: { target: { checked: any; }; }) => {
        setIsCheckboxChecked(event.target.checked);
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        goTo("/flightRequest");
    }
    
    return <>
        {/* { <div className="login-container">
            <div className="login-card">
                <h2>Bienvenido de nuevo</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" name="user" id="user" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type={isCheckboxChecked? "text" : "password"} className="form-control" name="password" id="password" placeholder="Contaseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input className="checkbox" type="checkbox" id="showPassword" checked={isCheckboxChecked} onChange={handleCheckboxChange}/> Mostrar contaseña
                    <button className="btn btn-blue"> iniciar sesion </button>                 
                </form>     
            </div>            
        </div> */


        <div className="main_fr">
            <div className="side-menu-section">
                <div>
                    <img src="../../assets/planeicon.png" alt="" />
                    <h1>Fuerza Aerea</h1>
                </div>
                <div className="sideMenu">
                    <div>
                        <img src="./src/assets/profile.png" alt="" />
                        <h5>Perfil</h5>
                    </div>
                    <div>
                        <img src="./src/assets/solicitud.png" alt="" />
                        <h5>Solicitudes De Vuelos</h5>
                    </div>
                    <div>
                        <img src="./src/assets/riesgo.png" alt="" />
                        <h5>Matrices De Riesgo</h5>
                    </div>
                    <div>
                        <img src="./src/assets/./src/assets/riesgo.png" alt="" />
                        <h5>Tablas De Riesgo</h5>
                    </div>
                    <div>
                        <img src="./src/assets/piloto.png" alt="" />
                        <h5>Pilotos</h5>
                    </div>
                    <div>
                        <img src="./src/assets/logout.png" alt="" />
                        <h5>Cerrar Sesion</h5>
                    </div>

                </div>

            </div>

            <div className="Form-section">
                <div className="form">
                    <div className="form-header">
                        <h2>Solicitud De Vuelo</h2>
                        <hr></hr>
                        <h4>Registrar Solicitud</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group large-input">
                            <label htmlFor="">Unidad/grupo aereo</label>
                            <input type="text" className="form-control" name="user" id="user" placeholder="" value={airgroup} onChange={(e) => setAirGroup(e.target.value)}/>  
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Seleccionar Fecha</label>
                            <input type="date" className="form-control" name="user" id="user" placeholder="" value={date} onChange={(e) => setDate(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Tipo</label>
                            <select className="form-control" name="password" id="password">
                                <option value="value1">Value 1</option>
                                <option value="value2" selected>Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Tipo De Nave</label>
                            <input type="text" className="form-control" name="user" id="user" placeholder="" value={airplaneType} onChange={(e) => setAirplaneType(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Matricula</label>
                            <input type={isCheckboxChecked? "text" : "password"} className="form-control" name="password" id="password" placeholder="" value={tuition} onChange={(e) => setTuition(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Origen</label>
                            <input type="text" className="form-control" name="user" id="user" placeholder="" value={username} onChange={(e) => setOrigin(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Destino</label>
                            <input type={isCheckboxChecked? "text" : "password"} className="form-control" name="password" id="password" placeholder="" value={password} onChange={(e) => setDestiny(e.target.value)}/>
                        </div>
                        <div className="flightPlan">
                            <h2>Plan De Vuelo</h2>
                            <hr></hr>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Hora Despegue</label>
                            <input type="time" className="form-control" name="password" id="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Hora Aterrizaje</label>
                            <input type="time" className="form-control" name="user" id="user" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Comentarios</label>
                            <textarea className="form-control coment" name="user" id="user" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <button className="btnRiskMatrix">
                            Calcular Matriz De Riesgo
                        </button>
                        <button className="addParameter">
                            +
                        </button>
                        <table className="matrix-table">
                            <tr>
                                <th>ORIGEN</th>
                                <th>ETD</th>
                                <th>DESTINO</th>
                                <th>ETA</th>
                                <th>Riesgo Operacional</th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                            </tr>
                        </table>
                        <h3 className="total">Total:</h3>
                        <div className="Tripulation">
                            <h2>Tripulacion</h2>
                            <hr></hr>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Periodo</label>
                            <select className="form-control" name="password" id="password">
                                <option value="value1">Value 1</option>
                                <option value="value2" selected>Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Tripulacion alterna</label>
                            <input type={isCheckboxChecked? "text" : "password"} className="form-control" name="password" id="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Tripulante</label>
                            <select className="form-control" name="password" id="password">
                                <option value="value1">Value 1</option>
                                <option value="value2" selected>Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Funcion</label>
                            <select className="form-control" name="password" id="password">
                                <option value="value1">Value 1</option>
                                <option value="value2" selected>Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </div>

                        <table className="tripulation-table">
                            <tr>
                                <th>FUNCION</th>
                                <th>GRADO,NOMBRES Y APELLIDOS</th>
                                <th>ULTIMOS 30 DIAS</th>
                                <th>ANUAL</th>
                                <th>TOTAL</th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                            </tr>
                        </table>
                        <button className="btn btn-blue"> Registrar </button> 
                        
                        
                        
                        {/* <input className="checkbox" type="checkbox" id="showPassword" checked={isCheckboxChecked} onChange={handleCheckboxChange}/> Mostrar contaseña */}

                </form>
                </div>
                <div className="airplane-selection-section">
                    <h3>
                        Informacion De Avion
                    </h3>
                    <img src="./src/assets/PlaneImg.png" alt="" />
                    <h1>F11</h1>
                    <h3>205-6KK</h3>
                    <hr />
                    <div>
                        <ul>
                            <li>Destino: Chimore</li>
                            <li>Origen: Samaipata</li>
                            <li>Peso Disponible: 80kg</li>
                        </ul>
                        <button>Seleccionar Avion</button>
                    </div>
                </div>

            </div>

        </div>
        
        
        
        }
    </>
}