import './maintenance-aircraft.css'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";

function MaintenanceAircraft() {
  return (
    <div className="maintenance-aircraft-container">
      <div className="maintenance-aircraft-header">
      <Link to={"/menu-principal/mantenimiento"} className="back-link">
          <GoArrowLeft color='black' size={30} />
          <h2>MANTENIMIENTO-Aeronaves</h2>
      </Link>
      </div>
      <Link to={"/"}>
          <CiSquarePlus color="#171A4A" size={40}/>
      </Link>
        <table>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Modelo</th>
              <th>Horas de Vuelo</th>
              <th>Margen</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC-5050</td>
              <td>XXXXXX</td>
              <td>9000h 30m</td>
              <td>100h</td>
              <td>P</td>
              <td>
                <div>
                  <button>...</button>
                </div>
              </td>
            </tr>
            <tr>
            <td>ABC-5151</td>
              <td>XXXXXX</td>
              <td>500h</td>
              <td>50h</td>
              <td>W</td>
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

export default MaintenanceAircraft
