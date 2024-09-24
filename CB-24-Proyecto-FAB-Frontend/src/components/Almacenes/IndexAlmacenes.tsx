import './Styles/IndexAlmacenes.css';

import SlideBar from './CompTools/SlideBar';
import { useState } from 'react';
import { FaEye, FaSearch } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';


function IndexAlmacenes() {
  const items = [
    {
      id: 1,
      nombre: 'Fusilajes',
      cantidad: 12,
    },
    {
      id: 2,
      nombre: 'Motores',
      cantidad: 8,
    },
    {
      id: 3,
      nombre: 'Alerones',
      cantidad: 15,
    },
    {
      id: 4,
      nombre: 'Cabinas',
      cantidad: 5,
    },
    {
      id: 5,
      nombre: 'Ruedas',
      cantidad: 20,
    },
    {
      id: 6,
      nombre: 'Tanques',
      cantidad: 10,
    },
    {
      id: 7,
      nombre: 'Frenos',
      cantidad: 18,
    },
    {
      id: 1,
      nombre: 'Fusilajes',
      cantidad: 12,
    },
    {
      id: 2,
      nombre: 'Motores',
      cantidad: 8,
    },
    {
      id: 3,
      nombre: 'Alerones',
      cantidad: 15,
    },
    {
      id: 4,
      nombre: 'Cabinas',
      cantidad: 5,
    },
    {
      id: 5,
      nombre: 'Ruedas',
      cantidad: 20,
    },
    {
      id: 6,
      nombre: 'Tanques',
      cantidad: 10,
    },
    {
      id: 7,
      nombre: 'Frenos',
      cantidad: 18,
    },
    {
      id: 1,
      nombre: 'Fusilajes',
      cantidad: 12,
    },
    {
      id: 2,
      nombre: 'Motores',
      cantidad: 8,
    },
    {
      id: 3,
      nombre: 'Alerones',
      cantidad: 15,
    },
    {
      id: 4,
      nombre: 'Cabinas',
      cantidad: 5,
    },
    {
      id: 5,
      nombre: 'Ruedas',
      cantidad: 20,
    },
    {
      id: 6,
      nombre: 'Tanques',
      cantidad: 10,
    },
    {
      id: 7,
      nombre: 'Frenos',
      cantidad: 18,
    },
    {
      id: 1,
      nombre: 'Fusilajes',
      cantidad: 12,
    },
    {
      id: 2,
      nombre: 'Motores',
      cantidad: 8,
    },
    {
      id: 3,
      nombre: 'Alerones',
      cantidad: 15,
    },
    {
      id: 4,
      nombre: 'Cabinas',
      cantidad: 5,
    },
    {
      id: 5,
      nombre: 'Ruedas',
      cantidad: 20,
    },
    {
      id: 6,
      nombre: 'Tanques',
      cantidad: 10,
    },
    {
      id: 7,
      nombre: 'Frenos',
      cantidad: 18,
    }
  ];
  const [compSelected, setCompSelected] = useState(0)

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };



  return (
    <div >

      <h1>Inventario</h1>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex" }}>
          <button className={"btnSwitch" + `${compSelected == 0 ? " btnSwitchSelected" : ""} `}>
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
                  <button className='eyeButton'>
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

function IndexAlmacenesExport() {
  return (
    <SlideBar ContentComp={IndexAlmacenes} menuItem='Inventario' >

    </SlideBar>)
}

export default IndexAlmacenesExport