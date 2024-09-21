import React, { useState } from 'react';
import './Styles/IndexAlmacenes.css'; 

import logo from '../../assets/ImagesAlmacenes/Logo.jpg'; 
import SlideBar from './CompTools/SlideBar';
 function IndexAlmacenes() {
  const [isSidebarOpen, setSidebarOpen] = useState(true); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
       
   
      <h1>Ingreso de Productos</h1>
  
  </div>
  );
}

function IndexAlmacenesExport(){
   return(
  <SlideBar ContentComp={IndexAlmacenes} >

  </SlideBar>)
}

export default IndexAlmacenesExport