import "./sanidad_tratamiento.css";
import LayoutSar from "../layout-sar/layout-sar";
export default function SanidadTratamiento() {
  
    return (
        <LayoutSar>
            <section className="create_operations_header">
                <button className="create_operations_btnReturn">&lt;</button>
                <h2 className="create_operations_header_h2">SANIDAD</h2>
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

                <div className="create_operations_Info_FileOne_center">
                    <table className="operations_table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Nombre paciente</th>
                                <th>Diagnostico</th>
                                <th>Tratamiento</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXX</td>
                                <td>XXXXXX</td>
                                <td>XXXXXX</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>XX/XX/XX</td>
                                <td>XXXXXX</td>
                                <td>XXXXXX</td>
                                <td>XXXXXX</td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>



        </LayoutSar>

    )
}