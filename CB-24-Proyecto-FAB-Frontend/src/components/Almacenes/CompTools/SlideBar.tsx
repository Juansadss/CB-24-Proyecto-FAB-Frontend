import React, { useState } from 'react';
import "../Styles/IndexAlmacenes.css"; 
import logo from "../../../assets/ImagesAlmacenes/Logo.jpg";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineInventory } from "react-icons/md";
import { FaLuggageCart } from "react-icons/fa";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoIosExit } from 'react-icons/io';
interface SlideProps {

  ContentComp: React.ComponentType
}
const SlideBar: React.FC<SlideProps> = ({ContentComp})=> {
  const [isSidebarOpen, setSidebarOpen] = useState(true); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  return (
   <div className='container'>
     <button className={`menu-toggle ${isSidebarOpen?"":"closedMenu"}`} onClick={toggleSidebar}>
        ☰
      </button>
      <nav className={`sidebar ${isSidebarOpen ? "open" : 'closed'}`}>
        <div className="header">
          <img src={logo} alt="Fuerza Aérea" className="logo" />
          <h1 className="title">Almacenes</h1>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:0, fontSize:12}}>
            <h3>Cochabamba - 1</h3>
                    <CiMenuKebab></CiMenuKebab>
          </div>
        </div>
        <ul>
        <li><a href="#"><MdOutlineInventory/> Inventario</a></li>

          <li><a href="#"><IoDocumentAttachSharp/> Recepción de Material</a></li>
          <li><a href="#"><IoIosExit></IoIosExit> Orden de Compra</a></li>
         
          <li><a href="#"><FaLuggageCart/> Registro de Salidas</a></li>
        </ul>
      </nav>
  
      <main className={`content ${isSidebarOpen ? "open" : 'closed'}`}>
        {<ContentComp/>}
      </main>
  
  
   </div>
    
      
  );
}
export default SlideBar;