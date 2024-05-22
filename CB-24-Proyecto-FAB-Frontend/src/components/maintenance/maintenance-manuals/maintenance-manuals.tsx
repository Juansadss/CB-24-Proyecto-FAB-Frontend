import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import './maintenance-manuals.css';

export default function MaintenanceManuals() {
    return (
        <div className="maintenance-aeronave-base">
            <div className="maintenance-aeronave-main">
                <Link to={"/menu-principal/mantenimiento"}>
                    <GoArrowLeft color='black' size={30} />
                </Link>
                <div className="maintenance-aeronave-header-principal">
                    <h1>Manuales</h1>
                </div>

                <div className="maintenance-aeronave-container">
                    <div className="maintenance-aeronave-content-cards">
                        <div className="maintenance-card">
                            <img src="/PDF.PNG" alt="Imagen 1" className="maintenance-card-image" />
                            <div className="maintenance-card-description">
                                <h2>"E"ASB Control - Rotor mast - Check of the rotor mast oil pipe</h2>
                                <h2>2017/05/19 - Rev 1</h2>
                                <p>[EC 130 - H130]</p>
                                <h3>Ensuring that the main rotor mast bearing lubrication pipe is not obstructed. The purpose of Revision 1 of this ALERTSERVICE BULLETIN is to give details and an alternative method</h3>
                            </div>
                        </div>
                        <div className="maintenance-card">
                            <img src="/PDF.PNG" alt="Imagen 2" className="maintenance-card-image" />
                            <div className="maintenance-card-description">
                                <h2>"E"ASB Control - Rotor mast - Check of the rotor mast oil pipe</h2>
                                <h2>2017/05/19 - Rev 1</h2>
                                <p>[EC 130 - H130]</p>
                                <h3>Ensuring that the main rotor mast bearing lubrication pipe is not obstructed. The purpose of Revision 1 of this ALERTSERVICE BULLETIN is to give details and an alternative method</h3>
                            </div>
                        </div>
                        <div className="maintenance-card">
                            <img src="/PDF.PNG" alt="Imagen 3" className="maintenance-card-image" />
                            <div className="maintenance-card-description">
                                <h2>"E"ASB Control - Rotor mast - Check of the rotor mast oil pipe</h2>
                                <h2>2017/05/19 - Rev 1</h2>
                                <p>[EC 130 - H130]</p>
                                <h3>Ensuring that the main rotor mast bearing lubrication pipe is not obstructed. The purpose of Revision 1 of this ALERTSERVICE BULLETIN is to give details and an alternative method</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    USER76234
                    <button>
                        <CiMenuKebab fontSize={24} />
                    </button>
                    <img src="/FAB.png" width={120} height={110} className="maintenance-footer-image" />
                </div>
            </div>
        </div>
    );
}
