import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import './maintenance-componentControl.css';

interface Component {
  name: string;
  partNumber: string;
  aircraft?: { model: string };
  installationDate: string;
  limit?: string;
  margin?: string;
  requirement?: string;
  remaining?: string;
}

function MaintenanceComponentControl() {
  const [selectedType, setSelectedType] = useState<string>('Aeronave');
  const [selectedServiceTime, setSelectedServiceTime] = useState<string>('OTL');
  const [components, setComponents] = useState<Component[]>([]); // State to store the fetched data
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchComponents = async () => {
      try {
        const response = await fetch('https://localhost:7149/api/Component', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setComponents(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, []); // Empty dependency array means this effect runs once on component mount

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const handleServiceTimeClick = (serviceTime: string) => {
    setSelectedServiceTime(serviceTime);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="maintenance-componentControl-container">
      <header>
        <Link to={"./.."} className="back-link">
          <GoArrowLeft color='black' size={32} />
        </Link>
        <h2>MANTENIMIENTO - Control de Componentes</h2>
      </header>
      <span className='component-section'>
        <div className='new-component-option'>
          <Link to={"./#"} className='new-component-button'>
            <CiSquarePlus color="#171A4A" size={40} />
            Registrar Componente
          </Link>
        </div>
        <div className='filter-option'>
          Tipo de Componente:
          <span>
            <button
              onClick={() => handleTypeClick('Aeronave')}
              className={`filter-button ${selectedType === 'Aeronave' ? 'selected-filter' : ''}`}
            >
              Aeronave
            </button>
            <button
              onClick={() => handleTypeClick('Motor')}
              className={`filter-button ${selectedType === 'Motor' ? 'selected-filter' : ''}`}
            >
              Motor
            </button>
          </span>
        </div>
        <div className='filter-option'>
          Tiempo de Servicio:
          <span>
            <button
              onClick={() => handleServiceTimeClick('OTL')}
              className={`filter-button ${selectedServiceTime === 'OTL' ? 'selected-filter' : ''}`}
            >
              OTL
            </button>
            <button
              onClick={() => handleServiceTimeClick('TBO')}
              className={`filter-button ${selectedServiceTime === 'TBO' ? 'selected-filter' : ''}`}
            >
              TBO
            </button>
            <button
              onClick={() => handleServiceTimeClick('SLL')}
              className={`filter-button ${selectedServiceTime === 'SLL' ? 'selected-filter' : ''}`}
            >
              SLL
            </button>
          </span>
        </div>
      </span>
      <div className="maintenance-componentControl-table-container">
        <table>
          <thead>
            <tr>
              <th>Componente</th>
              <th>Nro Parte</th>
              <th>Aeronave</th>
              <th>Fecha Instalación</th>
              <th>Límite</th>
              <th>Margen</th>
              <th>Req.</th>
              <th>Restante</th>
            </tr>
          </thead>
          <tbody>
            {components.map((component, index) => (
              <tr key={index}>
                <td>{component.name}</td>
                <td>{component.partNumber || 'N/A'}</td>
                <td>{component.aircraft?.model || 'N/A'}</td>
                <td>{new Date(component.installationDate).toLocaleDateString()}</td>
                <td>{component.limit || 'N/A'}</td>
                <td>{component.margin || 'N/A'}</td>
                <td>{component.requirement || 'N/A'}</td>
                <td><span className="maintenance-componentControl-res">{component.remaining || 'N/A'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
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
  );
}

export default MaintenanceComponentControl;
