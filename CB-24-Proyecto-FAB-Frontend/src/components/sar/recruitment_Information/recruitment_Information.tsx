
import { useNavigate } from "react-router-dom";
import "./recruitment_Information.css";
import LayoutSar from "../layout-sar/layout-sar";
import { FaAngleLeft } from "react-icons/fa6";

export default function RecruitmentInformation() {

    const goTo = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        goTo("/menu");
    }

    return (
        <LayoutSar>
            <div className="recruitment_header">
                <button className="recruitment_btnReturn"><FaAngleLeft /></button>
                <h2 className="recruitment_header_h2">LISTA DE RECLUTAMIENTO</h2>
                <span className="recruitment_barra">&gt;</span>
                <label className="recruitment_header_h3"> Información postulante</label>
            </div>
            <div className="Recrutment_Info_Center-container">

                <div className="Recrutment_Info_table-card">
                    <div className="Recrutment_Info_card">

                        <div className="Recrutment_Info_form-row">
                            <label className="Recrutment_Info_label" htmlFor="nombre-completo">Nombre completo:</label>
                            <span className="Recrutment_Info_value">Juan Pérez</span>
                        </div>
                        <div className="Recrutment_Info_form-row">
                            <label className="Recrutment_Info_label" htmlFor="ci">CI: </label>
                            <label className="Recrutment_Info_value">4864545</label>
                            <label className="Recrutment_Info_label" htmlFor="fecha-nacimiento">      Fecha de nacimiento:</label>
                            <span className="Recrutment_Info_value">1/16/20</span>
                        </div>
                        <div className="Recrutment_Info_form-row">
                            <label className="Recrutment_Info_label" htmlFor="correo">Correo electrónico:</label>
                            <span className="Recrutment_Info_value">juan@perez123.com</span>
                        </div>
                        <div className="Recrutment_Info_form-row">
                            <label className="Recrutment_Info_label" htmlFor="libreta-militar">¿El postulante opta para la libreta militar?</label>
                            <span className="Recrutment_Info_value">Sí</span>
                        </div>
                        <div className="Recrutment_Info_FileOne">
                            <button className="Recrutment_Info_btn btn-blue"> Ver fotocopia de carnet </button>
                            <button className="Recrutment_Info_btn btn-blue"> Ver certificado de nacimiento </button>
                        </div>

                        <form onSubmit={handleSubmit}>

                        </form>
                    </div>
                    <div className="Recrutment_Info_FileOne">
                        <button className="Recrutment_Info_btnGreen"> Aprobar </button>
                        <button className="Recrutment_Info_btnRed" > Rechazar </button>
                    </div>

                </div>
            </div>
        </LayoutSar>
    )

}