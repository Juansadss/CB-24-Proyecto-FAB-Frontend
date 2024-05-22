import './maintenance-componentControl.css'
//import { FaUser } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
//import FABImg from '/FAB.png'

function MaintenanceComponentControl() {
  return (
    <div className="maintenance-componentControl-container">
      <div className="maintenance-componentControl-header">
      <IoMdArrowRoundBack/>
        <h1>Control de Componentes</h1>
      </div>
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
                USER76234
                <button>
                    <CiMenuKebab fontSize={24} />
                </button>
      </footer>
    </div>
    
  )
}

export default MaintenanceComponentControl
