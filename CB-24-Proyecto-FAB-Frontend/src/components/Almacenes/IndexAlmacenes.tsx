import './Styles/IndexAlmacenes.css';

import SlideBar from './CompTools/SlideBar';
import { useState } from 'react';
function IndexAlmacenes() {

  const [compSelected, setCompSelected] = useState(0)





  return (
    <div >

      <h1>Inventario</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <button className={"btnSwitch"+ `${compSelected==0?" btnSwitchSelected":""} `}>
            Componentes
          </button>
          <button  className={"btnSwitch"+ `${compSelected==1?" btnSwitchSelected":""} `}>
            Otros
            </button>
        </div>
      </div>

    </div>
  );
}

function IndexAlmacenesExport() {
  return (
    <SlideBar ContentComp={IndexAlmacenes} menuItem='Inventario' >

    </SlideBar>)
}

export default IndexAlmacenesExport