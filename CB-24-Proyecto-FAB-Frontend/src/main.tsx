import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import MainMenu from './components/main-menu/main-menu.tsx';
import PerformanceForm from './components/Operations2/Performance.tsx';
import AircraftRequirementsForm from './components/Operations2/aircraftRequirements.tsx';
import RiskMatrixForm from './components/Operations2/riskMatrix.tsx';
const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path:  "/menu-principal",  element: <MainMenu /> },
  { path:  "/Operaciones/Performance",  element: <PerformanceForm /> },
  { path:  "/Operaciones/Matriz-Riesgo",  element: <RiskMatrixForm /> },
  { path:  "/Operaciones/Requerimientos-Aeronave",  element: <AircraftRequirementsForm /> }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)

