import '../Styles/IndexAlmacenes.css';
import "../Styles/Pendientes.css"

import SlideBar from '../CompTools/SlideBar';
import { useState } from 'react';
import { FaEye, FaSearch } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { ReceptionItem } from '../../../Models/ReceptionItem';
import { MdDeleteForever } from 'react-icons/md';


function PendientesRecepcionOtros() {
    const location = useLocation();

    const [items, setItems] = useState(location.state.itemsOther || [
        {
          id: 1,
          tipo: 'Agua',
          nroDeParte: '1234-H2O',
          cantidad: 50,
        },
        {
          id: 2,
          tipo: 'Aceite',
          nroDeParte: '5678-OIL',
          cantidad: 30,
        },
        {
          id: 3,
          tipo: 'Gasolina',
          nroDeParte: '9101-FUEL',
          cantidad: 100,
        },
        {
          id: 4,
          tipo: 'Alcohol',
          nroDeParte: '1121-ETH',
          cantidad: 60,
        },
        {
          id: 5,
          tipo: 'Jugo de Naranja',
          nroDeParte: '3141-JUO',
          cantidad: 40,
        },
        {
          id: 6,
          tipo: 'Leche',
          nroDeParte: '5161-MILK',
          cantidad: 25,
        },
        {
          id: 7,
          tipo: 'Vinagre',
          nroDeParte: '7181-VIN',
          cantidad: 15,
        },
      ]);
      const [itemsNormal, setItemsNormal] = useState(location.state.itemsNormal || []); 
    

      const [incomeItems, setIncomeItems] = useState<ReceptionItem[]>(location.state.incomeItems ||  []);
    
    const [formValues, setFormValues] = useState({
        nroSerie: '',
        estante: '',
        fila: '',
        columna:""
      });

      const handleInputChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };





    const [selectedItem, setSelectedItem] = useState({ id: 0, tipo:"", nroDeParte: "", cantidad: 0 });


    const [compSelected, setCompSelected] = useState(1);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const offset = currentPage * itemsPerPage;
    const currentItems = items.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const n = useNavigate();

    const handlePageClick = (data: { selected: number }) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };


    const switchChanged = () => {
        n("/almacenes/recepcion/pendientes", {state:{incomeItems:incomeItems, itemsNormal:itemsNormal, itemsOther: items}});

    }



    const rowSelected = (item: { id: number, tipo:string,nroDeParte: string, cantidad: number }) => {
        setSelectedItem({ id: item.id, tipo:item.tipo, nroDeParte: item.nroDeParte, cantidad: item.cantidad });
        // setItems(items.filter(x=>x.id == item.id));
    }


   const addIncomeItem = ()=>{
        if(selectedItem.cantidad ==0){
            alert("Seleccione Item");
            return;
        }
        let itemsCopy = [...incomeItems];
        let incomeItem = new ReceptionItem(selectedItem.tipo, selectedItem.nroDeParte, selectedItem.cantidad, formValues.nroSerie, formValues.estante, formValues.fila, formValues.columna);
        itemsCopy.push(incomeItem);
        
        setIncomeItems(itemsCopy);

        //quitando

        let preItems = [...items];
        preItems = preItems.filter(x=>x.id != selectedItem.id);
        setItems(preItems);
        setSelectedItem({id:0, tipo:"", cantidad:0, nroDeParte:""});

        setFormValues({
            nroSerie: '',
            estante: '',
            fila: '',
            columna: ''
          });


   }

   const delteItem =(item: ReceptionItem)=>{
 
        let incomeItemsCopy =[...incomeItems];
        incomeItemsCopy =  incomeItemsCopy.filter(x=>x.nroDeSerie != item.nroDeSerie);
  
        setIncomeItems(incomeItemsCopy);

   }
    return (
        <div >

            <h1>Ingreso de Pendientes</h1>
            <div >
                <div style={{ display: "flex", width: "100%" }}>
                    <div style={{ display: "flex" }}>
                        <button className={"btnSwitch" + `${compSelected == 0 ? " btnSwitchSelected" : ""} `} onClick={switchChanged}>
                            Componentes
                        </button>
                        <button className={"btnSwitch" + `${compSelected == 1 ? " btnSwitchSelected" : ""} `} >
                            Otros
                        </button>
                    </div>

                    <div style={{ display: "flex", marginLeft: "auto", minWidth: 100 }} className='searcherUP'  >
                        <input className='searcher' placeholder='Buscar...'></input>
                        <button className='btnSwitch btnSwitchSelected2' ><FaSearch color='white'></FaSearch> </button>
                    </div>
                </div>
                <div style={{ width: "90%", alignSelf: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }} className='parTable' >

                    <table className='generalTable2'     >

                        <thead>
                            <th>
                                Tipo
                            </th>
                            <th>
                                # Parte
                            </th>
                            <th>
                                Cantidad
                            </th>
                          
                        </thead>
                        <tbody >
                            {currentItems.map((item) => (

                                <tr onClick={() => rowSelected(item)} className={selectedItem.id == item.id ? "trSelected" : ""} >
                                    <td>
                                        {item.tipo}
                                    </td>
                                    <td>
                                        {item.nroDeParte}
                                    </td>
                                    <td>
                                        {item.cantidad}

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
                <div style={{ overflowY: "scroll", height: "40vh" }}>
                    <h4>Detalles:</h4>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <div style={{ marginLeft: 18 }}>
                            <label className='labels'>Almacen: </label>
                            <select className='generalSelect' >
                                <option value="almacen1">Almacén 1</option>
                                <option value="almacen2">Almacén 2</option>
                            </select>
                        </div>
                        <div style={{ marginLeft: 18 }}>
                            <label className='labels'>Número de Serie: </label>
                            <input type='text' id='txtNroSerie' name='nroSerie' className='inputs'
                            value={formValues.nroSerie}
                            onChange={handleInputChange}
                            ></input>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginTop: 20, justifyContent: "center", flexWrap: "wrap", marginBottom: 10 }}>
                        <div style={{ marginLeft: 18 }}>
                            <label className='labels'>Estante: </label>
                            <input type='text' id='txtEstante' name='estante' className='inputs2'
                               value={formValues.estante}
                               onChange={handleInputChange}
                            ></input>
                        </div>
                        <div style={{ marginLeft: 18 }}>
                            <label className='labels'>Fila: </label>
                            <input type='text' id='txtFila' name='fila' className='inputs2'
                               value={formValues.fila}
                               onChange={handleInputChange}
                            ></input>
                        </div>
                        <div style={{ marginLeft: 18 }}>
                            <label className='labels'>Columna: </label>
                            <input type='text' id='txtColumna' name='columna' className='inputs2'
                               value={formValues.columna}
                               onChange={handleInputChange}
                            ></input>
                        </div>
                        <div style={{ marginLeft: 18 }}>
                           <button className='btnSwitch' onClick={()=>addIncomeItem()} >Agregar</button>
                        </div>
                    </div>
                    <div>
                        <table className='generalTable2'     >

                            <thead>
                                <th>
                                    Tipo
                                </th>
                                <th>
                                    # Parte
                                </th>
                                <th>
                                    Cantidad
                                </th>
                                <th>
                                    # Serie
                                </th>
                                <th>
                                    Estante
                                </th>
                                <th>
                                    Fila
                                </th>
                                <th>
                                    Columna
                                </th>
                                <th>
                                Acción
                            </th>
                            </thead>
                            <tbody >
                                {incomeItems.map((item) => (

                                    <tr >
                                        <td>
                                           {item.tipo} 
                                        </td>
                                        <td>
                                           {item.nroDeParte} 
                                        </td>
                                        <td>
                                           {item.cantidad} 
                                        </td>
                                        <td>
                                           {item.nroDeSerie} 
                                        </td>
                                        <td>
                                           {item.estante} 
                                        </td>
                                        <td>
                                           {item.fila} 
                                        </td>
                                        <td>
                                           {item.columna} 
                                        </td>
                                        <td >
                                           <MdDeleteForever onClick={()=>delteItem(item)}></MdDeleteForever>
                                        </td>
                                    </tr>
                                ))}



                            </tbody>
                        </table>
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

                </div>



            </div>

        </div>
    );
}

function PendientesRecepcionOtrosExport() {
    return (
        <SlideBar ContentComp={PendientesRecepcionOtros} menuItem='Recepción de Material' >

        </SlideBar>)
}

export default PendientesRecepcionOtrosExport