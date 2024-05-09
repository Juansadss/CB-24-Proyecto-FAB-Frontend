import { Link } from "react-router-dom";
import './Performance.css';
import '../main-menu/main-menu.css';
import '../../index.css';
import './OperationsLayout.css';
import Logo from './Images/LogoSarFAb.png';
import { MdHome } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { BiSolidAlarmExclamation } from "react-icons/bi";
import { FaColumns } from "react-icons/fa";
import { FaPlaneUp } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import Title from './WindowTitle';
interface LayoutProps {
    childComponent: React.ComponentType<any>;
    message: string;
}

const OperationsLayout: React.FC<LayoutProps> = ({ childComponent: ChildComponent, message }) => {
    return (
        <div className='flex layout-container'>
            <div className="side-menu-section">
                <div>
                    <img src={Logo} className="logoSarFab" alt="" />
                    <h1>Fuerza Aerea</h1>
                </div>
                <div className="sideMenu">
                    <div>
                        <Link to={'/Operaciones/OperationsView'}>
                            <MdHome size={'2.5em'}></MdHome>
                            <h5>Perfil</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/Operaciones/FlightRequest'}>
                            <FaClipboardList size={'2.5em'}></FaClipboardList>
                            <h5>Solicitudes Vuelos</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/Operaciones/matriz-riesgo'}>
                            <BiSolidAlarmExclamation size={'2.5em'}></BiSolidAlarmExclamation>
                            <h5>Matrices De Riesgo</h5>
                        </Link>
                        
                    </div>
                    <div>
                        <Link to={'/Operaciones/Performance'}>
                            <FaColumns size={'2.5em'}></FaColumns>
                            <h5>Tablas De Performance</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/Operaciones/Requerimientos-Aeronave'}>
                            <FaPlaneUp size={'2.5em'}></FaPlaneUp>
                            <h5>Requerimientos De Aeronave</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/'}>
                            <IoIosLogOut size={'2.5em'}></IoIosLogOut>
                            <h5>Cerrar Sesion</h5>
                        </Link>
                    </div>

                </div>

            </div>

            <div className='container-form containerTitle'>
                <Title title={message}></Title>
                <ChildComponent></ChildComponent>
            </div>
        </div>
    );
}

export default OperationsLayout;
