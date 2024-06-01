import React, { useState } from 'react';
import './create_operations.css';
import LayoutSar from '../layout-sar/layout-sar';

const OperationsCreate = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        grado: '',
        fechaOperativo: '',
        horaOperativo: '',
        institucion: '',
        atencion: '',
        personal: '',
        intercambio: '',
        departamento: '',
        ci: '',
        domicilio: '',
        telefono: '',
        celular: '',
        ocupacion: '',
        grupoSanguineo: '',
        religion: '',
        correo: '',
        alergias: '',
        senasParticulares: '',
        ultimoCurso: '',
        parentesco: '',
        direccion: '',
        telefonoEmergencia: '',
        celularEmergencia: '',
        chequeoMedico: null
    });
    const [items, setItems] = useState<{ grado: string, nombre: string }[]>([
        { grado: 'Sargento', nombre: 'Luis Fuentes' },
        { grado: 'Teniente', nombre: 'Juan Perez' },
        { grado: 'Capitan', nombre: 'Fulanito Quispe' }
    ]);
    const handleAddItem = () => {
        setItems(prevItems => [...prevItems, { grado: formData.grado, nombre: formData.personal }]);
        setFormData(prevState => ({ ...prevState, grado: '', nombre: '' }));
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };
    const handleRemoveItem = (index: number) => {
        setItems(prevItems => prevItems.filter((_, i) => i !== index));
    };
    return (
        <LayoutSar>
            <div className="create_operativo-form-container">
                <form className="create_operativo-form" onSubmit={handleSubmit}>
                    <h3>OPERACIONES &gt; Crear operativo</h3>

                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Tipo Operativo:</label>
                            <select name="grado" onChange={handleChange} value={formData.grado}>
                                <option value="">Seleccione...</option>
                                <option value="Grado 1">Rescate</option>
                                <option value="Grado 2">Seguridad Médica</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Fecha de operativo:</label>
                            <input type="date" name="fechaOperativo" onChange={handleChange} value={formData.fechaOperativo} />
                        </div>
                    </div>
                    <h2>LUGAR DEL EVENTO</h2>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Departamento:</label>
                            <select name="departamento" onChange={handleChange} value={formData.departamento}>
                                <option value="">Seleccione...</option>
                                <option value="Departamento 1">Cochabamba</option>
                                <option value="Departamento 2">La paz</option>
                                <option value="Departamento 3">Santa Cruz</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Provincia:</label>
                            <select name="departamento" onChange={handleChange} value={formData.departamento}>
                                <option value="">Seleccione...</option>
                                <option value="Mizque">Mizque</option>
                                <option value="Cercado">Cercado</option>
                                <option value="Arque">Arque</option>
                                <option value="Ayopaya">Ayopaya</option>
                                <option value="Chapare">Chapare</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Municipio:</label>
                            <select name="departamento" onChange={handleChange} value={formData.departamento}>
                                <option value="">Seleccione...</option>
                                <option value="Departamento 1">Colcapirhua</option>
                                <option value="Departamento 2">Quillacollo</option>
                                <option value="Departamento 3">Sipe Sipe</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Dirección:</label>
                            <input type="text" name="ci" onChange={handleChange} value={formData.ci} />
                        </div>
                    </div>
                    <h2>PLAN OPERATIVO</h2>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Tipo Vehiculo:</label>
                            <select name="departamento" onChange={handleChange} value={formData.departamento}>
                                <option value="">Seleccione...</option>
                                <option value="Departamento 1">Cochabamba</option>
                                <option value="Departamento 2">La paz</option>
                                <option value="Departamento 3">Santa Cruz</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Propietario:</label>
                            <select name="departamento" onChange={handleChange} value={formData.departamento}>
                                <option value="">Seleccione...</option>
                                <option value="Mizque">Mizque</option>
                                <option value="Cercado">Cercado</option>
                                <option value="Arque">Arque</option>
                                <option value="Ayopaya">Ayopaya</option>
                                <option value="Chapare">Chapare</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Matrícula:</label>
                            <input type="text" name="ci" onChange={handleChange} value={formData.ci} />
                        </div>
                        <div className="form-group">
                            <label>Conductor:</label>
                            <select name="departamento" onChange={handleChange} value={formData.departamento}>
                                <option value="">Seleccione...</option>
                                <option value="Departamento 1">Colcapirhua</option>
                                <option value="Departamento 2">Quillacollo</option>
                                <option value="Departamento 3">Sipe Sipe</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>N° de licencia:</label>
                            <input type="text" name="ci" onChange={handleChange} value={formData.ci} />
                        </div>
                        <div className="form-group">

                        </div>

                    </div>
                    <div className="form-group-row">
                        
                        <div className="form-group">
                            <label>Fecha de Salida:</label>
                            <input type="date" name="fechaOperativo" onChange={handleChange} value={formData.fechaOperativo} />
                        </div>
                        <div className="form-group">
                            <label>Hora de Salida:</label>
                            <input type="time" name="horaOperativo" onChange={handleChange} value={formData.horaOperativo} />
                        </div>
                    </div>
                    <div className="form-group-row">
                       
                        <div className="form-group">
                            <label>Fecha de Llegada:</label>
                            <input type="date" name="fechaOperativo" onChange={handleChange} value={formData.fechaOperativo} />
                        </div>
                        <div className="form-group">
                            <label>Hora de Llegada:</label>
                            <input type="time" name="horaOperativo" onChange={handleChange} value={formData.horaOperativo} />
                        </div>
                    </div>
                    <h2>DATOS DEL SOLICITANTE</h2>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Institución:</label>
                            <select name="institucion" onChange={handleChange} value={formData.institucion}>
                                <option value="">Seleccione...</option>
                                <option value="">Alcaldia</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Atención:</label>
                            <select name="atencion" onChange={handleChange} value={formData.atencion}>
                                <option value="">Seleccione...</option>
                                <option value=""></option>
                                
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Intercambio:</label>
                            <select name="intercambio" onChange={handleChange} value={formData.intercambio}>
                                <option value="">Seleccione...</option>
                                <option value=""></option>
                               
                            </select>
                        </div>
                    </div>
                    <h2>RESCATISTAS Y VOLUNTARIOS</h2>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>create_operativo:</label>
                            <select name="personal" onChange={handleChange} value={formData.personal}>
                                <option value="Juan Condori">Juan Condori Quispe</option>
                                <option value="Diego Fuentes">Diego Fuentes </option>
                            </select>
                        </div>
                        <button type="button" onClick={handleAddItem}>Agregar</button>
                        
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <table className="inventoryReturn-table">
                            <thead>
                                <tr>
                                    <th>Grado</th>
                                    <th>Nombre</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.grado}</td>
                                        <td>{item.nombre}</td>
                                        <td  className="create_operativo_center-button">
                                            <button type="button" className="create_operativo_icon-button" onClick={() => handleRemoveItem(index)}>
                                                🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="form-buttons">
                        <button type="submit">Registrar</button>
                    </div>
                </form>
            </div>
        </LayoutSar>
    );
};

export default OperationsCreate;
