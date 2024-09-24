import '../Styles/IndexAlmacenes.css';
import "../Styles/GeneralStyles.css"
import SlideBar from '../CompTools/SlideBar';
import { useState } from 'react';
import { FaEye, FaSearch } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { useNavigate, useNavigation } from 'react-router-dom';


function InventoryComponent() {
  const items = [
    {
      id: 1,
      nroParte: 'FUS123',
      cantidad: 12,
    },
    {
      id: 2,
      nroParte: 'MOT456',
      cantidad: 8,
    },
    {
      id: 3,
      nroParte: 'ALE789',
      cantidad: 15,
    },
    {
      id: 4,
      nroParte: 'CAB321',
      cantidad: 5,
    },
    {
      id: 5,
      nroParte: 'RUE654',
      cantidad: 20,
    },
    {
      id: 6,
      nroParte: 'TAN987',
      cantidad: 10,
    },
    {
      id: 7,
      nroParte: 'FRE741',
      cantidad: 18,
    },
    {
      id: 1,
      nroParte: 'FUS123',
      cantidad: 12,
    },
    {
      id: 2,
      nroParte: 'MOT456',
      cantidad: 8,
    },
    {
      id: 3,
      nroParte: 'ALE789',
      cantidad: 15,
    },
    {
      id: 4,
      nroParte: 'CAB321',
      cantidad: 5,
    },
    {
      id: 5,
      nroParte: 'RUE654',
      cantidad: 20,
    },
    {
      id: 6,
      nroParte: 'TAN987',
      cantidad: 10,
    },
    {
      id: 7,
      nroParte: 'FRE741',
      cantidad: 18,
    },
    {
      id: 1,
      nroParte: 'FUS123',
      cantidad: 12,
    },
    {
      id: 2,
      nroParte: 'MOT456',
      cantidad: 8,
    },
    {
      id: 3,
      nroParte: 'ALE789',
      cantidad: 15,
    },
    {
      id: 4,
      nroParte: 'CAB321',
      cantidad: 5,
    },
    {
      id: 5,
      nroParte: 'RUE654',
      cantidad: 20,
    },
    {
      id: 6,
      nroParte: 'TAN987',
      cantidad: 10,
    },
    {
      id: 7,
      nroParte: 'FRE741',
      cantidad: 18,
    },
    {
      id: 1,
      nroParte: 'FUS123',
      cantidad: 12,
    },
    {
      id: 2,
      nroParte: 'MOT456',
      cantidad: 8,
    },
    {
      id: 3,
      nroParte: 'ALE789',
      cantidad: 15,
    },
    {
      id: 4,
      nroParte: 'CAB321',
      cantidad: 5,
    },
    {
      id: 5,
      nroParte: 'RUE654',
      cantidad: 20,
    },
    {
      id: 6,
      nroParte: 'TAN987',
      cantidad: 10,
    },
    
  ];

  const [compSelected, setCompSelected] = useState(0)

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const n = useNavigate();

  const handlePageClick = (data: { selected: number }) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };


  const goToNext = (id: string) => {
    n("/almacenes/inventory/component/detail");
  }

  return (
    <div >
      <div style={{ display: "flex", width:"100%"}} className='navigator'>
      <h2> Inventario</h2> <div className='OptionMenu' onClick={() => { n("/almacenes") }} ><h2>{">"} Componentes {">"}</h2> </div> <h2>Fusilaje</h2>

      </div>
      <div style={{ display: "flex", width: "100%" }}>
       

        <div style={{ display: "flex", marginLeft: "auto", minWidth: 100 }} className='searcherUP'  >
          <input className='searcher' placeholder='Buscar...'></input>
          <button className='btnSwitch btnSwitchSelected2' ><FaSearch color='white'></FaSearch> </button>
        </div>
      </div>
      <div style={{ width: "90%", alignSelf: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }} className='parTable' >

        <table className='generalTable'     >

          <thead>
            <th>
              Número de Parte
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
                  {item.nroParte}
                </td>
                <td>
                  {item.cantidad}
                </td>
                <td>
                  <button className='eyeButton' onClick={() => goToNext(item.id + "")}>
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

function InventoryComponentExport() {
  return (
    <SlideBar ContentComp={InventoryComponent} menuItem='Inventario' >

    </SlideBar>)
}

export default InventoryComponentExport