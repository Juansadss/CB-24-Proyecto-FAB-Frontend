import '../Styles/IndexAlmacenes.css';
import "../Styles/GeneralStyles.css";
import SlideBar from '../CompTools/SlideBar';
import { useState } from 'react';
import { FaEye, FaSearch } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

function InventoryComponentOhter() {
  const items = [
    {
      id: 1,
      nroParte: 'FUS123',
      cantidad: 12,
      fechaVencimiento: '2024-12-31',
    },
    {
      id: 2,
      nroParte: 'MOT456',
      cantidad: 8,
      fechaVencimiento: '2024-10-15',
    },
    {
      id: 3,
      nroParte: 'ALE789',
      cantidad: 15,
      fechaVencimiento: '2025-01-20',
    },
    {
      id: 4,
      nroParte: 'CAB321',
      cantidad: 5,
      fechaVencimiento: '2024-11-05',
    },
    {
      id: 5,
      nroParte: 'RUE654',
      cantidad: 20,
      fechaVencimiento: '2025-02-12',
    },
    {
      id: 6,
      nroParte: 'TAN987',
      cantidad: 10,
      fechaVencimiento: '2024-09-30',
    },
    {
      id: 7,
      nroParte: 'FRE741',
      cantidad: 18,
      fechaVencimiento: '2025-03-22',
    },
    {
      id: 8,
      nroParte: 'FUS123',
      cantidad: 12,
      fechaVencimiento: '2024-12-31',
    },
    {
      id: 9,
      nroParte: 'MOT456',
      cantidad: 8,
      fechaVencimiento: '2024-10-15',
    },
    {
      id: 10,
      nroParte: 'ALE789',
      cantidad: 15,
      fechaVencimiento: '2025-01-20',
    },
    {
      id: 11,
      nroParte: 'CAB321',
      cantidad: 5,
      fechaVencimiento: '2024-11-05',
    },
    {
      id: 12,
      nroParte: 'RUE654',
      cantidad: 20,
      fechaVencimiento: '2025-02-12',
    },
    {
      id: 13,
      nroParte: 'TAN987',
      cantidad: 10,
      fechaVencimiento: '2024-09-30',
    },
    {
      id: 14,
      nroParte: 'FRE741',
      cantidad: 18,
      fechaVencimiento: '2025-03-22',
    },
    {
      id: 15,
      nroParte: 'FUS123',
      cantidad: 12,
      fechaVencimiento: '2024-12-31',
    },
  ];

  const [compSelected, setCompSelected] = useState(0);
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
  };

  return (
    <div>
      <div style={{ display: "flex", width: "100%" }} className='navigator'>
        <h2> Inventario</h2>
        <div className='OptionMenu' onClick={() => { n("/almacenes/other") }}><h2>{">"} Componentes {">"}</h2></div>
        <h2>Fusilaje</h2>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", marginLeft: "auto", minWidth: 100 }} className='searcherUP'>
          <input className='searcher' placeholder='Buscar...'></input>
          <button className='btnSwitch btnSwitchSelected2'><FaSearch color='white'></FaSearch></button>
        </div>
      </div>
      <div style={{ width: "90%", alignSelf: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }} className='parTable'>
        <table className='generalTable'>
          <thead>
            <th>
              Número de Parte
            </th>
            <th>
              Cantidad
            </th>
            <th>
              Fecha de Vencimiento
            </th>
            <th>
              Ampliar
            </th>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.nroParte}
                </td>
                <td>
                  {item.cantidad}
                </td>
                <td>
                  {item.fechaVencimiento}
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

 function InventoryComponentOhterExport() {
  return (
    <SlideBar ContentComp={InventoryComponentOhter} menuItem='Inventario'>
    </SlideBar>
  );
}

export default InventoryComponentOhterExport;
