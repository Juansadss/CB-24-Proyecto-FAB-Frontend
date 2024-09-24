import '../Styles/IndexAlmacenes.css';
import "../Styles/GeneralStyles.css"
import SlideBar from '../CompTools/SlideBar';
import { useState } from 'react';
import { FaEye, FaSearch } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { useNavigate, useNavigation } from 'react-router-dom';


function InventoryComponentDetail() {
  const items = [
    {
      id: 1,
      nroSerie: 'FUS123',
      almacen: 'A1',
      estante: 1,
      fila: 1,
      columna: 1,
      cantidad: 12,
    },
    {
      id: 2,
      nroSerie: 'MOT456',
      almacen: 'A1',
      estante: 1,
      fila: 1,
      columna: 2,
      cantidad: 8,
    },
    {
      id: 3,
      nroSerie: 'ALE789',
      almacen: 'A1',
      estante: 1,
      fila: 2,
      columna: 1,
      cantidad: 15,
    },
    {
      id: 4,
      nroSerie: 'CAB321',
      almacen: 'A1',
      estante: 1,
      fila: "A",
      columna: 2,
      cantidad: 5,
    },
    {
      id: 5,
      nroSerie: 'RUE654',
      almacen: 'A1',
      estante: 1,
      fila: 3,
      columna: 1,
      cantidad: 20,
    },
    {
      id: 6,
      nroSerie: 'TAN987',
      almacen: 'A1',
      estante: 1,
      fila: 3,
      columna: 2,
      cantidad: 10,
    },
    {
      id: 7,
      nroSerie: 'FRE741',
      almacen: 'A1',
      estante: 1,
      fila: 4,
      columna: 1,
      cantidad: 18,
    },
    // Repetir los mismos elementos con nuevas posiciones
    {
      id: 8,
      nroSerie: 'FUS123',
      almacen: 'A1',
      estante: 2,
      fila: 1,
      columna: 1,
      cantidad: 12,
    },
    {
      id: 9,
      nroSerie: 'MOT456',
      almacen: 'A1',
      estante: 2,
      fila: 1,
      columna: 2,
      cantidad: 8,
    },
    {
      id: 10,
      nroSerie: 'ALE789',
      almacen: 'A1',
      estante: 2,
      fila: 2,
      columna: 1,
      cantidad: 15,
    },
    {
      id: 11,
      nroSerie: 'CAB321',
      almacen: 'A1',
      estante: 2,
      fila: "A",
      columna: 2,
      cantidad: 5,
    },
    {
      id: 12,
      nroSerie: 'RUE654',
      almacen: 'A1',
      estante: 2,
      fila: 3,
      columna: 1,
      cantidad: 20,
    },
    {
      id: 13,
      nroSerie: 'TAN987',
      almacen: 'A1',
      estante: 2,
      fila: 3,
      columna: 2,
      cantidad: 10,
    },
    {
      id: 14,
      nroSerie: 'FRE741',
      almacen: 'A1',
      estante: 2,
      fila: "A",
      columna: 1,
      cantidad: 18,
    },
    // Repetir una vez más con nuevas posiciones
    {
      id: 15,
      nroSerie: 'FUS123',
      almacen: 'A1',
      estante: 3,
      fila: "A",
      columna: 1,
      cantidad: 12,
    },
    {
      id: 16,
      nroSerie: 'MOT456',
      almacen: 'A1',
      estante: 3,
      fila: "A",
      columna: 2,
      cantidad: 8,
    },
    {
      id: 17,
      nroSerie: 'ALE789',
      almacen: 'A1',
      estante: 3,
      fila: 2,
      columna: 1,
      cantidad: 15,
    },
    {
      id: 18,
      nroSerie: 'CAB321',
      almacen: 'A1',
      estante: 3,
      fila: 2,
      columna: 2,
      cantidad: 5,
    },
    {
      id: 19,
      nroSerie: 'RUE654',
      almacen: 'A1',
      estante: 3,
      fila: 3,
      columna: 1,
      cantidad: 20,
    },
    {
      id: 20,
      nroSerie: 'TAN987',
      almacen: 'A1',
      estante: 3,
      fila: 3,
      columna: 2,
      cantidad: 10,
    },
    {
      id: 21,
      nroSerie: 'FRE741',
      almacen: 'A1',
      estante: 3,
      fila: 4,
      columna: 1,
      cantidad: 18,
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
    n("/almacenes/inventory/component/" + id);
  }

  return (
    <div >
      <div style={{ display: "flex", width: "100%" }} className='navigator'>
        <h2> Inventario</h2> <div className='OptionMenu' onClick={() => { n("/almacenes") }} ><h2>{">"} Componentes {">"}</h2> </div><div className='OptionMenu' onClick={() => { n("/almacenes/inventory/component") }} ><h2> Fusilaje {">"}</h2> </div>  <h2>10928182</h2>

      </div>
      <div style={{ display: "flex", width: "100%" }}>

        <div style={{ display: "flex", marginLeft: "auto", minWidth: 100 }} className='upSelect' >
          <select className='generalSelect' >
            <option value="almacen1">Almacén 1</option>
            <option value="almacen2">Almacén 2</option>
          </select>
        </div>
        <div style={{ display: "flex", marginLeft: "auto", minWidth: 100 }} className='searcherUP'  >
          <input className='searcher' placeholder='Buscar...'></input>
          <button className='btnSwitch btnSwitchSelected2' ><FaSearch color='white'></FaSearch> </button>
        </div>
      </div>
      <div style={{ width: "90%", alignSelf: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }} className='parTable' >

        <table className='generalTable'     >

          <thead>

            <th>Número de Serie</th>
            <th>Cantidad</th>
            <th>Almacén</th>
            <th>Estante</th>
            <th>Fila</th>
            <th>Columna</th>
            <th>Ampliar</th>

          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.nroSerie}</td>
                <td>{item.cantidad}</td>
                <td>{item.almacen}</td>
                <td>{item.estante}</td>
                <td>{item.fila}</td>
                <td>{item.columna}</td>
                <td>
                  <button className='eyeButton' onClick={() => goToNext(item.id.toString())}>
                    <FaEye color='white' />
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

function InventoryComponentDetailExport() {
  return (
    <SlideBar ContentComp={InventoryComponentDetail} menuItem='Inventario' >

    </SlideBar>)
}

export default InventoryComponentDetailExport