import './maintenance-ordersList.css'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
//import FABImg from '/FAB.png'

function MaintenanceOrdersList() {
  return (
    <div className="maintenance-orderslist-container">
      <div className="maintenance-orderslist-header">
      <Link to={"/menu-principal/mantenimiento"} className="back-link">
          <GoArrowLeft color='black' size={30} />
          <h2>MANTENIMIENTO-Lista de Ordenes de Trabajo</h2>
      </Link>
      </div>
      <Link to={"/menu-principal/mantenimiento/ordenes-trabajo/programar-orden-trabajo"}>
          <CiSquarePlus color="#171A4A" size={40}/>
      </Link>
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
      <br></br>
      <footer>
                <span>
                    USER76234
                    <button>
                        <CiMenuKebab fontSize={24} />
                    </button>
                </span>
                <img src="/FAB.png" width={150} height={100} />
            </footer>
    </div>
  )
}

export default MaintenanceOrdersList
