import './maintenance-componentControl.css'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
//import FABImg from '/FAB.png'

function MaintenanceComponentControl() {
  return (
    <div className="maintenance-componentControl-container">
      <div className="maintenance-componentControl-header">
        <Link to={"/menu-principal/mantenimiento"} className="back-link">
            <GoArrowLeft color='black' size={30} />
            <h2>MANTENIMIENTO-Control de Componentes</h2>
        </Link>
      </div>
      <Link to={"/"}>
          <CiSquarePlus color="#171A4A" size={40}/>
      </Link>
      <div className="maintenance-componentControl-table-container">
      <table>
          <thead>
            <tr>
              <th>Componente</th>
              <th>Nro Parte</th>
              <th>Aeronave</th>
              <th>Fecha Instalación</th>
              <th>Límite</th>
              <th>Margen</th>
              <th>Req.</th>
              <th>Restante</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comp 1</td>
              <td>XXXXXXXX</td>
              <td>XXXXXXXX</td>
              <td>01-05-2024</td>
              <td>3200 FH</td>
              <td>100 FH</td>
              <td>3200 FH</td>
              <td><span className="maintenance-componentControl-res">1200</span></td>
            </tr>
            <tr>
              <td>Comp 2</td>
              <td>XXXXXXXX</td>
              <td>XXXXXXXX</td>
              <td>03-05-2024</td>
              <td>3200 FH</td>
              <td>0</td>
              <td>800 FH</td>
              <td><span className="maintenance-componentControl-res">770</span></td>
            </tr>
            <tr>
              <td>Comp 3</td>
              <td>XXXXXXXX</td>
              <td>XXXXXXXX</td>
              <td>05-05-2024</td>
              <td>72 M</td>
              <td>15 FH</td>
              <td>05-07-30</td>
              <td><span className="maintenance-componentControl-res">900</span></td>
            </tr>
          </tbody>
        </table>
      </div>
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

export default MaintenanceComponentControl