import './maintenance-ordersList.css'
//import { FaUser } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
//import FABImg from '/FAB.png'

function MaintenanceOrdersList() {
  return (
    <div className="maintenance-orderslist-container">
      <div className="maintenance-orderslist-header">
      <IoMdArrowRoundBack/>
        <h1>Lista de Órdenes de Trabajo</h1>
      </div>
      <div className="maintenance-orderslist-table-container">
        <table>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Inspector Designado</th>
              <th>Tareas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC123</td>
              <td>Mantenimiento</td>
              <td>Revisión de sistema de frenos</td>
              <td>2024-04-22</td>
              <td>Juan Pérez</td>
              <td>
                <div>
                  <button>...</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>XYZ456</td>
              <td>Reparación</td>
              <td>Arreglar motor con fallo de encendido</td>
              <td>2024-04-23</td>
              <td>María Gómez</td>
              <td>
                <div>
                  <button>...</button>
                </div>
              </td>
            </tr>
            <tr>
                <td>DEF789</td>
                <td>Inspección</td>
                <td>Verificación de luces y señales</td>
                <td>2024-04-24</td>
                <td>Luis Martínez</td>
                <td>
                    <div>
                        <button>...</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>GHI012</td>
                <td>Reparación</td>
                <td>Reemplazo de neumáticos</td>
                <td>2024-04-25</td>
                <td>Ana Rodríguez</td>
                <td>
                    <div>
                        <button>...</button>
                    </div>
                </td>
            </tr>

          </tbody>
        </table>
      </div>
      <br></br>
    </div>
  )
}

export default MaintenanceOrdersList
