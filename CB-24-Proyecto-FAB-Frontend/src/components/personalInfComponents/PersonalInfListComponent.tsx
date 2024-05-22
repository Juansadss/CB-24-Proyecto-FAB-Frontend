import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineTool } from "react-icons/ai";
import { TbManualGearbox } from "react-icons/tb";
import { MdOutlineWarehouse } from "react-icons/md";
import { LuCross } from "react-icons/lu";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../main-menu/main-menu/main-menu.css";
import "./PersonalInformation-List.css";

export default function PersonalInfListComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grado, setGrado] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [ci, setCi] = useState("");
  const [department, setDeparment] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [celular, setCelular] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [grupoSanguineo, setGrupoSanguineo] = useState("");
  const [religion, setReligion] = useState("");
  const [correo, setCorreo] = useState("");
  const [alergia, setAlergia] = useState("");
  const [señas, setSeñas] = useState("");
  const [curso, setCurso] = useState("");
  const [llamar, setLlamar] = useState("");
  const [parentezco, setParentezco] = useState("");
  const [direccion, setDireccion] = useState("");
  const [archivo, setArchivo] = useState("");
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handleGradoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGrado(e.target.value);
  };

  const handleFechaNacimientoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFechaNacimiento(e.target.value);
  };
  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDeparment(e.target.value);
  };
  const handleCiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCi(e.target.value);
  };
  const handleDomicilioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomicilio(e.target.value);
  };
  const handleTelefonoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefono(e.target.value);
  };

  const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelular(e.target.value);
  };

  const handleOcupacionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOcupacion(e.target.value);
  };
  const handleGrupoSanguineoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGrupoSanguineo(e.target.value);
  };
  const handleReligionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReligion(e.target.value);
  };
  const handleCorreoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorreo(e.target.value);
  };
  const handleAlergiaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlergia(e.target.value);
  };
  const handleSeñasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeñas(e.target.value);
  };
  const handleCursoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurso(e.target.value);
  };
  const handleLlamarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLlamar(e.target.value);
  };
  const handleParentezcoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParentezco(e.target.value);
  };
  const handleDireccionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDireccion(e.target.value);
  };
  const handleArchivoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArchivo(e.target.value);
  };

  return (
    <>
      <div className="main-menu-container">
        <div className="main-menu-options">
          <Link className="card" to={"/"}>
            <TbManualGearbox />
            <span>Operaciones</span>
          </Link>
          <Link className="card" to={"/"}>
            <AiOutlineTool />
            <span>Mantenimiento</span>
          </Link>
          <Link className="card" to={"/"}>
            <MdOutlineWarehouse />
            <span>Almacenes</span>
          </Link>
          <Link className="card" to={"/"}>
            <LuCross />
            <span>SAR FAB</span>
          </Link>
        </div>
      </div>
      <div className="personal-container">
        <div className="title-container">
          <h1>
            <Link to={"/menu-principal"}>
              <IoIosArrowBack className="goback-arrow" />
            </Link>
            <span className="title-text">PERSONAL</span>
          </h1>
          <h1>
            <Link to={"/menu-principal"}>
              <IoIosArrowBack className="goback-arrow" />
            </Link>
            <span className="title-text">Filacion Personal</span>
          </h1>
        </div>
        <div className="label-inf">
          <label className="labels">Faltas: 2</label>
          <label className="labels2">Permisos: 1</label>
        </div>
        <div className="input-container">
          <label className="dates">DATOS PERSONALES</label>
          <label htmlFor="firstName">Nombres:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Nombres"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <label htmlFor="lastName">Apellidos:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Apellidos"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <label className="label-grade" htmlFor="grado">
          Grado:
        </label>
        <label className="label-date" htmlFor="fechaNacimiento">
          Fecha de Nacimiento:
        </label>
        <div className="input-container5">
          <select id="grado" className="input-select" value={grado} onChange={handleGradoChange}>
            <option value="grado1">Grado 1</option>
            <option value="grado2">Grado 2</option>
            <option value="grado3">Grado 3</option>
          </select>

          <input
            type="date"
            className="input-date"
            id="fechaNacimiento"
            value={fechaNacimiento}
            onChange={handleFechaNacimientoChange}
          />
        </div>
       
        <label className="label-grade" htmlFor="department">
          Departamento:
        </label>
        <label className="label-ci" htmlFor="fechaNacimiento">
          C.I.:
        </label>
        <div className="input-container5">
        <div>
            <select className="input-select"
              id="department"
              value={department}
              onChange={handleDepartmentChange}>
              <option value="department1">Cochabamba</option>
              <option value="department2">La Paz</option>
              <option value="department3">Oruro</option>
              <option value="department4">Santa Cruz</option>
              <option value="department5">Chuquisaca</option>
              <option value="department6">Potosi</option>
              <option value="department7">Beni</option>
              <option value="department8">Tarija</option>
              <option value="department9">Pando</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              id="ci"
              placeholder="CI"
              className="input-ci"
              value={ci}
              onChange={handleCiChange}
            />
          </div>
          
        </div>
        
        <label className="label-grade" htmlFor="domicilio">
          Domicilio:
        </label>
        <div>
          <input
            type="text"
            id="domicilio"
            placeholder="Domicilio"
            className="input-domicilio"
            value={domicilio}
            onChange={handleDomicilioChange}
          />
        </div>
        <label className="label-grade" htmlFor="firstName">
          Telefono:
        </label>
        <label className="label-cel" htmlFor="firstName">
          Celular:
        </label>
        <label className="label-ocup" htmlFor="firstName">
          Ocupacion:
        </label>
        <div className="inputs-3">
          <input
            type="number"
            id="telefono"
            placeholder="Teléfono"
            className="input-telefono"
            value={telefono}
            onChange={handleTelefonoChange}
          />
          <input
            type="number"
            id="celular"
            placeholder="Celular"
            className="input-celular"
            value={celular}
            onChange={handleCelularChange}
          />
          <input
            type="text"
            id="ocupacion"
            placeholder="Ocupación"
            className="input-ocupacion"
            value={ocupacion}
            onChange={handleOcupacionChange}
          />
        </div>
        <label className="label-grade" htmlFor="firstName">
          Grupo Sanguíneo:
        </label>
        <label className="label-rel" htmlFor="firstName">
          Religión:
        </label>
        <label className="label-correo" htmlFor="firstName">
          Correo:
        </label>
        <div className="inputs-3">
          <input
            type="text"
            id="grupoSanguineo"
            placeholder="Grupo Sanguíneo"
            className="input-grupo-sanguineo"
            value={grupoSanguineo}
            onChange={handleGrupoSanguineoChange}
          />
          <input
            type="text"
            id="religion"
            placeholder="Religión"
            className="input-religion"
            value={religion}
            onChange={handleReligionChange}
          />
          <input
            type="text"
            id="correo"
            placeholder="Correo"
            className="input-correo"
            value={correo}
            onChange={handleCorreoChange}
          />
        </div>
        <div className="input-container2">
          <label htmlFor="firstName">Alergias:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Alergias"
            value={alergia}
            onChange={handleAlergiaChange}
          />
        </div>
        <div className="input-container2">
          <label htmlFor="señas">Señas Particulares:</label>
          <input
            type="text"
            id="señas"
            placeholder="Señas Particulares"
            value={señas}
            onChange={handleSeñasChange}
          />
        </div>
        <div className="input-container2">
          <label htmlFor="curso">Ultimo Curso Aprobado:</label>
          <input
            type="text"
            id="curso"
            placeholder="Ultimo Curso Aprobado"
            value={curso}
            onChange={handleCursoChange}
          />
        </div>
        <div>
          <label className="caso">EN CASO DE EMERGENCIA</label>
          <div className="input-container2">
            <label htmlFor="llamar">Llamar o avisar a:</label>
            <input
              type="text"
              id="llamar"
              placeholder="Llamar o avisar a"
              value={llamar}
              onChange={handleLlamarChange}
            />
            <label htmlFor="parentezco">Parentezco:</label>
            <input
              type="text"
              id="parentezco"
              placeholder="Parentezco"
              value={parentezco}
              onChange={handleParentezcoChange}
            />
            <label htmlFor="direccion">Direccion:</label>
            <input
              type="text"
              id="direccion"
              placeholder="Direccion"
              value={direccion}
              onChange={handleDireccionChange}
            />
          </div>
        </div>
        <label className="label-grade" htmlFor="telefono">
          Teléfono:
        </label>
        <label className="label-celular" htmlFor="celular">
          Celular:
        </label>
        <div className="input-container3">
          <input
            type="number"
            id="telefono"
            placeholder="Teléfono"
            className="input-telefono"
            value={telefono}
            onChange={handleTelefonoChange}
          />

          <input
            type="number"
            id="celular"
            placeholder="Celular"
            className="input-celular"
            value={celular}
            onChange={handleCelularChange}
          />
        </div>
        <label className="label-grade" htmlFor="curso">
          Ultimo Curso Aprobado:
        </label>
        <div className="input-container4">
          <input
            type="file"
            id="archivo"
            className="input-archivo"
            onChange={handleArchivoChange}
          />
          <button className="btn-icon">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>

        <div>
          <button className="additional-button">Reporte de Guardias</button>
          <button className="additional-button">Reporte de Asistencias</button>
          <button className="additional-button">Reporte de Cursos</button>
          <button className="additional-button">Reporte de Operativos</button>
        </div>
      </div>
    </>
  );
}
