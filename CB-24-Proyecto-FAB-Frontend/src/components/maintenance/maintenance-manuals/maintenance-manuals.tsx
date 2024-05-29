import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import './maintenance-manuals.css';

export default function MaintenanceManuals() {
    return (
        <div className="maintenance-manuals-container">
            <div className="maintenance-aeronave-main">
                <div className="header-container">
                    <Link to={"./.."} className="back-link">
                        <GoArrowLeft color='black' size={30} />
                    </Link>
                    <h1 className="main-title">MANTENIMIENTO - Manuales</h1>
                </div>
                <div className="maintenance-aeronave-container">
                    <div className="maintenance-aeronave-content-cards">
                        <div className="maintenance-card">
                            <img src="/PDF.PNG" alt="Imagen 1" className="maintenance-card-image" />
                            <div className="maintenance-card-description">
                                <h2>"E"ASB Control - Rotor mast - Check of the rotor mast oil pipe</h2>
                                <h3>2017/05/19 - Rev 1</h3>
                                <h4>[EC 130 - H130]</h4>
                                <p>Ensuring that the main rotor mast bearing lubrication pipe is not obstructed. The purpose of Revision 1 of this ALERTSERVICE BULLETIN is to give details and an alternative method</p>
                            </div>
                        </div>
                        <div className="maintenance-card">
                            <img src="/PDF.PNG" alt="Imagen 2" className="maintenance-card-image" />
                            <div className="maintenance-card-description">
                                <h2>"E"ASB Control - Rotor mast - Check of the rotor mast oil pipe</h2>
                                <h3>2017/05/19 - Rev 1</h3>
                                <h4>[EC 130 - H130]</h4>
                                <p>Ensuring that the main rotor mast bearing lubrication pipe is not obstructed. The purpose of Revision 1 of this ALERTSERVICE BULLETIN is to give details and an alternative method</p>
                            </div>
                        </div>
                        <div className="maintenance-card">
                            <img src="/PDF.PNG" alt="Imagen 3" className="maintenance-card-image" />
                            <div className="maintenance-card-description">
                                <h2>"E"ASB Control - Rotor mast - Check of the rotor mast oil pipe</h2>
                                <h3>2017/05/19 - Rev 1</h3>
                                <h4>[EC 130 - H130]</h4>
                                <p>Ensuring that the main rotor mast bearing lubrication pipe is not obstructed. The purpose of Revision 1 of this ALERTSERVICE BULLETIN is to give details and an alternative method</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <span>
                        USER76234
                        <button>
                            <CiMenuKebab fontSize={24} />
                        </button>
                    </span>
                    <img src="/FAB.png" width={150} height={100} />
                </footer>
            </div>
        </div>
    );
}
