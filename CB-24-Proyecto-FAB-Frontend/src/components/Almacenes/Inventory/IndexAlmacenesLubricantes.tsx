import '../Styles/IndexAlmacenes.css';
import "../Styles/GeneralStyles.css"

import SlideBar from '../CompTools/SlideBar';
import { useState } from 'react';
import { FaEye, FaSearch } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { useNavigate, useNavigation } from 'react-router-dom';


function IndexAlmacenesLubricantes() {
  const items = [
    {
        id: 1,
        nombre: 'Aceite de Motor',
        cantidad: 12,
    },
    {
        id: 2,
        nombre: 'Lubricante para Cadenas',
        cantidad: 8,
    },
    {
        id: 3,
        nombre: 'Grasa Multiusos',
        cantidad: 15,
    },
    {
        id: 4,
        nombre: 'Aceite Hidráulico',
        cantidad: 5,
    },
    {
        id: 5,
        nombre: 'Desengrasante',
        cantidad: 20,
    },
    {
        id: 6,
        nombre: 'Aceite para Transmisiones',
        cantidad: 10,
    },
    {
        id: 7,
        nombre: 'Limpiador de Frenos',
        cantidad: 18,
    },
    {
        id: 8,
        nombre: 'Aceite de Compresor',
        cantidad: 14,
    },
    {
        id: 9,
        nombre: 'Sellador de Juntas',
        cantidad: 11,
    },
    {
        id: 10,
        nombre: 'Aceite para Cadenas de Moto',
        cantidad: 9,
    },
    {
        id: 11,
        nombre: 'Lubricante en Spray',
        cantidad: 7,
    },
    {
        id: 12,
        nombre: 'Grasa de Litio',
        cantidad: 13,
    },
    {
        id: 13,
        nombre: 'Aceite de Silicona',
        cantidad: 16,
    },
    {
        id: 14,
        nombre: 'Lubricante de Alta Temperatura',
        cantidad: 6,
    },
    {
        id: 15,
        nombre: 'Aceite para Equipos Pesados',
        cantidad: 8,
    }
];

  const [compSelected, setCompSelected] = useState(1)

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const n = useNavigate();

  const handlePageClick = (data: { selected: number }) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };


  const goToNext = (id:string)=>{
      n("/almacenes/inventory/componentOther");
  }


  const switchChanged=()=>{
    n("/almacenes/");

  }
  return (
    <div >

      <h1>Inventario</h1>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex" }}>
          <button className={"btnSwitch" + `${compSelected == 0 ? " btnSwitchSelected" : ""} `} onClick={switchChanged}>
            Componentes
          </button>
          <button className={"btnSwitch" + `${compSelected == 1 ? " btnSwitchSelected" : ""} `}>
            Otros
          </button>
        </div>

        <div style={{ display: "flex", marginLeft: "auto", minWidth: 100 }} className='searcherUP'  >
          <input className='searcher' placeholder='Buscar...'></input>
          <button className='btnSwitch btnSwitchSelected2' ><FaSearch color='white'></FaSearch> </button>
        </div>
      </div>
      <div style={{ width: "90%", alignSelf: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }} className='parTable' >

        <table className='generalTable'     >

          <thead>
            <th>
              Tipo
            </th>
            <th>
              Cantidad
            </th>
            <th>
              Ampliar
            </th>
          </thead>
          <tbody >
            {currentItems.map((item) => (

              <tr>
                <td>
                  {item.nombre}
                </td>
                <td>
                  {item.cantidad}
                </td>
                <td>
                  <button className='eyeButton' onClick={()=>goToNext(item.id+"")}>
                    <FaEye color='white'></FaEye>
                  </button>

                </td>
              </tr>
            ))}


           
          </tbody>
        </table>
      
      </div>
      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

function IndexAlmacenesLubricantesExport() {
  return (
    <SlideBar ContentComp={IndexAlmacenesLubricantes} menuItem='Inventario' >

    </SlideBar>)
}

export default IndexAlmacenesLubricantesExport