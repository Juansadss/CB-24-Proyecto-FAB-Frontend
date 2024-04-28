import { Link } from "react-router-dom"
import { CiCirclePlus } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import './maintenance-aircraft.css';


export default function MaintenanceAircraft() {

    return <>
        <div className="aeronave-base">
       
       <div className="aeronave-main">
        <Link to={"/menu-principal/mantenimiento"}>
            <GoArrowLeft color='black' size={30}/>
        </Link>
        <div className="aeronave-header-principal">
                   <h1>PROGRAMA DE MANTENIMIENTO</h1>
        </div>
        
          
           <div className="aeronave-container">
               <div className="aeronave-header">
                   <h1>AERONAVE</h1>
               </div>
               <div className="aeronave-content">
                   <div className="info-section">
                   <label className="label-section">Tipo:</label>
                   <select>
                       {/* Opciones del tipo */}
                   </select>
                   
                   <label className="label-section">Matricula:</label>
                   <input type="text" />
                   
                   </div>
                   
                   <div className="info-section">
                   <label><strong>Descripción:</strong></label>
                   
                   </div>
                   <div>
                       <textarea className="text-area" rows={4}></textarea>
                   </div>
                   <div className="info-section">
                   <label className="label-section2"><strong>Inspector asignado:</strong></label>
                       
                           <select className="select">
                               {/* Opciones de inspectores */}
                           </select>
                       
                   
                   <label className="label-section"><strong>Fecha:</strong></label>
                   
                       <input type="date" />
                   
                   
                   </div>
                   
                   <div className="info-section">
                       <h2 className="label-header">Tareas Asignadas</h2>
                   <label className="label-section">Tarea:</label>
                   <select className="select">
                       {/* Opciones de tareas */}
                   </select>
                   <CiCirclePlus color="#171A4A" size={20}/>
                   </div>
                   <div className="info-section">
                   
                   <table className="table-style">
                       <thead>
                       <tr className="headers-table">
                           <th>ATA</th>
                           <th>Nombre</th>
                       </tr>
                       </thead>
                       <tbody>
                       
                       <tr className="content-table">
                           <td>ATA1</td>
                           <td>Nombre</td>
                       </tr>
                       
                       </tbody>
                   </table>
                   </div>
                   <button className="register-button">Registrar Trabajo</button>
               </div>
               
               
                   
               
           </div>
           <div>
                USER76234
                        <button>
                            <CiMenuKebab fontSize={24} />
                        </button>
                
                        <img src="/FAB.png" width={120} height={110} className="footer-image" />
            </div>
       </div>
   </div>
    </>
}