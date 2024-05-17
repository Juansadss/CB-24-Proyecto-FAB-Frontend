import "./create_operations.css";
import LayoutSar from "../layout-sar/layout-sar";
export default function CreateOperations() {
    return (
        <LayoutSar>
            <section className="create_operations_header">
                <button className="create_operations_btnReturn">&lt;</button>
                <h2 className="create_operations_header_h2">OPERACIONES</h2>
                <span className="create_operations_barra">&gt;</span>
                <h3 className="create_operations_header_h3"> crear operativo</h3>
            </section>
            <section className="create_operations_body">
                <div className="create_operations_Info_FileOne">
                    <label >Tipo Operativo:</label>
                    <select id="tipoOperativo" name="tipoOperativo">
                        <option value="rescate">Rescate</option>
                        <option value="salvarVidas">Salvar Vidas</option>
                    </select>
                    <label >Fecha Operativo:</label>
                    <input type="date" id="fechaOperativo" name="fechaOperativo" />

                </div>


                <div>
                    <h2>LUGAR DE EVENTO</h2>
                    <div className="create_operations_Info_FileOne">
                        <label >Departamento:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Cochabamba">Cochabamba</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                        </select>
                        <label >Provincia:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Quillacollo">Quillacollo</option>
                            <option value="Tiquipaya">Tiquipaya</option>
                        </select>
                    </div>
                    <div className="create_operations_Info_FileOne">
                        <label >Municipio:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Tiquipaya">Tiquipaya</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                        </select>
                        <label >Dirección:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Calle Caracol">Calle Caracol</option>
                            <option value="Tiquipaya">Tiquipaya</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h2>PLAN OPERATIVO</h2>
                    <div className="create_operations_Info_FileOne">
                        <label >Tipo Vehiculo:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Cochabamba">Cochabamba</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                        </select>
                        <label >Propietario:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Quillacollo">Quillacollo</option>
                            <option value="Tiquipaya">Tiquipaya</option>
                        </select>
                    </div>
                    <div className="create_operations_Info_FileOne">
                        <label >Matricula:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Tiquipaya">Tiquipaya</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                        </select>
                        <label >Conductor:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Calle Caracol">Calle Caracol</option>
                            <option value="Tiquipaya">Tiquipaya</option>
                        </select>
                    </div>
                    <div className="create_operations_Info_FileOne">
                        <label className="create_operations_label">Número de licencia:</label>
                        <input type="text" id="numeroLicencia" name="numeroLicencia" />
                    </div>
                    <div className="create_operations_Info_FileOne">
                        <label >Salida Estimada:</label>
                        <input type="date" id="fechaSalida" name="fechaSalida" />
                        <input type="time" id="horaSalida" name="horaSalida" />
                    </div>
                    <div className="create_operations_Info_FileOne">
                        <label >Llegada Estimada:</label>
                        <input type="date" id="fechaSalida" name="fechaSalida" />
                        <input type="time" id="horaSalida" name="horaSalida" />
                    </div>
                </div>
                <div>
                    <h2>DATOS DEL SOLICITANTE</h2>
                    <div className="create_operations_Info_FileOne_center">
                        <label >Institucion:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Cochabamba">Alcaldia</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                        </select>
                    </div>
                    <div className="create_operations_Info_FileOne_center">
                        <label >Atención:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Cochabamba">Cochabamba</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                        </select>
                    </div>
                    <div className="create_operations_Info_FileOne_center">
                        <label >Intercambio:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Cochabamba">Cochabamba</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                        </select>
                    </div>

                </div>
                <div>
                    <h2>RESCATISTAS O/Y VOLUNTARIOS</h2>
                    <div className="create_operations_Info_FileOne_center">
                        <label className="centerlabel" >Personal:</label>
                        <select id="tipoOperativo" name="tipoOperativo">
                            <option value="Cochabamba"></option>
                            <option value="Santa Cruz"></option>
                        </select>
                        <button className="create_operations_listbtnAgregar">+</button>
                    </div>


                </div>
                <div className="create_operations_Info_FileOne_center">
                    <table className="operations_table">
                        <thead>
                            <tr>
                                <th>Grado</th>
                                <th>Nombre Completo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Capitán</td>
                                <td>Juan Pérez</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Teniente</td>
                                <td>Maria García</td>
                                <td></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className="create_operations_Info_FileOne_center">
                    <button className="create_operations_btnRegistrar btn-blue"> Registrar </button>
                </div>

            </section>



        </LayoutSar>

    )
}