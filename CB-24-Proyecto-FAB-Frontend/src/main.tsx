import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import MainMenu from './components/main-menu/main-menu.tsx';
import MaintenanceMenu from './components/maintenance/maintenance-menu/maintenance-menu.tsx';
import MaintenanceAircraft from './components/maintenance/maintenance-aircraft/register-aircraft.tsx';
import MaintenanceWorkOrderList from './components/maintenance/maintenance-list/maintenance-aircraft.tsx';
import MaintenanceManuals from './components/maintenance/maintenance-manuals/maintenance-manuals.tsx';

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path:  "/menu-principal",  element: <MainMenu /> },
  { path:  "/menu-principal/mantenimiento",  element: <MaintenanceMenu /> },
  { path:  "/menu-principal/mantenimiento/registro-aeronaves",  element: <MaintenanceAircraft /> },
  { path:  "/menu-principal/mantenimiento/mantenimiento-aeronaves",  element: <MaintenanceWorkOrderList /> },
  { path:  "/menu-principal/mantenimiento/manuales",  element: <MaintenanceManuals /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)

