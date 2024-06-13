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
                            <Link to={'./'} target="_blank" className="maintenance-card-description">
                                <h4>Sitio Web del Manual 1</h4>
                                <Link to={'./'}>
                                    https://www.google.com/
                                </Link>
                                <span>Dirigirse al Sitio Web Externo</span>
                            </Link>
                        </div>
                        <div className="maintenance-card">
                            <img src="/PDF.PNG" alt="Imagen 1" className="maintenance-card-image" />
                            <Link to={'./'} target="_blank" className="maintenance-card-description">
                                <h4>Sitio Web del Manual 2</h4>
                                <Link to={'./'}>
                                    https://www.google.com/
                                </Link>
                                <span>Dirigirse al Sitio Web Externo</span>
                            </Link>
                        </div>
                        <div className="maintenance-card">
                            <img src="/PDF.PNG" alt="Imagen 1" className="maintenance-card-image" />
                            <Link to={'./'} target="_blank" className="maintenance-card-description">
                                <h4>Sitio Web del Manual 3</h4>
                                <Link to={'./'}>
                                    https://www.google.com/
                                </Link>
                                <span>Dirigirse al Sitio Web Externo</span>
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
