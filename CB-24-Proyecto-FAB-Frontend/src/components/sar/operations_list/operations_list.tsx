
import { useNavigate } from "react-router-dom";
import "./operations_list.css";
import LayoutSar from "../layout-sar/layout-sar";

export default function OperationsList() {

    const goTo = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        goTo("/menu");
    }

    return (
        <LayoutSar>

            <div className="operaciones_header">
                <button className="operations_btnReturn">&lt;</button>
                <h2 className="operaciones_header_h2">LISTA DE OPERACIONES</h2>
            </div>

            <div className="operations_list-container">

                <div className="operations_listtable-card">


                    <form onSubmit={handleSubmit}>
                        <div className="operations_listrow1">
                            <button className="operations_listbtnAgregar">+</button>
                            <div className="operations_listrow2">
                                <input type="text" className="operations_listform-control" placeholder="Tipo Operativo" />
                                <button type="submit" className="operations_listbtnBuscar" >Buscar</button>
                                <input type="text" className="operations_listform-control" placeholder="Buscar" />
                                <button type="submit" className="operations_listbtnBuscar" >Buscar</button>
                            </div>

                        </div>

                        <div className="operations_listtable-container">
                            <table className="operations_list_table"  >
                                <thead>
                                    <tr>
                                        <th className="operations_list_th"  >Tipo de Operativo</th>
                                        <th className="operations_list_th"  >Fecha</th>
                                        <th className="operations_list_th"  >Lugar</th>
                                        <th className="operations_list_th"  >Estado</th>
                                        <th className="operations_list_th"  >Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="operations_list_td">Operativo 1</td>
                                        <td className="operations_list_td">2024-04-27</td>
                                        <td className="operations_list_td">Ciudad A</td>
                                        <td className="operations_list_td">Pendiente</td>
                                        <button>...</button>
                                    </tr>
                                    <tr>
                                        <td className="operations_list_td">Operativo 2</td>
                                        <td className="operations_list_td">2024-04-28</td>
                                        <td className="operations_list_td">Ciudad B</td>
                                        <td className="operations_list_td">En curso</td>
                                    </tr>
                                    <tr>
                                        <td className="operations_list_td">Operativo 3</td>
                                        <td className="operations_list_td">2024-04-29</td>
                                        <td className="operations_list_td">Ciudad C</td>
                                        <td className="operations_list_td">Completado</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutSar>

    )


}