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
                            <Link to={'https://airbusworld.helicopters.airbus.com/#/home'} target="_blank" className="maintenance-card-description">
                                <img src="/Airbus_logo.webp" alt="Orion_logo" className="maintenance-card-image" />
                                <div>
                                    <h4>Plataforma ORION</h4>
                                    https://airbusworld.helicopters.airbus.com/#/home
                                </div>
                                <span>Dirigirse a plataforma ORION</span>
                            </Link>
                        </div>
                        <div className="maintenance-card">
                            <Link to={'https://tools.safran-helicopter-engines.com/pg/en/home'} target="_blank" className="maintenance-card-description">
                                <img src="/Safran_logo.webp" alt="Safran_logo" className="maintenance-card-image" />
                                <div>
                                    <h4>Plataforma Motor SAFRAN TOOLS</h4>
                                    https://tools.safran-helicopter-engines.com/pg/en/home
                                </div>
                                <span>Dirigirse a plataforma Motor SAFRAN TOOLS</span>
                            </Link>
                        </div>
                        <div className="maintenance-card">
                            <Link to={'https://shop.robinsonheli.com/'} target="_blank" className="maintenance-card-description">
                                <img src="/Robinson_logo.webp" alt="Robinson_logo" className="maintenance-card-image" />
                                <div>
                                    <h4>Plataforma Robinson R66</h4>
                                    https://shop.robinsonheli.com/
                                </div>
                                <span>Dirigirse a plataforma Robinson R66</span>
                            </Link>
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
