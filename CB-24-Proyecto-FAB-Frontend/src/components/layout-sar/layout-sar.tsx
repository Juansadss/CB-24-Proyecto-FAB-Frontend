import { Link } from "react-router-dom";
import "./layout-sar.css"
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaUsersGear } from "react-icons/fa6";
import { GrUserPolice } from "react-icons/gr";
import { HiOutlineClipboardList } from "react-icons/hi";
import { GiOpenBook } from "react-icons/gi";
import { MdOutlineMedicalServices } from "react-icons/md";
import sarIcon from '/src/assets/FAB.png';
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { CiLogout } from "react-icons/ci";

interface LayoutSarProps {
    children: React.ReactNode
}
export default function LayoutSar({children}:LayoutSarProps) {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropdown(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div className="sar-main-container">
            <div className="sar-menu-vertical">
                <img src={sarIcon} alt="Icono-SARFAB" />
                <h2 className="text-dark">SARFAB</h2>
                <div className="sar-menu-log-out" ref={dropdownRef}>
                    <span>GPR0028293</span>
                    <button onClick={() => setShowDropdown(!showDropdown)} className="sar-dropdown-toggle">
                        <PiDotsThreeCircleVertical />
                    </button>
                    {showDropdown && (
                        <div className="sar-dropdown-menu">
                        <Link to="/" className="sar-dropdown-item"> <CiLogout /> Cerrar sesión</Link>
                        <hr />
                        <Link to="/" className="sar-dropdown-item">Cambiar contraseña</Link>
                        </div>
                    )}
                </div>
                <div className="sar-menu-items-container">
                    <Link to="/projects-list" className="sar-menu-item"> <BsFillPersonLinesFill /> Voluntarios</Link>
                    <Link to="/delivery-main-page" className="sar-menu-item"> <FaUsersGear />Operaciones</Link>
                    <Link to="/depot-main-page" className="sar-menu-item"> <GrUserPolice />Guardias</Link>
                    <Link to="/depot-main-page" className="sar-menu-item"> <HiOutlineClipboardList />Inventario</Link>
                    <Link to="/depot-main-page" className="sar-menu-item"> <MdOutlineMedicalServices />Sanidad</Link>
                    <Link to="/depot-main-page" className="sar-menu-item"> <GiOpenBook />Cursos</Link>
                </div>             
            </div>
            <main id="modal-root">
                {children}
            </main>
        </div>
    );    
}

