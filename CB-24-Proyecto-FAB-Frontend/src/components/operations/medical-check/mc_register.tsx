import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import './mc_register.css'

export default function McRegister (){
    return <>
        <div className="container">
            <div className='mc-container'>
                <div className="mc-header-action">
                    <a href="">
                        <Link className="mc-black" to={'/menu-principal/menu-operaciones/mc-lista'}><IoIosArrowBack size={20}/></Link>
                        <span>CHEQUEO MÉDICO</span>
                    </a>
                    <p>
                        <i className="material-icons"><img width={10} src="/chevron-right.png" alt=">" /></i>
                        <span>Registrar chequeo</span>
                    </p>
                </div>

                <div className="mc-card-1">
                    <form action="">
                        <div className="mc-group">
                            <div className="mc-select-field">
                                <select>
                                    <option value="">Eduardo Perez</option>
                                    <option value="">Carlos Vargas</option>
                                    <option value="">Ronal Gonzales</option>
                                </select>
                                <label>Personal</label>
                            </div>
                            <div className="mc-input-field">
                                <input type="text"/>
                                <label>Grado</label>
                            </div>
                        </div>
                        
                        <h3 className="mc-title">CATEGORÍA</h3>
                        <div className="mc-group">
                            <div className="mc-input-field">
                                <input type="text"/>
                                <label>EC-145</label>
                            </div>
                            <div className="mc-input-field">
                                <input type="text"/>
                                <label>AS350 B3</label>
                            </div>
                        </div>
                        <div className="mc-group">
                            <div className="mc-input-field">
                                <input type="date"/>
                                <label>Próximo Chequeo</label>
                            </div>
                            <div className="mc-text-field">
                                <textarea rows={6} cols={17}></textarea>
                                <label>Observaciones</label>
                            </div>
                        </div>
                        <button className="mc-button" type="submit">Registrar Chequeo</button>
                    </form>
                </div>

                <div className="mc-footer-user">
                    <label>USER76234</label>
                    <a href="">
                        <i className="material-icons"><CiMenuKebab/></i>
                    </a>
                </div>
            </div>
        </div>
    </>
}