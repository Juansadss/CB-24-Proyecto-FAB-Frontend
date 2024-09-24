import React, { useState } from 'react';
import "../Styles/IndexAlmacenes.css"; 
import logo from "../../../assets/ImagesAlmacenes/Logo.jpg";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineInventory } from "react-icons/md";
import { FaLuggageCart } from "react-icons/fa";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoIosExit } from 'react-icons/io';
interface SlideProps {
  menuItem: string,
  ContentComp: React.ComponentType
}
const SlideBar: React.FC<SlideProps> = ({ContentComp, menuItem})=> {
  const [isSidebarOpen, setSidebarOpen] = useState(true); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  return (
   <div className='container'>
     <button className={`menu-toggle ${isSidebarOpen?"":"closedMenu"}`} onClick={toggleSidebar}>
        ☰
      </button>
      <nav className={`sidebar ${isSidebarOpen ? "open" : 'closed'} menu`}>
        <div className="header">
          <img src={logo} alt="Fuerza Aérea" className="logo" />
          <h1 className="title">Almacenes</h1>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:0, fontSize:12}}>
            <h3>Cochabamba - 1</h3>
                    <CiMenuKebab></CiMenuKebab>
          </div>
        </div>
        <ul>
        <li className={menuItem == "Inventario"? "selectedItem":""} ><a href="/almacenes"     ><MdOutlineInventory/> Inventario</a></li>

          <li className={menuItem == "Recepción de Material"? "selectedItem":""}><a href="/prueba"><IoDocumentAttachSharp/> Recepción de Material</a></li>
          <li className={menuItem == "Orden de Compra"? "selectedItem":""}><a href="#"><IoIosExit></IoIosExit> Orden de Compra</a></li>
         
          <li className={menuItem == "Registro de Salidas"? "selectedItem":""}><a href="#"><FaLuggageCart/> Registro de Salidas</a></li>
        </ul>
      </nav>
  
      <main className={`content ${isSidebarOpen ? "open" : 'closed'}`}>
        {<ContentComp/>}
      </main>
  
  
   </div>
    
      
  );
}
export default SlideBar;