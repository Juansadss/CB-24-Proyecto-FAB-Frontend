import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import './mc_list.css'

export default function McList (){
    return <>
        <div className="container-list">
            <div className='mc-container-list'>
                <div className="mc-header-action">
                    <a href="">
                        <Link to={'/menu-principal/menu-operaciones'}><IoIosArrowBack size={30}/></Link>
                        <span>CHEQUEO MEDICO</span>
                    </a>
                </div>
            
                <div className="mc-card-1-list">
                    <form action="">
                        <button type="submit" className="mc-btn-icon-list">
                            <Link to={'/menu-principal/menu-operaciones/mc-registro'}><FaPlus/></Link>
                        </button>
                    </form>
                    <div className="mc-group-list">
                        <p>Tipo personal</p>
                        <button type="submit" className="mc-button-list">Ayudadores militares</button>
                        <button type="submit" className="mc-button-list">Técnicos Abordo</button>
                        <input className="mc-textInput-list" type="text"/>
                        <button type="submit" className="mc-btn-icon-list">
                            <img width={20} src="/search.png" alt="Search" />
                        </button>
                    </div>
                    <div>
                        <table>
                            <thead className='mc-thead-list'>
                                <tr>
                                    <th>GRADO</th>
                                    <th>APELLIDOS Y NOMBRES</th>
                                    <th>EC-145</th>
                                    <th>AS350 B3</th>
                                    <th>PROXIMO CHEQUEO</th>
                                    <th>OBSERVACIONES</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cap. Av</td>
                                    <td>XXXXXXXXX</td>
                                    <td>C.A</td>
                                    <td>P.A</td>
                                    <td>10-10-23</td>
                                    <td></td>
                                    <td>
                                        <button type="submit">
                                            <Link to={''}><MdDelete/></Link>
                                        </button>
                                        <button type="submit">
                                            <Link to={'/menu-principal/menu-operaciones/mc-editar'}><FaEdit/></Link>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cap. Av</td>
                                    <td>XXXXXXXXX</td>
                                    <td>C.A</td>
                                    <td>P.A</td>
                                    <td>05-10-23</td>
                                    <td></td>
                                    <td>
                                        <button type="submit">
                                            <Link to={''}><MdDelete/></Link>
                                        </button>
                                        <button type="submit">
                                            <Link to={'/menu-principal/menu-operaciones/mc-editar'}><FaEdit/></Link>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            
                <div className="mc-footer-user-list">
                    <label>USER76234</label>
                    <a href="">
                        <i className="material-icons"><CiMenuKebab/></i>
                    </a>
                </div>
            </div>
        </div>
    </>
}